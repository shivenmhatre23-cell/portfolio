import React from 'react';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ScrollReveal } from '../effects/ScrollReveal';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="spring-up" duration={800}>
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 rounded-full bg-surface-900 border border-brand-500/20 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wider text-brand-400 uppercase">
                Featured Work
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#f5f5f5] font-heading">
              Things I've Built
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#a3a3a3] leading-relaxed max-w-2xl">
              A few projects I've worked on while learning, experimenting, and turning ideas into working software.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              variant="spring-up"
              duration={900}
              delay={idx * 120}
            >
              <ProjectCard project={project} index={idx} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
