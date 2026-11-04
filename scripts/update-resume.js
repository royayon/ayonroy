const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const OVERLEAF_URL = process.env.OVERLEAF_URL || 
  'https://www.overleaf.com/project/68c1d31e04f70c3b89c9753a/share#3ed011ad44f55614885b91ef6447c90c64059c18ee00b212';

function findBrowserPath() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ];

  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

async function updateResume() {
  const browserPath = findBrowserPath();
  if (!browserPath) {
    console.error('Error: Neither Google Chrome nor Microsoft Edge was found on your system.');
    process.exit(1);
  }

  console.log(`Using browser: ${browserPath}`);
  console.log('Starting headless browser session...');

  const browserProcess = spawn(browserPath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions'
  ]);

  const cleanup = () => {
    try {
      browserProcess.kill();
    } catch {}
  };

  process.on('exit', cleanup);
  process.on('SIGINT', () => { cleanup(); process.exit(1); });

  // Wait for browser debug port to open
  await new Promise(r => setTimeout(r, 2000));

  function getJson(url) {
    return new Promise((resolve, reject) => {
      http.get(url, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }).on('error', reject);
    });
  }

  try {
    const list = await getJson('http://127.0.0.1:9222/json/list');
    const target = list.find(t => t.type === 'page');
    if (!target) {
      throw new Error('No browser page target found.');
    }

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    let msgId = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (callbacks.has(msg.id)) {
        const cb = callbacks.get(msg.id);
        callbacks.delete(msg.id);
        cb(msg);
      }
    };

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        callbacks.set(id, resolve);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    console.log('Navigating to Overleaf project...');
    await send('Page.navigate', { url: OVERLEAF_URL });

    console.log('Waiting for Overleaf to compile and load PDF...');
    await new Promise(r => setTimeout(r, 7000));

    console.log('Extracting compiled PDF...');
    const result = await send('Runtime.evaluate', {
      expression: `(async () => {
        const btn = document.querySelector('a[aria-label="Download PDF"]') || 
                    document.querySelector('a[href*="/output/output.pdf"]');
        if (!btn) return { error: 'Download button not found in Overleaf UI' };
        const href = btn.getAttribute('href');
        const resp = await fetch(href);
        if (!resp.ok) return { error: 'Fetch failed: ' + resp.status + ' ' + resp.statusText };
        const blob = await resp.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve({ data: reader.result, href, size: blob.size });
          reader.readAsDataURL(blob);
        });
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    const resVal = result.result?.result?.value;
    if (resVal?.error) {
      throw new Error(resVal.error);
    }

    if (!resVal?.data || !resVal.data.startsWith('data:application/pdf;base64,')) {
      throw new Error('Unexpected response format when fetching PDF');
    }

    const base64Data = resVal.data.replace(/^data:application\/pdf;base64,/, '');
    let buffer = Buffer.from(base64Data, 'base64');

    // Clean up any placeholder template metadata (e.g. RenderCV's "John Doe's CV")
    const oldTitleHex = '<feff004a006f0068006e00200044006f006500270073002000430056>';
    const newTitleHex = '<feff00410079006f006e00200052006f007900270073002000430056>';
    const oldAuthorHex = '<feff004a006f0068006e00200044006f0065>';
    const newAuthorHex = '<feff00410079006f006e00200052006f0079>';

    let binStr = buffer.toString('binary');
    if (binStr.includes(oldTitleHex)) {
      binStr = binStr.replaceAll(oldTitleHex, newTitleHex);
      console.log('✓ Replaced template metadata title with "Ayon Roy\'s CV"');
    }
    if (binStr.includes(oldAuthorHex)) {
      binStr = binStr.replaceAll(oldAuthorHex, newAuthorHex);
      console.log('✓ Replaced template metadata author with "Ayon Roy"');
    }
    buffer = Buffer.from(binStr, 'binary');

    const rootDir = path.resolve(__dirname, '..');
    const publicPath = path.join(rootDir, 'public', 'resume.pdf');
    const staticPath = path.join(rootDir, 'static', 'resume.pdf');

    fs.writeFileSync(publicPath, buffer);
    console.log(`✓ Updated: ${publicPath} (${(buffer.length / 1024).toFixed(1)} KB)`);

    if (fs.existsSync(path.join(rootDir, 'static'))) {
      fs.writeFileSync(staticPath, buffer);
      console.log(`✓ Updated: ${staticPath}`);
    }

    console.log('\nResume update complete!');
    ws.close();
  } catch (err) {
    console.error('Failed to update resume:', err.message);
    process.exitCode = 1;
  } finally {
    cleanup();
  }
}

updateResume();
