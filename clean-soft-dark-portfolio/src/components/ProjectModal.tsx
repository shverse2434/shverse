import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, CheckCircle2, Calendar, User, Briefcase } from 'lucide-react';
import { ProjectItem } from '../types';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useThemeLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] border border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#E2E8EB] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.projects.closeModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#35464D] dark:bg-[#35464D] bg-[#F1F5F9] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:bg-[#83AAB8] hover:text-[#101313] transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Image Display */}
        <div className="relative rounded-xl overflow-hidden bg-[#101313] aspect-[16/9] mb-6 group border border-[rgba(255,255,255,0.06)]">
          <img
            src={project.gallery[activeImageIndex] || project.thumbnail}
            alt={project.title[language]}
            className="w-full h-full object-cover transition-all duration-300"
            referrerPolicy="no-referrer"
          />

          {project.gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex(
                    (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
                  )
                }
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) => (prev + 1) % project.gallery.length)
                }
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Thumbnails Strip */}
          {project.gallery.length > 1 && (
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 px-4">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#83AAB8] scale-105' : 'border-white/40 opacity-70'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Unboxed Metadata Strip */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-accent text-[#84949A] dark:text-[#84949A] text-[#788991] mb-3">
          <span className="text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] font-semibold">
            {project.categoryLabel[language]}
          </span>
          <span aria-hidden="true">·</span>
          <span>{project.client}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </div>

        {/* Modal Title */}
        <h3
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-4"
        >
          {project.title[language]}
        </h3>

        {/* Overview Summary */}
        <p className="text-sm sm:text-base font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed mb-6">
          {project.summary[language]}
        </p>

        {/* Metadata Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#35464D]/60 dark:bg-[#35464D]/60 bg-[#F8FAFC] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] mb-8">
          <div>
            <p className="text-[11px] font-accent uppercase text-[#84949A] dark:text-[#84949A] text-[#788991]">
              {t.projects.roleLabel}
            </p>
            <p className="text-xs sm:text-sm font-medium text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mt-0.5">
              {project.role[language]}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-accent uppercase text-[#84949A] dark:text-[#84949A] text-[#788991]">
              {t.projects.clientLabel}
            </p>
            <p className="text-xs sm:text-sm font-medium text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mt-0.5">
              {project.client}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-accent uppercase text-[#84949A] dark:text-[#84949A] text-[#788991]">
              {t.projects.yearLabel}
            </p>
            <p className="text-xs sm:text-sm font-medium text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mt-0.5">
              {project.year}
            </p>
          </div>
        </div>

        {/* Deep Dive Breakdown: Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-[#101313]/60 dark:bg-[#101313]/60 bg-[#F1F5F9] border border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB]">
            <h4 className="text-sm font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0BC98]" />
              {t.projects.challengeLabel}
            </h4>
            <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed">
              {project.challenge[language]}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#101313]/60 dark:bg-[#101313]/60 bg-[#F1F5F9] border border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB]">
            <h4 className="text-sm font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#83AAB8]" />
              {t.projects.solutionLabel}
            </h4>
            <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed">
              {project.solution[language]}
            </p>
          </div>
        </div>

        {/* Quantifiable Outcomes */}
        <div className="mb-8">
          <h4 className="text-sm font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-3">
            {t.projects.outcomesLabel}
          </h4>
          <div className="space-y-2">
            {project.outcomes[language].map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
                <CheckCircle2 className="w-4 h-4 text-[#83AAB8] shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies List */}
        <div className="mb-8">
          <p className="text-[11px] font-accent uppercase text-[#84949A] dark:text-[#84949A] text-[#788991] mb-2.5">
            {t.projects.technologiesLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-accent bg-[#35464D] dark:bg-[#35464D] bg-[#E2E8EB] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB]">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#83AAB8] hover:bg-[#9AC2CE] text-[#101313] text-xs font-semibold font-accent transition-colors"
              >
                <span>{t.projects.liveDemo}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[rgba(255,255,255,0.15)] dark:border-[rgba(255,255,255,0.15)] border-[#CBD5E1] bg-transparent hover:bg-[#35464D] dark:hover:bg-[#35464D] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] text-xs font-semibold font-accent transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t.projects.sourceCode}</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-accent text-[#84949A] hover:text-[#F5F7F8] dark:hover:text-[#F5F7F8] hover:text-[#172126] transition-colors cursor-pointer"
          >
            {t.projects.closeModal} (ESC)
          </button>
        </div>
      </div>
    </div>
  );
};
