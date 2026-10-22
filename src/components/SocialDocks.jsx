'use client';

import React from 'react';
import {
  IconGitHub,
  IconLinkedin,
  IconScholar,
  IconCodepen,
  IconInstagram,
  IconTwitter,
} from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function SocialDocks() {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <IconGitHub className="w-5 h-5" />;
      case 'linkedin':
        return <IconLinkedin className="w-5 h-5" />;
      case 'scholar':
        return <IconScholar className="w-5 h-5" />;
      case 'codepen':
        return <IconCodepen className="w-5 h-5" />;
      case 'instagram':
        return <IconInstagram className="w-5 h-5" />;
      case 'twitter':
        return <IconTwitter className="w-5 h-5" />;
      default:
        return <IconGitHub className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* Left Social Dock */}
      <div className="hidden md:flex fixed bottom-0 left-6 lg:left-12 z-20 flex-col items-center">
        <ul className="flex flex-col space-y-5 text-lightSlate">
          {portfolioData.socialMedia.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={social.name}
                className="block p-1.5 hover:text-green hover:-translate-y-1 transition-all duration-200"
              >
                {getSocialIcon(social.icon)}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-[1px] h-24 bg-lightSlate mt-6" />
      </div>

      {/* Right Email Dock */}
      <div className="hidden md:flex fixed bottom-0 right-6 lg:right-12 z-20 flex-col items-center">
        <div className="flex flex-col items-center">
          <a
            href={`mailto:${portfolioData.siteMetadata.email}`}
            className="font-mono text-xs tracking-widest text-lightSlate hover:text-green hover:-translate-y-1 transition-all duration-200 p-2"
            style={{ writingMode: 'vertical-rl' }}
          >
            {portfolioData.siteMetadata.email}
          </a>
        </div>
        <div className="w-[1px] h-24 bg-lightSlate mt-6" />
      </div>
    </>
  );
}
