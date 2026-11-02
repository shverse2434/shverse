import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, Cloud, Check } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { language, t } = useThemeLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    'cat-design-systems': <Layers className="w-5 h-5 text-[#83AAB8]" />,
    'cat-frontend-engineering': <Terminal className="w-5 h-5 text-[#83AAB8]" />,
    'cat-motion-creative': <Sparkles className="w-5 h-5 text-[#83AAB8]" />,
    'cat-tooling-deploy': <Cloud className="w-5 h-5 text-[#83AAB8]" />,
  };

  const displayedCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-bold font-accent tracking-widest text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] uppercase mb-3">
            {t.skills.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] leading-tight mb-4 [text-wrap:balance]">
            {t.skills.title}
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold font-accent transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#83AAB8] text-[#101313] shadow-sm'
                : 'bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#CBD5E1] hover:text-[#F5F7F8]'
            }`}
          >
            {language === 'en' ? 'All Disciplines' : 'সকল দক্ষতা'}
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-accent transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#83AAB8] text-[#101313] shadow-sm'
                  : 'bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#CBD5E1] hover:text-[#F5F7F8]'
              }`}
            >
              {cat.title[language]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] hover:bg-[#3B4C53] dark:hover:bg-[#3B4C53] transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] flex items-center justify-center shrink-0">
                  {categoryIcons[cat.id] || <Layers className="w-5 h-5 text-[#83AAB8]" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                    {cat.title[language]}
                  </h3>
                  <p className="text-xs font-sans text-[#84949A] dark:text-[#84949A] text-[#788991]">
                    {cat.description[language]}
                  </p>
                </div>
              </div>

              {/* Skills Progress List */}
              <div className="mt-6 space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex items-center justify-between text-xs font-accent mb-1.5">
                      <span className="font-medium text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#84949A] dark:text-[#84949A] text-[#788991] font-mono text-[11px]">
                          {skill.experience}
                        </span>
                        <span className="text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] font-mono font-semibold tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full h-2 rounded-full bg-[#171D1F] dark:bg-[#171D1F] bg-[#E2E8EB] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#83AAB8] to-[#9AC2CE] transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
