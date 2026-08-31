import React, { useState } from 'react';
import { 
  Code, FolderOpen, PenTool, BrainCircuit, 
  Sparkles, User, BookOpen, MessageSquare, 
  Github, Linkedin, Instagram, Youtube, Mail, 
  ChevronRight, Play, Star
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const projects = [
    { 
      id: 1, 
      title: 'Mywebu', 
      tag: 'Portfolio+', 
      desc: 'Museum penampung semua karya desain webku, lengkap dengan profil dan CTA.', 
      color: 'blue',
      icon: '🎨',
      delay: '0ms'
    },
    { 
      id: 2, 
      title: 'AIKA', 
      tag: '3D VRM Waifu', 
      desc: 'Proyek mandiri sistem dialog AI 3D. Terhubung API, TTS, chunking response, dan memori.', 
      color: 'pink',
      icon: '🌸',
      delay: '100ms'
    },
    { 
      id: 3, 
      title: 'KIRA AI TRAINER', 
      tag: 'Event: #juaravibecoding', 
      desc: 'AI visual novel companion untuk workout. Menggabungkan kultur wibu & gym! LLM powered.', 
      color: 'yellow',
      icon: '💪',
      delay: '200ms'
    },
    { 
      id: 4, 
      title: '20days of heavy', 
      tag: 'Concept Draft', 
      desc: 'Masih di kepala, script belum lengkap. Aku taruh sini biar nggak lupa!', 
      color: 'gray',
      icon: '⏳',
      delay: '300ms'
    },
    { 
      id: 5, 
      title: 'College Quests', 
      tag: 'Academic Projects', 
      desc: 'Berbagai aplikasi dan tugas kuliah yang diselesaikan selama di USBYPKP Bandung.', 
      color: 'green',
      icon: '🎓',
      delay: '400ms'
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700;800;900&family=Nunito:wght@700;800;900&display=swap');
          
          .font-anime {
            font-family: 'M PLUS Rounded 1c', 'Nunito', sans-serif;
          }
          
          /* Fixed Stroke: Using webkit for cleaner borders without the blur error */
          .text-stroke-blue {
            -webkit-text-stroke: 2px #1e3a8a;
            color: white;
          }
          
          .text-stroke-white-thin {
            -webkit-text-stroke: 1px white;
          }

          .bg-notebook {
            background-color: #ffffff;
            background-image: 
              linear-gradient(#e5e7eb 2px, transparent 2px),
              linear-gradient(90deg, #e5e7eb 2px, transparent 2px),
              linear-gradient(90deg, transparent 80px, rgba(59, 130, 246, 0.1) 80px, rgba(59, 130, 246, 0.1) 84px, transparent 84px);
            background-size: 24px 24px, 24px 24px, 100% 100%;
            background-position: -2px -2px, -2px -2px, 0 0;
          }

          .pop-shadow-blue { box-shadow: 4px 4px 0px #2563eb; }
          .pop-shadow-pink { box-shadow: 4px 4px 0px #ec4899; }
          .pop-shadow-yellow { box-shadow: 4px 4px 0px #eab308; }
          .pop-shadow-green { box-shadow: 4px 4px 0px #16a34a; }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }

          @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in { animation: slideInRight 0.5s ease-out forwards; opacity: 0; }

          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          .animate-typing {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(40, end);
          }

          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
        `}
      </style>

      {}
      <div className="relative w-full h-screen overflow-hidden bg-blue-50 font-anime text-blue-900 select-none flex">
        
        {/* Dynamic Background Area */}
        <div className="absolute inset-0 z-0 bg-blue-900 overflow-hidden">
          {/* Base Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          {/* Animated decorative shapes */}
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
        </div>

        {/* -------------------- KIRI: NOTEBOOK SIDEBAR -------------------- */}
        <div className="relative h-full lg:w-[350px] w-[300px] bg-notebook z-30 shadow-[8px_0_20px_rgba(0,0,0,0.2)] border-r-4 border-blue-400 shrink-0">
          
          {/* Vertical Text Banner */}
          <div className="absolute top-0 left-0 h-full w-12 border-r-2 border-dashed border-blue-300 flex flex-col items-center py-4 bg-white/50">
             <div className="transform -rotate-90 origin-center whitespace-nowrap mt-40 text-blue-300 font-black tracking-widest text-2xl opacity-60">
               DEVELOPER
             </div>
             <div className="transform -rotate-90 origin-center whitespace-nowrap mt-64 text-blue-400 font-black tracking-widest text-xl opacity-70">
               Player: Fero Fasya
             </div>
          </div>

          <div className="ml-12 p-4 pt-6 h-full flex flex-col relative">
            
            {}
            {/* Profil Avatar Card */}
            <div className="flex items-center gap-2 mb-6 transform -rotate-2">
              <div className="w-14 h-14 rounded-full border-4 border-white pop-shadow-blue bg-blue-200 overflow-hidden flex items-center justify-center relative z-20">
                <span className="text-2xl">🦉</span>
              </div>
              <div className="bg-white px-4 py-1 rounded-full border-2 border-blue-500 font-bold text-sm text-blue-700 flex items-center gap-2 pop-shadow-blue -ml-4 pl-6">
                Fero Fasya <PenTool size={14} className="text-blue-400 cursor-pointer hover:text-pink-500"/>
              </div>
            </div>

            {/* Developer Stats */}
            <div className="mb-6 pl-2">
              {/* Matcha Level (Stamina) */}
              <div className="mb-3">
                <div className="text-[11px] font-bold text-green-700 mb-1 flex items-center gap-1">
                  🍵 抹茶レベル (Matcha Level)
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-black text-green-500 text-stroke-white-thin transform -rotate-3">99</div>
                  <div className="flex-1 h-6 bg-white border-2 border-green-500 rounded-full relative overflow-hidden pop-shadow-green">
                    <div className="absolute top-0 left-0 h-full bg-green-400 w-[90%] border-r-2 border-green-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-green-900 tracking-wider">
                      FULL BUFF
                    </div>
                  </div>
                </div>
              </div>

              {/* Dev Rank (Semester 6) */}
              <div>
                <div className="text-[11px] font-bold text-blue-800 mb-1 flex items-center gap-1">
                  🎓 学年ランク (Academic Rank)
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-black text-blue-500 text-stroke-white-thin transform -rotate-3">S6</div>
                  <div className="flex-1 h-6 bg-white border-2 border-blue-500 rounded-full relative overflow-hidden pop-shadow-blue">
                    <div className="absolute top-0 left-0 h-full bg-blue-500 w-[75%] border-r-2 border-blue-600"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white tracking-wider">
                      USBYPKP Lvl.6
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Mission Card */}
            <div className="relative mt-2">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-t-lg z-10">
                ミッション (Current Quest)
              </div>
              <div className="bg-white border-4 border-blue-500 rounded-2xl p-4 pop-shadow-blue transform -rotate-2 flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                  <BrainCircuit size={24} />
                </div>
                <div className="text-xs font-bold leading-tight">
                  Crafting stories & making history with LLM & AI.
                  <div className="text-[9px] text-gray-500 font-normal mt-1">(Status: Open to Work)</div>
                </div>
              </div>
            </div>

            {}
            {/* Event Banner - MYWEBU Highlight (Updated per request) */}
            <div className="mt-auto mb-24 relative transform rotate-2 hover:scale-105 transition-transform cursor-pointer" onClick={() => setActiveTab('works')}>
               <div className="absolute -top-3 -left-2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 rotate-[-10deg]">
                注目 (Featured)
              </div>
              <div className="bg-white border-4 border-blue-500 rounded-2xl h-20 overflow-hidden pop-shadow-blue relative flex items-center">
                <div className="w-1/3 h-full bg-blue-100 flex items-center justify-center text-4xl">
                    🎨
                </div>
                <div className="w-2/3 p-2 bg-blue-50 text-blue-900 font-bold text-xs flex flex-col justify-center">
                  <span className="text-sm">Mywebu</span>
                  <span className="text-[9px] font-normal mt-1 text-blue-600">Portfolio+ Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------- AREA KONTEN TENGAH -------------------- */}
        <div className="relative flex-1 h-full overflow-hidden z-20">
          
          {/* Top Right Header Stats (Always visible) */}
          <div className="absolute top-4 right-4 z-50 flex gap-4">
            <div className="bg-white/20 backdrop-blur-md border-2 border-white/50 rounded-full h-10 flex items-center px-2 min-w-[100px] shadow-lg">
              <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center -ml-4 border-2 border-white shadow-sm text-yellow-900 font-black">
                <Code size={14}/>
              </div>
              <span className="text-white font-black ml-3 text-stroke-blue tracking-wide">1.2k</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md border-2 border-white/50 rounded-full h-10 flex items-center px-2 min-w-[100px] shadow-lg">
              <div className="bg-cyan-300 rounded-full w-8 h-8 flex items-center justify-center -ml-4 border-2 border-white shadow-sm text-blue-900 font-black">
                <FolderOpen size={14}/>
              </div>
              <span className="text-white font-black ml-3 text-stroke-blue tracking-wide">20+</span>
            </div>
          </div>

          {}
          {activeTab === 'home' && (
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Center Character Placeholder */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 h-[70%] w-full max-w-lg pointer-events-none flex justify-center items-end z-10">
                <div className="w-64 h-80 bg-white/10 backdrop-blur-sm border-4 border-dashed border-white/30 rounded-t-full flex flex-col items-center justify-center text-white/50 animate-float">
                  <User size={64} className="mb-4 opacity-50"/>
                  <span className="text-sm font-bold text-center px-4">Insert Anime<br/>Fero Avatar Here!</span>
                </div>
              </div>

              {/* Chat Bubble pointing to character */}
              <div className="absolute top-[25%] left-[20%] animate-float pointer-events-auto z-20" style={{ animationDelay: '1s' }}>
                <div className="bg-white border-4 border-blue-500 rounded-3xl p-5 pop-shadow-blue max-w-xs relative text-center transform -rotate-2">
                  <p className="font-bold text-blue-900 text-sm leading-relaxed">
                    "I survive on matcha and spaghetti. Let's make history together."
                  </p>
                  <p className="text-[9px] text-gray-400 mt-2">— Fero Fasya</p>
                  <div className="absolute -bottom-4 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-blue-500 transform rotate-[30deg]"></div>
                  <div className="absolute -bottom-[14px] right-[34px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[14px] border-t-white transform rotate-[30deg]"></div>
                </div>
              </div>

              {/* Action Button */}
              <div className="absolute bottom-24 left-[20%] transform hover:scale-105 transition-transform cursor-pointer animate-float z-20">
                <div className="relative">
                  <div className="absolute top-2 left-2 w-full h-full bg-gradient-to-br from-pink-400 via-yellow-300 to-green-400 rounded-3xl rounded-tr-[40px] border-4 border-white transform rotate-3"></div>
                  <div className="bg-white border-4 border-blue-500 rounded-3xl rounded-tr-[40px] px-8 py-4 relative z-10 flex flex-col items-center justify-center shadow-[6px_6px_0px_rgba(59,130,246,0.8)]" onClick={() => setActiveTab('works')}>
                      <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 text-stroke-white-thin mb-1">
                        START
                      </h1>
                      <div className="bg-pink-500 text-white font-black px-4 py-1 rounded-full text-xs border-2 border-white transform -rotate-2 pop-shadow-pink absolute -bottom-3">
                        View Quests
                      </div>
                  </div>
                  <div className="absolute -top-4 -left-4 text-yellow-400 text-3xl font-bold animate-spin-slow drop-shadow-md">★</div>
                </div>
              </div>

              {}
              {/* Right Side Floating Social Menu (Game style) */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
                {[
                  { icon: <Github size={20}/>, label: 'GitHub', url: 'https://github.com/ferofasya', color: 'text-gray-800' },
                  { icon: <Linkedin size={20}/>, label: 'LinkedIn', url: 'https://linkedin.com/in/ferofasya', color: 'text-blue-700' },
                  { icon: <Instagram size={20}/>, label: 'Insta', url: 'https://instagram.com/feroowl', color: 'text-pink-600' },
                  { icon: <Youtube size={20}/>, label: 'YouTube', url: 'https://youtube.com/@MywebuID', color: 'text-red-600' },
                  { icon: <Mail size={20}/>, label: 'Email', url: 'mailto:ferofasya@gmail.com', color: 'text-teal-600' }
                ].map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noreferrer" 
                     className="group relative flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-blue-400 pop-shadow-blue hover:-translate-x-2 transition-transform">
                    <span className={`${item.color}`}>{item.icon}</span>
                    <div className="absolute right-14 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {item.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {}
          {activeTab === 'story' && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col z-20">
              {/* VN Character Area */}
              <div className="flex-1 relative">
                <div className="absolute bottom-0 left-[10%] w-64 h-96 bg-white/20 border-4 border-white/50 rounded-t-2xl flex items-center justify-center flex-col text-white">
                    <span className="text-4xl mb-2">👤</span>
                    <span className="font-bold bg-black/50 px-3 py-1 rounded-full text-xs">Fero Sprite</span>
                </div>
              </div>
              
              {/* VN Dialogue Box */}
              <div className="h-48 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
                <div className="w-full bg-white/95 border-4 border-blue-500 rounded-xl p-6 pop-shadow-blue relative">
                  {/* Name Tag */}
                  <div className="absolute -top-5 left-4 bg-pink-500 text-white font-black px-6 py-1 rounded-full border-2 border-white pop-shadow-pink">
                    Fero Fasya
                  </div>
                  <div className="text-blue-900 font-bold text-sm md:text-base leading-relaxed pr-8">
                    <p className="mb-2">
                      Born in Jakarta and now building things in Bandung. I am a 6th-semester Informatics Engineering student at USBYPKP.
                    </p>
                    <p>
                      I love Anime, Games, storytelling, astronomy, and philosophy. I'm currently working on AIKA (3D VRM AI) and KIRA AI TRAINER. 
                      Code isn't just logic; it's a medium to create immersive experiences.
                    </p>
                  </div>
                  {/* Next Arrow */}
                  <div className="absolute bottom-4 right-4 text-blue-500 animate-bounce">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {}
          {activeTab === 'works' && (
            <div className="absolute inset-0 p-8 pt-20 flex flex-col z-20 overflow-hidden bg-white/30 backdrop-blur-md">
              <div className="bg-yellow-400 text-yellow-900 font-black px-8 py-2 rounded-full border-4 border-white pop-shadow-yellow w-max mx-auto mb-8 transform -rotate-1 text-lg">
                ✧ Project Inventory ✧
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
                {projects.map((proj) => (
                  <div key={proj.id} 
                       className={`bg-white border-4 border-${proj.color}-400 rounded-2xl overflow-hidden pop-shadow-${proj.color} flex flex-col group hover:-translate-y-2 transition-transform cursor-pointer animate-slide-in`}
                       style={{ animationDelay: proj.delay }}>
                    <div className={`h-28 bg-${proj.color}-100 flex items-center justify-center text-5xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-notebook opacity-30"></div>
                      <span className="relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{proj.icon}</span>
                      <div className={`absolute bottom-2 right-2 bg-${proj.color}-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border-2 border-white shadow-sm`}>
                        {proj.tag}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50">
                      <h3 className={`font-black text-lg text-${proj.color}-700 mb-2 leading-tight flex items-center gap-2`}>
                        {proj.title}
                      </h3>
                      <p className="text-xs font-bold text-gray-600 leading-relaxed flex-1">{proj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {}
          {/* -------------------- BAWAH: NAVIGATION BAR -------------------- */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white border-t-4 border-blue-300 z-40 flex px-4">
             {[
               { id: 'home', label: "ホーム (Home)", icon: <BookOpen size={20}/> },
               { id: 'story', label: "ストーリー (Story)", icon: <User size={20}/> },
               { id: 'works', label: "ガチャ (Works)", icon: <Star size={20}/> }
             ].map((nav) => {
               const isActive = activeTab === nav.id;
               return (
                 <div 
                   key={nav.id} 
                   onClick={() => setActiveTab(nav.id)}
                   className={`flex-1 flex flex-col md:flex-row items-center justify-center font-black text-[10px] md:text-sm cursor-pointer border-x-2 border-transparent transition-all duration-300 relative
                     ${isActive ? 'text-blue-600 transform -translate-y-2' : 'text-gray-400 hover:text-blue-400 hover:bg-blue-50/50'}`}
                 >
                   {isActive && (
                     <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full"></div>
                   )}
                   <span className={`md:mr-2 ${isActive ? 'animate-bounce drop-shadow-md' : ''}`}>{nav.icon}</span>
                   {nav.label}
                 </div>
               )
             })}
          </div>

        </div>
      </div>
    </>
  );
}