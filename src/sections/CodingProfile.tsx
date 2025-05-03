import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import GlassMorphicCard from '../components/GlassMorphicCard';
import { Code, Award, Cpu } from 'lucide-react';

const CodingProfile: React.FC = () => {
  const statItems = [
    { label: 'Problems Solved', value: '300+', icon: <Code size={24} /> },
    { label: 'Days Streak', value: '160+', icon: <Cpu size={24} /> },
    { label: 'Contests', value: '15+', icon: <Award size={24} /> },
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle 
          subtitle="Competitive Programming" 
          title="Coding Profile" 
        />
        
        <GlassMorphicCard className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Competitive Programming Enthusiast actively solving problems on LeetCode and GeeksforGeeks.
              Currently participating in the GfG 160 Days DSA Challenge (#gfg160, #geekstreak2024).
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-indigo/10 dark:bg-primary-indigo/20 rounded-full text-primary-indigo dark:text-primary-sky mb-4 mx-auto">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary-indigo/10 dark:bg-primary-indigo/20 rounded-lg text-primary-indigo dark:text-primary-sky"
            >
              <span className="font-medium">Highlight:</span> GfG 160 Days DSA Challenge - Consistent daily problem solving
            </motion.div>
          </div>
        </GlassMorphicCard>
      </div>
    </section>
  );
};

export default CodingProfile;