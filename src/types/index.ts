export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export type Education = {
  id: number;
  degree: string;
  institution: string;
  duration: string;
};

export type Skill = {
  id: number;
  name: string;
  category: 'languages' | 'frameworks' | 'ml' | 'webdev' | 'database' | 'tools' | 'concepts';
  level: number; // 1-5
};

export type Interest = {
  id: number;
  name: string;
  icon: string;
  description: string;
};