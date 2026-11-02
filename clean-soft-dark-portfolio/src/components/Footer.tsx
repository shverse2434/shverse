import React from 'react';
import { ArrowUp, Cloud, Heart } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { language, t } = useThemeLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] bg-[#101313] dark:bg-[#101313] bg-[#F8FAFC]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[rgba(255,255,255,0.05)] dark:border-[rgba(255,255,255,0.05)] border-[#E2E8EB]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-lg font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:text-[#83AAB8] transition-colors"
            >
              {language === 'bn' ? personalInfo.name.bn : personalInfo.brandMark}
            </a>
            <span className="text-xs text-[#84949A] font-mono">/ PORTFOLIO</span>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
            <a href="#about" className="hover:text-[#F5F7F8] transition-colors">
              {t.nav.about}
            </a>
            <a href="#experience" className="hover:text-[#F5F7F8] transition-colors">
              {t.nav.experience}
            </a>
            <a href="#skills" className="hover:text-[#F5F7F8] transition-colors">
              {t.nav.skills}
            </a>
            <a href="#projects" className="hover:text-[#F5F7F8] transition-colors">
              {t.nav.projects}
            </a>
            <a href="#achievements" className="hover:text-[#F5F7F8] transition-colors">
              {t.nav.achievements}
            </a>
            <a href="#contact" className="hover:text-[#F5F7F8] transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          {/* Return to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#CBD5E1] text-xs font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] hover:text-[#83AAB8] transition-all cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata & Cloudflare Pages Static Indicator */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#84949A] dark:text-[#84949A] text-[#788991]">
          <p>
            © {currentYear} {language === 'bn' ? personalInfo.name.bn : personalInfo.name.en}. {t.footer.rights}
          </p>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D]">
            <Cloud className="w-3.5 h-3.5" />
            <span>{t.footer.builtFor}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
