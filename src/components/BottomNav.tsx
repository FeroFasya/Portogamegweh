import React from 'react';
import { BookOpen, User, Star } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  return (
    <div className="w-full h-16 shrink-0 bg-[#0c0c0c] border-t border-zinc-800 z-50 flex px-4 relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none z-0"></div>
      
      {[
        { id: 'home', label: "HOME", icon: <BookOpen size={18} /> },
        { id: 'story', label: "STORY", icon: <User size={18} /> },
        { id: 'works', label: "WORKS", icon: <Star size={18} /> }
      ].map((nav) => {
        const isActive = activeTab === nav.id;
        return (
          <div
            key={nav.id}
            onClick={() => setActiveTab(nav.id)}
            className={`flex-1 flex flex-col items-center justify-center font-pixel tracking-widest text-[11px] cursor-pointer transition-all duration-300 relative z-10
               ${isActive ? 'text-zinc-200' : 'text-zinc-600 hover:text-zinc-400'}`}
          >
            {isActive && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-zinc-400"></div>
            )}
            <span className={`${isActive ? 'transform -translate-y-1 text-zinc-300' : ''} transition-transform`}>{nav.icon}</span>
            <span className="mt-1">{nav.label}</span>
          </div>
        )
      })}
    </div>
  );
}
