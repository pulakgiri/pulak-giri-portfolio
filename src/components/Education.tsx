import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] tracking-tight">
            Education & Foundation.
          </h2>
          <p className="text-sm text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] max-w-xl">
            Computer applications curriculum emphasizing data structures, algorithms, relational databases, and software engineering principles.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white flex flex-col justify-between space-y-6 hover:border-[#55D6FF]/40 transition-colors shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#55D6FF]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                    <Calendar className="w-3.5 h-3.5 text-[#55D6FF]" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-[#7C6CFF] dark:text-[#7C6CFF] text-[#6366F1] font-medium">
                    {item.institution}
                  </p>
                  {item.boardOrAffiliation && (
                    <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                      {item.boardOrAffiliation}
                    </p>
                  )}
                </div>
              </div>

              {/* Semester Scores */}
              <div className="pt-4 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] flex items-center space-x-1">
                  <Award className="w-3 h-3 text-[#55D6FF]" />
                  <span>Academic Record</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.academicResults.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="px-3 py-1.5 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] text-xs font-mono flex items-center space-x-2"
                    >
                      <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">{res.label}:</span>
                      <span className="text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] font-semibold">
                        {res.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
