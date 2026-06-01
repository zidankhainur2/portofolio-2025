import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

/* ─────────────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────────────── */
interface SocialLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/zidankhainur2",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/ahmad-fauzidan-yahya-khainur/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.instagram.com/zidankhainur_/",
    label: "Instagram",
    icon: FaInstagram,
  },
];

const CURRENT_YEAR = new Date().getFullYear();

/* ─────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────── */
export default function ContactSection() {
  return (
    <section aria-label="Contact">
      {/* ════════════════════════════════════════════
          CONTACT BODY
      ════════════════════════════════════════════ */}
      <div className="bg-pure-black py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <p className="badge badge-lime mb-8">Get In Touch</p>

          {/* ── CTA Headline — Poster typography sesuai design.md 4.1 ── */}
          <div className="mb-12">
            <h2 aria-label="Got an idea? Let's build it together.">
              <span
                className="display-title block text-pure-white"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 9rem)",
                  lineHeight: 0.88,
                  transform: "rotate(-2.5deg)",
                  display: "inline-block",
                  transformOrigin: "left center",
                }}
              >
                GOT AN
              </span>
              <span
                className="display-title block text-electric-lime"
                style={{
                  fontSize: "clamp(3rem, 8vw, 8rem)",
                  lineHeight: 0.88,
                  transform: "rotate(-1deg)",
                  display: "inline-block",
                  transformOrigin: "left center",
                  marginTop: "0.06em",
                }}
              >
                IDEA?
              </span>
            </h2>
            <p className="text-pure-white/40 text-sm md:text-base font-medium mt-8 max-w-md leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of something impactful. Let&apos;s
              talk.
            </p>
          </div>

          {/* ── Email CTA Button ── */}
          <div className="mb-10">
            <a
              href="mailto:zidankhainur2@gmail.com"
              className="
                inline-flex items-center gap-3
                badge badge-lime py-4 px-7
                text-sm md:text-base font-black tracking-[0.06em]
                hover-lift
              "
            >
              <FaEnvelope size={15} aria-hidden="true" />
              zidankhainur2@gmail.com
            </a>
          </div>

          {/* ── Social Icons Row ── */}
          <div
            className="flex items-center gap-3"
            aria-label="Social media links"
          >
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${label} profile`}
                className="
                  w-11 h-11 flex items-center justify-center
                  border-2 border-pure-white/20 text-pure-white/45
                  hover:border-electric-lime hover:text-electric-lime
                  hover:-translate-y-1
                  transition-all duration-150 ease-out
                "
              >
                <Icon size={16} />
              </a>
            ))}

            {/* Separator + "Open to work" badge */}
            <span
              className="w-px h-8 bg-pure-white/10 mx-1"
              aria-hidden="true"
            />
            <span className="badge badge-ghost text-[9px] tracking-widest">
              Open to Internship 2026
            </span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          FOOTER STRIP
          Thick border atas — sesuai design.md 4.2
      ════════════════════════════════════════════ */}
      <footer
        className="border-t-[3px] border-pure-white bg-pure-black py-5 px-6"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left: copyright */}
          <p className="text-pure-white/20 text-[10px] font-mono uppercase tracking-[0.25em]">
            © {CURRENT_YEAR} Ahmad Fauzidan Yahya Khainur
          </p>

          {/* Center: initials (hidden on mobile) */}
          <p className="hidden md:block display-title text-electric-lime/25 text-sm">
            ZK
          </p>

          {/* Right: stack info */}
          <p className="text-pure-white/15 text-[10px] font-mono uppercase tracking-[0.2em] text-center sm:text-right">
            Built with <span className="text-electric-lime/40">Next.js 15</span>{" "}
            · <span className="text-cyber-violet/50">Framer Motion</span> ·
            Deployed on <span className="text-electric-lime/40">Vercel</span>
          </p>
        </div>
      </footer>
    </section>
  );
}
