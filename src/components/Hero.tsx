import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  FolderKanban,
  GraduationCap,
  Mail,
  MapPin,
  UserRound,
} from 'lucide-react';
import { personalProfile } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

const destinations = [
  { label: 'About me', id: 'about', icon: UserRound, tone: 'sky' },
  { label: 'Projects', id: 'projects', icon: FolderKanban, tone: 'violet' },
  { label: 'Skills', id: 'skills', icon: Code2, tone: 'mint' },
  { label: 'Experience', id: 'experience', icon: BriefcaseBusiness, tone: 'amber' },
  { label: 'Education', id: 'education', icon: GraduationCap, tone: 'rose' },
  { label: 'Contact', id: 'contact', icon: Mail, tone: 'blue' },
];

const scrollTo = (id: string) => {
  const target = document.getElementById(id);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => (
  <section className="launchpad relative overflow-hidden">
    <div className="launchpad-grain" aria-hidden="true" />
    <div className="launchpad-layout relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div className="launchpad-intro">
        <p className="launchpad-eyebrow">
          <span className="availability-dot" />
          {personalProfile.tagline}
        </p>
        <h1 className="launchpad-title">
          Pulak <span>Giri</span>
        </h1>
        <p className="launchpad-description">
          {personalProfile.heroSubtext}
        </p>
        <p className="launchpad-location">
          <MapPin aria-hidden="true" />
          {personalProfile.location}
        </p>
      </div>

      <div className="launchpad-workspace">
        <div className="workspace-heading">
          <div>
            <p className="workspace-kicker">YOUR SPACE</p>
            <h2>Explore my work</h2>
          </div>
          <span className="workspace-hint">A little of what I do, all in one place</span>
        </div>

        <nav className="launchpad-grid" aria-label="Portfolio sections">
          {destinations.map(({ label, id, icon: Icon, tone }, index) => (
            <button
              className={`launchpad-item tone-${tone}`}
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              style={{ animationDelay: `${120 + index * 70}ms` }}
            >
              <span className="app-icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="app-label">{label}</span>
            </button>
          ))}
          <button
            className="launchpad-item tone-resume"
            type="button"
            onClick={onOpenResume}
            style={{ animationDelay: '540ms' }}
          >
            <span className="app-icon">
              <FileText aria-hidden="true" />
              <span className="resume-corner">PDF</span>
            </span>
            <span className="app-label">Resume</span>
          </button>
        </nav>

        <div className="workspace-footer">
          <span><span className="workspace-indicator" /> Made with care, from idea to interface</span>
          <button type="button" onClick={() => scrollTo('projects')}>
            Start with projects <ArrowDown aria-hidden="true" />
          </button>
        </div>
      </div>

      <a className="launchpad-scroll" href="#about" aria-label="Scroll to About me">
        <span>SCROLL TO EXPLORE</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
  </section>
);
