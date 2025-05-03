import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillBubbleProps {
  skill: Skill;
  index: number;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, index }) => {
  // Size based on skill level (1-5)
  const sizeMap = {
    1: 'w-16 h-16',
    2: 'w-20 h-20',
    3: 'w-24 h-24',
    4: 'w-28 h-28',
    5: 'w-32 h-32',
  };
  
  // Animation delay based on index
  const delay = index * 0.1;
  
  // Color based on category
  const colorMap: Record<Skill['category'], string> = {
    languages: 'from-blue-500 to-blue-700',
    frameworks: 'from-purple-500 to-purple-700',
    ml: 'from-green-500 to-green-700',
    webdev: 'from-yellow-500 to-yellow-700',
    database: 'from-red-500 to-red-700',
    tools: 'from-indigo-500 to-indigo-700',
    concepts: 'from-teal-500 to-teal-700',
  };
  
  return (
    <motion.div
      className={`
        relative ${sizeMap[skill.level as keyof typeof sizeMap]}
        flex items-center justify-center
        rounded-full
        bg-gradient-to-br ${colorMap[skill.category]}
        text-white font-medium
        shadow-lg hover:shadow-xl
        cursor-pointer
        transition-all duration-300
      `}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: 'spring',
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
    >
      <span className="text-center">{skill.name}</span>
    </motion.div>
  );
};

export default SkillBubble;