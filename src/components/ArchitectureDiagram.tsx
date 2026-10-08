import React from 'react';
import { ArrowDown, ArrowRight, Shield, Server, Database, Radio, Smartphone, Cpu, Cloud } from 'lucide-react';
import { ProjectArchitecture } from '../types/portfolio';

interface ArchitectureDiagramProps {
  architecture: ProjectArchitecture;
  className?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  architecture,
  className = '',
}) => {
  return (
    <div className={`rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] p-5 space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0] pb-3">
        <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-[#55D6FF]" />
          <span>System Architecture & Pipeline</span>
        </h4>
        <span className="text-[11px] font-mono text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] bg-[#55D6FF]/10 px-2 py-0.5 rounded">
          Production Flow
        </span>
      </div>

      <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] leading-relaxed">
        {architecture.summary}
      </p>

      {/* Visual Sequence Pipeline */}
      <div className="pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {architecture.steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <div className="w-full p-3 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-center space-y-1 hover:border-[#55D6FF]/50 transition-colors shadow-sm">
                <span className="text-[10px] font-mono text-[#55D6FF] block">0{idx + 1}</span>
                <p className="font-heading font-semibold text-xs text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                  {step.label}
                </p>
                {step.sublabel && (
                  <p className="text-[10px] text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] line-clamp-1">
                    {step.sublabel}
                  </p>
                )}
              </div>
              {/* Down arrow on small screens, right arrow indicator between items */}
              {idx < architecture.steps.length - 1 && (
                <div className="my-1 sm:hidden text-[#55D6FF]/60">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Text summary code block */}
      <div className="p-2.5 rounded-lg bg-[#07090D] dark:bg-[#07090D] bg-[#0F172A] border border-[#202733] text-[11px] font-mono text-[#9BA5B5] overflow-x-auto">
        <span className="text-[#55D6FF]">pipeline:</span> {architecture.technicalFlowText}
      </div>
    </div>
  );
};
