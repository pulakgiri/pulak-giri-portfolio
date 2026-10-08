import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/profile';
import { Project } from '../types/portfolio';
import { Sparkles, Layers } from 'lucide-react';

interface ProjectsProps {
  onOpenDetails: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenDetails }) => {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
              <span>Featured Work</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] tracking-tight">
              Projects built with purpose.
            </h2>
            <p className="text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] max-w-xl">
              Real applications engineered with Flutter, Dart, NestJS, and modern databases, emphasizing privacy, offline functionality, and clean mobile UX.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] bg-[#0E1219] dark:bg-[#0E1219] bg-white px-3 py-1.5 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] w-fit">
            <Layers className="w-3.5 h-3.5 text-[#55D6FF]" />
            <span>4 Production Case Studies</span>
          </div>
        </div>

        {/* 2-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
