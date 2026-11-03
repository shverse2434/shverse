import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { workExperience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { language, t } = useThemeLanguage();

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-[#171D1F]/40 dark:bg-[#171D1F]/40 bg-[#F1F5F9]/60">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs font-bold font-accent tracking-widest text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] uppercase mb-3">
            {t.experience.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] leading-tight mb-4 [text-wrap:balance]">
            {t.experience.title}
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 lg:pl-10 ml-2 sm:ml-4 border-l border-dashed border-[rgba(255,255,255,0.15)] dark:border-[rgba(255,255,255,0.15)] border-[#CBD5E1] space-y-10 sm:space-y-12">
          {workExperience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node disc framed with accent rim */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] lg:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border-2 border-[#83AAB8] shadow-md group-hover:scale-125 transition-transform duration-200"
                aria-hidden="true"
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] hover:bg-[#3B4C53] dark:hover:bg-[#3B4C53] hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.45)] transition-all duration-200">
                {/* Header Row: Role, Company & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                      {item.role[language]}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-accent text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] font-semibold mt-1">
                      <span className="text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">{item.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] font-normal">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] text-xs font-mono text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-[#83AAB8]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {item.description[language].map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed">
                      <span className="text-[#83AAB8] mt-1 shrink-0 font-mono text-xs">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB]">
                  <p className="text-[11px] font-accent uppercase tracking-wider text-[#84949A] dark:text-[#84949A] text-[#788991] mb-2">
                    {t.experience.technologiesLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium font-accent bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] border border-[rgba(255,255,255,0.05)] dark:border-[rgba(255,255,255,0.05)] border-[#E2E8EB]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
