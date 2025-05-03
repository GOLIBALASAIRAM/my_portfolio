import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassMorphicCard: React.FC<CardProps> = ({ 
  children, 
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`
        relative p-6 rounded-xl 
        bg-white/80 dark:bg-gray-900/70
        backdrop-blur-sm
        border border-gray-100 dark:border-gray-800
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-indigo/5 to-primary-sky/5 dark:from-primary-indigo/10 dark:to-primary-sky/10 rounded-xl"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassMorphicCard;