// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Gunakan Link dari Next.js untuk navigasi

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
  ];

  // Varian animasi untuk menu overlay
  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1, // Animasi link satu per satu
      },
    },
  };

  // Varian animasi untuk setiap item link
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Container untuk Navbar di Desktop */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="hidden md:flex items-center gap-8 px-8 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <a
            href="/cv-dann.pdf"
            download
            className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Resume
          </a>
        </motion.nav>
      </div>

      {/* Tombol Hamburger untuk Mobile */}
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg"
        aria-label="Toggle menu"
      >
        {/* Animasi Garis Hamburger menjadi X */}
        <div className="space-y-1.5">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-0.5 w-6 bg-gray-800"
          ></motion.span>
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="block h-0.5 w-6 bg-gray-800"
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-0.5 w-6 bg-gray-800"
          ></motion.span>
        </div>
      </motion.button>

      {/* Menu Overlay untuk Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center"
          >
            <motion.ul
              variants={menuVariants} // Menggunakan varian yang sama untuk container link
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                    className="text-2xl font-semibold text-gray-800"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={linkVariants}>
                <a
                  href="/cv-dann.pdf"
                  download
                  className="mt-4 bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium"
                >
                  Unduh CV
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
