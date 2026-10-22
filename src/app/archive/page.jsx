import Link from 'next/link';
import { IconGitHub, IconExternal } from '../../components/Icons';
import { portfolioData } from '../../data/portfolioData';

export const metadata = {
  title: 'Archive | Ayon Roy',
  description: 'A big list of things I’ve worked on',
  alternates: {
    canonical: '/archive',
  },
};

export default function ArchivePage() {
  // Combine all projects (featured + other) into one comprehensive list
  const allProjects = [
    {
      year: '2024',
      title: 'NoteBookAwesome',
      company: 'Personal / Open Source',
      tech: ['TypeScript', 'VS Code API', 'Jupyter', 'Node.js'],
      github: 'https://github.com/royayon/NoteBookAwesome',
      external: 'https://github.com/royayon/NoteBookAwesome',
    },
    {
      year: '2024',
      title: 'ChatGPT vs. Bard Comparative Study',
      company: 'UT Arlington',
      tech: ['Generative AI', 'LLMs', 'Transformer Architectures', 'Research'],
      github: '',
      external: 'https://doi.org/10.1002/eng2.12890',
    },
    {
      year: '2024',
      title: 'Cognitive Fatigue Multimodal Survey',
      company: 'UT Arlington',
      tech: ['PyTorch', 'Multimodal Vision', 'EEG / EDA', 'Biosensors'],
      github: '',
      external: 'https://doi.org/10.3390/technologies12030038',
    },
    {
      year: '2023',
      title: 'TaskTimer',
      company: 'Personal',
      tech: ['JavaScript', 'Electron', 'Node.js', 'CSS'],
      github: 'https://github.com/royayon/TaskTimer',
      external: '',
    },
    {
      year: '2022',
      title: 'CurFi: Automated Curve Fitting Library',
      company: 'MIST / Research',
      tech: ['Node.js', 'JavaScript', 'Regression Analysis', 'npm Package'],
      github: 'https://github.com/royayon',
      external: 'https://www.npmjs.com/package/curfi',
    },
    {
      year: '2021',
      title: 'Custom VCS (AynHUB)',
      company: 'MIST',
      tech: ['Java', 'Algorithms', 'LCS & Diff', 'VCS'],
      github: 'https://github.com/royayon',
      external: '',
    },
    {
      year: '2021',
      title: 'AI Study Planner & MIST.AI',
      company: 'MIST',
      tech: ['Node.js', 'Express', 'TensorFlow.js', 'Deep Learning'],
      github: 'https://github.com/royayon',
      external: '',
    },
    {
      year: '2020',
      title: 'Digits Recognizer',
      company: 'MIST',
      tech: ['HTML Canvas', 'JavaScript', 'TensorFlow.js', 'MNIST'],
      github: 'https://github.com/royayon/digits',
      external: 'https://royayon.github.io/digits/',
    },
    {
      year: '2020',
      title: 'Ayon-Modern-Tutorial-Links',
      company: 'Open Source',
      tech: ['Markdown', 'GitHub', 'Curated Resources'],
      github: 'https://github.com/royayon/Ayon-Modern-Tutorial-Links',
      external: '',
    },
    {
      year: '2019',
      title: 'AlienVasion Game',
      company: 'MIST',
      tech: ['ATmega 32', 'Microprogramming', 'C', 'Assembly'],
      github: 'https://github.com/royayon/AlienVasion-Game',
      external: '',
    },
    {
      year: '2019',
      title: 'AynCalculator',
      company: 'MIST',
      tech: ['Android', 'Java', 'Firebase'],
      github: 'https://github.com/royayon/AynCalculator',
      external: '',
    },
    {
      year: '2019',
      title: 'NavDrawerSensor',
      company: 'MIST',
      tech: ['Android', 'Java', 'Hardware Sensors'],
      github: 'https://github.com/royayon/NavDrawerSensor',
      external: '',
    },
    {
      year: '2019',
      title: 'Wheremi',
      company: 'MIST',
      tech: ['Android', 'Google Maps API', 'Firebase'],
      github: 'https://github.com/royayon/Wheremi',
      external: '',
    },
  ];

  return (
    <div className="pt-32 pb-24 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-0">
      <header className="mb-16">
        <Link
          href="/"
          className="font-mono text-xs sm:text-sm text-green hover:underline inline-flex items-center space-x-2 mb-4"
        >
          <span>&larr;</span>
          <span>Ayon Roy</span>
        </Link>
        <h1 className="text-4xl sm:text-6xl font-bold text-lightestSlate tracking-tight">
          Archive
        </h1>
        <p className="font-mono text-green text-sm sm:text-base mt-2">
          A big list of things I’ve worked on
        </p>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-lightNavy text-lightSlate font-mono text-xs sm:text-sm">
              <th className="py-4 pr-4">Year</th>
              <th className="py-4 px-4">Title</th>
              <th className="py-4 px-4 hidden md:table-cell">Made at</th>
              <th className="py-4 px-4 hidden lg:table-cell">Built with</th>
              <th className="py-4 pl-4 text-right sm:text-left">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lightNavy/50 text-sm">
            {allProjects.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-lightNavy/40 transition-colors duration-150"
              >
                <td className="py-4 pr-4 font-mono text-xs text-green whitespace-nowrap">
                  {item.year}
                </td>

                <td className="py-4 px-4 font-bold text-lightestSlate hover:text-green transition-colors">
                  {item.external || item.github ? (
                    <a
                      href={item.external || item.github}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </td>

                <td className="py-4 px-4 text-slate hidden md:table-cell whitespace-nowrap">
                  {item.company}
                </td>

                <td className="py-4 px-4 font-mono text-xs text-lightSlate hidden lg:table-cell">
                  {item.tech.join(' \u00B7 ')}
                </td>

                <td className="py-4 pl-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3 text-lightSlate justify-end sm:justify-start">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="hover:text-green transition-colors"
                      >
                        <IconGitHub className="w-4 h-4" />
                      </a>
                    )}
                    {item.external && (
                      <a
                        href={item.external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                        className="hover:text-green transition-colors"
                      >
                        <IconExternal className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
