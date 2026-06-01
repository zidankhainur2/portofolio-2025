import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BlackCatMascot from "@/components/BlackCatMascot";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const BASE_URL = "https://zidankhainurshub.vercel.app";

/* ─────────────────────────────────────────────────────
   JSON-LD STRUCTURED DATA — Schema.org ProfilePage
   Sesuai PRD 3.4: meningkatkan pemahaman Google
   terhadap entitas profil profesional kandidat.
───────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-01-01T00:00:00+07:00",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@type": "Person",
    name: "Ahmad Fauzidan Yahya Khainur",
    alternateName: ["Zidan", "Zidan Khainur", "zidankhainur2"],
    url: BASE_URL,
    email: "zidankhainur2@gmail.com",
    jobTitle: "Fullstack Developer & AI Enthusiast",
    description:
      "Informatics student at Universitas Singaperbangsa Karawang. Building full-stack web apps with Next.js/React, AI systems with Python, and IoT solutions with ESP32.",
    image: `${BASE_URL}/profile-picture.jpg`,
    sameAs: [
      "https://github.com/zidankhainur2",
      "https://www.linkedin.com/in/ahmad-fauzidan-yahya-khainur/",
      "https://www.instagram.com/zidankhainur_/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Singaperbangsa Karawang",
      alternateName: "UNSIKA",
      url: "https://www.unsika.ac.id",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karawang",
        addressRegion: "West Java",
        addressCountry: "ID",
      },
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Golang",
      "Python",
      "Machine Learning",
      "Support Vector Machine",
      "Convolutional Neural Network",
      "IoT",
      "ESP32",
      "Full-Stack Web Development",
      "Sentiment Analysis",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karawang",
      addressRegion: "West Java",
      addressCountry: "ID",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Fullstack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Indonesia",
      },
    },
  },
};

/* ─────────────────────────────────────────────────────
   METADATA — Open Graph + Twitter Cards + Robots
   Sesuai PRD 3.4 dan PRD 4.1 (SEO target 90+)
───────────────────────────────────────────────────── */
export const metadata: Metadata = {
  // metadataBase wajib ada agar URL relatif di OG/Twitter resolve dengan benar
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Zidan Khainur — Fullstack Developer & AI Enthusiast",
    template: "%s | Zidan Khainur",
  },
  description:
    "Portfolio Ahmad Fauzidan Yahya Khainur (Zidan). Informatics student at UNSIKA — building full-stack web apps, AI classification systems, and IoT security solutions.",
  keywords: [
    "fullstack developer",
    "Next.js developer",
    "React developer",
    "AI developer Indonesia",
    "UNSIKA informatika",
    "Zidan Khainur",
    "Ahmad Fauzidan Yahya Khainur",
    "web developer Karawang",
    "portofolio developer",
    "machine learning Indonesia",
    "sentiment analysis SVM",
    "emotion recognition CNN",
    "IoT ESP32",
  ],
  authors: [{ name: "Ahmad Fauzidan Yahya Khainur", url: BASE_URL }],
  creator: "Ahmad Fauzidan Yahya Khainur",

  // Open Graph — digunakan saat link dibagikan di sosial media
  openGraph: {
    title: "Zidan Khainur — Fullstack Developer & AI Enthusiast",
    description:
      "Portfolio of Ahmad Fauzidan Yahya Khainur. Building full-stack web apps, AI systems, and IoT solutions.",
    url: BASE_URL,
    siteName: "Zidan Khainur Portfolio",
    locale: "en_US",
    type: "website",
    // OG Image di-generate otomatis dari src/app/opengraph-image.tsx
  },

  // Twitter Cards — tampilan preview di Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Zidan Khainur — Fullstack Developer & AI Enthusiast",
    description:
      "Portfolio of Ahmad Fauzidan Yahya Khainur. Building full-stack web apps, AI systems, and IoT solutions.",
    // creator: "@your_twitter_handle", // ⚠️ Isi jika punya akun Twitter
  },

  // Instruksi untuk robot crawler mesin pencari
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Navbar />
        {children}
        <BlackCatMascot />

        {/*
          JSON-LD Structured Data
          Dirender sebagai teks statis di HTML — tidak perlu JS.
          Google Search Console membaca ini untuk memahami profil kandidat.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
