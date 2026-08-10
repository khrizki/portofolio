'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from '@remix-run/react';
import { navLinks } from '~/data/portfolio';
import { smoothScrollTo } from '~/lib/utils';
import ThemeToggle from '~/components/ui/ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useState(0)[0];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-secondary/95 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
      animate={{ y: isHidden ? '-100%' : '0' }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-mono text-xl font-bold gradient-text"
        >
          &lt;Dev /&gt;
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-accent-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'w-full'
                      : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle - Desktop */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-text-primary transition-all"
          />
          <motion.span
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-text-primary transition-all"
          />
          <motion.span
            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-text-primary transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden fixed top-20 left-0 right-0 bg-background-secondary border-b border-border"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block font-medium py-2 border-b border-border last:border-0 transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-accent-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 flex items-center gap-3">
                <span className="text-sm font-medium text-text-secondary">Theme</span>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
