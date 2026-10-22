'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-0">
      <div className="font-mono text-green text-sm sm:text-base mb-5 tracking-wide">
        {hero.overline}
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-lightestSlate tracking-tight mb-2">
        {hero.name}
      </h1>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate tracking-tight mb-7">
        {hero.subtitle}
      </h2>

      <p className="max-w-[540px] text-slate text-base sm:text-lg lg:text-xl leading-relaxed mb-12">
        {hero.description}
      </p>

      <div>
        <a
          href="/#projects"
          className="btn-teal px-7 py-4 text-sm font-mono tracking-wider"
        >
          {hero.ctaText}
        </a>
      </div>
    </section>
  );
}
