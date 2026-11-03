# Clean Soft Dark Portfolio — Production Portfolio Web Application

A premium, production-ready personal portfolio web application built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed in Google Stitch and refined with European editorial minimalism, soft dark architectural foundations (`#101313`, `#171D1F`, `#35464D`), and mineral seafoam teal accents (`#83AAB8`).

This project is **100% static-deployable** — optimized specifically for **Cloudflare Pages**, with zero runtime Node.js or paid backend requirements.

---

## 🌟 Key Features

- **Soft Dark Architectural Foundations:** Restrained European editorial aesthetic based on Google Stitch color tokens.
- **Dual-Theme Engine (Dark & Light):** Dark theme by default, clean daylight counterpart, animated sun/moon toggle, localStorage persistence, and system theme auto-detection.
- **English & Bengali Localization (EN / বাংলা):** Natural, professional bilingual translations for all texts, headlines, metrics, and case studies, rendered in *Plus Jakarta Sans*, *Inter*, and *Noto Sans Bengali*.
- **Interactive Project Showcase:** Category filter tabs, project cards with unboxed metadata, and deep-dive case study modals with multi-image gallery view.
- **Validated Contact System:** Full form validation (name, email, subject, message), celebratory confetti feedback, direct email client fallback (`mailto:`), and one-click email copying.
- **Resume System:** Printable interactive executive CV view (`window.print()`) and direct PDF download serving `/resume/resume.pdf`.
- **Top Bar Contract & SEO:** Semantic HTML5 (`header`, `main`, `section`, `article`, `footer`, `nav`), OpenGraph & Twitter cards, and Schema.org JSON-LD structured data.

---

## 🚀 Quick Start (Running Locally)

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm (comes bundled with Node.js)

### 2. Installation
Open your terminal inside the project directory and run:
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the URL shown in your terminal).

### 4. Build for Production
```bash
npm run build
```
This produces a static, minified bundle in the `dist/` directory ready for Cloudflare Pages or any web host.

---

## 📋 Beginner's Guide: Replacing Placeholders With Your Information

All personal data is neatly organized in a single file with clear comments. You do not need to search through multiple component files!

### 1. Edit Your Personal Information
Open file:
📁 `src/data/portfolioData.ts`

Look for the comments marked `/* PLACEHOLDER: ... */`:
- **`name`**: Your full name (both English and Bengali spellings).
- **`brandMark`**: Your monogram or display brand name shown in the top navigation.
- **`title`**: Your professional title (e.g. *Creative Director & Senior Frontend Engineer*).
- **`status`**: Your availability status (e.g. *Available for Q1 Projects*).
- **`location`**: Your city, country, and timezone.
- **`email`**: Your primary email address.
- **`phone`**: Your phone or WhatsApp number.
- **`aboutStory`**: Your long-form professional narrative and philosophy.
- **`projectsData`**: Your projects, case studies, technologies, and images.
- **`workExperience`**: Your career timeline, companies, and roles.
- **`skillCategories`**: Your technical skills and experience levels.
- **`achievementsData`**: Your certifications and honors.
- **`socialLinks`**: Your GitHub, LinkedIn, Dribbble, and Twitter/X URLs.

### 2. Replace Your Resume (PDF)
To replace the downloadable resume with your own real resume:
1. Save your resume document as a PDF file named **`resume.pdf`**.
2. Copy and paste it into the folder:
   📁 `public/resume/resume.pdf`
3. That's it! The download buttons across the portfolio will immediately download your file.

### 3. Add Your Own Images
To replace the profile photo and project screenshots:
1. Place your images into:
   📁 `src/assets/images/`
2. Update the image paths inside `src/data/portfolioData.ts` (e.g., `avatarUrl` and `projectsData[].thumbnail`).

---

## ☁️ Deploying to Cloudflare Pages (Step-by-Step)

Because this website is a pure static frontend (zero Node.js backend needed at runtime), it is free to host on Cloudflare Pages with lightning-fast worldwide CDN speeds.

### Step 1: Push Your Code to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (e.g. `my-portfolio`).
2. In your terminal, initialize and push your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages
1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and sign in.
2. In the left sidebar, click **Compute (Workers & Pages)** → **Create application** → **Pages** tab.
3. Click **Connect to Git** and authorize your GitHub account.
4. Select your portfolio repository from the list.
5. In the **Set up builds and deployments** screen:
   - **Project name:** Choose a name (e.g. `my-portfolio`).
   - **Production branch:** `main`
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy**.
7. Cloudflare Pages will build and deploy your site in less than 60 seconds and give you a free `*.pages.dev` URL!

---

## 🌐 Connecting Your Own Custom Domain (e.g. yourname.com)

1. In the Cloudflare Dashboard, open your deployed project under **Workers & Pages**.
2. Click the **Custom domains** tab at the top.
3. Click **Set up a custom domain**.
4. Type your domain name (e.g. `yourname.com` or `portfolio.yourname.com`) and click **Continue**.
5. Cloudflare will automatically set up the DNS records and provision a free SSL certificate (HTTPS). Within a few minutes, your portfolio will be live on your custom domain!

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component model |
| **TypeScript** | Strong type safety and maintainable contracts |
| **Vite 8** | Next-generation fast frontend tooling |
| **Tailwind CSS v4** | Modern utility-first CSS styling with `@custom-variant dark` |
| **Lucide React** | Clean, accessible iconography |
| **Canvas Confetti** | Subtle celebratory micro-interaction on form completion |
| **Cloudflare Pages** | Worldwide Edge CDN static deployment |

---

## 📄 License & Attribution

Designed and developed with European editorial minimalism, high-craft typography, and responsive ergonomics.
Licensed under the Apache-2.0 License.
