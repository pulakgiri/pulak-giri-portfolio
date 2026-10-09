import React, { CSSProperties } from 'react';
import {
  Github,
  ExternalLink,
  Play,
  Globe,
  Figma,
  ArrowRight,
  Smartphone,
  Radio,
  GraduationCap,
  Calculator,
  Search,
  Layers,
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const getProjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'Mic':
      return <Radio className="w-5 h-5 text-[#55D6FF]" />;
    case 'GraduationCap':
      return <GraduationCap className="w-5 h-5 text-[#7C6CFF]" />;
    case 'Calculator':
      return <Calculator className="w-5 h-5 text-[#10B981]" />;
    case 'Search':
      return <Search className="w-5 h-5 text-[#F59E0B]" />;
    default:
      return <Smartphone className="w-5 h-5 text-[#55D6FF]" />;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const projectStyle: CSSProperties & { '--project-accent': string } = {
    '--project-accent': project.mockupTheme.accentColor,
  };

  return (
    <div style={projectStyle} className="glass-panel group rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#55D6FF]/50 hover:-translate-y-1 shadow-md hover:shadow-xl">
      {/* Visual Header / Mockup Representation */}
      <div className="project-card-visual relative h-48 sm:h-52 w-full border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0] p-6 flex flex-col justify-between overflow-hidden">
        {/* Subtle grid in card */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="project-number font-mono text-xs font-bold px-2.5 py-1 rounded-md border">
            PROJECT {project.number}
          </span>
          <div className="p-2 rounded-xl bg-[#0E1219]/90 border border-[#202733] backdrop-blur-sm">
            {getProjectIcon(project.mockupTheme.icon)}
          </div>
        </div>

        {/* Center Mockup Info */}
        <div className="relative z-10 space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#9BA5B5] dark:text-[#9BA5B5] text-[#94A3B8]">
            {project.type}
          </span>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F4F7FB] group-hover:text-[#55D6FF] transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Bottom subtle architectural indicator */}
        <div className="relative z-10 flex items-center space-x-2 text-[10px] font-mono text-[#9BA5B5]/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          <span className="truncate">{project.architecture.steps.map(s => s.label).join(' → ')}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <p className="text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] leading-relaxed">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#9BA5B5] dark:text-[#9BA5B5] text-[#334155] group-hover:border-[#55D6FF]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Strict Rule - only render links that exist! */}
        <div className="pt-4 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2">
          {/* Details button is always available */}
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#55D6FF]/10 text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] hover:bg-[#55D6FF] hover:text-[#07090D] transition-all"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Optional Action Buttons (only show when link is non-empty) */}
          <div className="flex items-center space-x-1.5">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#9BA5B5] hover:text-[#55D6FF] hover:border-[#55D6FF]/40 transition-colors"
                title="GitHub Repository"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#9BA5B5] hover:text-[#55D6FF] hover:border-[#55D6FF]/40 transition-colors"
                title="Live Demo"
                aria-label={`Live Demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.playStore ? (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#10B981] hover:border-[#10B981]/50 transition-colors"
                title="Google Play Store"
                aria-label={`Google Play Store for ${project.title}`}
              >
                <Play className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.webApp ? (
              <a
                href={project.links.webApp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#7C6CFF] hover:border-[#7C6CFF]/50 transition-colors"
                title="Web App"
                aria-label={`Web App for ${project.title}`}
              >
                <Globe className="w-4 h-4" />
              </a>
            ) : null}

            {project.links.figma ? (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#9BA5B5] hover:text-[#55D6FF] transition-colors"
                title="Figma Design"
                aria-label={`Figma design for ${project.title}`}
              >
                <Figma className="w-4 h-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
