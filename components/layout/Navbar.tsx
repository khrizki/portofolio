'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@remix-run/react';
import { navLinks } from '~/data/portfolio';
import { smoothScrollTo } from '~/lib/utils';
import ThemeToggle from '~/components/ui/ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // Set scrolled state
      setIsScrolled(currentScrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          currentScrollY > sectionTop &&
          currentScrollY <= sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      animate={{ y: isHidden ? '-100%' : '0' }}
      transition={{ duration: 0.3 }}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-2'}`}>
        <div
          className={`pointer-events-auto h-[4.5rem] flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'glass rounded-2xl px-4 sm:px-5 shadow-md'
              : 'px-2 sm:px-3'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group inline-flex items-center gap-2.5 text-text-primary"
            aria-label="Kembali ke beranda"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary font-mono text-sm font-extrabold text-white shadow-lg shadow-indigo-950/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">KR</span>
            <span className="hidden sm:block font-mono text-sm font-bold tracking-tight">
              khairul<span className="text-accent-secondary">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 rounded-full border border-transparent px-2 py-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="activeNavigation"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-primary/15 ring-1 ring-accent-primary/25"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="rounded-full bg-text-primary px-3.5 py-2 text-xs font-bold text-background-primary shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Mari bicara
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-background-card/60"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Buka menu navigasi"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7 : 0 }}
                className="h-0.5 w-5 bg-text-primary transition-all"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="h-0.5 w-5 bg-text-primary transition-all"
              />
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7 : 0 }}
                className="h-0.5 w-5 bg-text-primary transition-all"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="pointer-events-auto md:hidden mx-4 mt-2 rounded-2xl border border-border bg-background-secondary/95 p-2 shadow-lg backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-1 p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-accent-primary/12 text-accent-primary'
                        : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center justify-between border-t border-border px-3 pt-3">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Tampilan</span>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
