import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Send, CheckCircle, XCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState(initialState);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-sky dark:focus:ring-primary-sky focus:border-primary-sky dark:focus:border-primary-sky bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Enter a valid email"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-sky dark:focus:ring-primary-sky focus:border-primary-sky dark:focus:border-primary-sky bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-sky dark:focus:ring-primary-sky focus:border-primary-sky dark:focus:border-primary-sky bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      
      <div className="flex items-center">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="px-8 py-3 w-full flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message <Send size={18} className="ml-2" />
            </>
          )}
        </Button>
        
        {submitStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ml-4 text-green-500 flex items-center"
          >
            <CheckCircle size={20} className="mr-1" />
            <span>Sent!</span>
          </motion.div>
        )}
        
        {submitStatus === 'error' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ml-4 text-red-500 flex items-center"
          >
            <XCircle size={20} className="mr-1" />
            <span>Failed!</span>
          </motion.div>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;