import React from 'react';
import { Layout, GitPullRequest, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { personalProfile } from '../data/profile';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Layout className="w-5 h-5 text-[#55D6FF]" />,
      title: 'Clean UI & Ergonomics',
      desc: 'Obsessed with fluid animations, intuitive user flows, and adaptive widget layouts across different screen densities.',
    },
    {
      icon: <GitPullRequest className="w-5 h-5 text-[#7C6CFF]" />,
      title: 'Reliable API Integration',
      desc: 'Experienced in connecting mobile clients to backend microservices, handling state management, and network failure recovery.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />,
      title: 'Practical Engineering',
      desc: 'Prioritizing maintainable code, sound data models, and sensible architecture over unnecessary complexity.',
    },
  ];

  return (
    <section id="about" className="motion-section py-16 sm:py-20 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Section Left / Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
              <span>About Pulak</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] tracking-tight leading-tight">
              {personalProfile.aboutHeadline}
            </h2>

            <div className="flex items-center space-x-2 text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] pt-1">
              <MapPin className="w-4 h-4 text-[#55D6FF]" />
              <span>Based in {personalProfile.location}</span>
            </div>
          </div>

          {/* Section Right / Bio text + pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]">
              {personalProfile.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Mindset Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-panel p-4 rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white space-y-2 hover:border-[#55D6FF]/40 transition-colors"
                >
                  <div className="p-2 w-fit rounded-lg bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9]">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
