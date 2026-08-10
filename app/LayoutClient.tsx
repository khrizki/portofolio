'use client';

import { useEffect, useState, useRef } from 'react';
import { useLocation } from '@remix-run/react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../hooks/useTheme';
import Preloader from '../components/layout/Preloader';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/ui/BackToTop';
import { initAOS } from '../lib/utils';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lenisRef = useRef<any>(null);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);

    // Initialize AOS after mount
    const timerAOS = setTimeout(() => {
      initAOS();
    }, 100);

    // Initialize Lenis smooth scroll
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        lenisRef.current = lenis;
      } catch (error) {
        console.warn('Lenis initialization failed:', error);
      }
    };

    initLenis();

    // Hide preloader after components load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerAOS);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [location.pathname]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Navbar />

      <main className="relative">{children}</main>

      <BackToTop />

      <Footer />
    </ThemeProvider>
  );
}
