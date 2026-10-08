import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalProfile } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#07090D] dark:bg-[#07090D] bg-[#F8FAFC] py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright & Tagline */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-heading font-medium text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
              {personalProfile.footerText}
            </p>
            <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
              Designed with precision for mobile engineering & product showcases.
            </p>
          </div>

          {/* Minimal Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-[#9BA5B5] hover:text-[#55D6FF] hover:border-[#55D6FF]/40 transition-colors"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-[#9BA5B5] hover:text-[#7C6CFF] hover:border-[#7C6CFF]/40 transition-colors"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalProfile.email}`}
              className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-[#9BA5B5] hover:text-[#55D6FF] hover:border-[#55D6FF]/40 transition-colors"
              aria-label="Email Pulak"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-[#9BA5B5] hover:text-[#55D6FF] hover:border-[#55D6FF]/40 transition-colors ml-2"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
