'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypewriterOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
}

export function useTypewriter(options: TypewriterOptions) {
  const elementRef = useRef<HTMLElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (elementRef.current && !typedRef.current) {
      typedRef.current = new Typed(elementRef.current, {
        strings: options.strings,
        typeSpeed: options.typeSpeed || 100,
        backSpeed: options.backSpeed || 50,
        backDelay: options.backDelay || 2000,
        startDelay: options.startDelay || 0,
        loop: options.loop !== false,
        showCursor: options.showCursor !== false,
        cursorChar: options.cursorChar || '|',
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
    };
  }, [options]);

  return { elementRef, typed: typedRef.current };
}
