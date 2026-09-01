import React from 'react';
import { Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin, FiInstagram as Instagram, FiYoutube as Youtube } from 'react-icons/fi';

export const projects = [
  { id: 1, title: 'Mywebu', tag: 'Portfolio+', desc: 'My personal portfolio and independent web-development service.', color: 'blue', icon: '🎨', delay: '0ms', image: '/Portogamegweh/images/projects/1.webp' },
  { id: 2, title: 'AIKA', tag: '3D VRM Waifu', desc: 'Proyek mandiri sistem dialog AI 3D. Terhubung API, TTS, chunking response, dan memori.', color: 'pink', icon: '🌸', delay: '100ms', image: '/Portogamegweh/images/projects/2.webp' },
  { id: 3, title: 'KIRA AI TRAINER', tag: 'Event: #juaravibecoding', desc: 'AI visual novel companion untuk workout. Menggabungkan kultur wibu & gym! LLM powered.', color: 'yellow', icon: '💪', delay: '200ms', image: '/Portogamegweh/images/projects/3.webp' },
  { id: 4, title: '20days of heavy', tag: 'Concept Draft', desc: 'Masih di kepala, script belum lengkap. Aku taruh sini biar nggak lupa!', color: 'gray', icon: '⏳', delay: '300ms', image: '/Portogamegweh/images/projects/4.webp' },
  { id: 5, title: 'College Quests', tag: 'Academic Projects', desc: 'Berbagai aplikasi dan tugas kuliah yang diselesaikan selama di USBYPKP Bandung.', color: 'green', icon: '🎓', delay: '400ms', image: '/Portogamegweh/images/projects/5.webp' }
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
