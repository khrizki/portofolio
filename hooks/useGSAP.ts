'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAP() {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Create GSAP context
    contextRef.current = gsap.context(() => {});

    // Cleanup function
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return contextRef;
}

// Hook for animating counters
export function useCounter(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isCounting, setIsCounting] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isCounting) {
            setIsCounting(true);
            const startTime = Date.now();
            const animateCount = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const current = start + (end - start) * easeOutQuart;

              setCount(Math.floor(current));

              if (progress < 1) {
                requestAnimationFrame(animateCount);
              }
            };
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, start, isCounting]);

  return { count, elementRef, isCounting };
}

// Hook for GSAP timeline
export function useGSAPTimeline() {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return timelineRef;
}
