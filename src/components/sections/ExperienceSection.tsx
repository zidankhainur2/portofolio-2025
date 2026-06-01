"use client";

import { motion, type Variants } from "framer-motion";
import type { Experience } from "@/data/experiences";
import type { Award } from "@/data/awards";

/* ─────────────────────────────────────────────────────
   PROPS
───────────────────────────────────────────────────── */
interface ExperienceSectionProps {
  experiences: Experience[];
  awards: Award[];
}

/* ─────────────────────────────────────────────────────
   ANIMATION VARIANTS
   Sesuai design.md 5.2: viewport once:true, fade-in up
───────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

// Experience: meluncur dari kiri
const itemFromLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Certificate: meluncur dari kanan
const itemFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────────────
   SUB-COMPONENT: Column header
───────────────────────────────────────────────────── */
interface ColumnHeaderProps {
  label: string;
  color: "violet" | "lime";
}

function ColumnHeader({ label, color }: ColumnHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div
        className="w-5 h-[3px] flex-shrink-0"
        style={{ backgroundColor: color === "violet" ? "#7D39EB" : "#C6FF33" }}
      />
      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-pure-white/35">
        {label}
      </h3>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   SUB-COMPONENT: Experience Item (dengan timeline dot)
───────────────────────────────────────────────────── */
interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  isLast: boolean;
}

function ExperienceItem({ role, company, date, isLast }: ExperienceItemProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline vertical line — menyambung ke item berikutnya */}
      {!isLast && (
        <div
          className="absolute left-[7px] top-4 bottom-0 w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, #7D39EB, rgba(125,57,235,0.1))",
          }}
          aria-hidden="true"
        />
      )}

      {/* Timeline dot — Cyber Violet solid */}
      <div
        className="absolute left-0 top-3 w-[15px] h-[15px] border-2 border-cyber-violet bg-pure-black"
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className={`
          border-l-[3px] border-cyber-violet pl-5 pb-8
          ${!isLast ? "border-b-0" : ""}
        `}
      >
        <div className="hover-lift-lime cursor-default py-3 pr-4 transition-all duration-150">
          <h4 className="font-black text-pure-white text-base leading-snug">
            {role}
          </h4>
          <p className="font-bold text-sm mt-1" style={{ color: "#7D39EB" }}>
            @ {company}
          </p>
          <p className="text-pure-white/30 text-[10px] mt-2 uppercase tracking-[0.2em] font-semibold">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   SUB-COMPONENT: Certificate Item (dengan diamond marker)
───────────────────────────────────────────────────── */
interface CertificateItemProps {
  title: string;
  date: string;
  isLast: boolean;
}

function CertificateItem({ title, date, isLast }: CertificateItemProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline vertical line */}
      {!isLast && (
        <div
          className="absolute left-[7px] top-4 bottom-0 w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, #C6FF33, rgba(198,255,51,0.1))",
          }}
          aria-hidden="true"
        />
      )}

      {/* Diamond marker — Electric Lime, diputar 45deg */}
      <div
        className="absolute left-[2px] top-[10px] w-[11px] h-[11px] rotate-45"
        style={{ backgroundColor: "#C6FF33" }}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="border-l-[3px] border-electric-lime pl-5 pb-7">
        <div className="hover-lift cursor-default py-3 pr-4 transition-all duration-150">
          <h4 className="font-black text-pure-white text-sm leading-snug">
            {title}
          </h4>
          <p
            className="text-[10px] mt-2 uppercase tracking-[0.2em] font-bold"
            style={{ color: "rgba(198,255,51,0.6)" }}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────── */
export default function ExperienceSection({
  experiences,
  awards,
}: ExperienceSectionProps) {
  return (
    <div className="bg-pure-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="mb-16">
          <p className="badge badge-violet mb-5">Experience & Education</p>
          <h2
            className="display-title text-pure-white"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            HISTORY
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-12 h-[3px] bg-electric-lime" />
            <p className="text-pure-white/35 text-[11px] font-semibold uppercase tracking-[0.22em]">
              Where {"I've"} been · What {"I've"} built
            </p>
          </div>
        </div>

        {/* ── Two-Column Timeline Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          {/* ── LEFT: Work Experience ── */}
          <div>
            <ColumnHeader label="Work Experience" color="violet" />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={itemFromLeft}>
                  <ExperienceItem
                    role={exp.role}
                    company={exp.company}
                    date={exp.date}
                    isLast={i === experiences.length - 1}
                  />
                </motion.div>
              ))}

              {/* "More soon" placeholder */}
              <motion.div
                variants={itemFromLeft}
                className="relative pl-8 opacity-25"
              >
                <div
                  className="absolute left-0 top-3 w-[15px] h-[15px] border-2 border-dashed bg-pure-black"
                  style={{ borderColor: "#7D39EB" }}
                />
                <div
                  className="border-l-[3px] border-dashed pl-5 pb-2"
                  style={{ borderColor: "rgba(125,57,235,0.4)" }}
                >
                  <p className="text-pure-white/30 text-xs italic font-medium py-2">
                    More coming soon...
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT: Certificates ── */}
          <div>
            <ColumnHeader label="Certificates & Achievements" color="lime" />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {awards.map((award, i) => (
                <motion.div key={i} variants={itemFromRight}>
                  <CertificateItem
                    title={award.title}
                    date={award.date}
                    isLast={i === awards.length - 1}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
