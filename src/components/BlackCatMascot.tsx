"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaArrowUp } from "react-icons/fa";

/* ─────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────── */
type Mood = "resting" | "alert";

/* ─────────────────────────────────────────────────────
   CAT SVG — Komponen SVG inline dengan Framer Motion
   ViewBox: 0 0 90 110 (portrait)
   Desain: geometric minimalis, Neo-Brutalism
───────────────────────────────────────────────────── */
interface CatSVGProps {
  mood: Mood;
  isDisabled: boolean;
}

function CatSVG({ mood, isDisabled }: CatSVGProps) {
  const isAlert = mood === "alert" && !isDisabled;

  return (
    <svg
      viewBox="0 0 90 110"
      className="w-full h-full"
      fill="none"
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      {/* ══════════════════════════════
          EKOR — wagging rotation
          Digambar dulu agar di belakang tubuh
      ══════════════════════════════ */}
      <motion.g
        style={{ transformOrigin: "74px 86px" }}
        animate={{
          rotate: isAlert ? [0, 20, -8, 20, 0] : [0, 6, -6, 6, 0],
        }}
        transition={{
          duration: isAlert ? 0.85 : 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/*
          Cubic bezier ekor: mulai dari pinggul kanan (74,86),
          melengkung ke kanan-atas, ujung di (82,30)
        */}
        <path
          d="M 74 86 C 106 68 104 34 82 30"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.g>

      {/* ══════════════════════════════
          TUBUH — napas lambat saat istirahat
      ══════════════════════════════ */}
      <motion.rect
        x="12"
        y="58"
        width="66"
        height="48"
        rx="18"
        fill="#000000"
        stroke="#FFFFFF"
        strokeWidth="2"
        animate={{
          scaleY: isAlert || isDisabled ? 1 : [1, 1.045, 1],
        }}
        style={{ transformOrigin: "45px 82px" }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ══════════════════════════════
          KEPALA
      ══════════════════════════════ */}
      <circle
        cx="45"
        cy="32"
        r="25"
        fill="#000000"
        stroke="#FFFFFF"
        strokeWidth="2"
      />

      {/* ══════════════════════════════
          TELINGA KIRI + KANAN
          Inner: Electric Lime
      ══════════════════════════════ */}
      <polygon
        points="11,22 3,1 31,16"
        fill="#000000"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polygon points="14,19 9,5 29,15" fill="#C6FF33" />

      <polygon
        points="79,22 87,1 59,16"
        fill="#000000"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polygon points="76,19 81,5 61,15" fill="#C6FF33" />

      {/* ══════════════════════════════
          MATA TERTUTUP — saat resting
          Arc melengkung ke atas (ekspresi senang/mengantuk)
      ══════════════════════════════ */}
      <motion.g
        animate={{ opacity: isAlert ? 0 : 1 }}
        transition={{ duration: 0.18 }}
      >
        <path
          d="M 30 30 Q 36 24 42 30"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 48 30 Q 54 24 60 30"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </motion.g>

      {/* ══════════════════════════════
          MATA TERBUKA — saat alert
          Muncul dengan spring pop effect
          Pupil: Electric Lime shine
      ══════════════════════════════ */}
      <motion.g
        animate={{
          opacity: isAlert ? 1 : 0,
          scale: isAlert ? 1 : 0.25,
        }}
        style={{ transformOrigin: "45px 30px" }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 20,
        }}
      >
        {/* Mata kiri */}
        <circle cx="36" cy="30" r="7.5" fill="#FFFFFF" />
        <circle cx="36" cy="30" r="4.5" fill="#000000" />
        <circle cx="38" cy="27.5" r="2" fill="#C6FF33" />
        {/* Mata kanan */}
        <circle cx="54" cy="30" r="7.5" fill="#FFFFFF" />
        <circle cx="54" cy="30" r="4.5" fill="#000000" />
        <circle cx="56" cy="27.5" r="2" fill="#C6FF33" />
      </motion.g>

      {/* ══════════════════════════════
          HIDUNG + MULUT
      ══════════════════════════════ */}
      {/* Hidung: segitiga Cyber Violet */}
      <polygon points="43,38 47,38 45,43" fill="#7D39EB" />
      {/* Mulut: senyum kecil */}
      <path
        d="M 41,43 Q 45,48 49,43"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* ══════════════════════════════
          TELAPAK KAKI
      ══════════════════════════════ */}
      <ellipse
        cx="27"
        cy="101"
        rx="13"
        ry="6.5"
        fill="#000000"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <ellipse
        cx="63"
        cy="101"
        rx="13"
        ry="6.5"
        fill="#000000"
        stroke="#FFFFFF"
        strokeWidth="2"
      />

      {/* ══════════════════════════════
          BUBBLE ZZZ — saat resting (bukan disabled)
          Tiga "z" mengapung berurutan
      ══════════════════════════════ */}
      <AnimatePresence>
        {!isAlert && !isDisabled && (
          <motion.g
            key="zzz-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {(
              [
                { x: 67, y: 15, size: "9", delay: 0 },
                { x: 73, y: 8, size: "7", delay: 0.85 },
                { x: 78, y: 2, size: "5.5", delay: 1.7 },
              ] as const
            ).map((z, i) => (
              <motion.g
                key={i}
                animate={{ opacity: [0, 0.85, 0], y: [0, -5, -13] }}
                transition={{
                  duration: 2.4,
                  delay: z.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                <text
                  x={z.x}
                  y={z.y}
                  fontSize={z.size}
                  fontWeight="900"
                  fill="#FFFFFF"
                  fontFamily="sans-serif"
                >
                  z
                </text>
              </motion.g>
            ))}
          </motion.g>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════
          TANDA SERU — saat alert
          Electric Lime, muncul dengan pop
      ══════════════════════════════ */}
      <AnimatePresence>
        {isAlert && (
          <motion.g
            key="exclamation"
            initial={{ opacity: 0, y: 6, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
            style={{ transformOrigin: "70px 10px" }}
          >
            <text
              x="67"
              y="10"
              fontSize="13"
              fontWeight="900"
              fill="#C6FF33"
              fontFamily="sans-serif"
            >
              !
            </text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN COMPONENT — BlackCatMascot
   Fixed di kanan bawah layar, berdampingan dengan
   tombol Back to Top. Sesuai design.md 4.4.
───────────────────────────────────────────────────── */
export default function BlackCatMascot() {
  const [mood, setMood] = useState<Mood>("resting");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ── Scroll listener ── */
  useEffect(() => {
    // Timer untuk kembali ke "resting" setelah scroll berhenti
    let resetTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      // Back to top visibility
      setShowBackToTop(window.scrollY > 400);

      // Bangunkan kucing saat ada scroll (jika tidak dinonaktifkan)
      if (!isDisabled) {
        setMood("alert");
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => setMood("resting"), 2600);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(resetTimer);
    };
  }, [isDisabled]);

  /* ── Hover handlers ── */
  const handleMouseEnter = useCallback(() => {
    if (!isDisabled) setMood("alert");
  }, [isDisabled]);

  const handleMouseLeave = useCallback(() => {
    if (!isDisabled) setMood("resting");
  }, [isDisabled]);

  /* ── Toggle sleep/wake ── */
  const toggleDisabled = useCallback(() => {
    setIsDisabled((prev) => {
      // Saat diaktifkan kembali → reset ke resting
      if (prev) setMood("resting");
      return !prev;
    });
  }, []);

  /* ── Back to top ── */
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    /*
      Fixed container: kanan bawah layar
      flex column, items-end → semua elemen rata kanan
      z-30 → di atas konten tapi di bawah drawer (z-40+)
    */
    <div
      className="fixed bottom-6 right-5 z-30 flex flex-col items-end gap-2.5"
      aria-label="Site controls"
    >
      {/* ══════════════════════════════
          TOMBOL BACK TO TOP
          Muncul saat scroll > 400px
      ══════════════════════════════ */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="
              w-9 h-9 flex items-center justify-center
              border-2 border-pure-white/30
              bg-pure-black/85 backdrop-blur-sm
              text-pure-white/55
              hover:border-electric-lime hover:text-electric-lime
              hover:bg-electric-lime/8 hover:-translate-y-1
              transition-all duration-150 ease-out
              focus:outline-none focus:border-electric-lime
            "
          >
            <FaArrowUp size={11} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════
          MASCOT WRAPPER
          Hover → kucing bangun
          opacity turun saat disabled
      ══════════════════════════════ */}
      <motion.div
        animate={{ opacity: isDisabled ? 0.22 : 1 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer"
      >
        {/* ──────────────────────────────
            TOMBOL TOGGLE SLEEP
            Absolute di pojok kiri-atas kucing
            FaMoon = aktif (klik untuk nonaktifkan)
            FaSun  = disabled (klik untuk aktifkan kembali)
        ────────────────────────────── */}
        <motion.button
          onClick={toggleDisabled}
          aria-label={
            isDisabled ? "Aktifkan maskot kucing" : "Nonaktifkan maskot kucing"
          }
          aria-pressed={isDisabled}
          title={isDisabled ? "Wake up the cat" : "Put the cat to sleep"}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="
            absolute -top-2 -left-3 z-10
            w-[22px] h-[22px] flex items-center justify-center
            border border-pure-white/20
            bg-pure-black/95
            transition-colors duration-150
            focus:outline-none focus:border-electric-lime
          "
          style={{
            color: isDisabled ? "#C6FF33" : "rgba(255,255,255,0.35)",
            borderColor: isDisabled
              ? "rgba(198,255,51,0.5)"
              : "rgba(255,255,255,0.15)",
          }}
        >
          {isDisabled ? <FaSun size={8} /> : <FaMoon size={8} />}
        </motion.button>

        {/* ──────────────────────────────
            CAT SVG — 76×93px
            Lebar dari viewBox 90:110 = ~76:93
        ────────────────────────────── */}
        <div className="w-[76px]" style={{ aspectRatio: "90 / 110" }}>
          <CatSVG mood={mood} isDisabled={isDisabled} />
        </div>

        {/* ──────────────────────────────
            DISABLED OVERLAY TEXT
            "zzz" besar yang muncul di atas kucing
            saat pengguna menonaktifkan maskot
        ────────────────────────────── */}
        <AnimatePresence>
          {isDisabled && (
            <motion.span
              key="disabled-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                absolute inset-0 flex items-center justify-center
                text-pure-white/30 text-xs font-black uppercase tracking-widest
                pointer-events-none
              "
            >
              zzz
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
