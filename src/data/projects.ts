// src/data/projects.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string; // Opsional, jika proyeknya di-deploy
  repoUrl: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "SaveBill",
    description:
      "An interactive website integrated with AI to simplify the calculation of household monthly electricity bills, complete with an AI chat feature.",
    image: "/savebill.png", // Ganti dengan path gambar Anda
    tags: ["Next.js", "React", "Tailwind CSS", "Golang"],
    repoUrl: "https://github.com/zidankhainur2/savebill",
    // liveUrl: "https://savebill.com" // Tambahkan ini jika sudah di-deploy
  },
  {
    id: 2,
    title: "VYMO (Vision Your Mood)",
    description:
      "A web application integrated with an AI model to classify human emotions from facial expressions, featuring real-time, video, and image analysis modes. The model is built using CNN.",
    image: "/vymo.png", // Ganti dengan path gambar Anda
    tags: ["React", "Tailwind CSS", "Python", "Flask", "CNN"],
    repoUrl: "https://github.com/zidankhainur2/vymo",
  },
  // Anda bisa menambahkan proyek lain di sini di masa depan
];
