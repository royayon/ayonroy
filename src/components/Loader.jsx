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
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader-container',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
      });

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div
      className="loader-container fixed inset-0 z-[99999] flex items-center justify-center select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
        backgroundColor: '#020c1b',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className={`transition-opacity duration-300 ${
          isMounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: '100px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        <IconLoader />
      </div>
    </div>
  );
}
