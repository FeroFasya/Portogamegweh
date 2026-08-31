import React, { useState } from 'react';
import { X, ExternalLink, Award, Search, ChevronLeft } from 'lucide-react';
import { certificates } from '../data/constants';

interface CertificateModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function CertificateModal({ isOpen, setIsOpen }: CertificateModalProps) {
  const [activeTab, setActiveTab] = useState('Awards');
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  if (!isOpen) return null;

  const categories = [
    { id: 'All', label: '🏆 All' },
    { id: 'Training', label: '⚡ Training' },
    { id: 'Events', label: '📚 Events' },
    { id: 'Awards', label: '🏆 Awards' }
  ];
  
  const filteredCerts = activeTab === 'All' 
    ? certificates 
    : certificates.filter(c => c.category === activeTab);

  const handleClose = () => {
    setSelectedCert(null);
    setIsOpen(false);
  };

  const selectedCertData = certificates.find(c => c.id === selectedCert);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Main Modal */}
      <div className="relative w-full max-w-xl bg-zinc-950 border border-zinc-700 rounded-md overflow-hidden shadow-2xl flex flex-col h-[600px] max-h-[85vh] animate-slide-up font-mono">
        <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none z-0"></div>
        
        {/* Header */}
        <div className="bg-zinc-900 p-4 flex justify-between items-start text-zinc-200 border-b border-zinc-800 shrink-0 relative z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Award size={20} className="text-zinc-400" />
              <h2 className="font-pixel text-lg tracking-wide uppercase">ACHIEVEMENTS</h2>
            </div>
            <div className="text-zinc-500 text-[10px] mt-1 uppercase">
              &gt; {certificates.length} items unlocked
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-sm border border-zinc-700 flex items-center justify-center transition-colors"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative z-10">
          
          {/* Default List View */}
          <div className={`absolute inset-0 flex flex-col transition-transform duration-300 ${selectedCert ? '-translate-x-full' : 'translate-x-0'}`}>
            {/* Tabs */}
            <div className="flex overflow-x-auto p-3 gap-2 hide-scrollbar bg-zinc-950 border-b border-zinc-800 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-1.5 rounded-sm text-[10px] uppercase border transition-colors whitespace-nowrap ${
                    activeTab === cat.id 
                      ? 'bg-zinc-800 text-zinc-200 border-zinc-600' 
                      : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {filteredCerts.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-zinc-600">
                  <Search size={48} className="mb-2 opacity-50" />
                  <p className="font-pixel text-sm uppercase">Item not found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {filteredCerts.map((cert) => (
                    <div 
                      key={cert.id}
                      onClick={() => setSelectedCert(cert.id)}
                      className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden cursor-pointer hover:border-zinc-600 transition-all group flex flex-col"
                    >
                      {/* Image Preview (Top) */}
                      <div className="w-full aspect-[4/3] bg-zinc-950 relative overflow-hidden shrink-0">
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-2 left-2 bg-zinc-900/90 backdrop-blur-sm px-2 py-0.5 rounded-sm text-[9px] uppercase text-zinc-400 border border-zinc-700">
                          {cert.category}
                        </div>
                      </div>
                      
                      {/* Title (Bottom) */}
                      <div className="p-3 flex-1 flex items-center justify-center bg-zinc-900">
                        <h3 className="font-pixel text-zinc-300 text-[11px] text-center uppercase tracking-wide line-clamp-2">{cert.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sub-Modal (Detail View) */}
          <div className={`absolute inset-0 bg-[#0c0c0c] flex flex-col transition-transform duration-300 ${selectedCert ? 'translate-x-0' : 'translate-x-full'}`}>
            {selectedCertData && (
              <>
                {/* Achievement Header */}
                <div className="bg-zinc-900 p-4 flex items-center justify-between border-b border-zinc-800 shrink-0 relative overflow-hidden">
                   {/* Background pattern */}
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }}></div>
                   
                   <div className="flex items-center gap-3 relative z-10">
                     <button 
                       onClick={() => setSelectedCert(null)}
                       className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white border border-zinc-700 rounded-sm flex items-center justify-center transition-colors"
                     >
                       <ChevronLeft size={16} strokeWidth={2} />
                     </button>
                     <div className="flex flex-col">
                       <span className="text-[10px] text-zinc-500 uppercase">&gt; unlock_data</span>
                       <h3 className="font-pixel text-zinc-200 text-sm truncate w-48 uppercase">{selectedCertData.title}</h3>
                     </div>
                   </div>
                   
                   <Award size={28} className="text-zinc-600 relative z-10" />
                </div>

                <div className="flex-1 overflow-y-auto p-4 flex flex-col bg-[#0c0c0c] custom-scrollbar relative">
                  <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-0"></div>
                  
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-sm p-4 flex-1 flex flex-col relative z-10">
                    
                    <h2 className="font-pixel text-zinc-200 text-lg mb-2 flex items-center gap-2 uppercase">
                      <span className="text-zinc-500">🏆</span> {selectedCertData.title}
                    </h2>
                    
                    <div className="w-full h-px bg-zinc-800 mb-4"></div>
                    
                    <p className="text-[11px] text-zinc-400 leading-relaxed mb-6">
                      {selectedCertData.desc}
                    </p>
                    
                    {selectedCertData.date && (
                      <div className="bg-zinc-950 border border-zinc-800 rounded-sm p-3 mb-6 inline-block w-max">
                        <span className="block text-[9px] text-zinc-500 uppercase mb-1">&gt; date_earned</span>
                        <span className="font-pixel text-zinc-300 text-sm">{selectedCertData.date}</span>
                      </div>
                    )}

                    {/* Evidence Preview */}
                    <div className="mt-auto">
                      <span className="block text-[9px] text-zinc-500 uppercase mb-2">&gt; preview_evidence.sh</span>
                      
                      {/* Image Gallery (Horizontal Scroll / Carousel) */}
                      <div className="flex gap-4 mb-4 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar">
                        {/* Main Image */}
                        <div className="w-[85%] shrink-0 snap-center bg-zinc-950 rounded-sm border border-zinc-800 overflow-hidden relative flex items-center justify-center">
                          <img src={selectedCertData.image} alt="Evidence Preview" className="max-w-full max-h-[400px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Sub Images (If Any) */}
                        {selectedCertData.subImages && selectedCertData.subImages.map((subImg: string, idx: number) => (
                          <div key={idx} className="w-[85%] shrink-0 snap-center bg-zinc-950 rounded-sm border border-zinc-800 overflow-hidden relative flex items-center justify-center">
                            <img src={subImg} alt={`Evidence Sub ${idx + 1}`} className="max-w-full max-h-[400px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>

                      <a 
                        href={selectedCertData.driveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full bg-zinc-800 hover:bg-zinc-200 text-zinc-300 hover:text-black font-pixel uppercase py-3 rounded-sm border border-zinc-700 hover:border-zinc-200 transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} strokeWidth={2} />
                        OPEN_ORIGINAL
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
