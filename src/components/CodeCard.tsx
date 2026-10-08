import React, { useState } from 'react';
import { Check, Copy, Terminal, Smartphone, Sparkles } from 'lucide-react';

export const CodeCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `class PulakGiri {
  final role = 'Flutter Developer';
  final location = 'West Bengal, India';

  buildProducts() {
    return cleanCode
      .withGoodUX()
      .andRealProblems();
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none group">
      {/* Subtle background glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#55D6FF]/15 via-[#7C6CFF]/15 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Main card */}
      <div className="relative rounded-xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-[#FFFFFF] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0]">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block"></span>
            <span className="ml-2 text-xs font-sans text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] flex items-center space-x-1">
              <Smartphone className="w-3.5 h-3.5 text-[#55D6FF]" />
              <span>pulak_giri.dart</span>
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-2 py-1 rounded bg-[#0E1219] dark:bg-[#0E1219] bg-white border border-[#202733] dark:border-[#202733] border-[#CBD5E1] text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] hover:text-[#55D6FF] hover:border-[#55D6FF]/40 transition-colors"
            title="Copy snippet"
            aria-label="Copy code snippet"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#10B981]" />
                <span className="text-[10px] text-[#10B981]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span className="text-[10px]">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 overflow-x-auto leading-relaxed text-[#F4F7FB] dark:text-[#F4F7FB] text-[#1E293B]">
          <div className="flex">
            {/* Line numbers */}
            <div className="select-none text-[#9BA5B5]/40 dark:text-[#9BA5B5]/40 text-[#94A3B8] pr-4 text-right space-y-1">
              <div>01</div>
              <div>02</div>
              <div>03</div>
              <div>04</div>
              <div>05</div>
              <div>06</div>
              <div>07</div>
              <div>08</div>
              <div>09</div>
              <div>10</div>
            </div>

            {/* Code lines */}
            <div className="space-y-1">
              <div>
                <span className="text-[#7C6CFF] dark:text-[#7C6CFF] text-[#6366F1] font-semibold">class </span>
                <span className="text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] font-bold">PulakGiri </span>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">{'{'}</span>
              </div>
              <div>
                <span className="text-[#7C6CFF] dark:text-[#7C6CFF] text-[#6366F1] font-semibold">  final </span>
                <span className="text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">role </span>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">= </span>
                <span className="text-[#10B981] dark:text-[#10B981] text-[#059669]">'Flutter Developer'</span>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">;</span>
              </div>
              <div>
                <span className="text-[#7C6CFF] dark:text-[#7C6CFF] text-[#6366F1] font-semibold">  final </span>
                <span className="text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">location </span>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">= </span>
                <span className="text-[#10B981] dark:text-[#10B981] text-[#059669]">'West Bengal, India'</span>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">;</span>
              </div>
              <div className="text-transparent">.</div>
              <div>
                <span className="text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7] font-semibold">  buildProducts</span>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">() {'{'}</span>
              </div>
              <div>
                <span className="text-[#7C6CFF] dark:text-[#7C6CFF] text-[#6366F1] font-semibold">    return </span>
                <span className="text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">cleanCode</span>
              </div>
              <div>
                <span className="text-[#F59E0B] dark:text-[#F59E0B] text-[#D97706]">      .withGoodUX</span>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">()</span>
              </div>
              <div>
                <span className="text-[#F59E0B] dark:text-[#F59E0B] text-[#D97706]">      .andRealProblems</span>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">();</span>
              </div>
              <div>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">  {'}'}</span>
              </div>
              <div>
                <span className="text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">{'}'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info pill */}
        <div className="px-4 py-2.5 bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-[11px] font-sans text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>Mobile & Backend Focus</span>
          </div>
          <div className="flex items-center space-x-1 text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
            <Sparkles className="w-3 h-3" />
            <span>Dart · Flutter · NestJS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
