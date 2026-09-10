'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;

      setIsScrolled(currentScrollY > 40);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 120;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          currentScrollY >= sectionTop &&
          currentScrollY < sectionTop + sectionHeight
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
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      animate={{ y: isHidden ? '-100%' : '0' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-4'}`}>
        <div
          className={`pointer-events-auto h-16 sm:h-20 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'glass rounded-2xl px-4 sm:px-6 shadow-xl shadow-black/10 border border-white/10'
              : 'px-2'
          }`}
        >
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group inline-flex items-center gap-3 text-text-primary"
            aria-label="Khairul Rizky Portfolio Home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-400 font-mono text-sm font-extrabold text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              KR
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-text-primary group-hover:text-indigo-400 transition-colors">
                Khairul Rizky
              </span>
              <span className="text-[10px] font-mono font-medium text-emerald-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-background-card/60 p-1.5 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 select-none ${
                    isActive ? 'text-white' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-indigo-500/20 border border-indigo-500/40"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-xs font-bold text-white shadow-md transition-all duration-300 hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="fas fa-paper-plane text-[10px]" />
                Hubungi Saya
              </span>
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-shimmer" />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-background-card/80 text-text-primary shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="flex flex-col gap-1.5 items-center justify-center">
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7 : 0 }}
                className="h-0.5 w-5 bg-current transition-all"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="h-0.5 w-5 bg-current transition-all"
              />
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7 : 0 }}
                className="h-0.5 w-5 bg-current transition-all"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="pointer-events-auto md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-background-secondary/95 p-4 shadow-2xl backdrop-blur-2xl"
          >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                          : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <i className="fas fa-chevron-right text-xs text-indigo-400" />}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2 pt-3 border-t border-white/10 flex items-center justify-between px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted">Tema Tampilan</span>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
