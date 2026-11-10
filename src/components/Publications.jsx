'use client';

import React, { useState, useMemo } from 'react';
import { IconExternal, IconScholar, IconPdf, IconArrowUpDown } from './Icons';
import { portfolioData } from '../data/portfolioData';

// Helper to highlight "Ayon Roy" in authors list
function renderAuthors(authorsStr) {
  if (!authorsStr) return null;
  const parts = authorsStr.split(/(Ayon Roy|A Roy)/g);
  return parts.map((part, i) => {
    if (part === 'Ayon Roy' || part === 'A Roy') {
      return (
        <span
          key={i}
          className="text-lightestSlate font-semibold underline decoration-green/60 underline-offset-2"
        >
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function Publications() {
  const { publications, honorsAwards, siteMetadata } = portfolioData;

  // Sorting mode: 'citations' (most to least cited) or 'recent' (newest to oldest) or 'oldest'
  const [sortBy, setSortBy] = useState('citations');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter & sort papers
  const sortedPublications = useMemo(() => {
    let list = [...publications];

    // Search filter if provided
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.venue.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Sort order
    if (sortBy === 'citations') {
      // Most to least cited
      list.sort((a, b) => (b.citations || 0) - (a.citations || 0));
    } else if (sortBy === 'recent') {
      // Recent to old (year descending, then citations descending)
      list.sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year;
        return (b.citations || 0) - (a.citations || 0);
      });
    } else if (sortBy === 'oldest') {
      // Oldest to recent
      list.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return (b.citations || 0) - (a.citations || 0);
      });
    }

    return list;
  }, [publications, sortBy, searchQuery]);

  // Total citations across all papers
  const totalCitations = useMemo(() => {
    return publications.reduce((acc, p) => acc + (p.citations || 0), 0);
  }, [publications]);

  return (
    <section id="publications" className="py-24 max-w-[950px] mx-auto px-6 sm:px-12 lg:px-0">
      <h2 className="numbered-heading">
        <span className="number">04.</span> Publications &amp; Honors
      </h2>

      {/* Publications Section */}
      <div className="mb-20">
        {/* Header with Title and Google Scholar Profile Link */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-lightNavy/60 pb-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-lightestSlate">
              Peer-Reviewed Research
            </h3>
            <p className="text-xs sm:text-sm text-slate mt-1">
              {publications.length} publications &bull; {totalCitations}+ citations on Google Scholar
            </p>
          </div>
          <a
            href={siteMetadata.scholar}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="font-mono text-xs text-green hover:underline inline-flex items-center space-x-1.5 self-start sm:self-auto"
          >
            <IconScholar className="w-4 h-4" />
            <span>Google Scholar Profile &rarr;</span>
          </a>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded bg-lightNavy/50 border border-lightNavy mb-8">
          {/* Sorting Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate flex items-center space-x-1 mr-1">
              <IconArrowUpDown className="w-3.5 h-3.5 text-green" />
              <span>Sort:</span>
            </span>

            <button
              type="button"
              onClick={() => setSortBy('citations')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 border ${
                sortBy === 'citations'
                  ? 'bg-green/15 text-green border-green font-semibold shadow-sm'
                  : 'bg-navy text-slate border-transparent hover:text-lightestSlate hover:border-lightNavy'
              }`}
            >
              Most Cited (High &rarr; Low)
            </button>

            <button
              type="button"
              onClick={() => setSortBy('recent')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 border ${
                sortBy === 'recent'
                  ? 'bg-green/15 text-green border-green font-semibold shadow-sm'
                  : 'bg-navy text-slate border-transparent hover:text-lightestSlate hover:border-lightNavy'
              }`}
            >
              Recent to Old (Newest First)
            </button>

            <button
              type="button"
              onClick={() => setSortBy('oldest')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 border ${
                sortBy === 'oldest'
                  ? 'bg-green/15 text-green border-green font-semibold shadow-sm'
                  : 'bg-navy text-slate border-transparent hover:text-lightestSlate hover:border-lightNavy'
              }`}
            >
              Old to Recent
            </button>
          </div>

          {/* Quick Search */}
          <div className="sm:w-56">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-full px-3 py-1.5 rounded text-xs font-mono bg-navy text-lightestSlate border border-lightNavy placeholder-slate/60 focus:outline-none focus:border-green transition-colors"
            />
          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {sortedPublications.length === 0 ? (
            <div className="p-8 text-center rounded bg-lightNavy/40 text-slate text-sm font-mono">
              No publications match the query &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            sortedPublications.map((pub, idx) => (
              <article
                key={pub.title}
                className="p-6 rounded bg-lightNavy/70 border-l-2 border-green hover:bg-lightNavy transition-all duration-200 group"
              >
                {/* Meta row: Venue, Year, Citations badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-green tracking-wide">
                    {pub.venue} &nbsp;&middot;&nbsp; {pub.year}
                  </span>

                  {pub.citations !== undefined && pub.citations > 0 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-green/10 text-green border border-green/30">
                      {pub.citations} Citations
                    </span>
                  )}
                </div>

                {/* Paper Title */}
                <h4 className="text-lg sm:text-xl font-bold text-lightestSlate group-hover:text-green transition-colors mb-2 leading-snug">
                  {pub.doi ? (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="hover:underline"
                    >
                      {pub.title}
                    </a>
                  ) : pub.pdf ? (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="hover:underline"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h4>

                {/* Authors */}
                <p className="text-slate text-xs sm:text-sm font-mono mb-3 leading-relaxed">
                  {renderAuthors(pub.authors)}
                </p>

                {/* Abstract / Description */}
                {pub.description && (
                  <p className="text-slate text-sm leading-relaxed mb-4">
                    {pub.description}
                  </p>
                )}

                {/* Direct Action Links: PDF, DOI, Scholar */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-lightNavy/40">
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-mono font-medium bg-green/10 text-green border border-green/30 hover:bg-green/25 hover:border-green transition-all"
                      title="Open Paper PDF"
                    >
                      <IconPdf className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-mono text-lightSlate bg-navy/60 border border-lightNavy hover:text-green hover:border-green/40 transition-all"
                      title="Official DOI Publication"
                    >
                      <IconExternal className="w-3.5 h-3.5" />
                      <span>DOI Paper</span>
                    </a>
                  )}

                  {pub.scholar && (
                    <a
                      href={pub.scholar}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-mono text-lightSlate bg-navy/60 border border-lightNavy hover:text-green hover:border-green/40 transition-all"
                      title="View on Google Scholar"
                    >
                      <IconScholar className="w-3.5 h-3.5" />
                      <span>Scholar</span>
                    </a>
                  )}
                </div>
              </article>
            ))
          )}
        </div>
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
              className="p-5 rounded bg-lightNavy flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
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
