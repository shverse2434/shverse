import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { personalInfo, workExperience, skillCategories, educationData, achievementsData } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useThemeLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cv-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] border border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#E2E8EB] shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Action Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] mb-8 gap-4">
          <div>
            <h2 id="modal-cv-title" className="text-xl sm:text-2xl font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
              {personalInfo.name[language]}
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] font-medium">
              {personalInfo.title[language]}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#35464D] dark:bg-[#35464D] bg-[#F1F5F9] text-xs font-semibold font-accent text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:bg-[#83AAB8] hover:text-[#101313] transition-colors cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.resume.printButton}</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Shuvo_Ahmed_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#83AAB8] text-[#101313] text-xs font-semibold font-accent hover:bg-[#9AC2CE] transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.resume.downloadButton}</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label={t.resume.closeButton}
              className="p-2 rounded-lg bg-[#35464D] dark:bg-[#35464D] bg-[#F1F5F9] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:bg-rose-500/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive CV Content Printable Area */}
        <div className="space-y-8 text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
          {/* Contact Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4 rounded-xl bg-[#101313]/60 dark:bg-[#101313]/60 bg-[#F8FAFC] border border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB] text-xs">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#83AAB8]" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#83AAB8]" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#83AAB8]" />
              <span>{personalInfo.location[language]}</span>
            </div>
          </div>

          {/* Professional Narrative */}
          <div>
            <h3 className="text-sm font-bold font-accent tracking-wider uppercase text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] mb-2 pb-1 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB]">
              Executive Summary
            </h3>
            <p className="text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-line text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
              {personalInfo.aboutStory[language]}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-sm font-bold font-accent tracking-wider uppercase text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] mb-4 pb-1 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB]">
              {t.resume.experienceTitle}
            </h3>
            <div className="space-y-6">
              {workExperience.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                      {exp.role[language]} · <span className="text-[#83AAB8]">{exp.company}</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#84949A]">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-[#84949A] mb-2">{exp.location}</p>
                  <ul className="space-y-1 pl-4 list-disc marker:text-[#83AAB8]">
                    {exp.description[language].map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-bold font-accent tracking-wider uppercase text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] mb-3 pb-1 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB]">
              {t.resume.educationTitle}
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} className="text-xs sm:text-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                    {edu.degree[language]}
                  </span>
                  <span className="font-mono text-[11px] text-[#84949A]">{edu.period}</span>
                </div>
                <p className="text-[#83AAB8] text-xs mb-1">{edu.institution[language]}</p>
                <p className="text-xs leading-relaxed text-[#84949A]">{edu.details[language]}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h3 className="text-sm font-bold font-accent tracking-wider uppercase text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] mb-3 pb-1 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB]">
              {t.resume.skillsTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg bg-[#101313]/40 dark:bg-[#101313]/40 bg-[#F8FAFC]">
                  <p className="font-semibold text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-1">
                    {cat.title[language]}
                  </p>
                  <p className="text-[11px] text-[#84949A] leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Replacement Notice Banner */}
        <div className="mt-8 p-4 rounded-xl bg-[#35464D]/50 dark:bg-[#35464D]/50 bg-[#F1F5F9] border border-[#83AAB8]/30 text-xs">
          <p className="font-bold text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] mb-1">
            {t.resume.replaceNoticeTitle}
          </p>
          <p className="text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed">
            {t.resume.replaceNoticeDesc}
          </p>
        </div>
      </div>
    </div>
  );
};
