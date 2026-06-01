/* ─────────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────────── */
export interface TechBadge {
  name: string;
  variant: "lime" | "violet" | "white";
}

export interface Project {
  id: number;
  title: string;
  shortDescription: string; // Ditampilkan di card (maks 2 baris)
  tags: string[]; // Ditampilkan sebagai badge kecil di card
  image: string; // /public/...
  accentColor: "lime" | "violet"; // Warna aksen per kartu

  // ── Konten Drawer ──
  problem: string; // Problem statement (1-3 kalimat)
  impact: string; // Dampak / hasil solusi
  techStack: TechBadge[]; // Tech stack detail untuk drawer header
  technicalDeepDive: string; // Arsitektur & penjelasan teknis mendalam
  repoUrl: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "EventSika — Campus Event Platform",
    shortDescription:
      "Platform web informasi event kampus terpadu untuk mahasiswa UNSIKA yang dilengkapi dengan fitur personalisasi dan sistem rekomendasi berbasis minat.",
    tags: ["Next.js", "TypeScript", "Supabase", "UNSIKA"],
    image: "/eventsika.png",
    accentColor: "lime",

    problem:
      "Informasi event kampus UNSIKA seringkali tersebar di berbagai platform media sosial dan grup chat tanpa agregasi terpusat, menyebabkan mahasiswa melewatkan kegiatan penting yang relevan dengan minat atau jurusan mereka.",
    impact:
      "EventSika mensentralisasi semua informasi event internal UNSIKA ke dalam satu platform mobile-first. Mahasiswa mendapatkan personalisasi feed berdasarkan jurusan dan minat, sementara panitia acara mendapatkan kemudahan mempublikasikan event secara terstruktur guna menjangkau audiens kampus yang lebih luas.",
    techStack: [
      { name: "Next.js", variant: "lime" },
      { name: "TypeScript", variant: "lime" },
      { name: "Supabase", variant: "white" },
      { name: "PostgreSQL", variant: "violet" },
      { name: "Tailwind CSS", variant: "violet" },
      { name: "Zustand", variant: "white" },
    ],
    technicalDeepDive:
      "Aplikasi ini dibangun menggunakan Next.js (App Router) dan TypeScript pada sisi frontend, yang dioptimalkan dengan Tailwind CSS untuk antarmuka yang responsif. Manajemen data backend dan autentikasi ditangani sepenuhnya secara aman oleh Supabase (PostgreSQL) menggunakan Row Level Security (RLS). Fitur personalisasi dan rekomendasi diimplementasikan langsung pada layer database menggunakan stored procedures/RPC (`get_major_related_events_for_user`) untuk menyajikan event yang relevan secara efisien berdasarkan profil program studi dan preferensi minat pengguna. State management didukung oleh Zustand, penanganan form divalidasi menggunakan React Hook Form dan Zod, sementara deployment aplikasi berjalan di atas platform Vercel.",
    repoUrl: "https://github.com/zidankhainur2/eventsika",
    liveUrl: "https://eventsika.vercel.app",
  },

  {
    id: 2,
    title: "Gridify — Automated Tournament Management Platform",
    shortDescription:
      "Platform SaaS manajemen turnamen otomatis yang mendukung berbagai format bagan (bracket) kompetisi secara real-time untuk penyelenggara dan komunitas.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    image: "/gridify.png",
    accentColor: "violet",

    problem:
      "Mengelola turnamen kompetitif (baik esports maupun olahraga fisik) secara manual sering kali menimbulkan kompleksitas tinggi—mulai dari pembuatan bagan yang rawan kesalahan, pengelolaan skor yang lambat, hingga kurangnya sinkronisasi informasi secara real-time kepada peserta.",
    impact:
      "Gridify mengotomatisasi seluruh alur manajemen turnamen. Penyelenggara dapat membuat kompetisi, mendaftarkan peserta, dan menghasilkan bagan secara instan. Peserta dan penonton dapat memantau perkembangan skor, klasemen, dan pembaruan bagan secara langsung (real-time) tanpa perlu memuat ulang halaman.",
    techStack: [
      { name: "Next.js", variant: "lime" },
      { name: "TypeScript", variant: "lime" },
      { name: "Supabase", variant: "white" },
      { name: "PostgreSQL", variant: "violet" },
      { name: "Tailwind CSS", variant: "violet" },
      { name: "Lucide React", variant: "white" },
    ],
    technicalDeepDive:
      "Platform ini dikembangkan menggunakan Next.js (App Router) dan TypeScript dengan arsitektur berbasis fitur (feature-driven) yang memisahkan modul inti seperti `auth`, `tournaments`, `participants`, dan `bracket`. Inti mekanis aplikasi ini terletak pada generator bagan kustom (`features/bracket/generators`) yang mampu mengalkulasi dan memetakan slot pertandingan secara matematis untuk format Single Elimination, Double Elimination, Round Robin, hingga Battle Royale  Layer data didukung oleh Supabase (PostgreSQL) yang memanfaatkan fitur Supabase Realtime via custom hooks (`use-tournament-realtime`) untuk menyinkronkan mutasi skor pertandingan dan pembaruan struktur bracket secara instan ke seluruh klien aktif. Sisi UI dibangun menggunakan Tailwind CSS dengan integrasi komponen yang bersih serta penanganan autentikasi berbasis server-side middleware memanfaatkan Supabase Auth.",
    repoUrl: "https://github.com/nadhifhafizp/gridify",
    liveUrl: "https://gridify-one.vercel.app/",
  },

  {
    id: 3,
    title: "VYMO — Vision Your Mood",
    shortDescription:
      "Aplikasi web berbasis AI untuk klasifikasi emosi wajah secara real-time menggunakan CNN (ResNet). Mendukung mode webcam langsung, upload video, dan analisis gambar.",
    tags: ["React", "Python", "Flask", "CNN", "ResNet"],
    image: "/vymo.png",
    accentColor: "lime",

    problem:
      "Pengenalan emosi dari ekspresi wajah secara real-time di lingkungan web adalah tantangan komputasi yang signifikan. Proyek ini bertujuan menyediakan antarmuka web yang ramah pengguna untuk inferensi model CNN langsung dari browser, tanpa memerlukan instalasi perangkat lunak khusus.",
    impact:
      "VYMO berhasil mengintegrasikan model ResNet yang dilatih pada dataset FER-2013 ke dalam antarmuka web responsif. Sistem mampu mengklasifikasikan 7 kelas emosi dasar (happy, sad, angry, fear, disgust, surprise, neutral) dengan latensi inferensi rata-rata di bawah 200ms per frame.",
    techStack: [
      { name: "React", variant: "lime" },
      { name: "Tailwind CSS", variant: "white" },
      { name: "Python 3.10", variant: "violet" },
      { name: "Flask", variant: "violet" },
      { name: "ResNet-50", variant: "lime" },
      { name: "OpenCV", variant: "white" },
      { name: "TensorFlow / Keras", variant: "violet" },
    ],
    technicalDeepDive:
      "Arsitektur sistem terdiri dari dua lapisan: Frontend React yang menangkap frame dari webcam/video menggunakan Web API, dan Backend Flask yang menerima frame via REST endpoint, menjalankan inferensi, lalu mengembalikan label emosi + confidence score.\n\nModel CNN berbasis ResNet-50 di-fine-tune pada dataset FER-2013 (35.000+ gambar wajah). Preprocessing meliputi deteksi wajah dengan Haar Cascade, cropping, resize ke 48×48px, dan normalisasi. Untuk mode webcam, frame dikirim setiap 500ms via fetch API agar tidak membebani bandwidth.",
    repoUrl: "https://github.com/zidankhainur2/vymo",
  },

  {
    id: 4,
    title: "SaveBill — AI Energy Analyst",
    shortDescription:
      "Platform web interaktif terintegrasi AI untuk kalkulasi tagihan listrik bulanan rumah tangga, dilengkapi fitur chat AI untuk analisis konsumsi dan rekomendasi penghematan.",
    tags: ["Next.js", "React", "Golang", "AI"],
    image: "/savebill.png",
    accentColor: "violet",

    problem:
      "Kalkulasi tagihan listrik PLN melibatkan skema blok tarif yang kompleks dan berubah-ubah. Banyak pengguna tidak mengetahui peralatan mana yang paling boros energi atau cara mengoptimalkan konsumsi mereka secara efektif.",
    impact:
      "SaveBill memberikan kalkulasi tagihan yang akurat berdasarkan golongan tarif PLN terbaru, disertai breakdown per peralatan rumah tangga. Fitur AI chat memungkinkan pengguna bertanya langsung tentang pola konsumsi mereka dan mendapatkan rekomendasi spesifik.",
    techStack: [
      { name: "Next.js 14", variant: "lime" },
      { name: "React", variant: "lime" },
      { name: "Tailwind CSS", variant: "white" },
      { name: "Golang", variant: "violet" },
      { name: "Gemini AI API", variant: "violet" },
      { name: "Vercel", variant: "white" },
    ],
    technicalDeepDive:
      "Frontend dibangun dengan Next.js 14 (App Router) dengan komponen kalkulasi berbasis state lokal. Backend Golang menyediakan REST API untuk kalkulasi tarif multi-blok PLN (golongan R-1, R-2, R-3) sesuai Permen ESDM terkini.\n\nIntegrasi AI menggunakan Gemini API dengan system prompt yang dikondisikan untuk memahami konteks tagihan listrik Indonesia. Chat history disimpan di session storage untuk mempertahankan konteks percakapan. Kalkulasi tarif divalidasi terhadap formula resmi PLN untuk akurasi.",
    repoUrl: "https://github.com/zidankhainur2/savebill",
    liveUrl: "https://savebill-iota.vercel.app",
  },

  // {
  //   id: 5,
  //   title: "Smart Guardian — IoT Home Security",
  //   shortDescription:
  //     "Sistem keamanan rumah berbasis IoT menggunakan ESP32, multi-sensor (PIR, door/window sensor), dengan notifikasi real-time ke Telegram Bot.",
  //   tags: ["ESP32", "IoT", "C++", "Telegram API"],
  //   image: "/smart-guardian.png",
  //   accentColor: "lime",

  //   problem:
  //     "Sistem keamanan rumah komersial seringkali mahal dan tidak fleksibel untuk dikustomisasi. Proyek ini merancang solusi berbiaya rendah menggunakan komponen IoT off-the-shelf yang dapat memberikan notifikasi keamanan real-time tanpa infrastruktur cloud berbayar.",
  //   impact:
  //     "Smart Guardian berhasil mengintegrasikan 3 jenis sensor (PIR gerak, reed switch pintu/jendela, sensor suhu) ke dalam satu sistem terpusat berbasis ESP32. Notifikasi Telegram dikirim dalam waktu kurang dari 2 detik setelah event terdeteksi, dengan false positive rate yang rendah berkat logika debouncing.",
  //   techStack: [
  //     { name: "ESP32", variant: "lime" },
  //     { name: "Arduino C++", variant: "white" },
  //     { name: "PIR Sensor", variant: "violet" },
  //     { name: "Telegram Bot API", variant: "violet" },
  //     { name: "MQTT", variant: "white" },
  //     { name: "WiFi (IEEE 802.11)", variant: "lime" },
  //   ],
  //   technicalDeepDive:
  //     "Firmware ESP32 ditulis dalam Arduino C++ dengan arsitektur event-driven menggunakan interrupt handler untuk sensor PIR dan reed switch. Setiap event masuk ke queue untuk diolah di loop utama, mencegah kehilangan event akibat blocking I/O.\n\nKoneksi ke Telegram menggunakan library UniversalTelegramBot via HTTPS. Sistem memiliki mekanisme reconnect otomatis jika koneksi WiFi terputus. Mode 'arm/disarm' dapat dikendalikan dari Telegram Bot menggunakan command text, dengan autentikasi berbasis Chat ID.",
  //   repoUrl: "https://github.com/zidankhainur2/smart-guardian",
  // },
];
