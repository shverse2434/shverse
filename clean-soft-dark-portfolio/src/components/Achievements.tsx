import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const { language, t } = useThemeLanguage();

  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-bold font-accent tracking-widest text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] uppercase mb-3">
            {t.achievements.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] leading-tight mb-4 [text-wrap:balance]">
            {t.achievements.title}
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
            {t.achievements.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] hover:bg-[#3B4C53] dark:hover:bg-[#3B4C53] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#CBD5E1] flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#83AAB8]" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
                    {item.year}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-accent text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] font-semibold mb-1">
                  <span>{item.category[language]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#84949A] font-normal">{item.issuer}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-2">
                  {item.title[language]}
                </h3>

                <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed mb-6">
                  {item.description[language]}
                </p>
              </div>

              {item.credentialUrl && (
                <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#84949A] dark:text-[#84949A] text-[#788991]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#83AAB8]" />
                    <span>Verified Credential</span>
                  </span>
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold font-accent text-[#83AAB8] hover:text-[#9AC2CE]"
                  >
                    <span>{t.achievements.verifyBadge}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
