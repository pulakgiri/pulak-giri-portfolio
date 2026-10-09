import React from 'react';
import { Briefcase, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { experienceData } from '../data/profile';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="motion-section py-16 sm:py-20 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
            <span>Career Milestones</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] tracking-tight">
            Learning by building.
          </h2>
          <p className="text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] max-w-xl">
            Hands-on software development experience focusing on mobile engineering, state management, and API-driven interfaces.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="glass-panel relative p-6 sm:p-8 rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white space-y-6 hover:border-[#55D6FF]/40 transition-colors shadow-sm"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0] pb-5">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 rounded-lg bg-[#55D6FF]/10 text-[#55D6FF]">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[#7C6CFF] dark:text-[#7C6CFF] text-[#6366F1]">
                    {item.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] border border-[#202733] dark:border-[#202733] border-[#CBD5E1] text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]">
                    <Calendar className="w-3.5 h-3.5 text-[#55D6FF]" />
                    <span>{item.duration}</span>
                  </span>
                  <span className="text-xs font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Main description */}
              <p className="text-sm sm:text-base text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] leading-relaxed">
                {item.description}
              </p>

              {/* Responsibilities bullets */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F7FB] dark:text-[#F4F7FB] text-[#1E293B]">
                  Key Contributions & Workflows
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start space-x-2 text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                  Core Tech:
                </span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
