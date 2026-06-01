"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────────────
   NAV LINKS — anchor-based untuk Hybrid Single-Page
───────────────────────────────────────────────────── */
interface NavLink {
  title: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

/* ─────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────── */
const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: "easeInOut",
      staggerChildren: 0.07,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.18 },
  },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

/* ─────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────── */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll agar navbar background lebih solid saat halaman di-scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu mobile ketika resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* ════════════════════════════════════════
          DESKTOP NAVBAR — Floating pill
      ════════════════════════════════════════ */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`
            flex items-center gap-1 px-2 py-2 rounded-full
            border-2 border-pure-white/15
            backdrop-blur-md
            transition-colors duration-300
            ${
              scrolled
                ? "bg-pure-black/90 border-pure-white/25"
                : "bg-pure-black/60"
            }
          `}
        >
          {/* Logo / Home anchor */}
          <Link
            href="#hero"
            className="
              px-3 py-1 text-xs font-black uppercase tracking-[0.15em]
              text-electric-lime border-2 border-electric-lime/0
              hover:border-electric-lime rounded-full
              transition-all duration-150
            "
            aria-label="Back to top"
          >
            ZK
          </Link>

          {/* Separator */}
          <span aria-hidden="true" className="w-px h-5 bg-pure-white/15 mx-1" />

          {/* Nav Links */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]
                text-pure-white/65 rounded-full
                hover:text-pure-white hover:bg-pure-white/10
                transition-all duration-150
              "
            >
              {link.title}
            </Link>
          ))}

          {/* Separator */}
          <span aria-hidden="true" className="w-px h-5 bg-pure-white/15 mx-1" />

          {/* Resume CTA — styled sebagai badge-lime */}
          <a
            href="/cv-dann.pdf"
            download
            className="
              badge badge-lime py-1.5 px-4 text-[10px] font-black tracking-[0.12em]
              hover:-translate-x-[1px] hover:-translate-y-[1px]
              hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)]
              transition-all duration-150
            "
          >
            RESUME ↓
          </a>
        </motion.nav>
      </div>

      {/* ════════════════════════════════════════
          MOBILE — Hamburger Button
      ════════════════════════════════════════ */}
      <motion.button
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="
          md:hidden fixed top-4 right-4 z-50
          w-11 h-11 flex flex-col items-center justify-center gap-[5px]
          border-2 border-pure-white/25 bg-pure-black/80
          backdrop-blur-md
          transition-colors duration-200
          hover:border-electric-lime
        "
      >
        {/* Bar 1 — rota ke garis X saat terbuka */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="block h-[2px] w-5 bg-pure-white"
        />
        {/* Bar 2 — hilang saat terbuka */}
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
          transition={{ duration: 0.18 }}
          className="block h-[2px] w-5 bg-pure-white"
        />
        {/* Bar 3 — rota berlawanan */}
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="block h-[2px] w-5 bg-pure-white"
        />
      </motion.button>

      {/* ════════════════════════════════════════
          MOBILE MENU — Full-screen overlay
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              md:hidden fixed inset-0 z-40
              bg-pure-black/95 backdrop-blur-lg
              flex flex-col items-center justify-center gap-1
            "
          >
            {/* Logo di atas */}
            <motion.p
              variants={mobileLinkVariants}
              className="display-title text-electric-lime text-5xl mb-8"
            >
              ZK
            </motion.p>

            {/* Nav links besar */}
            {NAV_LINKS.map((link) => (
              <motion.div key={link.href} variants={mobileLinkVariants}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    block text-3xl font-black uppercase tracking-[0.08em]
                    text-pure-white/80 py-3 px-6
                    hover:text-electric-lime
                    transition-colors duration-150
                  "
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}

            {/* Resume button di bawah */}
            <motion.div variants={mobileLinkVariants} className="mt-6">
              <a
                href="/cv-dann.pdf"
                download
                onClick={handleLinkClick}
                className="
                  badge badge-lime py-3 px-8 text-xs font-black tracking-[0.15em]
                  hover:-translate-x-[2px] hover:-translate-y-[2px]
                  hover:shadow-[6px_6px_0px_0px_#FFFFFF]
                  transition-all duration-150
                "
              >
                DOWNLOAD RESUME ↓
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
