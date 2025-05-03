import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-display font-bold bg-gradient-to-r from-primary-sky to-primary-indigo bg-clip-text text-transparent mb-2 inline-block"
            >
              Bala Sairam
            </a>
            <p className="text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Bala Sairam Goli. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-primary-indigo flex items-center justify-center text-white hover:bg-primary-sky transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
        
        {/* Resume Link */}
        <div className="mt-8 text-center">
          <Button href="#" variant="secondary" size="sm">
            View Resume
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;