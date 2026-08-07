'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { initLenis, initAOS } from '@/lib/utils';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    initAOS();

    // Initialize Lenis smooth scroll
    const lenis = initLenis();

    // Hide preloader after components load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader />}

      <Navbar />

      <main className="relative">{children}</main>

      <Footer />
    </>
  );
}
