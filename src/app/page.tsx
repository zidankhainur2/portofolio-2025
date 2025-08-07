// src/app/page.tsx
"use client";

import Hero from "@/components/Hero";
import History from "@/components/History";

export default function Home() {
  return (
    // Kita tidak perlu membungkus <main> karena isinya yang akan dianimasikan
    <main>
      <Hero />
      <History />
    </main>
  );
}
