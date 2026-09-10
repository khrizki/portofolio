'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: ReactNode;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Button({
  variant = 'primary',
  icon,
  href,
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold tracking-[.01em] transition-all duration-300 select-none overflow-hidden';

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'surface-card text-text-primary hover:border-accent-primary/60 hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400 hover:-translate-y-0.5',
    ghost:
      'text-text-secondary hover:text-text-primary hover:bg-white/5',
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
      )}
    </>
  );

  const motionProps = {
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${baseStyles} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group ${baseStyles} ${variants[variant]} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
}
