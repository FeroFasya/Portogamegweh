import React, { useState } from 'react';
import {
  Code, FolderOpen, BookOpen, Star, Settings, ChevronRight, Share2, X, BrainCircuit, PenTool, Award, Play
} from 'lucide-react';
import { projects, socialLinks } from '../data/constants';
import BottomNav from './BottomNav';

interface MobileViewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  setIsEditModalOpen: (open: boolean) => void;
  setIsCertModalOpen: (open: boolean) => void;
}

export default function MobileView({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
  setIsEditModalOpen,
  setIsCertModalOpen
}: MobileViewProps) {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  return (
    <div className="flex lg:hidden w-full h-screen flex-col relative bg-[#0c0c0c] text-zinc-300 font-sans overflow-hidden">
      {/* Dynamic Background Area */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out mix-blend-screen ${activeTab === 'home' ? 'opacity-[0.15]' : 'opacity-0'}`} style={{ backgroundImage: "url('/Portogamegweh/images/bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(120%)' }}></div>
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out mix-blend-screen ${activeTab === 'story' ? 'opacity-[0.15]' : 'opacity-0'}`} style={{ backgroundImage: "url('/Portogamegweh/images/bgstory.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(120%)' }}></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-50 pointer-events-none mix-blend-overlay"></div>
      
      <div className="relative flex-1 overflow-hidden flex flex-col z-10">

        <div style={{ display: activeTab === 'home' ? 'flex' : 'none' }} className="flex-1 overflow-y-auto bg-transparent relative flex-col min-h-full">
            
            {/* TOP SECTION: TERMINAL SIDEBAR */}
            <div className={`absolute top-0 left-0 w-full bg-zinc-950/90 backdrop-blur-md transition-all duration-700 ease-in-out overflow-hidden z-50 border-b border-zinc-800 ${isSidebarOpen ? 'max-h-[800px] shadow-[0_8px_30px_rgba(0,0,0,0.8)]' : 'max-h-[85px] shadow-sm'}`}>
              
              {/* Inner wrapper with fixed height to prevent squishing */}
              <div className="h-[520px] w-full relative">
                {/* Vertical Text Banner */}
                <div className="absolute top-0 left-0 h-full w-10 border-r border-zinc-800 flex flex-col items-center py-4 bg-zinc-900/50">
                  <div className="transform -rotate-90 origin-center whitespace-nowrap mt-28 text-zinc-600 font-pixel tracking-widest text-xl opacity-80">
                    ~$ /SYS
                  </div>
                  <div className="transform -rotate-90 origin-center whitespace-nowrap mt-48 text-zinc-500 font-pixel tracking-widest text-sm opacity-90 uppercase">
                    USER_FERO
                  </div>
                </div>

                {/* Main Sidebar Content */}
                <div className="ml-10 p-5 pt-5 flex flex-col relative h-full font-mono">
                  
                  {/* Top Row: Avatar & Coins (Always visible when collapsed) */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-1 shrink-0">
                      <div className="w-14 h-14 rounded-md border border-zinc-700 bg-zinc-800 overflow-hidden flex items-center justify-center relative z-20 shrink-0 grayscale transition-all duration-300">
                        <img src="/Portogamegweh/images/avatars/1.jpg" alt="Fero Avatar" className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-zinc-900/90 px-3 py-1.5 rounded-md border border-zinc-700 font-pixel text-xs text-zinc-300 flex items-center gap-2 -ml-2 pl-4 whitespace-nowrap shrink-0 shadow-sm uppercase">
                        Fero_Fasya <PenTool size={12} className="text-zinc-500 cursor-pointer hover:text-zinc-300 shrink-0" onClick={() => setIsEditModalOpen(true)} />
                      </div>
                    </div>
                    
                    <div className="flex gap-1.5 mt-1 shrink-0">
                      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-sm h-7 flex items-center px-1.5 shadow-sm">
                        <div className="text-zinc-500 mr-1">
                          <Code size={10} strokeWidth={2} />
                        </div>
                        <span className="text-zinc-300 font-pixel text-[10px] pr-0.5 tracking-wider">1.2K</span>
                      </div>
                      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-sm h-7 flex items-center px-1.5 shadow-sm">
                        <div className="text-zinc-500 mr-1">
                          <FolderOpen size={10} strokeWidth={2} />
                        </div>
                        <span className="text-zinc-300 font-pixel text-[10px] pr-0.5 tracking-wider">20+</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-5 pl-1 pr-2 space-y-3">
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 mb-1 flex items-center gap-1 uppercase tracking-widest">
                        &gt; MATCHA_LVL
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-3xl font-pixel text-zinc-300">99</div>
                        <div className="flex-1 h-5 bg-zinc-950 border border-zinc-800 rounded-sm relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full bg-zinc-300 w-[90%] opacity-80 border-r border-zinc-500"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-zinc-900 tracking-wider mix-blend-difference">FULL_BUFF</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 mb-1 flex items-center gap-1 uppercase tracking-widest">
                        &gt; ACAD_RANK
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-3xl font-pixel text-zinc-300">S6</div>
                        <div className="flex-1 h-5 bg-zinc-950 border border-zinc-800 rounded-sm relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full bg-zinc-300 w-[75%] opacity-80 border-r border-zinc-500"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-zinc-900 tracking-wider mix-blend-difference">USBYPKP_LVL.6</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className="relative mt-3 mb-5 pr-2">
                    <div className="absolute -top-3 left-4 bg-zinc-800 text-zinc-300 text-[10px] font-pixel px-3 py-1 rounded-sm border border-zinc-700 z-10 shadow-sm uppercase">~$ curr_quest.sh</div>
                    <div className="bg-zinc-900 border border-zinc-700 rounded-md p-4 flex items-center gap-3">
                      <div className="bg-zinc-950 p-2.5 rounded-md border border-zinc-800 text-zinc-400 shrink-0">
                        <BrainCircuit size={20} />
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 leading-tight">
                        Crafting stories & making history with LLM & AI.
                        <div className="text-[9px] text-zinc-500 mt-1">&gt; status: open_to_work</div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Banner */}
                  <div className="relative cursor-pointer pr-2 mt-1 group" onClick={() => setActiveTab('works')}>
                    <div className="absolute -top-3 left-0 bg-zinc-800 text-zinc-300 text-[10px] font-pixel px-3 py-1 rounded-sm border border-zinc-700 z-10 shadow-sm uppercase">~$ feat_project.exe</div>
                    <div className="bg-zinc-900 border border-zinc-700 rounded-md h-20 overflow-hidden relative flex items-center group-hover:border-zinc-500 transition-colors">
                      <div className="w-1/3 h-full relative overflow-hidden bg-zinc-950 border-r border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img className="w-full h-full object-cover opacity-60" src="/Portogamegweh/images/projects/mywebu.jpeg" alt="Mywebu" />
                      </div>
                      <div className="w-2/3 px-3 bg-zinc-900 flex flex-col justify-center h-full">
                        <span className="text-sm font-pixel text-zinc-200 uppercase">Mywebu</span>
                        <span className="text-[9px] font-mono mt-0.5 text-zinc-500">&gt; pfolio_active</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* The Pull-tab Toggle Button */}
              <div 
                className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-b from-transparent to-zinc-900/50 border-t border-zinc-800/50 flex items-end justify-center pb-1.5 cursor-pointer z-30"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <div className="w-16 h-1 bg-zinc-700 rounded-full hover:bg-zinc-500 transition-colors"></div>
              </div>
            </div>

            {/* BOTTOM SECTION: MAIN CONTENT */}
            <div 
              className="relative z-10 w-full flex-1 min-h-[450px] flex flex-col pt-[100px] pb-20 px-4 bg-transparent transition-all duration-500"
            >
              <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none z-0"></div>
              
              {/* Base Dark Overlay & Effects */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/95"></div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              </div>
              
              {/* Center Character Image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80%] max-h-[600px] w-full max-w-[280px] pointer-events-none flex justify-center items-end z-10 opacity-95">
                <img src="/123.png" alt="Main Character" className="h-full w-auto object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)] animate-float grayscale opacity-80 mix-blend-lighten" />
              </div>
              
              {/* Floating Certificate Sticker */}
              <div 
                onClick={() => setIsCertModalOpen(true)}
                className="absolute top-7 left-2 cursor-pointer animate-float z-20 group" style={{ animationDelay: '2s' }}
              >
                <div className="bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-sm text-zinc-400 font-pixel text-xs group-hover:bg-zinc-800 group-hover:text-white transition-all uppercase flex items-center gap-1.5 shadow-md">
                  <Award size={14} /> [ Achievements ]
                </div>
              </div>

              {/* Dynamic Wrapper for Chat Bubble & START Button */}
              <div className="flex-1 w-full flex flex-col justify-around items-center z-20 mt-4">
                
                {/* Chat Bubble */}
                <div className="w-full max-w-[200px] bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-sm p-3 shadow-md relative text-left ml-auto mt-8">
                  <div className="text-[9px] text-zinc-500 font-pixel mb-1.5 uppercase">~$ user.quote</div>
                  <p className="font-mono text-zinc-300 text-[10px] leading-relaxed">"I survive on matcha and spaghetti.<br/>Let's make history together."</p>
                  <p className="text-[9px] text-zinc-500 mt-2 font-mono">&gt; Fero Fasya</p>
                </div>

                {/* START Button */}
                <div className="relative mt-auto mb-10" onClick={() => setActiveTab('works')}>
                  <div className="bg-zinc-900 border border-zinc-600 rounded-sm px-6 py-2.5 relative z-10 flex items-center justify-center cursor-pointer shadow-md hover:bg-zinc-200 hover:text-black hover:border-zinc-200 transition-all group">
                    <h1 className="text-xl font-pixel tracking-widest uppercase transition-colors">Start_Session</h1>
                    <div className="absolute -top-3 -right-3 bg-zinc-800 text-zinc-400 font-mono px-2 py-0.5 text-[9px] border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      &gt; init
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Menu (Hamburger Style) */}
              <div className="absolute right-4 top-[40%] flex flex-col items-center gap-2 z-30">
                <button 
                  onClick={() => setIsSocialOpen(!isSocialOpen)}
                  className="w-10 h-10 bg-zinc-900 rounded-sm border border-zinc-700 shadow-md flex items-center justify-center z-20 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all"
                >
                  {isSocialOpen ? <X size={18} strokeWidth={2} /> : <Share2 size={18} strokeWidth={2} />}
                </button>

                <div className={`flex flex-col gap-2 transition-all duration-300 overflow-hidden ${isSocialOpen ? 'max-h-[350px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-50'} origin-top`}>
                  {socialLinks.map((item, i) => (
                    <a key={i} href={item.url} target="_blank" rel="noreferrer" className="group relative flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-sm border border-zinc-800 shadow-md hover:bg-zinc-800 hover:border-zinc-500 transition-all text-zinc-400 hover:text-white">
                      <span className="">{item.icon}</span>
                      <div className="absolute right-12 bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-mono px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">&gt; {item.label}</div>
                    </a>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

        <div style={{ display: activeTab === 'works' ? 'block' : 'none' }} className="flex-1 overflow-y-auto bg-[#0c0c0c] relative p-4 pt-6 pb-20">
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none z-0"></div>
            
            <div className="relative z-30">
              <style>{`
                .shing-effect::after {
                  content: '';
                  position: absolute;
                  top: 0; left: -150%;
                  width: 50%; height: 100%;
                  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%);
                  transform: skewX(-25deg);
                  z-index: 20;
                  pointer-events: none;
                  animation: shingAnimAuto 6s infinite;
                }
                
                /* Tetap kilat cepat kalau tidak sengaja di-tap/klik */
                .shing-effect:hover::after, .shing-effect:active::after {
                  animation: shingAnimTap 0.5s ease-out forwards;
                }
                
                /* Animasi Loop Otomatis */
                @keyframes shingAnimAuto {
                  0% { left: -150%; }
                  15% { left: 250%; }
                  100% { left: 250%; }
                }
                
                /* Animasi Ketukan/Tap */
                @keyframes shingAnimTap {
                  0% { left: -150%; }
                  100% { left: 250%; }
                }
                
                /* Membuat kilatnya muncul bergantian (staggered) dari atas ke bawah */
                .shing-effect:nth-child(1)::after { animation-delay: 0s; }
                .shing-effect:nth-child(2)::after { animation-delay: 1.2s; }
                .shing-effect:nth-child(3)::after { animation-delay: 2.4s; }
                .shing-effect:nth-child(4)::after { animation-delay: 3.6s; }
                .shing-effect:nth-child(5)::after { animation-delay: 4.8s; }
                .shing-effect:nth-child(6)::after { animation-delay: 6.0s; }
              `}</style>
              
              <div className="text-zinc-400 font-pixel text-lg uppercase tracking-widest text-center mb-6 mt-4">
                ~$ ls ./projects
              </div>
              
              <div className="flex flex-col gap-4 pb-10">
              {projects.map((proj, i) => {
                return (
                  <div 
                    key={proj.id} 
                    className="relative overflow-hidden group cursor-pointer animate-slide-in h-[130px] w-full shing-effect bg-zinc-900 border border-zinc-800 rounded-sm hover:border-zinc-500 transition-colors"
                    style={{ animationDelay: proj.delay }}
                  >
                    <div className={`absolute inset-0 z-10 opacity-90 transition-transform duration-500`}>
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-300"
                      />
                    </div>
                    
                    <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between">
                      <div className={`w-max bg-zinc-950/80 text-zinc-400 text-[9px] font-mono px-2 py-0.5 rounded-sm border border-zinc-800 shadow-sm uppercase`}>
                        &gt; {proj.tag}
                      </div>
                      
                      <div className="bg-zinc-950/90 backdrop-blur-md p-2.5 rounded-sm border border-zinc-800">
                        <h3 className={`font-pixel text-sm text-zinc-200 mb-0.5 flex items-center gap-1.5 uppercase tracking-wide`}>
                          <span className="text-zinc-500">{proj.icon}</span> {proj.title}
                        </h3>
                        <p className="text-[10px] font-mono text-zinc-500 leading-tight line-clamp-2">{proj.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </div>

        {/* Story Tab on Mobile */}
        <div 
          style={{ display: activeTab === 'story' ? 'flex' : 'none' }}
          className="flex-1 relative flex-col bg-transparent animate-fade-in pb-20"
        >
            <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none z-0"></div>
            
            {/* Dynamic Effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/95"></div>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Character Sprite */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 h-[65%] w-full max-w-[300px] pointer-events-none flex justify-center items-end z-10 opacity-95">
              <img src="/Portogamegweh/avatar.png" alt="Fero VN Sprite" className="h-full w-auto object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)] animate-float grayscale opacity-80 mix-blend-lighten" />
            </div>
            
            {/* Dialog Box Container (Pushed to bottom) */}
            <div className="mt-auto mb-10 px-4 relative z-20 w-full max-w-md mx-auto">
              <div className="w-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-sm p-5 relative shadow-md">
                {/* Name Tag */}
                <div className="absolute -top-4 left-4 bg-zinc-800 text-zinc-300 font-pixel px-4 py-1 rounded-sm border border-zinc-700 text-[11px] uppercase">
                  Fero_Fasya
                </div>
                
                {/* Story Text */}
                <div className="text-zinc-300 font-mono text-[10px] leading-relaxed pr-6 mt-2">
                  <p className="mb-2">&gt; Born in Jakarta and now building things in Bandung. I am a 6th-semester Informatics Engineering student at USBYPKP.</p>
                  <p>&gt; I love Anime, Games, storytelling, astronomy, and philosophy. I'm currently working on AIKA (3D VRM AI) and KIRA AI TRAINER. Code isn't just logic; it's a medium to create immersive experiences.</p>
                </div>
                
                {/* Next Indicator */}
                <div className="absolute bottom-3 right-3 text-zinc-500 animate-pulse">
                  <Play fill="currentColor" size={16} />
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Mobile Bottom Nav */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
