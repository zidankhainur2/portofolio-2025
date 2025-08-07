// src/app/about/page.tsx
"use client";

import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiNodedotjs,
  SiVercel,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

// Definisikan data tech stack di sini
const techStack = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={48} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={48} className="text-blue-500" />,
  },
  { name: "Python", icon: <SiPython size={48} className="text-blue-400" /> },
  { name: "React", icon: <SiReact size={48} className="text-sky-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={48} className="text-black dark:text-white" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={48} className="text-green-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={48} className="text-cyan-400" />,
  },
  { name: "Git", icon: <SiGit size={48} className="text-orange-600" /> },
  {
    name: "Vercel",
    icon: <SiVercel size={48} className="text-black dark:text-white" />,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24 md:py-52">
      <div className="container mx-auto px-4">
        {/* === Bagian Perkenalan Diri === */}
        <section className="grid md:grid-cols-3 gap-12 items-center mb-24">
          <div className="md:col-span-1 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <Image
                src="/dann1.jpg" // Pastikan file ini ada di folder /public
                alt="Foto Ahmad Fauzidan"
                width={250}
                height={250}
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </motion.div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              A Little Bit About Me
            </h1>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Hi, you can call me Zidan. My full name is Ahmad Fauzidan Yahya
                Khainur. {"I'm"} currently an undergraduate Informatics student
                at Universitas Singaperbangsa Karawang. {"I'm"} passionate about
                building things for the web and exploring the world of
                Artificial Intelligence. My goal is to leverage these skills to
                create impactful and innovative digital solutions.
              </p>
              <p>
                Outside of coding, I enjoy listening to Indonesian pop music.
                {"You'll"} often find me with artists like Juicy Luicy, Tulus,
                HIVI!, and many others on repeat. {"It's"} the perfect
                soundtrack for a coding session or just to unwind.
              </p>
              <p>
                Feel free to reach out for any inquiries or just to connect! You
                can email me at{" "}
                <a
                  href="mailto:zidankhainur2@gmail.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  zidankhainur2@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* === Bagian Tech Stack === */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            My Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 text-center"
              >
                <div className="p-4 bg-white rounded-full shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
