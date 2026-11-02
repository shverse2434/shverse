import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { language, t } = useThemeLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = t.contact.validation.nameRequired;
    }
    if (!formData.email.trim()) {
      errs.email = t.contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.contact.validation.emailInvalid;
    }
    if (!formData.subject.trim()) {
      errs.subject = t.contact.validation.subjectRequired;
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = t.contact.validation.messageRequired;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate preparation time for form payload
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#83AAB8', '#9AC2CE', '#F0BC98', '#FFFFFF'],
        });
      } catch {
        // confetti optional
      }
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const mailtoHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Shuvo,\n\nMy name is ${formData.name || '[Name]'}.\n\n${formData.message || ''}\n\nBest regards,\n${formData.name || ''}\n${formData.email || ''}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs font-bold font-accent tracking-widest text-[#83AAB8] dark:text-[#83AAB8] text-[#527F8D] uppercase mb-3">
            {t.contact.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] leading-tight mb-4 [text-wrap:balance]">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B]">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Direct Channels vs Validated Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-lg font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-6">
                {t.contact.directHeader}
              </h3>

              <div className="space-y-4">
                {/* Email card */}
                <div className="p-4 rounded-xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] flex items-center justify-center text-[#83AAB8]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-accent uppercase text-[#84949A] dark:text-[#84949A] text-[#788991]">
                        Email
                      </p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] hover:text-[#83AAB8] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] text-[#B5C1C5] hover:text-[#83AAB8] transition-colors cursor-pointer text-xs flex items-center gap-1"
                    title={t.contact.copyEmail}
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] flex items-center justify-center text-[#83AAB8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-accent uppercase text-[#84949A] dark:text-[#84949A] text-[#788991]">
                      Phone / WhatsApp
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#171D1F] dark:bg-[#171D1F] bg-[#F1F5F9] flex items-center justify-center text-[#83AAB8]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-accent uppercase text-[#84949A] dark:text-[#84949A] text-[#788991]">
                      Location & Working Hours
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126]">
                      {personalInfo.location[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Network */}
            <div>
              <p className="text-xs font-accent uppercase tracking-wider text-[#84949A] dark:text-[#84949A] text-[#788991] mb-3">
                Social Profiles & Repositories
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#171D1F] dark:bg-[#171D1F] bg-[#FFFFFF] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] border-[#E2E8EB] hover:border-[#83AAB8] transition-colors flex items-center justify-between text-xs font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] hover:text-[#F5F7F8] dark:hover:text-[#F5F7F8] hover:text-[#172126]"
                  >
                    <span>{s.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#84949A]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#35464D] dark:bg-[#35464D] bg-[#FFFFFF] border border-[rgba(255,255,255,0.09)] dark:border-[rgba(255,255,255,0.09)] border-[#E2E8EB] shadow-xl">
              <h3 className="text-xl font-bold font-display text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] mb-2">
                {t.contact.formHeader}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] mb-6">
                {language === 'en'
                  ? 'Fill out the form below. Client-side verified and ready to send directly or trigger your email client.'
                  : 'নিচের ফর্মটি পূরণ করুন। সরাসরি পাঠানোর পাশাপাশি আপনার পছন্দের ইমেইল অ্যাপের মাধ্যমেও বার্তা পাঠাতে পারবেন।'}
              </p>

              {isSubmitted ? (
                <div className="space-y-6 py-4 animate-in fade-in duration-300">
                  <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm mb-1">{t.contact.labels.sent}</h4>
                        <p className="text-xs text-emerald-200/90 leading-relaxed">
                          {t.contact.successAlert}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#83AAB8] text-[#101313] text-xs font-semibold font-accent hover:bg-[#9AC2CE] transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{t.contact.sendMailto}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.15)] dark:border-[rgba(255,255,255,0.15)] border-[#CBD5E1] text-xs font-semibold font-accent text-[#B5C1C5] hover:text-[#F5F7F8]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] mb-1.5 font-medium">
                        {t.contact.labels.name} *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder={t.contact.placeholders.name}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#171D1F] dark:bg-[#171D1F] bg-[#F8FAFC] border text-xs sm:text-sm text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] placeholder-[#84949A] focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-500 ring-2 ring-rose-500/20'
                            : 'border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#CBD5E1] focus:border-[#83AAB8] focus:ring-2 focus:ring-[#83AAB8]/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] mb-1.5 font-medium">
                        {t.contact.labels.email} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder={t.contact.placeholders.email}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#171D1F] dark:bg-[#171D1F] bg-[#F8FAFC] border text-xs sm:text-sm text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] placeholder-[#84949A] focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500 ring-2 ring-rose-500/20'
                            : 'border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#CBD5E1] focus:border-[#83AAB8] focus:ring-2 focus:ring-[#83AAB8]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] mb-1.5 font-medium">
                      {t.contact.labels.subject} *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder={t.contact.placeholders.subject}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#171D1F] dark:bg-[#171D1F] bg-[#F8FAFC] border text-xs sm:text-sm text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] placeholder-[#84949A] focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-rose-500 ring-2 ring-rose-500/20'
                          : 'border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#CBD5E1] focus:border-[#83AAB8] focus:ring-2 focus:ring-[#83AAB8]/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-accent text-[#B5C1C5] dark:text-[#B5C1C5] text-[#52636B] mb-1.5 font-medium">
                      {t.contact.labels.message} *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder={t.contact.placeholders.message}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#171D1F] dark:bg-[#171D1F] bg-[#F8FAFC] border text-xs sm:text-sm text-[#F5F7F8] dark:text-[#F5F7F8] text-[#172126] placeholder-[#84949A] focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500 ring-2 ring-rose-500/20'
                          : 'border-[rgba(255,255,255,0.12)] dark:border-[rgba(255,255,255,0.12)] border-[#CBD5E1] focus:border-[#83AAB8] focus:ring-2 focus:ring-[#83AAB8]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#83AAB8] hover:bg-[#9AC2CE] text-[#101313] font-semibold font-accent text-xs tracking-wider transition-all shadow-md hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? t.contact.labels.sending : t.contact.labels.submit}</span>
                    </button>

                    <a
                      href={mailtoHref}
                      className="text-xs font-accent text-[#84949A] hover:text-[#83AAB8] underline cursor-pointer"
                      title="Direct email client trigger"
                    >
                      {t.contact.sendMailto}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
