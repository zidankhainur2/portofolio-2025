import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

// Import data langsung di Server Component
// (bukan di client component, agar robot crawler membaca teks teknis tanpa JS)
import { experiencesData } from "@/data/experiences";
import { awardsData } from "@/data/awards";
import { projectsData } from "@/data/projects";

export default function HomePage() {
  return (
    // Canvas utama: latar belakang hitam pekat sebagai fondasi Neo-Brutalism
    <main className="bg-pure-black text-pure-white min-h-screen overflow-x-hidden">
      {/* ─────────────────────────────────────────
          SECTION 1: HERO
          The Poster Canvas — asimetris, eksperimental
          Dibangun di: Fase 2
      ───────────────────────────────────────── */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Divider tebal antar section (pengganti whitespace) */}
      <div className="section-divider-violet" aria-hidden="true" />

      {/* ─────────────────────────────────────────
          SECTION 2: EXPERIENCE & EDUCATION
          Timeline vertikal kronologis + Sertifikat
          Data dioper dari Server Component sebagai props
          Dibangun di: Fase 2
      ───────────────────────────────────────── */}
      <section id="experience" className="scroll-mt-20">
        <ExperienceSection experiences={experiencesData} awards={awardsData} />
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* ─────────────────────────────────────────
          SECTION 3: PROJECTS
          Card grid + Slide-out Drawer detail teknis
          Data dioper dari Server Component sebagai props
          Dibangun di: Fase 3
      ───────────────────────────────────────── */}
      <section id="projects" className="scroll-mt-20">
        <ProjectsSection projects={projectsData} />
      </section>

      <div className="section-divider-violet" aria-hidden="true" />

      {/* ─────────────────────────────────────────
          SECTION 4: CONTACT
          CTA sederhana + link sosial media
          Dibangun di: Fase 5
      ───────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>
    </main>
  );
}
