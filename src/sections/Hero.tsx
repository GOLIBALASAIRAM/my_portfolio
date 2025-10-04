import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl font-medium text-primary-sky dark:text-primary-sky mb-3"
            >
              Hi there, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-indigo to-primary-sky bg-clip-text text-transparent"
            >
              Bala Sairam Goli
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I build intelligent, secure, and scalable solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href="#contact" variant="outline">
                Get in Touch
              </Button>
              <Button href="https://drive.google.com/file/d/1TGiChb7DMAsT4kNO-29_JJ6GymjNCl-K/view?usp=drive_link" variant="secondary">
                View Resume
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 dark:text-gray-400">Email</span>
                <a href="mailto:balasairamgoli4@gmail.com" className="text-gray-900 dark:text-white hover:text-primary-sky dark:hover:text-primary-sky transition-colors">
                  balasairamgoli4@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 dark:text-gray-400">Location</span>
                <span className="text-gray-900 dark:text-white">Madhurawada, Visakhapatnam</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-md animate-float"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-indigo rounded-full opacity-10 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-sky rounded-full opacity-10 animate-pulse-slow"></div>
              
              {/* Profile Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="\profile12.jpg"
                  alt="Bala Sairam Goli"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-indigo/30 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
