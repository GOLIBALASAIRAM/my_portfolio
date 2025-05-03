import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle 
          subtitle="My work" 
          title="Featured Projects" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;