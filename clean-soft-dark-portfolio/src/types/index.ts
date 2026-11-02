export type Language = 'en' | 'bn';
export type Theme = 'dark' | 'light';

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  label: string;
}

export interface MetricItem {
  value: string;
  label: {
    en: string;
    bn: string;
  };
  sublabel?: {
    en: string;
    bn: string;
  };
}

export interface ProjectItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  category: 'brand' | 'uiux' | 'web' | 'motion';
  categoryLabel: {
    en: string;
    bn: string;
  };
  client: string;
  year: string;
  role: {
    en: string;
    bn: string;
  };
  summary: {
    en: string;
    bn: string;
  };
  challenge: {
    en: string;
    bn: string;
  };
  solution: {
    en: string;
    bn: string;
  };
  outcomes: {
    en: string[];
    bn: string[];
  };
  technologies: string[];
  thumbnail: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: {
    en: string;
    bn: string;
  };
  company: string;
  location: string;
  type: {
    en: string;
    bn: string;
  };
  description: {
    en: string[];
    bn: string[];
  };
  skills: string[];
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
  }[];
}

export interface AchievementItem {
  id: string;
  year: string;
  title: {
    en: string;
    bn: string;
  };
  issuer: string;
  category: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  credentialUrl?: string;
}
