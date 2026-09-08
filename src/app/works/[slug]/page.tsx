import { projects } from '@/data/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLink, Code2, Layers, Zap } from 'lucide-react';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Combine cover image and gallery for the media slider
  const mediaList = [];
  if (project.image) {
    mediaList.push({ type: 'image', url: project.image });
  }
  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach(m => {
      // Don't add the cover twice if it's in the gallery
      if (m.url !== project.image) mediaList.push(m);
    });
  }

  const heroMedia = mediaList.length > 0 ? mediaList[0] : null;
  const remainingMedia = mediaList.length > 1 ? mediaList.slice(1) : [];

  return (
    <div className="min-h-screen bg-[#0A0B10] text-zinc-300 font-sans selection:bg-indigo-500/30 selection:text-white relative pb-24 md:pb-0">
      {/* Background Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Decorative Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="relative z-20 w-full px-6 pt-8 md:px-12 lg:px-24 mb-6 md:mb-10">
        <Link href="/?tab=works" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-widest">Kembali ke Portofolio</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-0 md:px-12 lg:px-24 pb-24 flex flex-col gap-8 md:gap-12">
        
        {/* Header Section (Mobile: inside container, Desktop: top) */}
        <header className="px-6 md:px-0 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-slide-in">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
              <Zap size={14} /> {project.category}
            </div>
            <h1 className="font-pixel text-5xl md:text-7xl text-white uppercase tracking-wider drop-shadow-lg">
              {project.title}
            </h1>
          </div>

          {project.link && project.link !== '#' && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm uppercase tracking-widest rounded-sm transition-all hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:-translate-y-1 active:scale-95 border border-indigo-400/30"
            >
              Kunjungi Proyek <ExternalLink size={16} />
            </a>
          )}
        </header>

        {/* Hero Media - Full bleed on mobile! */}
        {heroMedia && (
          <div className="w-full md:rounded-xl overflow-hidden bg-zinc-900 border-y md:border border-zinc-800/80 shadow-2xl animate-slide-in aspect-video relative group" style={{ animationDelay: '100ms' }}>
            {heroMedia.type === 'video' ? (
              <video 
                src={heroMedia.url} 
                className="w-full h-full object-cover scale-105"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img 
                src={heroMedia.url} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-80 md:opacity-40 pointer-events-none"></div>
          </div>
        )}

        {/* Content Split Layout */}
        <div className="px-6 md:px-0 flex flex-col lg:flex-row gap-12 animate-slide-in" style={{ animationDelay: '200ms' }}>
          
          {/* Left Column */}
          <div className="flex-1 space-y-12">
            <section className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="text-indigo-400" />
                Tentang Proyek
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
            </section>

            {remainingMedia.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Galeri & Media</h2>
                {/* Horizontal Scroll Container */}
                <div className="flex gap-4 overflow-x-auto pb-6 custom-scrollbar snap-x -mx-6 px-6 md:mx-0 md:px-0">
                  {remainingMedia.map((media, i) => (
                    <div key={i} className="min-w-[85vw] md:min-w-[400px] aspect-video rounded-xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 flex-shrink-0 snap-center relative group backdrop-blur-sm">
                      {media.type === 'video' ? (
                        <video 
                          src={media.url} 
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <img 
                          src={media.url} 
                          alt={`${project.title} gallery ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column (Sidebar) */}
          <aside className="w-full lg:w-[380px] shrink-0">
            <div className="bg-[#11131a]/80 backdrop-blur-md border border-indigo-500/10 rounded-2xl p-8 sticky top-8 space-y-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              
              <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Code2 size={18} className="text-indigo-400" />
                  Teknologi & Tag
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-sm bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3">Ringkasan</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.status && (
                <div className="pt-6 border-t border-zinc-800/50">
                  <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Status</h3>
                  <div className="inline-flex px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs rounded-sm">
                    {project.status}
                  </div>
                </div>
              )}

            </div>
          </aside>

        </div>
      </main>

      {/* Floating Sticky Mobile Action Button */}
      {project.link && project.link !== '#' && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0B10] via-[#0A0B10] to-transparent z-50 animate-slide-in">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-600 active:bg-indigo-700 text-white font-mono text-sm uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.4)] border border-indigo-400/30"
          >
            Kunjungi Proyek <ExternalLink size={18} />
          </a>
        </div>
      )}

    </div>
  );
}