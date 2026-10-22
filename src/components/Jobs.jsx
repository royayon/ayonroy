'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Jobs() {
  const [activeTab, setActiveTab] = useState(0);
  const { jobs } = portfolioData;

  return (
    <section id="jobs" className="py-24 max-w-[700px] mx-auto px-6 sm:px-12 lg:px-0">
      <h2 className="numbered-heading">
        <span className="number">02.</span> Where I&apos;ve Worked
      </h2>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 min-h-[340px]">
        {/* Tab Buttons List */}
        <div className="relative flex sm:flex-col overflow-x-auto sm:overflow-x-visible border-b-2 sm:border-b-0 sm:border-l-2 border-darkGrey shrink-0">
          {jobs.map((job, idx) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(idx)}
              className={`text-left font-mono text-xs sm:text-sm px-5 py-3 h-11 flex items-center transition-all duration-200 whitespace-nowrap ${
                activeTab === idx
                  ? 'text-green bg-lightNavy/60'
                  : 'text-slate hover:text-green hover:bg-lightNavy/30'
              }`}
            >
              {job.company}
            </button>
          ))}

          {/* Active Sliding Indicator */}
          <span
            className="absolute bg-green transition-transform duration-300 ease-out hidden sm:block w-[2px] h-11 left-[-2px] top-0"
            style={{ transform: `translateY(${activeTab * 44}px)` }}
          />
          <span
            className="absolute bg-green transition-transform duration-300 ease-out sm:hidden h-[2px] bottom-[-2px] left-0"
            style={{
              width: `${100 / jobs.length}%`,
              transform: `translateX(${activeTab * 100}%)`,
            }}
          />
        </div>

        {/* Tab Content Panels */}
        <div className="flex-1 py-1">
          {jobs.map((job, idx) => (
            <div
              key={job.company}
              className={`${activeTab === idx ? 'block' : 'hidden'} space-y-4`}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-lightestSlate">
                  <span>{job.title}</span>{' '}
                  <span className="text-green">
                    @{' '}
                    <a
                      href={job.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="hover:underline"
                    >
                      {job.company}
                    </a>
                  </span>
                </h3>
                <p className="font-mono text-xs sm:text-sm text-lightSlate mt-1">
                  {job.range} &nbsp;&middot;&nbsp; {job.location}
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-slate text-sm sm:text-base leading-relaxed">
                {job.duties.map((duty, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-green text-xs mt-1">▹</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
