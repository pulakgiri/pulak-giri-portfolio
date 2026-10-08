import React from 'react';
import { ArrowDown, FileText, Smartphone, Layers, Server, Sparkles } from 'lucide-react';
import { CodeCard } from './CodeCard';
import { personalProfile } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#0E1219]/90 dark:bg-[#0E1219]/90 bg-white/90 text-xs font-semibold tracking-wider uppercase text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#55D6FF] animate-ping" />
              <span>{personalProfile.tagline}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] leading-[1.1] tracking-tight">
              Building digital products that feel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55D6FF] via-[#7C6CFF] to-[#55D6FF]">
                simple.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalProfile.heroSubtext}
            </p>

            {/* Focus Pillars (Flutter, Mobile Development, Full Stack) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-xs font-medium text-[#F4F7FB] dark:text-[#F4F7FB] text-[#1E293B]">
                <Smartphone className="w-3.5 h-3.5 text-[#55D6FF]" />
                <span>Flutter & Dart</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-xs font-medium text-[#F4F7FB] dark:text-[#F4F7FB] text-[#1E293B]">
                <Layers className="w-3.5 h-3.5 text-[#7C6CFF]" />
                <span>Mobile Development</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-xs font-medium text-[#F4F7FB] dark:text-[#F4F7FB] text-[#1E293B]">
                <Server className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Modern Backends (NestJS)</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm bg-[#55D6FF] text-[#07090D] hover:bg-[#55D6FF]/90 transition-all shadow-md shadow-[#55D6FF]/10 active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] hover:border-[#55D6FF]/60 hover:text-[#55D6FF] transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#55D6FF]" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Code Card Developer Visual */}
          <div className="lg:col-span-5 w-full">
            <CodeCard />
          </div>
        </div>
      </div>
    </section>
  );
};
