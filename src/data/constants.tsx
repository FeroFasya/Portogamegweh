import React from 'react';
import { Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin, FiInstagram as Instagram, FiYoutube as Youtube } from 'react-icons/fi';


export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: { name: string; colorClass: string }[];
  image: string;
  gallery: { type: 'image' | 'video'; url: string }[];
  link?: string;
  status?: string;
  delay: string;
};

export const projects: Project[] = [
  {
    "id": 1,
    "delay": "0ms",
    "slug": "mywebu",
    "title": "MyWebu",
    "category": "Freelance",
    "description": "Portfolio personal sekaligus layanan pengembangan website independen (Portfolio+) memamerkan karya, informasi, dan jasa web development untuk klien.",
    "fullDescription": "MyWebu adalah sebuah layanan pembuatan website independen yang memfokuskan diri pada pembuatan landing page, portofolio, dan company profile. Proyek ini awalnya dimulai sebagai eksplorasi desain, namun berkembang menjadi layanan freelance sungguhan.",
    "tags": [
      {
        "name": "Web Dev",
        "colorClass": "text-violet-500"
      },
      {
        "name": "Client Work",
        "colorClass": "text-zinc-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/mywebu/2.png",
    "gallery": [
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/mywebu/1.png"
      }
    ],
    "link": "https://mywebu.id",
    "status": "Dihentikan sementara :3"
  },
  {
    "id": 2,
    "delay": "100ms",
    "slug": "aika",
    "title": "AIKA",
    "category": "AI Companion",
    "description": "Sistem dialog AI berbasis model anime 3D VRM dengan integrasi API, Text-to-Speech, response chunking, dan sistem memori. Dikembangkan bersama Miki.",
    "fullDescription": "AIKA merupakan sistem asisten virtual berbasis 3D avatar (VRM). Aplikasi ini menggunakan Large Language Model untuk menghasilkan respon natural, Text-to-Speech untuk suara, dan Lip Sync otomatis agar avatar tampak hidup saat berbicara.",
    "tags": [
      {
        "name": "VRM",
        "colorClass": "text-teal-500"
      },
      {
        "name": "TTS",
        "colorClass": "text-zinc-500"
      },
      {
        "name": "LLM",
        "colorClass": "text-zinc-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/aika/1.png",
    "gallery": [
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/aika/cover.png"
      },
      {
        "type": "video",
        "url": "/Portogamegweh/images/projects/aika/aika.mp4"
      },
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/aika/2.png"
      }
    ],
    "link": "https://mbg-aika.vercel.app"
  },
  {
    "id": 3,
    "delay": "200ms",
    "slug": "kira-ai-trainer",
    "title": "KIRA AI Trainer",
    "category": "#juaravibecoding",
    "description": "Game x Productivity x AI visual novel companion untuk workout yang memadukan kultur anime dan gym, didukung Large Language Model.",
    "fullDescription": "Mendapat penghargaan dalam kompetisi Vibe Coding, KIRA adalah karakter AI yang bertindak sebagai pelatih kebugaran. Disajikan dalam format visual novel, ia memberikan panduan olahraga interaktif dan motivasi harian.",
    "tags": [
      {
        "name": "Visual Novel",
        "colorClass": "text-yellow-500"
      },
      {
        "name": "LLM",
        "colorClass": "text-zinc-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/kira-ai-trainer/1.png",
    "gallery": [
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/kira-ai-trainer/cover.png"
      },
      {
        "type": "video",
        "url": "/Portogamegweh/images/projects/kira-ai-trainer/kira1.mp4"
      },
      {
        "type": "video",
        "url": "/Portogamegweh/images/projects/kira-ai-trainer/kira2.mp4"
      }
    ],
    "link": "https://kira-ai-trainer.vercel.app/"
  },
  {
    "id": 4,
    "delay": "300ms",
    "slug": "playverse",
    "title": "Playverse",
    "category": "Sci-Fi Storefront",
    "description": "Platform storefront distribusi game digital bergaya Sci-Fi Glassmorphism. Arsitektur hybrid mobile (Apache Cordova) + Firebase untuk sinkronisasi katalog real-time.",
    "fullDescription": "Sebuah prototipe toko game digital berdesain futuristik. Dibangun dengan pendekatan hybrid menggunakan Apache Cordova dan terhubung ke backend Firebase untuk manajemen data produk secara langsung.",
    "tags": [
      {
        "name": "Cordova",
        "colorClass": "text-violet-500"
      },
      {
        "name": "Firebase",
        "colorClass": "text-zinc-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/playverse/1.png",
    "gallery": [
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/playverse/1.png"
      },
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/playverse/2.png"
      },
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/playverse/3.png"
      }
    ],
    "link": "#"
  },
  {
    "id": 5,
    "delay": "400ms",
    "slug": "kuliner-nusantara-semantic",
    "title": "Kuliner Nusantara Semantic",
    "category": "Knowledge Graph",
    "description": "Sistem informasi & pencarian semantik berbasis Knowledge Graph ontologi OWL/RDF (Protégé), triple store Apache Jena Fuseki, dan query SPARQL (PHP) untuk filtering relasional gizi & rasa.",
    "fullDescription": "Proyek akademik yang berfokus pada web semantik. Mengubah data makanan tradisional Indonesia menjadi format Knowledge Graph, memungkinkan pengguna untuk melakukan pencarian berbasis relasi makna kompleks.",
    "tags": [
      {
        "name": "OWL/RDF",
        "colorClass": "text-teal-500"
      },
      {
        "name": "SPARQL",
        "colorClass": "text-zinc-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/kuliner-nusantara-semantic/cover.png",
    "gallery": [
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/kuliner-nusantara-semantic/1.png"
      },
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/kuliner-nusantara-semantic/2.png"
      },
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/kuliner-nusantara-semantic/3.png"
      }
    ]
  },
  {
    "id": 6,
    "delay": "500ms",
    "slug": "20-days-of-heavy",
    "title": "20 Days of Heavy",
    "category": "In Progress",
    "description": "Konsep visual novel psikologis, masih dalam tahap perancangan dunia dan pengembangan naskah.",
    "fullDescription": "Gim cerita interaktif yang saat ini masih dalam fase pre-produksi. Difokuskan pada pengembangan plot naratif bercabang dan penceritaan karakter mendalam.",
    "tags": [
      {
        "name": "Narrative Design",
        "colorClass": "text-yellow-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/20-days-of-heavy/cover.png",
    "gallery": [],
    "status": "Masih dikerjakan..."
  },
  {
    "id": 7,
    "delay": "600ms",
    "slug": "arcade-champion-milestone",
    "title": "Arcade Champion Milestone",
    "category": "Milestone",
    "description": "Berpartisipasi dalam program arcade global, meraih milestone tertinggi ke-2 sambil belajar lab lingkungan cloud AI Google.",
    "fullDescription": "Catatan perjalanan dan pencapaian selama mengikuti Google Cloud Arcade Program. Menyelesaikan lusinan modul hands-on lab mulai dari komputasi awan dasar hingga penerapan model AI generatif.",
    "tags": [
      {
        "name": "Google Cloud AI",
        "colorClass": "text-violet-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/arcade-champion-milestone/cover.png",
    "gallery": []
  },
  {
    "id": 8,
    "delay": "700ms",
    "slug": "college-quests",
    "title": "College Quests",
    "category": "Akademik",
    "description": "Kumpulan aplikasi, eksperimen, dan tugas akademik selama studi di Universitas Sangga Buana YPKP Bandung.",
    "fullDescription": "Repositori sentral yang menaungi berbagai mini-project, tugas pemrograman, dan eksperimen teknis selama masa kuliah.",
    "tags": [
      {
        "name": "Eksperimen",
        "colorClass": "text-teal-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/college-quests/cover.png",
    "gallery": [
      {
        "type": "image",
        "url": "/Portogamegweh/images/projects/college-quests/1.png"
      }
    ]
  },
  {
    "id": 9,
    "delay": "800ms",
    "slug": "mywebuid",
    "title": "MyWebuID — YouTube",
    "category": "Konten",
    "description": "Konten hiburan & edukasi seputar IT, AI, sains, anime, game, meme, dan filsafat sesuai minat.",
    "fullDescription": "Kanal YouTube yang saya kembangkan untuk berbagi wawasan teknis, tutorial pemrograman ringan, serta konten hiburan kultur pop internet yang dikemas secara kasual.",
    "tags": [
      {
        "name": "Edukasi",
        "colorClass": "text-yellow-500"
      },
      {
        "name": "Hiburan",
        "colorClass": "text-zinc-500"
      }
    ],
    "image": "/Portogamegweh/images/projects/1.webp",
    "gallery": [],
    "link": "https://youtube.com/@MyWebuID"
  }
];


export const socialLinks = [
  { icon: <Github size={20} />, label: 'GitHub', url: 'https://github.com/ferofasya', color: 'text-gray-800' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://linkedin.com/in/ferofasya', color: 'text-blue-700' },
  { icon: <Instagram size={20} />, label: 'Insta', url: 'https://instagram.com/feroowl', color: 'text-pink-600' },
  { icon: <Youtube size={20} />, label: 'YouTube', url: 'https://youtube.com/@MywebuID', color: 'text-red-600' },
  { icon: <Mail size={20} />, label: 'Email', url: 'mailto:ferofasya@gmail.com', color: 'text-teal-600' }
];

export const certificates = [
  // --- TRAINING ---
  { id: 1, title: 'WebDev Bootcamp', category: 'Training', desc: 'Sanbercode Web Development & AI Bootcamp.', date: '2024', image: '/Portogamegweh/images/certificates/training/1.png', subImages: ['/Portogamegweh/images/certificates/training/1_1.png'], driveLink: 'https://drive.google.com/file/d/1ciht4a5GTIW6czBwN2X7hfXAVfov4QvK/view?usp=drive_link' },
  { id: 2, title: 'Alhaezen Mini Bootcamp', category: 'Training', desc: 'Intensive mini bootcamp training PHP Programming.', date: '2025', image: '/Portogamegweh/images/certificates/training/2.png', driveLink: 'https://drive.google.com/file/d/13EkU2Y-kuyXbtBeq3WyzUl-E83bM7zOI/view?usp=sharing' },
  { id: 3, title: 'Database Foundation', category: 'Training', desc: 'Database fundamentals training.', date: '2024', image: '/Portogamegweh/images/certificates/training/3.png', subImages: ['/Portogamegweh/images/certificates/training/3_1.png'], driveLink: 'https://drive.google.com/file/d/1g7vlONZa_Yd7kZvpJO9iTdRfvofbX1Yw/view?usp=drive_link' },
  { id: 4, title: 'Generative AI', category: 'Training', desc: 'Dicoding class on Generative AI.', date: '2025', image: '/Portogamegweh/images/certificates/training/4.png', subImages: ['/Portogamegweh/images/certificates/training/4_1.png'], driveLink: 'https://drive.google.com/file/d/1xtMlcBlu_JjXuz_ChaNtFnLk5O8n23eV/view?usp=drive_link' },
  { id: 5, title: 'Data Visualization', category: 'Training', desc: 'Dicoding: Basic Data Visualization.', date: '2025', image: '/Portogamegweh/images/certificates/training/5.png', subImages: ['/Portogamegweh/images/certificates/training/5_1.png'], driveLink: 'https://drive.google.com/file/d/1Q8WuCPxFZc5NeMT7fUiEl1R2H7K8NjTI/view?usp=drive_link' },
  { id: 6, title: 'SQL Basics', category: 'Training', desc: 'Dicoding: Basic SQL.', date: '2025', image: '/Portogamegweh/images/certificates/training/6.png', subImages: ['/Portogamegweh/images/certificates/training/6_1.png'], driveLink: 'https://drive.google.com/file/d/1WyFN2H3JusMf0h3U7dBcK_4mxLZjP2HH/view?usp=drive_link' },
  { id: 7, title: 'Web Programming', category: 'Training', desc: 'Dicoding: Basic Web Programming.', date: '2025', image: '/Portogamegweh/images/certificates/training/7.png', subImages: ['/Portogamegweh/images/certificates/training/7_1.png'], driveLink: 'https://drive.google.com/file/d/1aavgrN7DT9EEF9zSTDxt_dve7R-XBJZ8/view?usp=drive_link' },
  { id: 8, title: 'Data Science', category: 'Training', desc: 'Dicoding: Basic Data Science.', date: '2025', image: '/Portogamegweh/images/certificates/training/8.png', subImages: ['/Portogamegweh/images/certificates/training/8_1.png'], driveLink: 'https://drive.google.com/file/d/1badN1RAmD7zlzMZONp6I9cWdgetg6bsp/view?usp=drive_link' },
  { id: 9, title: 'AI Basics', category: 'Training', desc: 'Dicoding: Basic Artificial Intelligence.', date: '2025', image: '/Portogamegweh/images/certificates/training/9.png', subImages: ['/Portogamegweh/images/certificates/training/9_1.png'], driveLink: 'https://drive.google.com/file/d/1qXkIBK6gLtu-25aVrYiovmzRHH9TowwX/view?usp=drive_link' },
  { id: 10, title: 'AI for Productivity', category: 'Training', desc: 'Dicoding: AI for Productivity.', date: '2025', image: '/Portogamegweh/images/certificates/training/10.png', subImages: ['/Portogamegweh/images/certificates/training/10_1.png'], driveLink: 'https://drive.google.com/file/d/13kcY1oXoGG3kcVvyKBCSe0AD01CFM6Nw/view?usp=drive_link' },
  { id: 11, title: 'Java Foundation', category: 'Training', desc: 'Basic Java Programming foundation.', date: '2024', image: '/Portogamegweh/images/certificates/training/11.png', driveLink: 'https://drive.google.com/file/d/1w61ZORCp4O7NmnPsdrjt6ntKFmLncOLy/view?usp=drive_link' },
  { id: 12, title: 'English Course', category: 'Training', desc: 'English communication training.', date: '2023', image: '/Portogamegweh/images/certificates/training/12.png', driveLink: '#' },
  
  // --- EVENTS ---
  { id: 13, title: 'SinauKoding Webinar', category: 'Events', desc: 'Attended SinauKoding webinar.', date: '2025', image: '/Portogamegweh/images/certificates/event/1.png', driveLink: 'https://drive.google.com/file/d/1zq9Piiv93QM64NmQ6FZpP4EC-EX9_w3Y/view?usp=drive_link' },
  { id: 14, title: 'PROMABA', category: 'Events', desc: 'Campus event participation.', date: '2023', image: '/Portogamegweh/images/certificates/event/2.png', driveLink: 'https://drive.google.com/file/d/19Mqo7wWlhsnvfA1Y88T48Lzgny7pUf6t/view?usp=drive_link' },
  { id: 15, title: 'BRIN Industry Visit', category: 'Events', desc: 'Industrial visit to BRIN.', date: '2026', image: '/Portogamegweh/images/certificates/event/3.png', driveLink: 'https://drive.google.com/file/d/1z-DXXbOmvx3k5yQ8wgQBmZqM8TEo_vVT/view?usp=drive_link' },
  { id: 16, title: 'Agate Industry Visit', category: 'Events', desc: 'Industrial visit to Agate Studio.', date: '2025', image: '/Portogamegweh/images/certificates/event/4.png', driveLink: 'https://drive.google.com/file/d/1WL8cXYq2DiBRDGVfIqIumkLii1MlWsHN/view?usp=drive_link' },
  { id: 17, title: 'USB DAY', category: 'Events', desc: 'Campus event participation', date: '2023', image: '/Portogamegweh/images/certificates/event/5.png', driveLink: 'https://drive.google.com/file/d/1JeZgZROFHree5LcgFpsvfYdrEKc7WWSw/view?usp=drive_link' },
  { id: 18, title: 'TI CO Diskominfo Jabar', category: 'Events', desc: 'Campus event seminar', date: '2023', image: '/Portogamegweh/images/certificates/event/6.png', driveLink: 'https://drive.google.com/file/d/1njh4qOZJYnNO1fu0pEck_VQqpZI7rmpU/view?usp=drive_link ' },
  // --- AWARDS ---
  { 
    id: 19, 
    title: 'Vibe Coding Champion', 
    category: 'Awards', 
    desc: '1st Place winner in Vibe Coding.', 
    date: '2024', 
    image: '/Portogamegweh/images/certificates/award/1.png', 

    driveLink: '#' 
  },
  { 
    id: 20, 
    title: 'Arcade Global Champion', 
    category: 'Awards', 
    desc: 'Global Ranking #1. Google Cloud Arcade Program.', 
    date: 'May 2025', 
    image: '/Portogamegweh/images/certificates/award/2.png', 
    driveLink: '#' 
  }
];
