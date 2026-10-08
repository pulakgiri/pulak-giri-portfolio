export interface ProjectLinks {
  github?: string;
  demo?: string;
  playStore?: string;
  webApp?: string;
  figma?: string;
  details?: string;
}

export interface ArchitectureStep {
  label: string;
  sublabel?: string;
  tech?: string;
}

export interface ProjectArchitecture {
  summary: string;
  steps: ArchitectureStep[];
  technicalFlowText: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  links: ProjectLinks;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: ProjectArchitecture;
  developmentChallenges: string[];
  mockupTheme: {
    accentColor: string;
    icon: string;
  };
}

export interface SkillItem {
  name: string;
  iconName: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  isPlaceholder?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  boardOrAffiliation?: string;
  academicResults: { label: string; score: string }[];
  scoreSummary?: string;
}

export interface PersonalProfile {
  name: string;
  navLogo: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  aboutHeadline: string;
  aboutParagraphs: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  footerText: string;
}
