'use client';

import React from 'react';
import { IconGitHub, IconExternal } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedProjects() {
  const { featuredProjects } = portfolioData;

  return (
    <section id="projects" className="py-24 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-0">
      <h2 className="numbered-heading">
        <span className="number">03.</span> Some Things I&apos;ve Built
      </h2>

      <div className="space-y-28">
        {featuredProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={project.title}
              className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-4"
            >
              {/* Project Image */}
              <div
                className={`relative z-10 md:row-start-1 h-64 sm:h-80 md:h-[340px] rounded overflow-hidden shadow-2xl group ${
                  isEven
                    ? 'md:col-start-1 md:col-end-8'
                    : 'md:col-start-5 md:col-end-13'
                }`}
              >
                <a
                  href={project.external || project.github}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block w-full h-full bg-green"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter grayscale contrast-100 mix-blend-multiply transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-navy/40 mix-blend-screen transition-opacity duration-300 group-hover:opacity-0" />
                </a>
              </div>

              {/* Project Content Overlay */}
              <div
                className={`relative z-20 md:row-start-1 p-6 md:p-0 rounded md:bg-transparent bg-lightNavy/90 backdrop-blur-sm md:backdrop-blur-none ${
                  isEven
                    ? 'md:col-start-6 md:col-end-13 md:text-right'
                    : 'md:col-start-1 md:col-end-8 md:text-left'
                }`}
              >
                <p className="font-mono text-green text-xs tracking-wider mb-2">
                  {project.label}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-lightestSlate hover:text-green transition-colors mb-4">
                  <a
                    href={project.external || project.github}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="md:bg-lightNavy md:p-6 rounded md:shadow-xl text-lightSlate text-sm sm:text-base leading-relaxed mb-4">
                  <p>{project.description}</p>
                </div>

                <ul
                  className={`flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-slate mb-6 ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div
                  className={`flex items-center space-x-4 text-lightestSlate ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
