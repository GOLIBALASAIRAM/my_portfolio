import { Project, Experience, Education, Skill, Interest } from '../types';
import { Code, Database, Globe, Brain, GitBranch, LineChart } from 'lucide-react';

export const skills: Skill[] = [
  // Languages
  { id: 1, name: 'Python', category: 'languages', level: 5 },
  { id: 2, name: 'C++', category: 'languages', level: 4 },
  { id: 3, name: 'C', category: 'languages', level: 4 },
  { id: 4, name: 'JavaScript', category: 'languages', level: 4 },
  { id: 5, name: 'SQL', category: 'languages', level: 4 },
  
  // Frameworks
  { id: 6, name: 'Django', category: 'frameworks', level: 4 },
  { id: 7, name: 'Flask', category: 'frameworks', level: 4 },
  { id: 8, name: 'Streamlit', category: 'frameworks', level: 5 },
  
  // ML/AI Tools
  { id: 9, name: 'TensorFlow', category: 'ml', level: 4 },
  { id: 10, name: 'Scikit-learn', category: 'ml', level: 5 },
  { id: 11, name: 'Pandas', category: 'ml', level: 5 },
  
  // Web Dev
  { id: 12, name: 'HTML', category: 'webdev', level: 5 },
  { id: 13, name: 'CSS', category: 'webdev', level: 4 },
  { id: 14, name: 'JavaScript', category: 'webdev', level: 4 },
  { id: 15, name: 'REST APIs', category: 'webdev', level: 4 },
  
  // Databases
  { id: 16, name: 'MongoDB', category: 'database', level: 4 },
  { id: 17, name: 'SQL', category: 'database', level: 4 },
  
  // Tools
  { id: 18, name: 'Git', category: 'tools', level: 5 },
  { id: 19, name: 'GitHub', category: 'tools', level: 5 },
  { id: 20, name: 'Firebase', category: 'tools', level: 3 },
  
  // Concepts
  { id: 21, name: 'Time Series', category: 'concepts', level: 4 },
  { id: 22, name: 'NLP', category: 'concepts', level: 4 },
  { id: 23, name: 'Model Evaluation', category: 'concepts', level: 5 },
  { id: 24, name: 'Feature Engineering', category: 'concepts', level: 4 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Customer Churn Predictor',
    description: 'Deep learning application that predicts customer churn with high accuracy.',
    techStack: ['TensorFlow', 'Streamlit', 'Python'],
    link: 'https://github.com/GOLIBALASAIRAM/Customer-Churn-Predictor',
  },
  {
    id: 2,
    title: 'Retail RFM Segmentation',
    description: 'Behavioral segmentation using Recency, Frequency, Monetary model.',
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
    link: '#',
  },
  {
    id: 3,
    title: 'Commodity Price Forecast & Crop Suggestion',
    description: 'ML-based forecasting system with 88% accuracy for predicting commodity prices.',
    techStack: ['Python', 'Time Series Analysis', 'Machine Learning'],
    link: '#',
  },
  {
    id: 4,
    title: 'Secure Messaging App',
    description: 'End-to-End Encrypted messaging application using Python cryptography.',
    techStack: ['Python', 'Cryptography', 'Tkinter'],
    link: '#',
  },
  {
    id: 5,
    title: 'Library Management System',
    description: 'OOAD project for managing library resources and operations.',
    techStack: ['C++', 'Object-Oriented Design'],
    link: '#',
  },
  {
    id: 6,
    title: "Raju's Organic Farming (ROF)",
    description: 'Sustainability-focused application for organic farming.',
    techStack: ['JavaScript', 'Django', 'React'],
    link: '#',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Junior Intern',
    company: 'Namoona 3D Labs',
    duration: 'Dec 2024 – Jan 2025',
    description: 'Worked on Generative AI for B-rep CAD modeling',
  },
  {
    id: 2,
    role: 'Project Intern',
    company: 'Infosys Springboard',
    duration: 'Oct 2024 – Dec 2024',
    description: 'Breast Cancer Detection using AdaBoost',
  },
  {
    id: 3,
    role: 'Encryption Developer',
    company: 'AICTE + Palo Alto',
    duration: 'During Internship',
    description: 'Secure Messaging App',
  },
  {
    id: 4,
    role: 'Virtual Intern',
    company: 'Salesforce (SmartInternz)',
    duration: '2024',
    description: 'Salesforce development and implementation',
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Tech in Information Technology',
    institution: 'Gayatri Vidya Parishad College of Engineering',
    duration: '2022–2026 (Currently Pursuing)',
  },
  {
    id: 2,
    degree: 'Intermediate',
    institution: 'Narayana Junior College, Kakinada',
    duration: '2020-2022',
  },
  {
    id: 3,
    degree: 'Schooling',
    institution: 'Sri Chaitanya School, Kakinada',
    duration: '2020',
  },
];

export const interests: Interest[] = [
  {
    id: 1,
    name: 'Machine Learning',
    icon: 'Brain',
    description: 'Building intelligent systems that learn from data',
  },
  {
    id: 2,
    name: 'Competitive Programming',
    icon: 'Code',
    description: 'Solving complex problems efficiently',
  },
  {
    id: 3,
    name: 'Open Source',
    icon: 'GitBranch',
    description: 'Contributing to and learning from open source projects',
  },
  {
    id: 4,
    name: 'Full-Stack Development',
    icon: 'Globe',
    description: 'Creating end-to-end web applications',
  },
];

export const interestIcons = {
  Brain,
  Code,
  GitBranch,
  Globe,
  Database,
  LineChart
};