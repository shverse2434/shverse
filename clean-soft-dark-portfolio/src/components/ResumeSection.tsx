import React from 'react';
import { Download, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenCvModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenCvModal }) => {
  const { language, t } = useThemeLanguage();

  return (
    <section id="resume" className="py-20 md:py-32 relative bg-[#171D1F]/40 dark:bg-[#171D1F]/40 bg-[#F1F5F9]/60">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-bold font-accent tracking-widest text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] uppercase mb-3">
            {t.resume.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] leading-tight mb-4 [text-wrap:balance]">
            {t.resume.title}
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
            {t.resume.subtitle}
          </p>
        </div>

        {/* Hero Card Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] text-xs font-mono text-[#83AAB8]">
                <span>PDF · A4 PRINT-READY · REVISED 2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                {personalInfo.name[language]} — {personalInfo.title[language]}
              </h3>

              <p className="text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed max-w-xl">
                {language === 'en'
                  ? 'Includes extensive track record, verified project metrics, comprehensive tech stack competencies, and international design awards.'
                  : 'এতে রয়েছে পেশাগত অভিজ্ঞতা, সফল প্রজেক্টের ফলাফল, প্রযুক্তিগত দক্ষতা এবং আন্তর্জাতিক স্বীকৃতি ও অর্জনের বিস্তারিত বিবরণ।'}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
                  <CheckCircle2 className="w-4 h-4 text-[#83AAB8]" />
                  <span>ATS-Friendly Layout & Typography</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
                  <CheckCircle2 className="w-4 h-4 text-[#83AAB8]" />
                  <span>Static File Path: `/resume/resume.pdf`</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center">
              <a
                href={personalInfo.resumeUrl}
                download="Shuvo_Ahmed_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#83AAB8] hover:bg-[#9AC2CE] text-[#101313] font-semibold font-accent text-sm transition-all shadow-md hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t.resume.downloadButton}</span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[rgba(255,255,255,0.2)] dark:border-[rgba(255,255,255,0.2)] border-[#CBD5E1] bg-transparent hover:bg-[#3B4C53] dark:hover:bg-[#3B4C53] hover:bg-[#F1F5F9] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] font-semibold font-accent text-sm transition-all text-center cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#83AAB8]" />
                <span>{t.resume.viewButton}</span>
              </button>
            </div>
          </div>

          {/* Replacement instructions callout */}
          <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB] flex items-start gap-3 text-xs text-[#84949A] dark:text-[#84949A] text-[#788991]">
            <span className="font-mono text-[#83AAB8] shrink-0 font-bold">INFO:</span>
            <p className="leading-relaxed">
              {t.resume.replaceNoticeDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
