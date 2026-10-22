'use client';

import React, { useState, useEffect } from 'react';
import {
  IconGitHub,
  IconLinkedin,
  IconScholar,
  IconCodepen,
  IconInstagram,
  IconTwitter,
  IconStar,
  IconFork,
} from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/royayon/ayonroy')
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === 'number') {
          setGitHubInfo({
            stars: data.stargazers_count,
            forks: data.forks_count,
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

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
    <footer className="py-8 px-6 text-center text-slate font-mono text-xs">
      {/* Mobile Social Links */}
      <div className="flex md:hidden justify-center items-center space-x-6 mb-6">
        {portfolioData.socialMedia.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={social.name}
            className="hover:text-green transition-colors"
          >
            {getSocialIcon(social.icon)}
          </a>
        ))}
      </div>

      <a
        href="https://github.com/royayon/ayonroy"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="hover:text-green transition-colors inline-block"
      >
        <p className="mb-2">Designed &amp; Built by Ayon Roy</p>

        {githubInfo.stars !== null && (
          <div className="flex justify-center items-center space-x-4 text-xs">
            <span className="flex items-center space-x-1">
              <IconStar className="w-3.5 h-3.5" />
              <span>{githubInfo.stars}</span>
            </span>
            <span className="flex items-center space-x-1">
              <IconFork className="w-3.5 h-3.5" />
              <span>{githubInfo.forks}</span>
            </span>
          </div>
        )}
      </a>
    </footer>
  );
}
