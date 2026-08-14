'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
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
    'group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm tracking-[.01em] transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-indigo-950/30 hover:shadow-glow hover:-translate-y-0.5',
    secondary:
      'bg-background-card/75 text-text-primary border border-border hover:border-border-hover hover:bg-background-tertiary hover:-translate-y-0.5',
    outline:
      'bg-transparent text-accent-primary border border-accent-primary hover:bg-accent-primary hover:text-white',
  };

  const buttonContent = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
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
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
}
