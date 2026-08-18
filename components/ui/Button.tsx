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
    'group inline-flex items-center justify-center gap-2.5 rounded-xl border border-transparent px-5 py-3.5 text-sm font-bold tracking-[.01em] transition-all duration-300 sm:px-6';

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-primary via-[#7688ff] to-accent-secondary text-white shadow-[0_14px_30px_rgba(89,106,255,.25)] hover:-translate-y-0.5 hover:shadow-glow',
    secondary:
      'bg-background-card/75 text-text-primary border-border backdrop-blur-sm hover:-translate-y-0.5 hover:border-border-hover hover:bg-background-tertiary',
    outline:
      'bg-transparent border-accent-primary/60 text-accent-primary hover:bg-accent-primary hover:text-white',
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
