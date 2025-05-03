import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <motion.div
      className="h-64 relative perspective-1000 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-primary-indigo to-primary-sky p-0.5">
          <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl backface-hidden p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                {project.description}
              </p>
            </div>
            
            <div className="mt-4 flex items-center text-sm font-medium text-primary-sky">
              <span>View Details</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-primary-indigo to-primary-sky p-0.5 rotateY-180">
          <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl backface-hidden rotateY-180 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 my-3">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary-sky hover:text-primary-indigo dark:hover:text-secondary-yellow transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Project</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;