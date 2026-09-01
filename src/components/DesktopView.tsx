import React, { useState } from 'react';
import Link from 'next/link';
import {
  Code, FolderOpen, PenTool, BrainCircuit,
  User, BookOpen, MessageSquare,
  Mail, ChevronRight, Play, Star, Settings, Award, X
} from 'lucide-react';
import { projects, socialLinks } from '../data/constants';
import BottomNav from './BottomNav';

interface DesktopViewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  setIsEditModalOpen: (open: boolean) => void;
  setIsCertModalOpen: (open: boolean) => void;
}

export default function DesktopView({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
  setIsEditModalOpen,
  setIsCertModalOpen
}: DesktopViewProps) {
  const [isQuoteVisible, setIsQuoteVisible] = useState(true);
  return (
    <div className="hidden lg:flex w-full h-screen relative bg-[#0c0c0c] font-sans text-zinc-300">
      {/* Dynamic Background Area */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out mix-blend-screen ${activeTab === 'home' ? 'opacity-[0.15]' : 'opacity-0'}`} style={{ backgroundImage: "url('/Portogamegweh/images/bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(120%)' }}></div>
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out mix-blend-screen ${activeTab === 'story' ? 'opacity-[0.15]' : 'opacity-0'}`} style={{ backgroundImage: "url('/Portogamegweh/images/bgstory.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(120%)' }}></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-50 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Scanlines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)' }}></div>
      </div>

      {/* -------------------- KIRI: TERMINAL SIDEBAR -------------------- */}
      <div
        className={`relative h-full w-[300px] lg:w-[350px] bg-zinc-950/90 backdrop-blur-md z-30 border-r border-zinc-800 shrink-0 transition-all duration-500 ease-in-out
          ${activeTab === 'home' && isSidebarOpen
            ? 'ml-0 shadow-[8px_0_30px_rgba(0,0,0,0.8)]'
            : '-ml-[300px] lg:-ml-[350px] shadow-none'
          }`}
      >
        {/* Vertical Text Banner */}
        <div className="absolute top-0 left-0 h-full w-12 border-r border-zinc-800 flex flex-col items-center py-4 bg-zinc-900/50">
          <div className="transform -rotate-90 origin-center whitespace-nowrap mt-40 text-zinc-600 font-pixel tracking-widest text-2xl opacity-60">
            ~$ /SYS/DEV
          </div>
          <div className="transform -rotate-90 origin-center whitespace-nowrap mt-64 text-zinc-500 font-pixel tracking-widest text-xl opacity-70">
            USER: FERO_FASYA
          </div>
        </div>

        <div className="ml-12 p-4 pt-6 h-full flex flex-col relative font-mono">
          {/* Profil Avatar Card */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-14 h-14 rounded-md border border-zinc-700 bg-zinc-800 overflow-hidden flex items-center justify-center relative z-20 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/Portogamegweh/images/avatars/1.jpg" alt="Fero Avatar" />
            </div>
            <div className="bg-zinc-900/80 px-4 py-1.5 rounded-md border border-zinc-800 font-pixel text-lg text-zinc-300 flex items-center gap-2 -ml-2 pl-4 shadow-sm">
              Fero_Fasya <PenTool size={12} className="text-zinc-500 cursor-pointer hover:text-zinc-300" onClick={() => setIsEditModalOpen(true)} />
            </div>
          </div>

          {/* Developer Stats */}
          <div className="mb-6 pl-2 space-y-4">
            <div>
              <div className="text-[10px] font-bold text-zinc-500 mb-1 flex items-center gap-1 uppercase tracking-widest">
                &gt; GAPMOE_LVL
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

          {/* Current Mission Card */}
          <div className="relative mt-4 mb-2 z-10 mx-2">
            <div className="absolute -top-3.5 left-4 bg-zinc-800 text-zinc-300 text-[10px] font-pixel px-3 py-1 rounded-sm border border-zinc-700 z-10 shadow-sm uppercase">
              ~$ curr_quest.sh
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-md p-5 flex items-center gap-4">
              <div className="bg-zinc-950 p-3 rounded-md border border-zinc-800 text-zinc-400 shrink-0">
                <BrainCircuit size={24} strokeWidth={2} />
              </div>
              <div className="text-[11px] font-mono text-zinc-400 leading-relaxed">
                Crafting stories & making history with LLM & AI.
                <div className="text-[10px] text-zinc-500 mt-1.5">&gt; status: open_to_work</div>
              </div>
            </div>
          </div>

          {/* Event Banner */}
          <div className="mt-auto mb-10 relative cursor-pointer mx-2 group" onClick={() => setActiveTab('works')}>
            <div className="absolute -top-3.5 left-4 bg-zinc-800 text-zinc-300 text-[10px] font-pixel px-3 py-1 rounded-sm border border-zinc-700 z-10 shadow-sm uppercase">
              ~$ feat_project.exe
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-md h-24 overflow-hidden relative flex items-center group-hover:border-zinc-500 transition-colors">
              <div className="w-2/5 h-full relative overflow-hidden bg-zinc-950 border-r border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img className="w-full h-full object-cover opacity-60" src="/Portogamegweh/images/projects/mywebu.webp" alt="Mywebu" />
              </div>
              <div className="w-3/5 p-4 bg-zinc-900 flex flex-col justify-center h-full">
                <span className="text-sm font-pixel text-zinc-200 uppercase">Mywebu</span>
                <span className="text-[10px] font-mono mt-1 text-zinc-500">&gt; pfolio_active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- AREA KONTEN TENGAH -------------------- */}
      <div 
        className={`relative flex-1 h-full flex flex-col z-20 transition-all duration-500 bg-transparent`}
      >
        <div className="relative flex-1 overflow-hidden">
          {/* Base Dark Overlay & Dynamic Effects */}
          <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none z-0 ${activeTab !== 'home' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/95"></div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>

          {/* Sidebar Toggle Button */}
          {activeTab === 'home' && (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="absolute top-[50%] -translate-y-1/2 left-0 z-50 p-2 bg-zinc-900 text-zinc-400 rounded-r-md border-y border-r border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center"
              title={isSidebarOpen ? "Tutup Sidebar" : "Buka Sidebar"}
            >
              <ChevronRight size={24} strokeWidth={2} className={`transform transition-transform duration-500 ${isSidebarOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          )}

          {/* Top Right Header Stats */}
          <div className="absolute top-6 right-6 z-50 flex gap-4">
            <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-sm h-10 flex items-center px-3 min-w-[100px] cursor-default">
              <div className="text-zinc-500 mr-2">
                <Code size={16} strokeWidth={2} />
              </div>
              <span className="text-zinc-300 font-pixel ml-2 text-lg pr-2 tracking-widest">1.2K</span>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-sm h-10 flex items-center px-3 min-w-[100px] cursor-default">
              <div className="text-zinc-500 mr-2">
                <FolderOpen size={16} strokeWidth={2} />
              </div>
              <span className="text-zinc-300 font-pixel ml-2 text-lg pr-2 tracking-widest">20+</span>
            </div>
          </div>

          {activeTab === 'home' && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              {/* Center Character Placeholder */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[80%] w-full max-w-lg pointer-events-none flex justify-center items-end z-10">
                <img src="/123.png" alt="Fero Avatar" className="h-full w-auto object-contain animate-float drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] grayscale opacity-80 mix-blend-lighten" />
              </div>

              {/* Chat Bubble */}
              {isQuoteVisible && (
                <div className="absolute top-[25%] left-[40%] animate-float pointer-events-auto z-20" style={{ animationDelay: '1s' }}>
                  <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-sm p-4 max-w-xs relative text-left group">
                    <div className="absolute -top-2 -right-2 bg-zinc-800 border border-zinc-600 rounded-sm w-5 h-5 flex items-center justify-center cursor-pointer text-zinc-400 hover:text-white hover:bg-red-500/80 transition-colors z-10 opacity-0 group-hover:opacity-100" onClick={() => setIsQuoteVisible(false)}>
                      <X size={12} strokeWidth={2.5} />
                    </div>
                    <div className="text-xs text-zinc-500 font-pixel mb-2 uppercase">~$ user.quote</div>
                    <p className="font-mono text-zinc-300 text-xs leading-relaxed">"Aku ingin mengukir sejarah.<br/>Destinasi impian aku... Tokyo · New York · London · Shanghai."</p>
                    <p className="text-[10px] text-zinc-500 mt-3 font-mono">&gt; Fero Fasya</p>
                  </div>
                </div>
              )}
              
              {/* Floating Certificate Sticker */}
              <div 
                onClick={() => setIsCertModalOpen(true)}
                className="absolute top-10 left-10 cursor-pointer animate-float z-20 group" style={{ animationDelay: '2s' }}
              >
                <div className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-sm text-zinc-400 font-pixel text-sm group-hover:bg-zinc-800 group-hover:text-white transition-all uppercase flex items-center gap-2">
                  <Award size={16} /> [ Achievements ]
                </div>
              </div>

              {/* Action Button */}
              <div className="absolute bottom-16 left-[20%] cursor-pointer animate-float z-20">
                <div className="bg-zinc-900 border border-zinc-600 rounded-sm px-8 py-3 relative z-10 flex items-center justify-center hover:bg-zinc-200 hover:text-black hover:border-zinc-200 transition-all group" onClick={() => setActiveTab('works')}>
                  <h1 className="text-xl font-pixel tracking-widest uppercase transition-colors">Start_Session</h1>
                  <div className="absolute -top-3 -right-3 bg-zinc-800 text-zinc-400 font-mono px-2 py-0.5 text-[10px] border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    &gt; init_works
                  </div>
                </div>
              </div>

              {/* Right Side Social Menu */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
                {socialLinks.map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noreferrer" className="group relative flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-sm border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-500 transition-all text-zinc-400 hover:text-white">
                    <span>{item.icon}</span>
                    <div className="absolute right-14 bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-mono px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">&gt; {item.label}</div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'story' && (
            <div className="absolute inset-0 flex flex-col z-20">
              <div className="flex-1 relative pointer-events-none">
                <img src="/Portogamegweh/avatar.png" alt="Fero VN Sprite" className="absolute bottom-0 left-[10%] max-h-full w-auto object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] grayscale opacity-80 mix-blend-lighten" />
              </div>
              <div className="h-48 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/90 to-transparent p-6 flex items-end">
                <div className="w-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-sm p-6 relative">
                  <div className="absolute -top-4 left-6 bg-zinc-800 text-zinc-300 font-pixel text-sm px-4 py-1 rounded-sm border border-zinc-700 uppercase">
                    Fero_Fasya
                  </div>
                  <div className="text-zinc-300 font-mono text-sm leading-relaxed pr-8 pt-2">
                      <p className="mb-2">&gt; Born in Jakarta and now building things in Bandung. I am a 6th-semester Informatics Engineering student at USBYPKP.</p>
                      <p>&gt; I love Anime, Games, storytelling, astronomy, and philosophy. I'm currently working on AIKA (3D VRM AI) and KIRA AI TRAINER. Code isn't just logic; it's a medium to create immersive experiences.</p>
                  </div>
                  <div className="absolute bottom-4 right-4 text-zinc-500 animate-pulse"><Play fill="currentColor" size={20} /></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'works' && (
            <div className="absolute inset-0 p-8 pt-16 flex flex-col z-20 overflow-hidden bg-[#0c0c0c]">
              <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none z-0"></div>
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
                }
                .shing-effect:hover::after {
                  animation: shingAnim 0.7s ease-out forwards;
                }
                @keyframes shingAnim {
                  0% { left: -150%; }
                  100% { left: 250%; }
                }
              `}</style>
              
              <div className="text-zinc-400 font-pixel text-xl uppercase tracking-widest text-center mb-8">
                ~$ ls ./projects
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 pb-24 relative z-20">
                <div className="grid grid-cols-6 auto-rows-[220px] gap-4">
                  {projects.map((proj, i) => {
                    let colSpan = 'col-span-2';
                    let rowSpan = 'row-span-1';
                    
                    if (i === 3 || i === 4) {
                      colSpan = 'col-span-3';
                    } else if (i === 8) {
                      colSpan = 'col-span-6';
                    }

                    return (
                        <Link href={`/works/${proj.slug}`} key={proj.id} className={`block h-full ${colSpan} ${rowSpan}`}>
                        <div 
                          className={`relative overflow-hidden group cursor-pointer animate-slide-in shing-effect w-full h-full bg-zinc-900 border border-zinc-800 rounded-sm hover:border-zinc-500 transition-colors`}
                          style={{ animationDelay: proj.delay }}
                        >
                          <div className={`absolute inset-0 z-10 opacity-90 transition-transform duration-500`}>
                            <img 
                              src={proj.image} 
                              alt={proj.title} 
                              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-300"
                            />
                          </div>
                          
                          {/* Content Overlay */}
                          <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
                            <div className="text-[10px] font-mono text-zinc-400 font-medium tracking-wider bg-black/40 self-start px-2 py-1 rounded backdrop-blur-md">
                              &gt; {proj.category}
                            </div>
                            
                            <div className="bg-zinc-950/90 backdrop-blur-md p-3 rounded-sm border border-zinc-800 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className={`font-pixel text-lg text-zinc-200 mb-1 flex items-center gap-2 uppercase tracking-wide`}>
                                <span className="text-zinc-500">{(proj as any).icon}</span> {proj.title}
                              </h3>
                              <p className="text-[11px] font-mono text-zinc-500 leading-relaxed line-clamp-2">{proj.description}</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Desktop Bottom Nav */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
