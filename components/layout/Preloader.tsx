'use client';

import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="preloader-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-background-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loader w-[60px] h-[60px] border-4 border-background-tertiary border-t-accent-primary rounded-full animate-spin" />
    </motion.div>
  );
}
