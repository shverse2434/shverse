import React, { useEffect } from 'react';
import { X, BookOpen, FileCode, Folder, Cloud, Globe, ExternalLink } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useThemeLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] border border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#E2E8EB] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#35464D] text-[#83AAB8]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-guide-title" className="text-lg sm:text-xl font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                {t.guide.title}
              </h2>
              <p className="text-xs font-sans text-[#84949A] dark:text-[#84949A] text-[#788991]">
                {t.guide.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close guide"
            className="p-2 rounded-lg bg-[#35464D] dark:bg-[#35464D] bg-[#F1F5F9] text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:bg-[#83AAB8] hover:text-[#101313] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Key Places to Customize */}
        <div className="space-y-4 mb-6">
          {t.guide.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#101313]/60 dark:bg-[#101313]/60 bg-[#F8FAFC] border border-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.06)] border-[#E2E8EB]"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] mb-1">
                <FileCode className="w-3.5 h-3.5" />
                <span>{item.file}</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cloudflare Pages Quick Guide */}
        <div className="p-5 rounded-xl bg-[#35464D]/50 dark:bg-[#35464D]/50 bg-[#F1F5F9] border border-[#83AAB8]/30 mb-6">
          <h3 className="text-sm font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-2 flex items-center gap-2">
            <Cloud className="w-4 h-4 text-[#83AAB8]" />
            <span>Cloudflare Pages & Custom Domain Setup</span>
          </h3>
          <ol className="text-xs font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] space-y-2 list-decimal list-inside leading-relaxed">
            <li>
              <strong>Create a Git repository:</strong> Push this project folder to your GitHub account (`git init`, `git add .`, `git commit -m "Initial commit"`, `git push`).
            </li>
            <li>
              <strong>Log in to Cloudflare Dashboard:</strong> Navigate to <em>Workers & Pages</em> → <em>Create Application</em> → <em>Pages</em> → <em>Connect to Git</em>.
            </li>
            <li>
              <strong>Configure Build Settings:</strong> Select framework preset <strong>Vite</strong>. Build command: <code className="bg-[#101313] px-1 py-0.5 rounded text-[#83AAB8]">npm run build</code>. Build output directory: <code className="bg-[#101313] px-1 py-0.5 rounded text-[#83AAB8]">dist</code>.
            </li>
            <li>
              <strong>Custom Domain:</strong> Once built, click on your project in Cloudflare Pages → <em>Custom Domains</em> → <em>Set up a custom domain</em> (e.g. yourname.com). Cloudflare will automatically provision free SSL certificates!
            </li>
          </ol>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <a
            href="/portfolio-source.zip"
            download="portfolio-source.zip"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#83AAB8]/40 hover:border-[#83AAB8] text-[#83AAB8] text-xs font-semibold font-accent transition-colors"
          >
            <span>Download Project ZIP Archive</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#83AAB8] text-[#101313] text-xs font-semibold font-accent hover:bg-[#9AC2CE] transition-all cursor-pointer"
          >
            {t.guide.close}
          </button>
        </div>
      </div>
    </div>
  );
};
