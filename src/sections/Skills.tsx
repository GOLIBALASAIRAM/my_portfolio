import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data';
import SkillBubble from '../components/SkillBubble';

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

const categoryNames = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  ml: 'ML/AI Tools',
  webdev: 'Web Development',
  database: 'Databases',
  tools: 'Tools',
  concepts: 'Concepts',
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionTitle 
          subtitle="What I can do" 
          title="My Skills" 
        />
        
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-primary-indigo text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {Object.keys(groupedSkills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-indigo text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {categoryNames[category as keyof typeof categoryNames]}
            </button>
          ))}
        </motion.div>
        
        {/* Skills Visualization */}
        <motion.div
          layout
          className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          style={{
            perspective: '1000px',
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                style={{
                  position: 'absolute',
                  left: `${30 + Math.random() * 40}%`,
                  top: `${20 + Math.random() * 60}%`,
                  transformStyle: 'preserve-3d',
                  zIndex: skill.level,
                  transformOrigin: 'center center',
                }}
                drag
                dragConstraints={{
                  left: -100,
                  right: 100,
                  top: -100,
                  bottom: 100,
                }}
                animate={{ 
                  x: Math.random() * 10 - 5,
                  y: Math.random() * 10 - 5,
                  transition: {
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 5 + Math.random() * 5,
                  }
                }}
              >
                <SkillBubble skill={skill} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;