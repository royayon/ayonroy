'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { siteMetadata } = portfolioData;

  return (
    <section
      id="contact"
      className="py-28 max-w-[600px] mx-auto px-6 text-center"
    >
      <p className="font-mono text-green text-sm sm:text-base mb-4">
        05. What&apos;s Next?
      </p>

      <h2 className="text-4xl sm:text-5xl font-bold text-lightestSlate tracking-tight mb-6">
        Get In Touch
      </h2>

      <p className="text-slate text-base sm:text-lg leading-relaxed mb-12">
        My inbox is always open. Whether you have a question about my research,
        potential collaborations in AI and machine learning, or just want to say
        hello, I&apos;ll do my best to get back to you!
      </p>

      <a
        href={`mailto:${siteMetadata.email}`}
        className="btn-teal px-8 py-4 text-sm font-mono tracking-wider inline-block"
      >
        Say Hello
      </a>
    </section>
  );
}
