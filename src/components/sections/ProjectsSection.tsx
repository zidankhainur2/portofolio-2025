"use client";

import { useState, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import ProjectDrawer from "@/components/ProjectDrawer";
import type { Project } from "@/data/projects";

/* ─────────────────────────────────────────────────────
   PROPS
───────────────────────────────────────────────────── */
interface ProjectsSectionProps {
  projects: Project[];
}

/* ─────────────────────────────────────────────────────
   ANIMATION VARIANTS
   viewport: once: true → animasi hanya sekali saat masuk
───────────────────────────────────────────────────── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────────────
   PROJECT CARD SUB-COMPONENT
───────────────────────────────────────────────────── */
interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const isLime = project.accentColor === "lime";
  const isOffset = index % 3 === 3; // setiap kartu ke-3 digeser sedikit ke bawah

  return (
    <motion.article
      variants={cardVariants}
      className={`group relative flex flex-col bg-pure-black border-2 border-pure-white/20
        ${isOffset ? "md:translate-y-8" : ""}
      `}
      style={{ willChange: "transform" }}
    >
      {/* ── Accent strip — top border sesuai warna proyek ── */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{ backgroundColor: isLime ? "#C6FF33" : "#7D39EB" }}
        aria-hidden="true"
      />

      {/* ── Project Image ── */}
      <div className="relative w-full aspect-video overflow-hidden flex-shrink-0 border-b-2 border-pure-white/10">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          className="
            object-cover object-top
            grayscale group-hover:grayscale-0
            scale-100 group-hover:scale-105
            transition-all duration-500 ease-out
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Overlay gradient untuk keterbacaan */}
        <div className="absolute inset-0 bg-gradient-to-t from-pure-black/60 to-transparent" />
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Tag Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="badge text-[8px] tracking-widest"
              style={{
                backgroundColor: "transparent",
                color: isLime ? "#C6FF33" : "#7D39EB",
                borderColor: isLime ? "#C6FF33" : "#7D39EB",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Judul */}
        <h3 className="text-pure-white font-black text-base md:text-lg leading-snug group-hover:text-electric-lime transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-pure-white/50 text-[13px] leading-relaxed flex-1 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => onOpen(project)}
          aria-label={`View technical details for ${project.title}`}
          className={`
            mt-auto badge py-3 text-[10px] font-black tracking-[0.14em] w-full justify-center
            transition-all duration-150 ease-out
            hover:-translate-x-[2px] hover:-translate-y-[2px]
            ${
              isLime
                ? "badge-lime hover:shadow-[5px_5px_0px_0px_#FFFFFF]"
                : "badge-violet hover:shadow-[5px_5px_0px_0px_#C6FF33]"
            }
          `}
        >
          VIEW TECHNICAL DETAILS →
        </button>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN SECTION COMPONENT
───────────────────────────────────────────────────── */
export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = useCallback(
    (project: Project) => setSelectedProject(project),
    [],
  );
  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      {/* ── Drawer (rendered outside section flow, fixed position) ── */}
      <ProjectDrawer project={selectedProject} onClose={handleClose} />

      {/* ── Section Container ── */}
      <div className="bg-pure-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* ── Section Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            {/* Label + Judul */}
            <div>
              <p className="badge badge-lime mb-4">Selected Work</p>
              <h2
                className="display-title text-pure-white"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
              >
                PROJECTS
              </h2>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-12 h-[3px] bg-cyber-violet" />
                <p className="text-pure-white/40 text-xs font-semibold uppercase tracking-[0.2em]">
                  Engineering Discipline in Practice
                </p>
              </div>
            </div>

            {/* Keterangan jumlah proyek */}
            <p className="text-pure-white/25 font-mono text-xs uppercase tracking-widest md:text-right">
              {projects.length} projects
              <br />
              <span className="text-electric-lime/60">
                click card → details
              </span>
            </p>
          </div>

          {/* ── Card Grid ── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 items-start"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={handleOpen}
              />
            ))}
          </motion.div>

          {/* ── Bottom note ── */}
          <div className="mt-14 border-t-2 border-pure-white/10 pt-6 flex items-center justify-between">
            <p className="text-pure-white/25 text-xs font-mono uppercase tracking-widest">
              More projects on GitHub
            </p>
            <a
              href="https://github.com/zidankhainur2"
              target="_blank"
              rel="noopener noreferrer"
              className="
                badge badge-ghost py-2 px-4 text-[10px] font-black tracking-widest
                hover:badge-white hover:-translate-x-[1px] hover:-translate-y-[1px]
                hover:shadow-[4px_4px_0px_0px_#C6FF33]
                transition-all duration-150
              "
            >
              GITHUB PROFILE →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
