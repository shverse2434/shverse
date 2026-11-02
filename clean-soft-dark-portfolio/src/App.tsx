/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { CustomizationGuideModal } from './components/CustomizationGuideModal';
import { BookOpen } from 'lucide-react';

function PortfolioMain() {
  const { language, t } = useThemeLanguage();
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#101313] dark:bg-[#101313] bg-[#F5F7F8] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] selection:bg-[#83AAB8]/30 selection:text-[#F5F7F8] transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar
        onOpenCvModal={() => setCvModalOpen(true)}
        onOpenGuideModal={() => setGuideModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <ResumeSection onOpenCvModal={() => setCvModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Executive CV / Resume Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Beginner Customization & Cloudflare Pages Guide Modal */}
      <CustomizationGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />

      {/* Floating Helper Pill: Beginner Customization Guide */}
      <aside aria-label="Customization helper" className="fixed bottom-5 right-5 z-30">
        <button
          type="button"
          onClick={() => setGuideModalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#171D1F]/90 dark:bg-[#171D1F]/90 bg-[#FFFFFF]/90 backdrop-blur-md border border-[rgba(255,255,255,0.15)] dark:border-[rgba(255,255,255,0.15)] border-[#CBD5E1] text-xs font-semibold font-accent text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] hover:border-[#83AAB8] shadow-lg transition-all hover:scale-105 cursor-pointer"
          title="Click to view instructions for replacing placeholders and deploying"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.guide.button}</span>
        </button>
      </aside>
    </div>
  );
}

export default function App() {
  return (
    <ThemeLanguageProvider>
      <PortfolioMain />
    </ThemeLanguageProvider>
  );
}
