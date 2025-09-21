// src/data/projects.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "SaveBill: AI-Powered Energy Consumption Analyst",
    description:
      "An interactive website integrated with AI to simplify the calculation of household monthly electricity bills, complete with an AI chat feature.",
    image: "/savebill.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Golang"],
    repoUrl: "https://github.com/zidankhainur2/savebill",
    liveUrl: "https://savebill-iota.vercel.app",
  },
  {
    id: 2,
    title: "VYMO: Real-Time Emotion Analysis from Video & Webcam",
    description:
      "A web application integrated with an AI model to classify human emotions from facial expressions, featuring real-time, video, and image analysis modes. The model is built using ResNet.",
    image: "/vymo.png",
    tags: ["React", "Tailwind CSS", "Python", "Flask", "CNN"],
    repoUrl: "https://github.com/zidankhainur2/vymo",
  },
  // Anda bisa menambahkan proyek lain di sini di masa depan
];
