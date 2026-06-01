"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import type { Project } from "@/data/projects";

/* ─────────────────────────────────────────────────────
   PROPS
───────────────────────────────────────────────────── */
interface ProjectDrawerProps {
  project: Project | null; // null = drawer tertutup
  onClose: () => void;
}

/* ─────────────────────────────────────────────────────
   FRAMER MOTION VARIANTS
───────────────────────────────────────────────────── */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
};

const drawerVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0.6,
    transition: { duration: 0.3, ease: [0.22, 0, 0.36, 1] },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    opacity: 0.6,
    transition: { duration: 0.3, ease: [0.22, 0, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────────────
   HELPER — badge class per variant
───────────────────────────────────────────────────── */
function getBadgeClass(variant: "lime" | "violet" | "white"): string {
  const base = "badge text-[9px] tracking-widest";
  if (variant === "lime") return `${base} badge-lime`;
  if (variant === "violet") return `${base} badge-violet`;
  return `${base} badge-white`;
}

/* ─────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────── */
export default function ProjectDrawer({
  project,
  onClose,
}: ProjectDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = project !== null;

  /* ── Body scroll lock ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-focus tombol close untuk aksesibilitas keyboard
      setTimeout(() => closeButtonRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ── ESC key to close ── */
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* ══════════════════════════════════════════
              BACKDROP — klik untuk tutup
          ════════════════════════════════════════════ */}
          <motion.div
            key="drawer-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-pure-black/70 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ══════════════════════════════════════════
              DRAWER PANEL
              Lebar: full mobile, 50vw tablet, 45vw desktop (maks 680px)
              Sesuai design.md 4.3
          ════════════════════════════════════════════ */}
          <motion.aside
            key="drawer-panel"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label={`Project details: ${project.title}`}
            className="
              fixed top-0 right-0 bottom-0 z-50
              w-full md:w-[50vw] lg:w-[45vw]
              max-w-[680px]
              bg-pure-black
              border-l-[3px] border-pure-white
              flex flex-col
              overflow-hidden
            "
          >
            {/* ──────────────────────────────────────
                STICKY HEADER
                Judul + Tech Badges + Tombol Tutup
            ────────────────────────────────────── */}
            <div className="flex-shrink-0 border-b-[3px] border-pure-white px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                {/* Judul proyek */}
                <div className="flex-1 min-w-0">
                  <p
                    className="badge mb-3"
                    style={{
                      backgroundColor:
                        project.accentColor === "lime" ? "#C6FF33" : "#7D39EB",
                      color:
                        project.accentColor === "lime" ? "#000000" : "#FFFFFF",
                      borderColor:
                        project.accentColor === "lime" ? "#000000" : "#7D39EB",
                    }}
                  >
                    PROJECT DETAIL
                  </p>
                  <h2 className="text-pure-white font-black text-xl md:text-2xl leading-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Tombol Tutup */}
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Close project details"
                  className="
                    flex-shrink-0 w-10 h-10 flex items-center justify-center
                    border-2 border-pure-white/30 text-pure-white/60
                    hover:border-pure-white hover:text-pure-white
                    hover:bg-pure-white/10
                    transition-all duration-150
                    focus:outline-none focus:border-electric-lime focus:text-electric-lime
                  "
                >
                  <FaTimes size={14} />
                </button>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                  <span key={tech.name} className={getBadgeClass(tech.variant)}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* ──────────────────────────────────────
                SCROLLABLE CONTENT BODY
            ────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="px-6 py-8 space-y-8">
                {/* ── Section 1: Problem Statement & Impact ── */}
                <section aria-labelledby="drawer-problem-heading">
                  {/* Label section */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-1 h-6 flex-shrink-0"
                      style={{
                        backgroundColor:
                          project.accentColor === "lime"
                            ? "#C6FF33"
                            : "#7D39EB",
                      }}
                    />
                    <h3
                      id="drawer-problem-heading"
                      className="text-[10px] font-black uppercase tracking-[0.22em] text-pure-white/50"
                    >
                      Problem Statement
                    </h3>
                  </div>
                  <p className="text-pure-white/80 leading-relaxed text-sm md:text-[15px]">
                    {project.problem}
                  </p>
                </section>

                {/* Divider */}
                <div className="border-t border-pure-white/10" />

                {/* ── Section 2: Impact ── */}
                <section aria-labelledby="drawer-impact-heading">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-1 h-6 flex-shrink-0"
                      style={{
                        backgroundColor:
                          project.accentColor === "lime"
                            ? "#C6FF33"
                            : "#7D39EB",
                      }}
                    />
                    <h3
                      id="drawer-impact-heading"
                      className="text-[10px] font-black uppercase tracking-[0.22em] text-pure-white/50"
                    >
                      Impact & Results
                    </h3>
                  </div>
                  <p className="text-pure-white/80 leading-relaxed text-sm md:text-[15px]">
                    {project.impact}
                  </p>
                </section>

                {/* Divider */}
                <div className="border-t border-pure-white/10" />

                {/* ── Section 3: Technical Deep Dive ── */}
                <section aria-labelledby="drawer-tech-heading">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-1 h-6 flex-shrink-0"
                      style={{
                        backgroundColor:
                          project.accentColor === "lime"
                            ? "#C6FF33"
                            : "#7D39EB",
                      }}
                    />
                    <h3
                      id="drawer-tech-heading"
                      className="text-[10px] font-black uppercase tracking-[0.22em] text-pure-white/50"
                    >
                      Technical Deep Dive
                    </h3>
                  </div>
                  {/* whitespace-pre-line: menghormati \n dalam string data */}
                  <p className="text-pure-white/80 leading-relaxed text-sm md:text-[15px] whitespace-pre-line">
                    {project.technicalDeepDive}
                  </p>
                </section>
              </div>
            </div>

            {/* ──────────────────────────────────────
                STICKY FOOTER — CTA Buttons
                Sesuai design.md 4.3 point 4
            ────────────────────────────────────── */}
            <div className="flex-shrink-0 border-t-[3px] border-pure-white px-6 py-5">
              <div className="flex flex-wrap items-center gap-3">
                {/* GitHub Repo */}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 min-w-[140px]
                    flex items-center justify-center gap-2
                    badge badge-white py-3 px-4 text-[10px] font-black tracking-[0.12em]
                    hover:-translate-x-[2px] hover:-translate-y-[2px]
                    hover:shadow-[5px_5px_0px_0px_#C6FF33]
                    transition-all duration-150
                  "
                >
                  <FaGithub size={13} />
                  VIEW ON GITHUB
                </a>

                {/* Live Demo — hanya tampil jika ada */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 min-w-[140px]
                      flex items-center justify-center gap-2
                      badge badge-lime py-3 px-4 text-[10px] font-black tracking-[0.12em]
                      hover:-translate-x-[2px] hover:-translate-y-[2px]
                      hover:shadow-[5px_5px_0px_0px_#FFFFFF]
                      transition-all duration-150
                    "
                  >
                    <FaExternalLinkAlt size={11} />
                    LIVE DEMO
                  </a>
                )}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
