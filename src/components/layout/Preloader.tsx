'use client';

import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={() => {
        // Remove from DOM after animation completes
        const preloader = document.querySelector('.preloader-overlay');
        if (preloader) {
          preloader.remove();
        }
      }}
    >
      <div className="loader" />
    </motion.div>
  );
}
