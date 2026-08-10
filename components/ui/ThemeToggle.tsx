'use client';

import { motion } from 'framer-motion';
import { useTheme } from '~/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-background-card border border-border cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {/* Sliding toggle */}
      <motion.div
        className="absolute top-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md"
        animate={{
          left: theme === 'dark' ? '4px' : 'calc(100% - 24px)',
          backgroundColor: theme === 'dark' ? '#6366f1' : '#f59e0b',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <i className="fas fa-moon text-[10px] text-white" />
        ) : (
          <i className="fas fa-sun text-[10px] text-white" />
        )}
      </motion.div>

      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
            : 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        }}
      />
    </motion.button>
  );
}
