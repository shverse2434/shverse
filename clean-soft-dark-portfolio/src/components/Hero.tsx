import React from 'react';
import { ArrowDown, Download, Sparkles, FolderGit2, Mail } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { personalInfo, keyMetrics } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { language, t } = useThemeLanguage();

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background ambient lighting accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#83AAB8]/5 dark:bg-[#83AAB8]/5 bg-[#527F8D]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asynchronous 2-column split (Left: Narrative / Right: Large Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic & Action Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status / Availability Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171D1F] dark:bg-[#171D1F] bg-[#EBF0F3] border border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#CBD5E1] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#83AAB8] dark:bg-[#83AAB8] bg-[#527F8D] shrink-0" />
              <span className="text-xs font-semibold font-accent tracking-wide text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
                {personalInfo.status[language]}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] leading-[1.18] mb-6 [text-wrap:balance]">
              {personalInfo.heroHeadline[language]}
            </h1>

            {/* Lead Narrative Body */}
            <p className="text-base sm:text-lg md:text-xl font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroBio[language]}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#83AAB8] hover:bg-[#9AC2CE] text-[#101313] text-sm font-semibold font-accent tracking-wide transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>{t.hero.exploreWorks}</span>
              </a>

              {/* Ghost CTA: Contact */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-[rgba(255,255,255,0.2)] dark:border-[rgba(255,255,255,0.2)] border-[#CBD5E1] bg-transparent hover:bg-[#35464D] dark:hover:bg-[#35464D] hover:bg-[#E2E8EB] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] text-sm font-semibold font-accent tracking-wide transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#83AAB8]" />
                <span>{t.hero.contactMe}</span>
              </a>

              {/* Download CV CTA */}
              <a
                href={personalInfo.resumeUrl}
                download="Shuvo_Ahmed_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] border border-[rgba(255,255,255,0.1)] dark:border-[rgba(255,255,255,0.1)] border-[#CBD5E1] text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] hover:text-[#F5F7F8] dark:hover:text-[#F5F7F8] hover:text-[#172126] text-sm font-semibold font-accent transition-all duration-200"
                title="Download PDF directly"
              >
                <Download className="w-4 h-4 text-[#83AAB8]" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>

            {/* Quick Location & Direct Anchor */}
            <div className="mt-8 flex items-center gap-4 text-xs font-accent text-[#84949A] dark:text-[#84949A] text-[#788991]">
              <span>{personalInfo.location[language]}</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={onOpenCvModal}
                className="underline hover:text-[#83AAB8] cursor-pointer"
              >
                {t.hero.viewCv}
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Tactile Visual Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-none">
              {/* Decorative Subtle Shadow Rim */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#83AAB8]/20 to-transparent rounded-[28px] -rotate-1 scale-[1.02] filter blur-[2px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Container */}
              <div className="relative rounded-[24px] overflow-hidden bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] group">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name[language]}
                  className="w-full h-auto object-cover aspect-square transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Architectural Gradient Scrim */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#101313]/90 via-[#101313]/50 to-transparent dark:from-[#101313]/90">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold font-display text-[#F5F7F8]">
                        {personalInfo.name[language]}
                      </p>
                      <p className="text-xs font-sans text-[#B5C1C5]">
                        {personalInfo.title[language]}
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-[#171D1F]/80 backdrop-blur-md border border-[rgba(255,255,255,0.12)] text-[11px] font-mono text-[#83AAB8]">
                      PROD · READY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative KPI Strip Below the Split */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {keyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col p-4 rounded-xl bg-[#171D1F]/50 dark:bg-[#171D1F]/50 bg-[#FFFFFF] border border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB] transition-all hover:border-[#83AAB8]/40"
              >
                <span className="text-3xl sm:text-4xl font-bold font-display tabular-nums tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-1">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
                  {metric.label[language]}
                </span>
                {metric.sublabel && (
                  <span className="text-[11px] font-sans text-[#84949A] dark:text-[#84949A] text-[#788991] mt-0.5">
                    {metric.sublabel[language]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
