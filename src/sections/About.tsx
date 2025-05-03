import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import GlassMorphicCard from '../components/GlassMorphicCard';
import { interests, interestIcons } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle 
          subtitle="Get to know me" 
          title="About Me" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-md"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-yellow rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-indigo rounded-full opacity-10"></div>
              
              {/* Profile Image */}
              <div className="relative w-full overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Bala Sairam Goli"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <div>
            <GlassMorphicCard>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              >
                Tech enthusiast passionate about Machine Learning, Web Development, Open Source, and Problem Solving. I've participated in multiple national hackathons including SIH, Flipkart Grid, and others.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              >
                I've managed finances as Treasurer of my college's open-source club and volunteered at the Navy Marathon. I'm originally from East Godavari and currently studying at Gayatri Vidya Parishad College of Engineering.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Interests
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {interests.map((interest, index) => {
                    const Icon = interestIcons[interest.icon as keyof typeof interestIcons];
                    
                    return (
                      <motion.div
                        key={interest.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-indigo/10 dark:bg-primary-indigo/20 rounded-full text-primary-indigo dark:text-primary-sky mb-3 mx-auto">
                          <Icon size={24} />
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {interest.name}
                        </h4>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </GlassMorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;