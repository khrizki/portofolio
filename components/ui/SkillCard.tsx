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
      className="surface-card rounded-2xl p-6 text-center hover:border-accent-primary hover:-translate-y-1 hover:shadow-glow transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 border border-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform">
        <i className={`${skill.icon} gradient-text`} />
      </div>

      {/* Skill Name */}
      <span className="block font-semibold text-text-primary mb-3">
        {skill.name}
      </span>

      {/* Progress Bar */}
      <div className="h-1.5 bg-background-tertiary rounded-full overflow-hidden">
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
