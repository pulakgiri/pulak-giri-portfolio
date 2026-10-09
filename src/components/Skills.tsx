import React, { useState } from 'react';
import {
  Smartphone,
  Code2,
  Server,
  Cpu,
  FileCode,
  Layers,
  Database,
  HardDrive,
  Boxes,
  Zap,
  Binary,
  Terminal,
  FileTerminal,
  GitBranch,
  Github,
  Send,
  Monitor,
  AppWindow,
  CheckCircle2,
} from 'lucide-react';
import { skillsData } from '../data/profile';

// Icon resolver helper
const getSkillIcon = (iconName: string) => {
  const iconProps = { className: 'w-5 h-5 text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]' };
  switch (iconName) {
    case 'Smartphone':
      return <Smartphone {...iconProps} />;
    case 'Code2':
      return <Code2 {...iconProps} />;
    case 'Server':
      return <Server {...iconProps} />;
    case 'Cpu':
      return <Cpu {...iconProps} />;
    case 'FileCode':
      return <FileCode {...iconProps} />;
    case 'Layers':
      return <Layers {...iconProps} />;
    case 'Database':
      return <Database {...iconProps} />;
    case 'HardDrive':
      return <HardDrive {...iconProps} />;
    case 'Boxes':
      return <Boxes {...iconProps} />;
    case 'Zap':
      return <Zap {...iconProps} />;
    case 'Binary':
      return <Binary {...iconProps} />;
    case 'Terminal':
      return <Terminal {...iconProps} />;
    case 'FileTerminal':
      return <FileTerminal {...iconProps} />;
    case 'GitBranch':
      return <GitBranch {...iconProps} />;
    case 'Github':
      return <Github {...iconProps} />;
    case 'Send':
      return <Send {...iconProps} />;
    case 'Monitor':
      return <Monitor {...iconProps} />;
    case 'AppWindow':
      return <AppWindow {...iconProps} />;
    default:
      return <CheckCircle2 {...iconProps} />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const displayedSkills =
    selectedCategory === 'All'
      ? skillsData.flatMap((cat) => cat.skills.map((skill) => ({ ...skill, category: cat.category })))
      : skillsData
          .find((cat) => cat.category === selectedCategory)
          ?.skills.map((skill) => ({ ...skill, category: selectedCategory })) || [];

  return (
    <section id="skills" className="motion-section py-16 sm:py-20 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
              <span>Tech Stack</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] tracking-tight">
              Technologies I work with.
            </h2>
            <p className="text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] max-w-xl">
              Practical experience spanning cross-platform mobile frameworks, server backends, database management, and essential developer workflows.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0E1219] dark:bg-[#0E1219] bg-[#F1F5F9] border border-[#202733] dark:border-[#202733] border-[#E2E8F0] w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#55D6FF] text-[#07090D] shadow-sm font-semibold'
                    : 'text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] hover:text-[#F4F7FB] dark:hover:text-[#F4F7FB] hover:text-[#0F172A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Skills Grid (Desktop), 2-Col (Tablet), 1-Col (Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="glass-panel p-5 rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white hover:border-[#55D6FF]/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] border border-[#202733] dark:border-[#202733] border-[#E2E8F0] group-hover:border-[#55D6FF]/30 transition-colors">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-[#9BA5B5]/70 dark:text-[#9BA5B5]/70 text-[#94A3B8] uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-base text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] group-hover:text-[#55D6FF] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] leading-relaxed mt-1">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
