'use client';

import React from 'react';
import { IconExternal } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Publications() {
  const { publications, honorsAwards } = portfolioData;

  return (
    <section id="publications" className="py-24 max-w-[900px] mx-auto px-6 sm:px-12 lg:px-0">
      <h2 className="numbered-heading">
        <span className="number">04.</span> Publications &amp; Honors
      </h2>

      {/* Publications List */}
      <div className="space-y-8 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-lightNavy/50 pb-3">
          <h3 className="text-xl font-bold text-lightestSlate flex items-center space-x-2">
            <span>Peer-Reviewed Research</span>
          </h3>
          <a
            href={portfolioData.siteMetadata.scholar}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="font-mono text-xs text-green hover:underline inline-flex items-center space-x-1"
          >
            <span>Google Scholar Profile &rarr;</span>
          </a>
        </div>

        {publications.map((pub, idx) => (
          <div
            key={pub.title}
            className="p-6 rounded bg-lightNavy/70 border-l-2 border-green hover:bg-lightNavy transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs text-green tracking-wide">
                {pub.venue} &nbsp;&middot;&nbsp; {pub.year}
              </span>
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-mono text-xs text-lightSlate hover:text-green inline-flex items-center space-x-1"
                >
                  <span>DOI Paper Link</span>
                  <IconExternal className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-lightestSlate hover:text-green transition-colors mb-2">
              {pub.doi ? (
                <a href={pub.doi} target="_blank" rel="nofollow noopener noreferrer">
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h4>

            <p className="text-slate text-xs sm:text-sm font-mono mb-3">
              {pub.authors}
            </p>

            <p className="text-slate text-sm leading-relaxed">
              {pub.description}
            </p>
          </div>
        ))}
      </div>

      {/* Honors & Awards */}
      <div>
        <h3 className="text-xl font-bold text-lightestSlate mb-6">
          Honors &amp; Awards
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {honorsAwards.map((award) => (
            <div
              key={award.title}
              className="p-5 rounded bg-lightNavy flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-green block mb-2">
                  {award.year}
                </span>
                <h5 className="text-base font-bold text-lightestSlate mb-1">
                  {award.title}
                </h5>
                <p className="text-lightSlate text-xs font-mono mb-3">
                  {award.issuer}
                </p>
              </div>
              <p className="text-slate text-xs leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
