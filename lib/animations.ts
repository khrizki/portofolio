// Animation utilities using GSAP and Framer Motion

import { Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Framer Motion Variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const navVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

// GSAP Animation Functions
export const animateHero = (context: gsap.Context) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
  })
    .from(
      '.hero-name',
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      '-=0.4'
    )
    .from(
      '.hero-description',
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      '-=0.4'
    )
    .from(
      '.hero-buttons',
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      '-=0.4'
    )
    .from(
      '.hero-social',
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      '-=0.4'
    )
    .from(
      '.hero-code-block',
      {
        opacity: 0,
        x: 30,
        duration: 1,
      },
      '-=0.6'
    );

  return tl;
};

export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration = 2000
): void => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.ceil(current) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + '+';
    }
  };

  updateCounter();
};

export const animateSkillBar = (element: HTMLElement, width: string): void => {
  gsap.to(element, {
    width,
    duration: 1.5,
    ease: 'power3.out',
  });
};

export const setupScrollTriggerAnimations = () => {
  // Animate sections on scroll
  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    gsap.from(section.querySelectorAll('.skill-card, .project-card'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });
  });
};

export const animateProjectCards = () => {
  const cards = document.querySelectorAll('.project-card');

  gsap.from(cards, {
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
  });
};

// Cleanup function for GSAP
export const cleanupAnimations = (context: gsap.Context) => {
  context.revert();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
