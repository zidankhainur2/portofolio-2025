/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

/* ─────────────────────────────────────────────────────
   FRAMER MOTION VARIANTS
   Sesuai design.md 5.1: spring curve, respons instan
───────────────────────────────────────────────────── */
const staggerContainer: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.18 },
  },
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// Foto: muncul sambil sedikit berputar, seperti kartu dijatuhkan
const photoEntrance: any = {
  hidden: { opacity: 0, scale: 0.8, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 2, // sedikit condong ke kanan — efek poster
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
  },
};

/* ─────────────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────────────── */
interface SocialLink {
  href: string;
  label: string;
  icon: React.ElementType;
  external?: boolean;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "mailto:zidankhainur2@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: "https://github.com/zidankhainur2",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/ahmad-fauzidan-yahya-khainur/",
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: "https://www.instagram.com/zidankhainur_/",
    label: "Instagram",
    icon: FaInstagram,
    external: true,
  },
];

const TECH_BADGES = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Framer Motion",
];

// Konten marquee — diduplikasi di JSX untuk seamless loop
const MARQUEE_ITEMS = [
  "FULLSTACK DEVELOPER",
  "AI ENTHUSIAST",
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "PYTHON",
  "IoT & ESP32",
  "UNSIKA",
  "TYPESCRIPT",
  "FRAMER MOTION",
  "SVM",
  "CNN",
];

/* ─────────────────────────────────────────────────────
   HERO SECTION COMPONENT
───────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-pure-black flex flex-col overflow-hidden">
      {/* ════════════════════════════════════════════
          LAYER 0 — Decorative Background
          Bentuk abstrak organik ala design.md 4.1
      ════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      >
        {/* Cyber Violet blob — top right, low opacity */}
        <div
          className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full opacity-[0.11]"
          style={{ backgroundColor: "#7D39EB" }}
        />
        {/* Electric Lime triangle — bottom left */}
        <div
          className="absolute -bottom-16 -left-10 w-56 h-56 opacity-[0.18]"
          style={{
            backgroundColor: "#C6FF33",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />
        {/* Dot-grid texture — sangat subtle */}
        <div
          className="absolute inset-0 opacity-[0.032]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Vertical accent line — kiri, Electric Lime memudar */}
        <div
          className="absolute left-[8%] top-[12%] bottom-[20%] w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, #C6FF33 0%, rgba(198,255,51,0.1) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ════════════════════════════════════════════
          LAYER 1 — Main Content
      ════════════════════════════════════════════ */}
      <div className="relative flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-10">
          {/* ── Status Badge Row ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap items-center gap-3 mb-10 md:mb-14"
          >
            <span className="badge badge-lime">
              ✦ Available for Internship 2026
            </span>
            <span className="text-pure-white/30 text-[10px] font-mono tracking-[0.22em] uppercase">
              — Bekasi, West Java, Indonesia
            </span>
          </motion.div>

          {/* ── Main Two-Column Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-8 lg:gap-20 items-center">
            {/* ──────────────────────────────────────
                LEFT COLUMN — Text Content
            ────────────────────────────────────── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5 max-w-[640px]"
            >
              {/* ── Giant Display Title ── */}
              <motion.div variants={fadeUp} className="overflow-visible -ml-1">
                {/*
                  SEO: <h1> berisi teks statis yang sepenuhnya
                  terbaca oleh mesin pencari tanpa menunggu JS.
                  Sesuai PRD 4.1 (Server Component data + FCP).
                */}
                <h1 className="leading-none">
                  <span
                    className="display-title block text-pure-white"
                    style={{
                      fontSize: "clamp(4rem, 11.5vw, 10rem)",
                      transform: "rotate(-3deg)",
                      display: "inline-block",
                      transformOrigin: "left center",
                    }}
                  >
                    ZIDAN
                  </span>
                  <span
                    className="display-title block text-electric-lime"
                    style={{
                      fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)",
                      transform: "rotate(-1deg)",
                      display: "inline-block",
                      transformOrigin: "left center",
                    }}
                  >
                    KHAINUR
                  </span>
                </h1>
              </motion.div>

              {/* ── Role Separator Line ── */}
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 h-[3px] w-10"
                  style={{ backgroundColor: "#C6FF33" }}
                />
                <p className="text-pure-white/60 font-semibold text-[11px] md:text-sm uppercase tracking-[0.2em]">
                  Fullstack Developer · AI · Informatics @ UNSIKA
                </p>
              </motion.div>

              {/* ── Typewriter Tagline ──
                  TypeAnimation = dekoratif, bukan konten SEO utama
              ── */}
              <motion.div variants={fadeUp} className="h-6 md:h-7">
                <TypeAnimation
                  sequence={[
                    "Building performant full-stack web apps.",
                    2200,
                    "Obsessed with AI & Machine Learning.",
                    2500,
                    "Turning IoT sensor data into smart systems.",
                    2200,
                    "Crafting fast, accessible, beautiful UIs.",
                    2000,
                  ]}
                  wrapper="p"
                  speed={65}
                  className="text-pure-white/40 text-sm md:text-base font-medium"
                  repeat={Infinity}
                />
              </motion.div>

              {/* ── Social Icons + CTA Buttons ── */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3 md:gap-4 mt-1"
              >
                {/* Social icon grid */}
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map(({ href, label, icon: Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="
                        w-10 h-10 flex items-center justify-center
                        border-2 border-pure-white/20 text-pure-white/45
                        hover:border-electric-lime hover:text-electric-lime
                        hover:bg-electric-lime/8 hover:-translate-y-1
                        transition-all duration-150 ease-out
                      "
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>

                {/* Vertical separator */}
                <span
                  aria-hidden="true"
                  className="hidden sm:block w-px h-8 bg-pure-white/15"
                />

                {/* CTA 1: View Projects */}
                <a
                  href="#projects"
                  className="
                    badge badge-lime py-3 px-5 text-[10px] font-black tracking-[0.12em]
                    transition-all duration-150 ease-out
                    hover:-translate-x-[2px] hover:-translate-y-[2px]
                    hover:shadow-[6px_6px_0px_0px_#FFFFFF]
                  "
                >
                  VIEW MY WORK →
                </a>

                {/* CTA 2: Download CV */}
                <a
                  href="/cv-dann.pdf"
                  download
                  className="
                    badge badge-white py-3 px-5 text-[10px] font-black tracking-[0.12em]
                    transition-all duration-150 ease-out
                    hover:-translate-x-[2px] hover:-translate-y-[2px]
                    hover:shadow-[6px_6px_0px_0px_#C6FF33]
                  "
                >
                  DOWNLOAD CV
                </a>
              </motion.div>

              {/* ── Tech Stack Badges ── */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {TECH_BADGES.map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-violet text-[9px] tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ──────────────────────────────────────
                RIGHT COLUMN — Profile Photo
                Triple-border treatment sesuai design.md 4.4:
                White border (depan) + Lime offset + Violet offset
            ────────────────────────────────────── */}
            <motion.div
              variants={photoEntrance}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-end"
            >
              {/*
                p-4 / p-5 = ruang untuk shadow offset elements
                agar tidak terpotong parent overflow
              */}
              <div className="p-4 md:p-5">
                <div className="relative">
                  {/* Shadow block — Cyber Violet (paling belakang) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 border-2 border-cyber-violet"
                    style={{ transform: "translate(12px, 12px)" }}
                  />

                  {/* Shadow block — Electric Lime (tengah) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 border-2 border-electric-lime"
                    style={{ transform: "translate(6px, 6px)" }}
                  />

                  {/* Main Photo — White border (paling depan) */}
                  <div
                    className="relative overflow-hidden bg-surface"
                    style={{
                      width: "clamp(180px, 22vw, 320px)",
                      height: "clamp(180px, 22vw, 320px)",
                      border: "3px solid #FFFFFF",
                    }}
                  >
                    <Image
                      src="/profile-picture.jpg"
                      alt="Ahmad Fauzidan Yahya Khainur — Fullstack Developer & AI Enthusiast, Informatics @ UNSIKA"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 180px, (max-width: 1024px) 260px, 320px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* end main grid */}
        </div>
      </div>
      {/* end main content */}

      {/* ════════════════════════════════════════════
          LAYER 2 — Marquee Strip
          CSS animation dari animate-marquee (@theme)
          Sesuai design.md 5.2: scroll/marquee paralaks
      ════════════════════════════════════════════ */}
      <div className="relative border-t-[3px] border-pure-white overflow-hidden bg-pure-black">
        {/*
          Dua salinan konten: 0% → -50% = seamless loop.
          Width total = 200%, animasi bergerak -50% = satu siklus penuh.
        */}
        <div className="flex animate-marquee py-3 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={`${copy}-${i}`} className="flex items-center">
                  <span className="text-pure-white font-black text-[9px] uppercase tracking-[0.32em] px-5">
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-black text-sm"
                    style={{ color: "#C6FF33" }}
                  >
                    ·
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
