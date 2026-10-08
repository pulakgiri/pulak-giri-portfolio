import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types/portfolio';
import { projectsData } from './data/profile';

export const AppContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Handle URL deep linking for projects (e.g. /#anyv-chat or hash triggers)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const matchedProject = projectsData.find((p) => p.id === hash);
      if (matchedProject) {
        setSelectedProject(matchedProject);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenProjectDetails = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#${project.id}`);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <div className="theme-page min-h-screen selection:bg-[#55D6FF]/20 selection:text-[#55D6FF] transition-colors duration-200">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content following strict Visual Hierarchy:
          1. Developer Identity (Hero & About)
          2. Projects
          3. Technical Skills
          4. Experience
          5. Education
          6. Contact
      */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Projects onOpenDetails={handleOpenProjectDetails} />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Dedicated Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
      />

      {/* Resume Viewer / Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
