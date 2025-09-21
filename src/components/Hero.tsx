"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Teks */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-4">
            Hi, {"I'm"} Ahmad Fauzidan.
          </h1>
          <h2 className="text-sm md:text-lg text-gray-500 tracking-tight mb-4">
            WebDev | Undergraduate Informatics Student @ UNSIKA
          </h2>

          {/* Animasi Ketik */}
          <TypeAnimation
            sequence={[
              "I'm Still Learning.",
              2000,
              "I'm Obssessed with AI.",
              2000,
              "I Love Cats, Photography, and Music.",
              3000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed h-16 md:h-auto"
            repeat={Infinity}
          />

          {/* Ikon Sosial Media */}
          <div className="flex justify-center md:justify-start items-center space-x-8 mt-12">
            <a href="mailto:zidankhainur2@gmail.com" aria-label="Email">
              <FaEnvelope
                size={30}
                className="text-gray-500 hover:text-[#D44638] transition-colors duration-300"
              />
            </a>
            <a
              href="https://github.com/zidankhainur2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub
                size={30}
                className="text-gray-500 hover:text-[#181717] transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-fauzidan-yahya-khainur/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                size={30}
                className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/zidankhainur_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={30}
                className="text-gray-500 hover:text-[#E1306C] transition-colors duration-300"
              />
            </a>
          </div>
        </div>

        {/* Kolom Gambar */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <Image
              src="/profile-picture.jpg"
              alt="Foto Ahmad Fauzidan"
              width={320}
              height={320}
              className="rounded-full object-cover shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
