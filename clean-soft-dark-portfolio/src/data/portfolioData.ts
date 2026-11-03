import { ProjectItem, ExperienceItem, SkillCategory, AchievementItem, MetricItem, SocialLink } from '../types';

/* =========================================================================
   EDITABLE PLACEHOLDERS SECTION
   Replace these placeholder values with your real personal information,
   links, and background. All items are localized in English and Bengali.
   ========================================================================= */

export const personalInfo = {
  /* PLACEHOLDER: Your Full Name */
  name: {
    en: 'Shuvo Ahmed',
    bn: 'শুভ আহমেদ',
  },
  /* PLACEHOLDER: Brand / Studio Monogram or Wordmark */
  brandMark: 'SHUVO AHMED',
  /* PLACEHOLDER: Professional Title / Role */
  title: {
    en: 'Creative Director & Senior Frontend Engineer',
    bn: 'ক্রিয়েটিভ ডিরেক্টর এবং সিনিয়র ফ্রন্টএন্ড ইঞ্জিনিয়ার',
  },
  /* PLACEHOLDER: Availability Status */
  status: {
    en: 'Available for Q1 2027 Contracts & Senior Roles',
    bn: 'নতুন কন্ট্রাক্ট ও ফুল-টাইম রোলের জন্য উন্মুক্ত',
  },
  /* PLACEHOLDER: Location & Timezone */
  location: {
    en: 'Dhaka, Bangladesh · Remote Worldwide (UTC+6)',
    bn: 'ঢাকা, বাংলাদেশ · রিমোট বিশ্বব্যাপী (UTC+6)',
  },
  /* PLACEHOLDER: Primary Contact Email */
  email: 'shoffice23@gmail.com',
  /* PLACEHOLDER: Contact Phone / WhatsApp */
  phone: '+880 1700-000000',
  /* PLACEHOLDER: Path to Resume File (stored in /public/resume/) */
  resumeUrl: '/resume/resume.pdf',
  /* PLACEHOLDER: Profile Avatar / Hero Image */
  avatarUrl: '/src/assets/images/hero_designer_portrait_1793520127709.jpg',

  /* PLACEHOLDER: Hero Tagline & Narrative */
  heroHeadline: {
    en: 'Bridging architectural design systems with high-craft frontend engineering.',
    bn: 'আর্কিটেকচারাল ডিজাইন সিস্টেম এবং উচ্চমানের ফ্রন্টএন্ড ইঞ্জিনিয়ারিংয়ের সমন্বয়।',
  },
  heroBio: {
    en: 'I design and build tactile, high-performance web applications and digital brand identities. Grounded in European editorial minimalism, disciplined typography, and modern React performance.',
    bn: 'আমি প্রিমিয়াম মানের এবং উচ্চ গতির ওয়েব অ্যাপ্লিকেশন ও ব্র্যান্ড আইডেন্টিটি ডিজাইন ও তৈরি করি। ইউরোপীয় মিনিমালিজম, সুনির্দিষ্ট টাইপোগ্রাফি এবং আধুনিক রিঅ্যাক্ট ইঞ্জিনিয়ারিংয়ের সমন্বয়ে তৈরি।',
  },

  /* PLACEHOLDER: About Me Long-form Narrative */
  aboutStory: {
    en: `With over six years of experience collaborating with startups and global creative studios, I operate at the intersection of systematic brand architecture and frontend software engineering. I believe digital products should feel physically crafted—possessing tactile depth, disciplined whitespace, and instant responsiveness.

My engineering practice emphasizes clean component architecture, strict web performance standards, and accessibility. Whether architecting multi-brand design tokens or building bespoke interactive web applications, I bring meticulous rigor to every pixel and line of code.`,
    bn: `স্টার্টআপ এবং আন্তর্জাতিক ক্রিয়েটিভ স্টুডিওগুলোর সাথে ৬ বছরেরও বেশি কাজের অভিজ্ঞতায়, আমি সিস্টেম্যাটিক ব্র্যান্ড আর্কিটেকচার এবং ফ্রন্টএন্ড সফটওয়্যার ইঞ্জিনিয়ারিংয়ের মেলবন্ধনে কাজ করি। আমি বিশ্বাস করি ডিজিটাল প্রোডাক্টগুলোতে শারীরিক স্পর্শের মতো সূক্ষ্ম অনুভূতি থাকা উচিত—গভীরতা, পরিমিত স্পেসিং এবং দ্রুত প্রতিক্রিয়া।

আমার ইঞ্জিনিয়ারিং অনুশীলনে প্রাধান্য পায় পরিচ্ছন্ন কম্পোনেন্ট আর্কিটেকচার, ওয়েব পারফরম্যান্সের কড়া মান এবং অ্যাক্সেসিবিলিটি। মাল্টি-ব্র্যান্ড ডিজাইন টোকেন তৈরি থেকে শুরু করে ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ্লিকেশন নির্মাণ—সবক্ষেত্রেই আমি সর্বোচ্চ গুণগত মান বজায় রাখি।`,
  },

  /* PLACEHOLDER: Core Design & Engineering Pillars */
  pillars: [
    {
      title: { en: 'Architectural Systems', bn: 'আর্কিটেকচারাল সিস্টেমস' },
      description: {
        en: 'Scalable design token pipelines, unified component systems, and documentation.',
        bn: 'স্কেলেবল ডিজাইন টোকেন পাইপলাইন, সমন্বিত কম্পোনেন্ট সিস্টেম এবং ডকুমেন্টেশন।',
      },
    },
    {
      title: { en: 'Tactile Motion & UX', bn: 'ট্যাকটাইল মোশন ও ইউএক্স' },
      description: {
        en: 'Subtle physics-based micro-interactions, spring dynamics, and spatial hierarchy.',
        bn: 'সূক্ষ্ম ফিজিক্স-ভিত্তিক মাইক্রো-ইন্টারঅ্যাকশন, স্প্রিং ডাইনামিকস এবং লেয়ারিং।',
      },
    },
    {
      title: { en: 'High-Performance React', bn: 'উচ্চ-গতির রিঅ্যাক্ট' },
      description: {
        en: 'Zero-bloat Vite/TypeScript bundles, sub-500ms loads, and edge-native deployments.',
        bn: 'জিরো-ব্লোট ভাইট/টাইপস্ক্রিপ্ট বান্ডিল, দ্রুততম লোডিং এবং ক্লাউডফ্লেয়ার পেজেস ডিপ্লয়মেন্ট।',
      },
    },
    {
      title: { en: 'Editorial Typography', bn: 'এডিটরিয়াল টাইপোগ্রাফি' },
      description: {
        en: 'Calculated typographic scales, optical compensation, and multilingual rhythm.',
        bn: 'পরিমিত টাইপোগ্রাফিক স্কেল, অপটিক্যাল ব্যালেন্স এবং বহুভাষিক স্পষ্টতা।',
      },
    },
  ],
};

/* PLACEHOLDER: Key Quantifiable Metrics */
export const keyMetrics: MetricItem[] = [
  {
    value: '06+',
    label: { en: 'Years Experience', bn: 'বছরের অভিজ্ঞতা' },
    sublabel: { en: 'Design & Engineering', bn: 'ডিজাইন ও ইঞ্জিনিয়ারিং' },
  },
  {
    value: '28+',
    label: { en: 'Shipped Projects', bn: 'সফল প্রজেক্ট' },
    sublabel: { en: 'Web Apps & Design Systems', bn: 'ওয়েব অ্যাপ ও ডিজাইন সিস্টেম' },
  },
  {
    value: '99.8%',
    label: { en: 'Satisfaction Rate', bn: 'ক্লায়েন্ট সন্তুষ্টি' },
    sublabel: { en: 'Long-term Client Trust', bn: 'দীর্ঘমেয়াদী কাজের বিশ্বাস' },
  },
  {
    value: '04',
    label: { en: 'Design Honors', bn: 'ডিজাইন স্বীকৃতি' },
    sublabel: { en: 'Editorial & System Awards', bn: 'আন্তর্জাতিক স্বীকৃতি' },
  },
];

/* PLACEHOLDER: Social & Professional Links */
export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com',
    iconName: 'Github',
    label: 'github.com/shuvo-ahmed',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    iconName: 'Linkedin',
    label: 'linkedin.com/in/shuvo-ahmed',
  },
  {
    platform: 'Dribbble',
    url: 'https://dribbble.com',
    iconName: 'Dribbble',
    label: 'dribbble.com/shuvo-ahmed',
  },
  {
    platform: 'Twitter / X',
    url: 'https://twitter.com',
    iconName: 'Twitter',
    label: '@shuvo_design',
  },
];

/* PLACEHOLDER: Featured Portfolio Projects */
export const projectsData: ProjectItem[] = [
  {
    id: 'aethel-brand-architecture',
    title: {
      en: 'Aethel Brand & Editorial System',
      bn: 'এথেল ব্র্যান্ড এবং এডিটরিয়াল সিস্টেম',
    },
    category: 'brand',
    categoryLabel: {
      en: 'Brand Architecture',
      bn: 'ব্র্যান্ড আর্কিটেকচার',
    },
    client: 'Aethel Studio / Zurich',
    year: '2026',
    role: {
      en: 'Lead Identity Architect & Art Director',
      bn: 'লিড আইডেন্টিটি আর্কিটেক্ট ও আর্ট ডিরেক্টর',
    },
    summary: {
      en: 'A tactile luxury visual identity and bespoke typography specimen for a Swiss architectural atelier, combining blind debossing with digital guidelines.',
      bn: 'একটি সুইস আর্কিটেকচারাল স্টুডিওর জন্য প্রিমিয়াম ভিজ্যুয়াল আইডেন্টিটি এবং টাইপোগ্রাফি সিস্টেম, স্পর্শযোগ্য ফিনিশিং এবং ডিজিটাল নির্দেশিকার সমন্বয়।',
    },
    challenge: {
      en: 'The studio needed an identity that felt deeply tactile in print while translating effortlessly to responsive screens without losing sculptural gravitas.',
      bn: 'স্টুডিওটির এমন একটি পরিচয়ের প্রয়োজন ছিল যা প্রিন্টে গভীর টেক্সচার দেয় এবং স্ক্রিনেও কোনো শৈল্পিক গাম্ভীর্য না হারিয়ে মসৃণভাবে ফুটে ওঠে।',
    },
    solution: {
      en: 'Developed a bespoke geometric serif identity, custom dual-tone stationery specifications, and a digital tokenized design system for web and client decks.',
      bn: 'একটি বিশেষ জ্যামিতিক সেরিফ আইডেন্টিটি, ডুয়াল-টোন স্টেশনারি স্পেসিফিকেশন এবং ওয়েব ও ক্লায়েন্ট প্রেজেন্টেশনের জন্য টোকেনাইজড ডিজাইন সিস্টেম তৈরি করা হয়।',
    },
    outcomes: {
      en: [
        'Awarded Site of the Month for Editorial Architecture',
        '+160% increase in inbound luxury residential commissions',
        'Adopted company-wide across 4 European satellite studios',
      ],
      bn: [
        'এডিটরিয়াল আর্কিটেকচারের জন্য সাইট অব দ্য মান্থ অ্যাওয়ার্ড অর্জন',
        'ইউরোপীয় লাক্সারি ক্লায়েন্টদের থেকে ১৬০% অতিরিক্ত ইনকোয়ারি',
        '৪টি ইউরোপীয় স্টুডিওতে একযোগে সফল বাস্তবায়ন',
      ],
    },
    technologies: ['Brand Architecture', 'Figma', 'Typography Tokens', 'Print Production', 'Design Guidelines'],
    thumbnail: '/src/assets/images/project_brand_design_1793520128651.jpg',
    gallery: [
      '/src/assets/images/project_brand_design_1793520128651.jpg',
      '/src/assets/images/project_design_system_1793520128608.jpg',
    ],
    liveUrl: 'https://example.com/aethel-brand',
    githubUrl: 'https://github.com/shuvo-ahmed/aethel-guidelines',
    featured: true,
  },
  {
    id: 'strata-design-system',
    title: {
      en: 'Strata Multi-Platform Design System',
      bn: 'স্ট্রাটা মাল্টি-প্ল্যাটফর্ম ডিজাইন সিস্টেম',
    },
    category: 'web',
    categoryLabel: {
      en: 'Web Applications',
      bn: 'ওয়েব অ্যাপ্লিকেশন',
    },
    client: 'Strata Cloud Platform / San Francisco',
    year: '2025 - 2026',
    role: {
      en: 'Principal Design System Engineer',
      bn: 'প্রিন্সিপাল ডিজাইন সিস্টেম ইঞ্জিনিয়ার',
    },
    summary: {
      en: 'High-performance React & Tailwind design system with automated token extraction, dark mode optical compensation, and strict WCAG 2.2 AA accessibility.',
      bn: 'উচ্চ ক্ষমতাসম্পন্ন রিঅ্যাক্ট এবং টেইলউইন্ড ডিজাইন সিস্টেম, স্বয়ংক্রিয় টোকেন এক্সট্রাকশন, ডার্ক মোড অপটিক্যাল ব্যালেন্স এবং WCAG 2.2 AA অ্যাক্সেসিবিলিটি।',
    },
    challenge: {
      en: 'Fragmented UI across 6 micro-frontends with high latency, inconsistent color contrasts in dark mode, and slow developer onboarding times.',
      bn: '৬টি আলাদা মাইক্রো-ফ্রন্টএন্ডের মধ্যে ডিজাইনের অমিল, ডার্ক মোডে রঙের সমস্যার কারণে ইউজারদের চোখের চাপ এবং ডেভেলপারদের ধীর কাজের গতি।',
    },
    solution: {
      en: 'Engineered a unified NPM component library, tokenized CSS variables with strict luminance stepping, and built an interactive documentation workspace.',
      bn: 'একটি সমন্বিত এনপিএম কম্পোনেন্ট লাইব্রেরি, সুনির্দিষ্ট লুমিন্যান্স বিশিষ্ট টোকেনাইজড সিএসএস ভেরিয়েবল এবং ইন্টারঅ্যাক্টিভ ডকুমেন্টেশন তৈরি করা হয়।',
    },
    outcomes: {
      en: [
        'Reduced frontend development turnaround time by 52%',
        'Decreased core app bundle size from 480KB to 142KB',
        '100% WCAG AA compliance score across enterprise audits',
      ],
      bn: [
        'নতুন ফিচার ডেভেলপমেন্ট সময় ৫২% কমে এসেছে',
        'অ্যাপের মূল বান্ডেল সাইজ ৪৮০কেবি থেকে ১৪২কেবিতে নেমে এসেছে',
        'এন্টারপ্রাইজ অডিটে শতভাগ এক্সেসিবিলিটি কমপ্লায়েন্স অর্জন',
      ],
    },
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Storybook', 'Framer Motion'],
    thumbnail: '/src/assets/images/project_design_system_1793520128608.jpg',
    gallery: [
      '/src/assets/images/project_design_system_1793520128608.jpg',
      '/src/assets/images/hero_designer_portrait_1793520127709.jpg',
    ],
    liveUrl: 'https://example.com/strata-system',
    githubUrl: 'https://github.com/shuvo-ahmed/strata-ui-system',
    featured: true,
  },
  {
    id: 'chronicle-editorial-reader',
    title: {
      en: 'Chronicle Mobile Editorial Experience',
      bn: 'ক্রনিকল মোবাইল এডিটরিয়াল প্ল্যাটফর্ম',
    },
    category: 'uiux',
    categoryLabel: {
      en: 'UI/UX Design',
      bn: 'ইউআই/ইউএক্স ডিজাইন',
    },
    client: 'Chronicle Media / London',
    year: '2025',
    role: {
      en: 'Lead Product Designer & Prototyper',
      bn: 'লিড প্রোডাক্ট ডিজাইনার ও প্রোটোটাইপার',
    },
    summary: {
      en: 'A distraction-free reading application with tactile sheet transitions, dark ambient reader modes, and fluid offline synchronization.',
      bn: 'মনোযোগ ধরে রাখার মতো পরিচ্ছন্ন মোবাইল রিডিং অ্যাপ, ফ্লুইড শীট ট্রানজিশন, ডার্ক অ্যাম্বিয়েন্ট রিডার মোড এবং অফলাইন সিঙ্ক সুবিধা।',
    },
    challenge: {
      en: 'Mobile readers experienced reading fatigue on high-contrast OLED screens with typical bloated social feeds.',
      bn: 'উচ্চ-কনট্রাস্টযুক্ত স্ক্রিনে দীর্ঘ সময় পড়ার ফলে পাঠকদের চোখের ক্লান্তি এবং অতিরিক্ত অপ্রয়োজনীয় কনটেন্টের ভিড়।',
    },
    solution: {
      en: 'Designed an organic slate reading theme (#101313 to #35464D), thumb-first navigation within the bottom 15% zone, and physics-driven gesture controls.',
      bn: 'একটি মনোরম স্লেট থিম, এক হাতে সহজে ব্যবহারের মতো লোয়ার-ন্যাভিগেশন জোন এবং মসৃণ টাচ জেসচার নিয়ন্ত্রণ তৈরি করা হয়।',
    },
    outcomes: {
      en: [
        'Average user reading session increased from 4.2m to 14.8m',
        '4.9/5 App Store rating across 12,000+ reader reviews',
        'Featured in Design Weekly Mobile Highlights',
      ],
      bn: [
        'পাঠকদের গড় পড়ার সময় ৪.২ মিনিট থেকে বেড়ে ১৪.৮ মিনিটে উন্নীত',
        '১২,০০০+ রিভিউতে ৪.৯/৫ অ্যাপ স্টোর রেটিং অর্জন',
        'ডিজাইন উইকলি ম্যাগাজিনে সেরা ফিচার হিসেবে নির্বাচিত',
      ],
    },
    technologies: ['Mobile UI/UX', 'Figma Prototyping', 'React Native / Web', 'Gesture Dynamics'],
    thumbnail: '/src/assets/images/project_mobile_editorial_1793520128213.jpg',
    gallery: [
      '/src/assets/images/project_mobile_editorial_1793520128213.jpg',
      '/src/assets/images/project_brand_design_1793520128651.jpg',
    ],
    liveUrl: 'https://example.com/chronicle-reader',
    githubUrl: 'https://github.com/shuvo-ahmed/chronicle-mobile-ui',
    featured: true,
  },
  {
    id: 'kinesis-tactile-interactions',
    title: {
      en: 'Kinesis Interactive Motion Lab',
      bn: 'কাইনেসিস ইন্টারঅ্যাক্টিভ মোশন ল্যাব',
    },
    category: 'motion',
    categoryLabel: {
      en: 'Visual & Motion',
      bn: 'ভিজ্যুয়াল ও মোশন',
    },
    client: 'Autonomous Creative Lab',
    year: '2024 - 2025',
    role: {
      en: 'Creative Technologist',
      bn: 'ক্রিয়েটিভ টেকনোলজিস্ট',
    },
    summary: {
      en: 'Experimental suite of tactile web physics, spring-based cursor tracking, and 3D surface shaders running at continuous 60fps.',
      bn: 'ওয়েব ফিজিক্স, স্প্রিং-ভিত্তিক কার্সার ট্র্যাকিং এবং থ্রি-ডি সারফেস শেডারের একটি ইন্টারঅ্যাক্টিভ এক্সপেরিমেন্ট যা মসৃণ ৬০ এফপিএসে চলে।',
    },
    challenge: {
      en: 'Balancing GPU-intensive 3D particle dynamics with immediate first-input response and low battery consumption.',
      bn: 'ভারী থ্রি-ডি অ্যানিমেশন চালু রেখেও ব্যাটারি খরচ কম রাখা এবং ব্রাউজারে ইনস্ট্যান্ট রেসপন্স নিশ্চিত করা।',
    },
    solution: {
      en: 'Built custom WebGL fragment shaders with automatic frame decimation on inactive viewports and full reduced-motion accessibility overrides.',
      bn: 'কাস্টম ফ্র্যাগমেন্ট শেডার ও ভিউপোর্ট অপ্টিমাইজেশন যুক্ত করা হয় যাতে অপ্রয়োজনীয় রিসোর্স খরচ না হয় এবং রিডিউসড-মোশন সাপোর্ট বজায় থাকে।',
    },
    outcomes: {
      en: [
        'Maintained locked 60fps across low-power mobile devices',
        'Over 85,000 developer GitHub stars across open-source experiments',
        'Cited in Web Performance Engineering Best Practices 2025',
      ],
      bn: [
        'কম ক্ষমতার ডিভাইসেও ৬০ এফপিএস ফ্রেমরেট বজায় রাখা হয়েছে',
        'ওপেন সোর্স কমিউনিটিতে বিপুল সাড়া ও প্রশংসা অর্জন',
        'ওয়েব পারফরম্যান্স ইঞ্জিনিয়ারিং জার্নালে বিশেষ স্থান',
      ],
    },
    technologies: ['Three.js', 'GLSL Shaders', 'Framer Motion', 'Web Audio API', 'TypeScript'],
    thumbnail: '/src/assets/images/project_design_system_1793520128608.jpg',
    gallery: [
      '/src/assets/images/project_design_system_1793520128608.jpg',
      '/src/assets/images/project_mobile_editorial_1793520128213.jpg',
    ],
    liveUrl: 'https://example.com/kinesis-lab',
    githubUrl: 'https://github.com/shuvo-ahmed/kinesis-motion-lab',
    featured: false,
  },
];

/* PLACEHOLDER: Work Experience Timeline */
export const workExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2024 - Present',
    role: {
      en: 'Lead Design Engineer & Architect',
      bn: 'লিড ডিজাইন ইঞ্জিনিয়ার এবং আর্কিটেক্ট',
    },
    company: 'Aetheria Studio',
    location: 'Remote · London / Dhaka',
    type: {
      en: 'Full-Time / Practice',
      bn: 'ফুল-টাইম / নিজস্ব প্র্যাকটিস',
    },
    description: {
      en: [
        'Lead frontend engineering and creative direction for high-growth tech firms and luxury studios.',
        'Architected reusable React 19 design systems and micro-frontends with sub-500ms Core Web Vitals.',
        'Collaborate directly with founders, brand architects, and product directors on strategic technical roadmaps.',
      ],
      bn: [
        'গ্রোথ-স্টেজ টেক ফার্ম এবং লাক্সারি স্টুডিওগুলোর জন্য ফ্রন্টএন্ড ইঞ্জিনিয়ারিং ও ক্রিয়েটিভ ডিরেকশন পরিচালনা।',
        'সাব-৫০০ মিলি সেকেন্ড লোডিং স্পিড সহ রিঅ্যাক্ট ১৯ ডিজাইন সিস্টেম এবং মাইক্রো-ফ্রন্টএন্ড আর্কিটেকচার তৈরি।',
        'প্রতিষ্ঠাতা এবং প্রডাক্ট ডিরেক্টরদের সাথে যৌথভাবে স্ট্র্যাটেজিক রোডম্যাপ প্রণয়ন ও বাস্তবায়ন।',
      ],
    },
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'Vite', 'Cloudflare Pages'],
  },
  {
    id: 'exp-2',
    period: '2022 - 2024',
    role: {
      en: 'Senior UI/UX Engineer',
      bn: 'সিনিয়র ইউআই/ইউএক্স ইঞ্জিনিয়ার',
    },
    company: 'Horizon Interactive Labs',
    location: 'Remote · Singapore',
    type: {
      en: 'Full-Time',
      bn: 'ফুল-টাইম',
    },
    description: {
      en: [
        'Spearheaded design token infrastructure bridging Figma Tokens and production Tailwind CSS classes.',
        'Mentored a team of 6 engineers on frontend performance, tactile micro-animations, and accessibility.',
        'Built enterprise data analytics dashboards with responsive virtualization handling 50k+ daily records.',
      ],
      bn: [
        'ফিগমা টোকেন এবং টেইলউইন্ড সিএসএস ক্লাসের মধ্যে সরাসরি সংযোগ স্থাপনকারী টোকেন ইনফ্রাস্ট্রাকচার তৈরি।',
        'ওয়েব পারফরম্যান্স, অ্যাক্সেসিবিলিটি এবং অ্যানিমেশন বিষয়ে ৬ জন ইঞ্জিনিয়ারের টিমকে মেন্টরিং।',
        '৫০ হাজারেরও বেশি দৈনিক ডেটা রেকর্ড হ্যান্ডল করতে সক্ষম রেসপনসিভ এন্টারপ্রাইজ ড্যাশবোর্ড তৈরি।',
      ],
    },
    skills: ['TypeScript', 'Design Tokens', 'Figma', 'Framer Motion', 'State Management', 'WCAG AA'],
  },
  {
    id: 'exp-3',
    period: '2020 - 2022',
    role: {
      en: 'Frontend Developer & UI Specialist',
      bn: 'ফ্রন্টএন্ড ডেভেলপার ও ইউআই স্পেশালিস্ট',
    },
    company: 'Nexus Digital Agency',
    location: 'Dhaka, Bangladesh',
    type: {
      en: 'Full-Time',
      bn: 'ফুল-টাইম',
    },
    description: {
      en: [
        'Developed client web portals, e-commerce storefronts, and marketing sites with fluid animations.',
        'Engineered responsive layouts adhering strictly to 8pt design grid logic and mobile-first requirements.',
        'Increased Lighthouse scores from 65 to 98+ across all deployed client websites.',
      ],
      bn: [
        'ক্লায়েন্ট ওয়েব পোর্টাল, ই-কমার্স স্টোর এবং মার্কেটিং ওয়েবসাইটে নিখুঁত অ্যানিমেশনসহ ফ্রন্টএন্ড নির্মাণ।',
        '৮-পয়েন্ট গ্রিড লজিক এবং মোবাইল-ফার্স্ট নীতি অনুসরণ করে ১০০% রেসপনসিভ লেআউট ডেভেলপমেন্ট।',
        'সকল ক্লায়েন্ট ওয়েবসাইটের লাইটহাউস স্কোর গড়ে ৬৫ থেকে ৯৮+ তে উন্নীতকরণ।',
      ],
    },
    skills: ['JavaScript ES6+', 'React', 'HTML5/CSS3', 'Sass', 'Webpack/Vite', 'Performance Optimization'],
  },
];

/* PLACEHOLDER: Technical Skills by Category */
export const skillCategories: SkillCategory[] = [
  {
    id: 'cat-design-systems',
    title: {
      en: 'Design Systems & UI/UX',
      bn: 'ডিজাইন সিস্টেম ও ইউআই/ইউএক্স',
    },
    description: {
      en: 'Systematic token architecture, typography scales, and tactile ergonomics.',
      bn: 'টোকেন আর্কিটেকচার, সুনির্দিষ্ট টাইপোগ্রাফি এবং উন্নত ইউজার এক্সপেরিয়েন্স।',
    },
    skills: [
      { name: 'Design Tokens & Architecture', level: 95, experience: '5+ years' },
      { name: 'Figma & Component Variants', level: 98, experience: '6+ years' },
      { name: 'WCAG 2.2 AA Accessibility', level: 92, experience: '4+ years' },
      { name: 'Typographic Hierarchy & Layout', level: 96, experience: '6+ years' },
      { name: 'Wireframing & Interactive Specs', level: 90, experience: '5+ years' },
    ],
  },
  {
    id: 'cat-frontend-engineering',
    title: {
      en: 'Modern Frontend Engineering',
      bn: 'আধুনিক ফ্রন্টএন্ড ইঞ্জিনিয়ারিং',
    },
    description: {
      en: 'Type-safe, component-driven client architecture with exceptional performance.',
      bn: 'টাইপ-সেফ, কম্পোনেন্ট-ভিত্তিক ক্লায়েন্ট আর্কিটেকচার এবং দ্রুততম গতি।',
    },
    skills: [
      { name: 'React 19 & Hooks Pattern', level: 96, experience: '6+ years' },
      { name: 'TypeScript & Type Systems', level: 94, experience: '5+ years' },
      { name: 'Tailwind CSS v4 & PostCSS', level: 98, experience: '5+ years' },
      { name: 'Vite & Build Tooling', level: 92, experience: '4+ years' },
      { name: 'State Management & Performance', level: 90, experience: '5+ years' },
    ],
  },
  {
    id: 'cat-motion-creative',
    title: {
      en: 'Motion & Tactile Interaction',
      bn: 'মোশন ও স্পর্শযোগ্য ইন্টারঅ্যাকশন',
    },
    description: {
      en: 'Physics-based spring dynamics, subtle depth, and organic transitions.',
      bn: 'স্প্রিং ফিজিক্স, সূক্ষ্ম গভীরতা এবং মসৃণ ট্রানজিশন নিয়ন্ত্রণ।',
    },
    skills: [
      { name: 'Framer Motion (Motion 12)', level: 94, experience: '4+ years' },
      { name: 'SVG Micro-Interactions', level: 90, experience: '5+ years' },
      { name: 'Three.js & Canvas 2D', level: 78, experience: '2+ years' },
      { name: 'Reduced-Motion Graceful Fallbacks', level: 95, experience: '4+ years' },
    ],
  },
  {
    id: 'cat-tooling-deploy',
    title: {
      en: 'Static Cloud & Tooling',
      bn: 'ক্লাউড ও ডেভলপার টুলস',
    },
    description: {
      en: 'Production-ready deployment pipelines for Cloudflare Pages and Git.',
      bn: 'ক্লাউডফ্লেয়ার পেজেস এবং গিটভিত্তিক প্রোডাকশন ডিপ্লয়মেন্ট ওয়ার্কফ্লো।',
    },
    skills: [
      { name: 'Cloudflare Pages & Workers', level: 92, experience: '4+ years' },
      { name: 'Git & GitHub Workflows', level: 95, experience: '6+ years' },
      { name: 'Static Site Architecture (dist)', level: 96, experience: '5+ years' },
      { name: 'Lighthouse & SEO Best Practices', level: 95, experience: '5+ years' },
    ],
  },
];

/* PLACEHOLDER: Honors, Certifications & Recognition */
export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    year: '2026',
    title: {
      en: 'Design Systems Architect Certificate',
      bn: 'ডিজাইন সিস্টেমস আর্কিটেক্ট সার্টিফিকেট',
    },
    issuer: 'Design System Alliance Global',
    category: {
      en: 'Professional Certification',
      bn: 'পেশাদার সার্টিফিকেশন',
    },
    description: {
      en: 'Recognized for advanced token governance, accessibility automation, and enterprise component infrastructure.',
      bn: 'উন্নত টোকেন গভর্নেন্স, স্বয়ংক্রিয় অ্যাক্সেসিবিলিটি এবং এন্টারপ্রাইজ কম্পোনেন্ট ইনফ্রাস্ট্রাকচারের জন্য সনদ।',
    },
    credentialUrl: 'https://example.com/cert/dsa-2026',
  },
  {
    id: 'ach-2',
    year: '2025',
    title: {
      en: 'Editorial Showcase of the Year',
      bn: 'এডিটরিয়াল শোকেস অব দ্য ইয়ার',
    },
    issuer: 'International Web Craft Guild',
    category: {
      en: 'Design Honor',
      bn: 'ডিজাইন সম্মাননা',
    },
    description: {
      en: 'Honored for exceptional typographic restraint, dual-theme implementation, and high-legibility bilingual layout.',
      bn: 'অসাধারণ টাইপোগ্রাফিক সৌন্দর্য, ডার্ক-লাইট ব্যালেন্স এবং বহুভাষিক লেআউটের জন্য আন্তর্জাতিক স্বীকৃতি।',
    },
    credentialUrl: 'https://example.com/awards/editorial-2025',
  },
  {
    id: 'ach-3',
    year: '2024',
    title: {
      en: 'Meta Certified Frontend Specialist',
      bn: 'মেটা সার্টিফাইড ফ্রন্টএন্ড স্পেশালিস্ট',
    },
    issuer: 'Meta Professional Academy',
    category: {
      en: 'Technical Credential',
      bn: 'টেকনিক্যাল ক্রেডেনশিয়াল',
    },
    description: {
      en: 'Demonstrated mastery in advanced React patterns, client performance budgets, and state architecture.',
      bn: 'অ্যাডভান্সড রিঅ্যাক্ট প্যাটার্নস, ক্লায়েন্ট পারফরম্যান্স ও স্টেট আর্কিটেকচারে পারদর্শিতার স্বীকৃতি।',
    },
    credentialUrl: 'https://example.com/cert/meta-frontend',
  },
  {
    id: 'ach-4',
    year: '2023',
    title: {
      en: 'Top Design Contributor',
      bn: 'টপ ডিজাইন কন্ট্রিবিউটর',
    },
    issuer: 'Open Design Collective',
    category: {
      en: 'Community Award',
      bn: 'কমিউনিটি অ্যাওয়ার্ড',
    },
    description: {
      en: 'Recognized for contributing accessible color tokens and contrast calculation utilities to open-source UI libraries.',
      bn: 'ওপেন-সোর্স ইউআই লাইব্রেরিতে অ্যাক্সেসিবল কালার টোকেন এবং টুলস অবদানের জন্য বিশেষ স্বীকৃতি।',
    },
    credentialUrl: 'https://example.com/awards/open-design-2023',
  },
];

/* PLACEHOLDER: Academic Background */
export const educationData = [
  {
    degree: {
      en: 'Bachelor of Science in Computer Science & Engineering',
      bn: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিংয়ে বিএসসি',
    },
    institution: {
      en: 'University of Engineering & Technology',
      bn: 'ইউনিভার্সিটি অব ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি',
    },
    period: '2016 - 2020',
    details: {
      en: 'Graduated with First Class Honors. Focused on Human-Computer Interaction, Web Architectures, and Algorithms.',
      bn: 'প্রথম শ্রেণীতে উত্তীর্ণ। হিউম্যান-কম্পিউটার ইন্টারঅ্যাকশন এবং আধুনিক ওয়েব আর্কিটেকচারে বিশেষ মনোযোগ।',
    },
  },
];
