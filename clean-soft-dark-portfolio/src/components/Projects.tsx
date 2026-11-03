import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Eye } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { language, t } = useThemeLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterKeys = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'brand', label: t.projects.filters.brand },
    { id: 'uiux', label: t.projects.filters.uiux },
    { id: 'web', label: t.projects.filters.web },
    { id: 'motion', label: t.projects.filters.motion },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-[#171D1F]/40 dark:bg-[#171D1F]/40 bg-[#F1F5F9]/60">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-bold font-accent tracking-widest text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] uppercase mb-3">
            {t.projects.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] leading-tight mb-4 [text-wrap:balance]">
            {t.projects.title}
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Working Category Filters (Capsule Buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterKeys.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-accent transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[#83AAB8] text-[#101313] shadow-md'
                  : 'bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#CBD5E1] hover:text-[#F5F7F8]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl overflow-hidden bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] hover:bg-[#3B4C53] dark:hover:bg-[#3B4C53] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container with Click Trigger */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-[#101313] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-accent text-xs font-semibold backdrop-blur-[2px]">
                  <Eye className="w-4 h-4 text-[#83AAB8]" />
                  <span>{t.projects.viewDetails}</span>
                </div>

                {/* Subtle category tag in corner */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#101313]/80 backdrop-blur-md border border-[rgba(255,255,255,0.12)] text-[11px] font-accent text-[#83AAB8]">
                  {project.categoryLabel[language]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs font-accent text-[#84949A] dark:text-[#84949A] text-[#788991] mb-2.5">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-3 group-hover:text-[#83AAB8] transition-colors cursor-pointer"
                  >
                    {project.title[language]}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed mb-6 line-clamp-3">
                    {project.summary[language]}
                  </p>

                  {/* Tech stack non-interactive chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-accent bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] border border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-mono text-[#84949A]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB]">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-accent text-[#83AAB8] hover:text-[#9AC2CE] transition-colors cursor-pointer"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={t.projects.liveDemo}
                        className="text-[#B5C1C5] hover:text-[#F5F7F8] dark:hover:text-[#F5F7F8] hover:text-[#172126] transition-colors p-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={t.projects.sourceCode}
                        className="text-[#B5C1C5] hover:text-[#F5F7F8] dark:hover:text-[#F5F7F8] hover:text-[#172126] transition-colors p-1"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
