import React from 'react';
import { Layers, Sparkles, Terminal, Type, CheckCircle2 } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const { language, t } = useThemeLanguage();

  const pillarIcons = [
    <Layers key="0" className="w-5 h-5 text-[#83AAB8]" />,
    <Sparkles key="1" className="w-5 h-5 text-[#83AAB8]" />,
    <Terminal key="2" className="w-5 h-5 text-[#83AAB8]" />,
    <Type key="3" className="w-5 h-5 text-[#83AAB8]" />,
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs font-bold font-accent tracking-widest text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] uppercase mb-3">
            {t.about.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] leading-tight mb-4 [text-wrap:balance]">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
            {t.about.subtitle}
          </p>
        </div>

        {/* 2-Column Editorial Story + Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-28">
          {/* Left Column: Long-Form Bio Story */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-semibold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] pb-3">
              {t.about.storyTitle}
            </h3>
            <div className="prose prose-invert max-w-none text-sm sm:text-base font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed whitespace-pre-line">
              {personalInfo.aboutStory[language]}
            </div>

            <div className="p-5 rounded-2xl bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#83AAB8] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed">
                  {language === 'en'
                    ? 'Commitment to zero runtime dependencies on server infrastructure: 100% static deployable on Cloudflare Pages or any modern edge CDN.'
                    : 'সার্ভার ইনফ্রাস্ট্রাকচারের উপর জিরো নির্ভরতা: ক্লাউডফ্লেয়ার পেজেস বা যেকোনো এজ সিডিএনে ১০০% স্ট্যাটিক ডিপ্লয়মেন্ট উপযোগী।'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Disciplines */}
          <div className="lg:col-span-6">
            <h3 className="text-lg font-semibold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] pb-3 mb-6">
              {t.about.pillarsTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] hover:bg-[#3B4C53] dark:hover:bg-[#3B4C53] hover:shadow-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] flex items-center justify-center mb-4 group-hover:-translate-y-0.5 transition-transform">
                    {pillarIcons[index % pillarIcons.length]}
                  </div>
                  <h4 className="text-base font-semibold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-2">
                    {pillar.title[language]}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed">
                    {pillar.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Step Engineering & Design Process */}
        <div className="pt-12 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB]">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-8">
            {t.about.processTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.processSteps.map((step) => (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl bg-[#171D1F]/60 dark:bg-[#171D1F]/60 bg-[#FFFFFF] border border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB] hover:border-[#83AAB8]/40 transition-colors"
              >
                <span className="text-2xl font-bold font-mono text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] block mb-3">
                  {step.num}
                </span>
                <h4 className="text-base font-semibold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-2">
                  {step.name}
                </h4>
                <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
