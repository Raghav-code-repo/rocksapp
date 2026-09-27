import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 14 },
    animate: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0 },
    exit: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.32,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
