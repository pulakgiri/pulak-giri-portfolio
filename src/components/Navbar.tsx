import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalProfile } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090D]/90 dark:bg-[#07090D]/90 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 group focus:outline-none"
            aria-label="Pulak Giri Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0E1219] dark:bg-[#0E1219] bg-[#FFFFFF] border border-[#202733] dark:border-[#202733] border-[#E2E8F0] flex items-center justify-center font-heading font-bold text-sm text-[#55D6FF] group-hover:border-[#55D6FF]/50 transition-colors">
              P
            </div>
            <span className="font-heading font-bold tracking-tight text-lg text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] group-hover:text-[#55D6FF] transition-colors">
              {personalProfile.navLogo}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#55D6FF] bg-[#55D6FF]/10'
                      : 'text-[#9BA5B5] dark:text-[#9BA5B5] text-[#64748B] hover:text-[#F4F7FB] dark:hover:text-[#F4F7FB] hover:text-[#0F172A]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right actions: Resume & Theme */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#202733] dark:border-[#202733] border-[#CBD5E1] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] hover:border-[#55D6FF]/60 hover:text-[#55D6FF] transition-all shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-[#55D6FF]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#9BA5B5] group-hover:text-[#55D6FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Actions: Theme + Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg border border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#0E1219] dark:bg-[#0E1219] bg-white text-[#F4F7FB] dark:text-[#F4F7FB] text-[#0F172A] hover:border-[#55D6FF]/50 hover:text-[#55D6FF] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#202733] dark:border-[#202733] border-[#E2E8F0] bg-[#07090D] dark:bg-[#07090D] bg-[#F8FAFC] px-4 pt-3 pb-6 space-y-2 shadow-2xl transition-all">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#9BA5B5] dark:text-[#9BA5B5] text-[#475569] hover:bg-[#0E1219] dark:hover:bg-[#0E1219] hover:bg-[#F1F5F9] hover:text-[#55D6FF] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#202733] dark:border-[#202733] border-[#E2E8F0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg font-medium text-sm bg-[#55D6FF]/10 text-[#55D6FF] border border-[#55D6FF]/30 hover:bg-[#55D6FF]/20 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
