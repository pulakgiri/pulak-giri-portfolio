import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Play,
  Globe,
  Figma,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Smartphone,
  Check,
} from 'lucide-react';
import { Project } from '../types/portfolio';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasAnyExternalLink = Boolean(
    project.links.github ||
      project.links.demo ||
      project.links.playStore ||
      project.links.webApp ||
      project.links.figma
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-[#FFFFFF] shadow-2xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] p-6 sm:p-8 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0] pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#55D6FF]/10 text-[#55D6FF]">
                PROJECT {project.number}
              </span>
              <span className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                {project.type}
              </span>
            </div>
            <h2
              id="modal-title"
              className="font-heading font-bold text-2xl sm:text-3xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]"
            >
              {project.title}
            </h2>
            <p className="text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
              {project.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#9BA5B5] hover:text-[#F4F7FB] dark:hover:text-[#F4F7FB] hover:text-[#0F172A] hover:border-[#55D6FF]/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Mockup / Technical Visual Banner */}
        <div className="rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-gradient-to-br from-[#121822] to-[#07090D] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner">
          <div className="space-y-3 max-w-md">
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#55D6FF]">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Flutter Production Architecture</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-[#F4F7FB]">
              {project.title} — Technical Deep Dive
            </h3>
            <p className="text-xs text-[#9BA5B5] leading-relaxed">
              Engineered with modern state management, responsive widget layouts, secure session tokens, and modular backend endpoints.
            </p>
          </div>

          {/* Stylized Mobile Screen Mockup Card */}
          <div className="w-48 sm:w-56 h-36 rounded-xl border border-[#202733] bg-[#0E1219] p-3 flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between text-[10px] text-[#9BA5B5] font-mono border-b border-[#202733] pb-1.5">
              <span>9:41 AM</span>
              <span className="text-[#10B981]">● Online</span>
            </div>
            <div className="text-center py-2 space-y-1">
              <span className="text-xs font-heading font-semibold text-[#55D6FF] block">
                {project.title}
              </span>
              <span className="text-[10px] text-[#9BA5B5] block line-clamp-1">
                {project.type}
              </span>
            </div>
            <div className="flex justify-around pt-1 border-t border-[#202733] text-[9px] text-[#9BA5B5]">
              <span className="text-[#55D6FF]">Active Session</span>
              <span>Encrypted</span>
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#55D6FF]" />
            <span>Technologies & Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview, Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822]/60 dark:bg-[#121822]/60 bg-[#F8FAFC] space-y-2">
            <h4 className="font-heading font-semibold text-sm text-[#EF4444] flex items-center space-x-2">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822]/60 dark:bg-[#121822]/60 bg-[#F8FAFC] space-y-2">
            <h4 className="font-heading font-semibold text-sm text-[#10B981] flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Solution</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* In-depth Overview */}
        <div className="space-y-2">
          <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
            Project Overview
          </h4>
          <p className="text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Architecture Section */}
        <ArchitectureDiagram architecture={project.architecture} />

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] flex items-center space-x-2">
            <Check className="w-4 h-4 text-[#10B981]" />
            <span>Implemented & Verified Key Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2.5 p-3 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822]/40 dark:bg-[#121822]/40 bg-[#FFFFFF] text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#55D6FF] mt-1.5 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Challenges */}
        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-[#7C6CFF]" />
            <span>Engineering Challenges Overcome</span>
          </h4>
          <div className="space-y-2">
            {project.developmentChallenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#07090D] dark:bg-[#07090D] bg-[#F1F5F9] text-xs sm:text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] leading-relaxed flex items-start space-x-3"
              >
                <span className="text-[#7C6CFF] font-mono font-bold">0{idx + 1}.</span>
                <span>{challenge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Links Section (Strict rule: ONLY display if actually exists, no fake links) */}
        <div className="border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0] pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#202733] text-[#F4F7FB] hover:bg-[#55D6FF] hover:text-[#07090D] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            ) : null}

            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#55D6FF] text-[#07090D] hover:bg-[#55D6FF]/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : null}

            {project.links.playStore ? (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#10B981] text-[#07131A] hover:bg-[#10B981]/90 transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>Google Play</span>
              </a>
            ) : null}

            {project.links.webApp ? (
              <a
                href={project.links.webApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#7C6CFF] text-[#07090D] hover:bg-[#7C6CFF]/90 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Web App</span>
              </a>
            ) : null}

            {project.links.figma ? (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold border border-[#202733] text-[#F4F7FB] hover:border-[#55D6FF] transition-colors"
              >
                <Figma className="w-4 h-4" />
                <span>Figma</span>
              </a>
            ) : null}

            {!hasAnyExternalLink && (
              <div className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                <span>Configurable project URLs (Provide links in profile.ts to display buttons)</span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold border border-[#202733] dark:border-[#202733] border-[#CBD5E1] text-[#9BA5B5] hover:text-[#F4F7FB] dark:hover:text-[#F4F7FB] hover:text-[#0F172A] transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
