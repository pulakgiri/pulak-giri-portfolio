import React, { useState } from 'react';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalProfile } from '../data/profile';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      window.requestAnimationFrame(() => {
        const top = target.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      });
    }
  };

  return (
    <header className="workspace-nav-wrap sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="workspace-nav mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="workspace-brand" aria-label="Pulak Giri, home">
          <span className="brand-mark">p<span>.</span></span>
          <span>{personalProfile.name}</span>
        </a>

        <nav className="workspace-links hidden lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button key={link.name} type="button" onClick={() => handleNavClick(link.href)}>
              {link.name}
            </button>
          ))}
        </nav>

        <div className="workspace-actions">
          <button className="nav-resume hidden sm:inline-flex" onClick={onOpenResume} type="button">
            <FileText aria-hidden="true" />
            <span>Resume</span>
            <ArrowUpRight aria-hidden="true" />
          </button>
          <ThemeToggle className="theme-toggle-glass" />
          <button
            className="mobile-menu-toggle lg:hidden"
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="workspace-mobile-menu mx-auto mt-2 max-w-6xl lg:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <button key={link.name} type="button" onClick={() => handleNavClick(link.href)}>
              {link.name}
            </button>
          ))}
          <button className="mobile-resume" type="button" onClick={() => {
            setMobileMenuOpen(false);
            onOpenResume();
          }}>
            <FileText aria-hidden="true" />
            View resume
          </button>
        </nav>
      )}
    </header>
  );
};
