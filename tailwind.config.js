/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000007',
        darkestNavy: '#01050b',
        darkNavy: '#020c1b',
        navy: '#0a192f',
        lightNavy: '#172a45',
        lightestNavy: '#233554',
        darkGrey: '#333f58',
        mediumGrey: '#2d3952',
        grey: '#4c5772',
        lightGrey: '#606a86',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        offWhite: '#dce7ff',
        white: '#e6f1ff',
        green: '#64ffda',
        transGreen: 'rgba(100, 255, 218, 0.07)',
        shadowNavy: 'rgba(2, 12, 27, 0.7)',
      },
      fontFamily: {
        calibre: ['Calibre', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        tealGlow: '0 0 20px rgba(100, 255, 218, 0.3)',
      },
    },
  },
  plugins: [],
};
