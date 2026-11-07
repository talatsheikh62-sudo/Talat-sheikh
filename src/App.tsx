import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Section 2: Hero */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Section 3, 4, 10: About Me, Personal Information, Hobbies */}
        <AboutSection />

        {/* Section 6 & 7: Professional Skills & Languages */}
        <SkillsSection />

        {/* Section 8 & 9: Education Timeline & Work Experience */}
        <ExperienceEducation />

        {/* Section 11: Portfolio / My Work */}
        <PortfolioSection />

        {/* Section 5: Contact Information & Interactive Form */}
        <ContactSection />
      </main>

      {/* Section 12: Footer */}
      <Footer />

      {/* Download CV / Full Printable CV Modal */}
      <CvModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
      />
    </div>
  );
}
