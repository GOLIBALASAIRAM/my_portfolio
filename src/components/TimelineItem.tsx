import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  index: number;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
  description,
  index,
  isLast = false,
}) => {
  return (
    <motion.div 
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="flex justify-center w-10 h-10 rounded-full bg-primary-indigo dark:bg-primary-sky text-white font-bold text-sm flex items-center justify-center z-10">
          <span className="material-icons text-sm">
            {index + 1}
          </span>
        </div>
        
        {!isLast && (
          <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="pb-8">
        <span className="bg-secondary-yellow text-gray-900 text-xs font-medium px-2.5 py-1 rounded-full mb-2 inline-block">
          {year}
        </span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
          {title}
        </h3>
        <div className="text-sm font-medium text-primary-sky dark:text-primary-sky mt-1">
          {subtitle}
        </div>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;