'use client';

import { useState, useEffect } from 'react';

interface ScrollState {
  isScrolled: boolean;
  scrollDirection: 'up' | 'down' | null;
  scrollY: number;
  scrollPercentage: number;
}

export function useScroll(threshold = 50): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    scrollDirection: null,
    scrollY: 0,
    scrollPercentage: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      const scrollPercentage = (currentScrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

      setScrollState({
        isScrolled: currentScrollY > threshold,
        scrollDirection,
        scrollY: currentScrollY,
        scrollPercentage,
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrollState;
}
