import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, MapPin, Mail, Github, GraduationCap, Briefcase } from 'lucide-react';
import { personalProfile, skillsData, experienceData, educationData, projectsData } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass-window relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-[#FFFFFF] shadow-2xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0] pb-4">
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-[#55D6FF]/10 text-[#55D6FF]">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h2 id="resume-title" className="font-heading font-bold text-lg sm:text-xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                Resume — {personalProfile.name}
              </h2>
              <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                {personalProfile.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#9BA5B5] hover:text-[#F4F7FB] dark:hover:text-[#F4F7FB] hover:text-[#0F172A] transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Structured Resume Content Document Card */}
        <div className="rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822]/60 dark:bg-[#121822]/60 bg-[#F8FAFC] p-6 sm:p-8 space-y-6 text-sm">
          {/* Resume Header */}
          <div className="border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0] pb-4 space-y-2">
            <h3 className="font-heading font-bold text-2xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
              PULAK GIRI
            </h3>
            <p className="text-xs font-mono text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] font-semibold uppercase tracking-wider">
              {personalProfile.tagline}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] pt-1">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#55D6FF]" />
                <span>{personalProfile.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Github className="w-3.5 h-3.5 text-[#55D6FF]" />
                <span>github.com/pulakgiri</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-[#55D6FF]" />
                <span>{personalProfile.email}</span>
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-1.5">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] leading-relaxed">
              BCA developer from West Bengal with a strong interest in mobile application development using Flutter & Dart. Experienced in responsive UI design, RESTful API integration, modern backend architectures (NestJS, Node.js, PHP), and turning practical product ideas into performant applications.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] flex items-center space-x-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </h4>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-1 pl-2 border-l-2 border-[#55D6FF]/40">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                      {exp.role}
                    </span>
                    <span className="text-xs text-[#7C6CFF] ml-2 font-medium">
                      — {exp.company}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-2">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
              Featured Applications
            </h4>
            <div className="space-y-2.5">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                      {proj.title} <span className="font-normal text-[#9BA5B5]">({proj.type})</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#55D6FF]">
                      {proj.technologies.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <p className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] flex items-center space-x-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h4>
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-0.5 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                    {edu.degree} — {edu.institution}
                  </span>
                  <span className="font-mono text-[11px] text-[#9BA5B5]">{edu.period}</span>
                </div>
                {edu.scoreSummary && (
                  <p className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                    {edu.scoreSummary}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="space-y-1.5 pt-1">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
              Technical Skills
            </h4>
            <div className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] space-y-1">
              <div>
                <strong className="text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">Mobile:</strong> Flutter, Dart
              </div>
              <div>
                <strong className="text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">Backend & APIs:</strong> NestJS, Node.js, PHP, Laravel, REST APIs
              </div>
              <div>
                <strong className="text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis, Supabase
              </div>
              <div>
                <strong className="text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">Tools:</strong> Git, GitHub, Postman, VS Code, Android Studio
              </div>
            </div>
          </div>
        </div>

        {/* Public resume call to action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822]/60 dark:bg-[#121822]/60 bg-[#F8FAFC] p-5">
          <div className="space-y-1">
            <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
              Resume
            </h4>
            <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
              View my resume to learn more about my education, technical skills, experience, and projects.
            </p>
          </div>
          <a
            href={personalProfile.resumeUrl}
            download="Pulak_Giri_Resume.pdf"
            className="inline-flex shrink-0 items-center justify-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#55D6FF] text-[#07090D] hover:bg-[#55D6FF]/90 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};
