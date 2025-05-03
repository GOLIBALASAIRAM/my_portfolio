import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-indigo to-primary-sky text-white hover:shadow-lg hover:translate-y-[-2px]',
    secondary: 'bg-secondary-yellow text-gray-900 hover:shadow-lg hover:translate-y-[-2px]',
    outline: 'border-2 border-primary-indigo dark:border-primary-sky bg-transparent text-primary-indigo dark:text-primary-sky hover:bg-primary-indigo/10 dark:hover:bg-primary-sky/10',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      {children}
    </motion.span>
  );
  
  if (href) {
    return (
      <a href={href} className={styles} target={href.startsWith('#') ? '' : '_blank'} rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={styles}>
      {buttonContent}
    </button>
  );
};

export default Button;