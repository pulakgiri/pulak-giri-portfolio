import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { personalProfile } from '../data/profile';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Development Opportunity / Project Collaboration');
    const body = encodeURIComponent(
      `Hello Pulak,\n\n${formData.message || 'I came across your portfolio and would love to discuss a project.'}\n\nBest regards,\n${formData.name || 'Your Name'}`
    );
    window.location.href = `mailto:${personalProfile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#55D6FF] dark:text-[#55D6FF] text-[#0284C7]">
            <span>Get in Touch</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] tracking-tight leading-tight">
            Have an idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55D6FF] to-[#7C6CFF]">
              Let's build it.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] leading-relaxed">
            I'm open to development opportunities, interesting projects and conversations about technology.
          </p>
        </div>

        {/* Content Grid: Contact Details & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <div className="p-5 rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                  <Mail className="w-4 h-4 text-[#55D6FF]" />
                  <span>Email Address</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-mono border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] text-[#9BA5B5] hover:text-[#55D6FF] hover:border-[#55D6FF]/40 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-mono text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] break-all select-all font-medium">
                {personalProfile.email}
              </p>
              <p className="text-[11px] text-[#9BA5B5]/70 dark:text-[#9BA5B5]/70 text-[#94A3B8]">
                Note: Developer mail
              </p>
            </div>

            {/* GitHub Card (Direct Link) */}
            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white flex items-center justify-between group hover:border-[#55D6FF]/50 transition-colors shadow-sm block"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#55D6FF]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] group-hover:text-[#55D6FF] transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] font-mono">
                    github.com/pulakgiri
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#9BA5B5] group-hover:text-[#55D6FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white flex items-center justify-between group hover:border-[#7C6CFF]/50 transition-colors shadow-sm block"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#7C6CFF]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] group-hover:text-[#7C6CFF] transition-colors">
                    LinkedIn Network
                  </h4>
                  <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                    Connect for professional inquiries
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#9BA5B5] group-hover:text-[#7C6CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white flex items-center space-x-3 shadow-sm">
              <div className="p-2 rounded-xl bg-[#121822] dark:bg-[#121822] bg-[#F1F5F9] text-[#10B981]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                  Current Location
                </h4>
                <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                  {personalProfile.location} (IST / UTC+5:30)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white shadow-xl space-y-6">
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                Send a Message
              </h3>
              <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B]">
                Fill out the details below. This will prepare a direct email or dispatch inquiry.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl border border-[#10B981]/30 bg-[#10B981]/10 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A]">
                  Message Prepared!
                </h4>
                <p className="text-xs text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#55D6FF]">{formData.name}</span>. Click below to launch your email client with your message pre-filled:
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleMailto}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#55D6FF] text-[#07090D] hover:bg-[#55D6FF]/90 transition-all shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </button>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold border border-[#202733] text-[#9BA5B5] hover:text-[#F4F7FB] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] placeholder-[#9BA5B5]/50 focus:outline-none focus:border-[#55D6FF] focus:ring-1 focus:ring-[#55D6FF] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] placeholder-[#9BA5B5]/50 focus:outline-none focus:border-[#55D6FF] focus:ring-1 focus:ring-[#55D6FF] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Flutter Mobile App Project / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] placeholder-[#9BA5B5]/50 focus:outline-none focus:border-[#55D6FF] focus:ring-1 focus:ring-[#55D6FF] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569]">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your project, timelines, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#121822] dark:bg-[#121822] bg-[#F8FAFC] text-sm text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] placeholder-[#9BA5B5]/50 focus:outline-none focus:border-[#55D6FF] focus:ring-1 focus:ring-[#55D6FF] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm bg-[#55D6FF] text-[#07090D] hover:bg-[#55D6FF]/90 transition-all shadow-md shadow-[#55D6FF]/10 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
