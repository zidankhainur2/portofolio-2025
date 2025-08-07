// src/app/projects/page.tsx
"use client";

import Image from "next/image";
import { projectsData } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Judul Halaman */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Projects
          </h1>
          <p className="text-lg text-gray-500 mt-4">
            A collection of projects {"I've"} worked on to sharpen my skills.
          </p>
        </header>

        {/* Daftar Proyek */}
        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 rounded-lg shadow-sm bg-gray-50/50 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "" // Layout selang-seling
              }`}
            >
              {/* Kolom Gambar Proyek */}
              <div className="w-full md:w-1/2">
                <a
                  href={project.liveUrl || project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block shadow-xl rounded-lg overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1280}
                      height={720}
                      className="w-full object-cover object-top transform transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                </a>
              </div>

              {/* Kolom Deskripsi Proyek */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start space-x-4">
                  {/* Tombol Live Demo (hanya muncul jika liveUrl ada) */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                    >
                      <FaExternalLinkAlt />
                      <span>View Live</span>
                    </a>
                  )}
                  {/* Tombol GitHub */}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-700 text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition-colors font-semibold"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
