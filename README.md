# Portofolio v2 — Zidan Khainur

> **Neo-Brutalism Creative Portfolio** — Ahmad Fauzidan Yahya Khainur (Zidan)  
> Informatics Student @ UNSIKA · Fullstack Developer · AI Enthusiast

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)

---

## Overview

Redesign total dari web portofolio pribadi dengan arsitektur **Hybrid Single-Page** dan estetika visual **Neo-Brutalism** — terinspirasi dari poster grafis fisik yang bold, asimetris, dan menggunakan kontras tinggi. Dibangun untuk membedakan diri dari portofolio minimalis generik sambil tetap menjunjung **Engineering Discipline** dalam penyajian konten teknis.

**Live:** [zidankhainur.vercel.app](https://zidankhainurshub.vercel.app)

---

## Features

| Feature                     | Deskripsi                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| 🎨 **Neo-Brutalism Design** | Hard borders, hard box-shadows, tipografi display raksasa miring, palet 4 warna ketat        |
| ⚡ **Hybrid Single-Page**   | Semua konten dalam satu halaman vertikal, detail proyek via slide-out drawer                 |
| 🗂️ **Project Drawer**       | Klik kartu proyek → drawer meluncur dari kanan, menampilkan arsitektur & technical deep dive |
| 🐱 **Black Cat Mascot**     | Maskot SVG animasi interaktif: tidur saat diam, bangun saat scroll/hover, bisa dinonaktifkan |
| 🔍 **SEO Optimal**          | JSON-LD `ProfilePage` schema, Open Graph, Twitter Cards, dynamic OG image, sitemap           |
| 🚀 **Performance First**    | Server Components untuk data rendering, Client Components hanya untuk animasi                |
| ♿ **WCAG Accessible**      | Kontras AA, full keyboard navigation, `aria-label` pada semua elemen interaktif              |

---

## Tech Stack

```
Framework    Next.js 15 (App Router)
UI Library   React 19
Language     TypeScript (strict mode)
Styling      Tailwind CSS v4 + Custom Neo-Brutalism utilities
Animation    Framer Motion v12
Icons        React Icons (Font Awesome 5)
Typography   Plus Jakarta Sans (Google Fonts)
Deployment   Vercel (Edge Network)
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: font, metadata, JSON-LD, Navbar, Mascot
│   ├── page.tsx                # Server Component: data-fetching + section assembly
│   ├── globals.css             # Tailwind v4 @theme tokens + Neo-Brutalism utilities
│   ├── opengraph-image.tsx     # Dynamic OG image (1200×630, Edge Runtime)
│   ├── sitemap.ts              # Auto-generated /sitemap.xml
│   └── robots.ts               # Auto-generated /robots.txt
│
├── components/
│   ├── Navbar.tsx              # Floating pill navbar, single-page anchor navigation
│   ├── BlackCatMascot.tsx      # Animated SVG mascot + Back to Top button
│   ├── ProjectDrawer.tsx       # Slide-out drawer: problem, impact, tech deep-dive
│   └── sections/
│       ├── HeroSection.tsx     # Poster canvas: display title, triple-border photo
│       ├── ExperienceSection.tsx # Two-column timeline: Violet dots + Lime diamonds
│       ├── ProjectsSection.tsx # Project card grid with hover-lift + drawer trigger
│       └── ContactSection.tsx  # CTA poster + social links + footer
│
└── data/
    ├── projects.ts             # Project data dengan konten drawer (problem, impact, TDD)
    ├── experiences.ts          # Work experience data
    └── awards.ts               # Certificates & achievements data
```

---

## Color Palette

| Token           | Hex       | Peran                                                      |
| --------------- | --------- | ---------------------------------------------------------- |
| `pure-black`    | `#000000` | Background utama, border tebal, teks pada latar putih      |
| `pure-white`    | `#FFFFFF` | Teks utama pada latar gelap, hard shadows                  |
| `cyber-violet`  | `#7D39EB` | Latar section interaktif, aksen hover, timeline experience |
| `electric-lime` | `#C6FF33` | Highlighter, tech badges, CTA utama, timeline certificates |

> **Aturan aksesibilitas:** `#C6FF33` hanya digunakan pada teks pendek/bold di atas `#000000`, tidak pernah di atas `#FFFFFF` atau `#7D39EB`.

---

## Getting Started

### Prerequisites

- Node.js `>= 18.17`
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone repository
git clone https://github.com/zidankhainur2/portofolio-2025.git
cd portofolio-2025

# Install dependencies
npm install

# Start dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Build & Production

```bash
# Build untuk production
npm run build

# Jalankan production server secara lokal
npm run start

# Lint check
npm run lint
```

---

## Customization

### Mengganti data proyek

Edit `src/data/projects.ts`. Setiap project memiliki field:

```typescript
{
  title: string;
  shortDescription: string;   // Ditampilkan di card
  tags: string[];             // Badge kecil di card
  image: string;              // Path ke /public/...
  accentColor: "lime" | "violet";
  problem: string;            // Drawer: Problem Statement
  impact: string;             // Drawer: Impact & Results
  techStack: TechBadge[];     // Drawer: header badges
  technicalDeepDive: string;  // Drawer: Technical Deep Dive
  repoUrl: string;
  liveUrl?: string;
}
```

### Mengganti warna tema

Edit `src/app/globals.css` → blok `@theme`:

```css
@theme {
  --color-cyber-violet: #7d39eb; /* Ganti sesuai brand kamu */
  --color-electric-lime: #c6ff33;
}
```

### Update BASE_URL setelah deploy

Ganti di tiga file berikut:

```
src/app/layout.tsx          → const BASE_URL = "https://domain-kamu.vercel.app"
src/app/sitemap.ts          → BASE_URL yang sama
src/app/robots.ts           → URL sitemap yang sama
```

---

## Deployment

Project ini dikonfigurasi untuk deploy ke **Vercel** (zero-config).

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy ke production
vercel --prod
```

Atau connect repository ke [vercel.com](https://vercel.com) untuk auto-deploy setiap push ke `main`.

---

## Performance Targets

| Metric             | Target | Strategi                                                     |
| ------------------ | ------ | ------------------------------------------------------------ |
| **Performance**    | 90+    | Server Components untuk FCP, `next/image` untuk semua gambar |
| **Accessibility**  | 90+    | WCAG AA contrast, keyboard nav, semantic HTML, aria-labels   |
| **Best Practices** | 90+    | HTTPS, no deprecated APIs, proper meta tags                  |
| **SEO**            | 90+    | JSON-LD, Open Graph, sitemap, robots.txt, semantic H1-H6     |

---

## Architecture Notes

### Server vs Client Components

```
SERVER COMPONENTS (default)       CLIENT COMPONENTS ('use client')
─────────────────────────         ─────────────────────────────────
page.tsx                          HeroSection.tsx   (Framer Motion)
layout.tsx                        Navbar.tsx        (useState)
ContactSection.tsx                ExperienceSection.tsx (whileInView)
ExperienceSection (data layer)    ProjectsSection.tsx   (Drawer state)
                                  ProjectDrawer.tsx     (AnimatePresence)
                                  BlackCatMascot.tsx    (scroll listener)
```

Data dari `projects.ts`, `experiences.ts`, `awards.ts` di-fetch di **Server Component** (`page.tsx`) dan di-pass sebagai props ke Client Components — sehingga teks konten teknis ter-render di HTML awal tanpa menunggu JavaScript.

---

## License

MIT License — bebas digunakan sebagai referensi. Jangan lupa kasih ⭐ kalau bermanfaat!

---

<p align="center">
  Made with 🖤 + <strong>Electric Lime</strong> by <a href="https://github.com/zidankhainur2">Zidan Khainur</a>
</p>
