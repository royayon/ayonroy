'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconLogo } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
      } else {
        setScrollDirection('none');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const navClass = () => {
    if (scrollDirection === 'down') return '-translate-y-full';
    if (scrollDirection === 'up') return 'translate-y-0 shadow-lg shadow-darkNavy/80 bg-navy/95 backdrop-blur-md';
    return 'translate-y-0 bg-navy/85 backdrop-blur-md';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-10 lg:px-12 h-20 sm:h-24 flex items-center justify-between ${navClass()}`}
    >
      <Link
        href="/"
        aria-label="home"
        className="group block w-[42px] h-[42px] text-green transition-all duration-300"
      >
        <div className="w-full h-full group-hover:[&_polygon]:fill-transGreen transition-all duration-300">
          <IconLogo />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-7 font-mono text-xs text-lightestSlate">
        {portfolioData.navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.url}
            className="hover:text-green transition-colors py-2"
          >
            <span className="text-green mr-1.5 font-normal">0{i + 1}.</span>
            {link.name}
          </Link>
        ))}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="btn-teal-sm ml-2"
        >
          Resume
        </a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        className="md:hidden relative z-50 p-2 text-green focus:outline-none"
      >
        <div className="w-7 h-5 flex flex-col justify-between items-end">
          <span
            className={`h-0.5 bg-green rounded transition-all duration-300 ${
              menuOpen ? 'w-7 rotate-45 translate-y-2' : 'w-7'
            }`}
          />
          <span
            className={`h-0.5 bg-green rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-7' : 'w-5'
            }`}
          />
          <span
            className={`h-0.5 bg-green rounded transition-all duration-300 ${
              menuOpen ? 'w-7 -rotate-45 -translate-y-2.5' : 'w-3'
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Backdrop & Drawer */}
      <div
        className={`fixed inset-0 bg-darkNavy/70 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 bottom-0 right-0 w-[min(75vw,350px)] bg-lightNavy shadow-2xl z-40 flex flex-col justify-center items-center px-6 transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 font-mono text-sm text-lightestSlate w-full">
          {portfolioData.navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.url}
              onClick={() => setMenuOpen(false)}
              className="hover:text-green transition-colors py-2 text-center"
            >
              <div className="text-green text-xs mb-1">0{i + 1}.</div>
              <span className="text-base text-white">{link.name}</span>
            </Link>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-teal mt-6 px-10 py-3"
          >
            Resume
          </a>
        </nav>
      </aside>
    </header>
  );
}
