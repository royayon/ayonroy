'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 max-w-[900px] mx-auto px-6 sm:px-12 lg:px-0">
      <h2 className="numbered-heading">
        <span className="number">01.</span> {about.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Left Bio Content */}
        <div className="md:col-span-3 space-y-4 text-slate text-base sm:text-lg leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pt-3 font-mono text-xs sm:text-sm text-slate">
            {about.skills.map((skill) => (
              <li key={skill} className="flex items-center space-x-2">
                <span className="text-green text-xs">▹</span>
                <span className="text-lightSlate">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Photo Frame */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative group w-60 sm:w-64 aspect-square">
            {/* Background Offset Border */}
            <div className="absolute inset-0 rounded border-2 border-green translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />

            {/* Image Container with Duotone Tint */}
            <div className="relative rounded overflow-hidden z-10 w-full h-full bg-green shadow-xl">
              <img
                src={about.image}
                alt={portfolioData.siteMetadata.name}
                className="w-full h-full object-cover object-center filter grayscale contrast-100 mix-blend-multiply transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-screen transition-opacity duration-300 group-hover:opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
