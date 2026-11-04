'use client';

import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import { IconLoader } from './Icons';

export default function Loader({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);

    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 500,
        duration: 2000,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 700,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader-overlay',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className="loader-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-darkNavy select-none">
      <div
        className={`w-max max-w-[100px] transition-opacity duration-300 ${
          isMounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <IconLoader />
      </div>
    </div>
  );
}
