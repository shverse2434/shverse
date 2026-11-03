import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
  onOpenGuideModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, onOpenGuideModal }) => {
  const { theme, language, toggleTheme, toggleLanguage, t } = useThemeLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#achievements', label: t.nav.achievements },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101313]/90 dark:bg-[#101313]/90 bg-[#F5F7F8]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] shadow-lg'
            : 'bg-transparent py-2'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav links) - Zone 3 (Primary action / controls) */}
          <div className="flex items-center justify-between h-16 md:h-20 gap-8">
            {/* Zone 1: Wordmark */}
            <a
              href="#"
              className="text-lg md:text-xl font-bold tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] font-display whitespace-nowrap shrink-0 hover:text-[#83AAB8] dark:hover:text-[#83AAB8] transition-colors"
            >
              {language === 'bn' ? personalInfo.name.bn : personalInfo.brandMark}
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#F5F7F8] dark:hover:text-[#F5F7F8] hover:text-[#172126] transition-colors whitespace-nowrap shrink-0 relative py-1 text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Interactive Controls & Action */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                title={language === 'en' ? 'বাংলা ভাষায় দেখুন' : 'Switch to English'}
                aria-label={t.lang.switch}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-accent rounded-full border border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#CBD5E1] bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:border-[#83AAB8] transition-all cursor-pointer whitespace-nowrap"
              >
                <Globe className="w-3.5 h-3.5 text-[#83AAB8] shrink-0" />
                <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                title={theme === 'dark' ? t.theme.light : t.theme.dark}
                aria-label={t.theme.toggle}
                className="p-2 rounded-full border border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#CBD5E1] bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:border-[#83AAB8] transition-all cursor-pointer"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#F0BC98] transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-[#527F8D] transition-transform hover:-rotate-12" />
                )}
              </button>

              {/* Resume CTA */}
              <button
                type="button"
                onClick={onOpenCvModal}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold font-accent rounded-full bg-[#35464D] dark:bg-[#35464D] bg-[#E2E8EB] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:bg-[#3B4C53] dark:hover:bg-[#3B4C53] hover:text-[#83AAB8] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-transparent transition-all cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-[#83AAB8]" />
                <span>{t.nav.resume}</span>
              </button>

              {/* Primary Contact CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-4 sm:px-5 py-2 text-xs font-semibold font-accent rounded-full bg-[#83AAB8] hover:bg-[#9AC2CE] text-[#101313] transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>{t.nav.getInTouch}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                className="lg:hidden p-2 rounded-lg text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] border border-[rgba(255,255,255,0.1)] dark:border-[rgba(255,255,255,0.1)] border-[#CBD5E1]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#171D1F]/98 dark:bg-[#171D1F]/98 bg-[#FFFFFF]/98 backdrop-blur-xl border-b border-[rgba(255,255,255,0.1)] dark:border-[rgba(255,255,255,0.1)] border-[#E2E8EB] px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium font-accent text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:text-[#83AAB8] py-2 border-b border-[rgba(255,255,255,0.05)] dark:border-[rgba(255,255,255,0.05)] border-slate-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#84949A] font-mono">→</span>
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#35464D] dark:bg-[#35464D] bg-slate-100 text-sm font-semibold text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]"
                >
                  <FileText className="w-4 h-4 text-[#83AAB8]" />
                  <span>{t.resume.viewButton}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGuideModal();
                  }}
                  className="w-full text-center text-xs text-[#84949A] hover:text-[#83AAB8] py-1"
                >
                  {t.guide.button}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
