import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import { experiences, education } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <SectionTitle 
              subtitle="Work History" 
              title="Experience" 
              align="left"
            />
            
            <div className="mt-10">
              {experiences.map((exp, index) => (
                <TimelineItem 
                  key={exp.id}
                  year={exp.duration}
                  title={exp.role}
                  subtitle={exp.company}
                  description={exp.description}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <SectionTitle 
              subtitle="Academic Background" 
              title="Education" 
              align="left"
            />
            
            <div className="mt-10">
              {education.map((edu, index) => (
                <TimelineItem 
                  key={edu.id}
                  year={edu.duration}
                  title={edu.degree}
                  subtitle={edu.institution}
                  index={index}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;