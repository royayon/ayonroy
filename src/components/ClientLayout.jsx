'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import SocialDocks from './SocialDocks';
import Footer from './Footer';
import Loader from './Loader';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading && isHome) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [isLoading, isHome]);

  return (
    <>
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen">
          <Navbar />
          <SocialDocks />
          <main id="content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
