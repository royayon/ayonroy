'use client';

import React from 'react';
import Link from 'next/link';
import { IconFolder, IconGitHub, IconExternal } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function OtherProjects() {
  const { otherProjects } = portfolioData;

  return (
    <section className="py-24 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-0">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-lightestSlate">
          Other Noteworthy Projects
        </h3>
        <Link
          href="/archive"
          className="inline-block mt-3 font-mono text-sm text-green hover:underline"
        >
          view the archive
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col justify-between bg-lightNavy p-7 rounded shadow-xl hover:-translate-y-2 transition-transform duration-300 min-h-[300px]"
          >
            <div>
              {/* Header: Folder Icon & Links */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-green">
                  <IconFolder className="w-10 h-10" />
                </span>
                <div className="flex items-center space-x-3 text-lightSlate">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="hover:text-green transition-colors"
                    >
                      <IconGitHub className="w-5 h-5" />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="External Link"
                      className="hover:text-green transition-colors"
                    >
                      <IconExternal className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-xl font-bold text-lightestSlate group-hover:text-green transition-colors mb-3">
                {project.external || project.github ? (
                  <a
                    href={project.external || project.github}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h4>

              <p className="text-slate text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Footer Tech List */}
            <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
