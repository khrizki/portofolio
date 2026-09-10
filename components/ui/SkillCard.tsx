'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const [width, setWidth] = useState('0%');
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(`${skill.level}%`);
            }, index * 100);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="surface-card group rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent-primary hover:shadow-glow sm:p-6 animate-float-fast"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Icon */}
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-primary/15 bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 text-2xl transition-transform group-hover:rotate-6 group-hover:scale-105">
        <i className={`${skill.icon} gradient-text`} />
      </div>

      {/* Skill Name */}
      <span className="mb-3 block font-semibold tracking-[-.02em] text-text-primary">
        {skill.name}
      </span>

      {/* Progress Bar */}
      <div className="h-1.5 overflow-hidden rounded-full bg-background-tertiary">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
