import { projects } from '@/data/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLink, Play } from 'lucide-react';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white">
      {/* Background Noise */}
      <div className="fixed inset-0 bg-noise opacity-50 pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="relative z-20 w-full p-4 md:p-6 lg:p-8">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
          <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
            <ChevronLeft size={16} />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest">Back to Hub</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 pb-20">
        
        {/* Header */}
        <header className="mb-12 animate-slide-in">
          <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-sm font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-4">
            &gt; {project.category}
          </div>
          <h1 className="font-pixel text-4xl md:text-5xl text-zinc-100 uppercase tracking-wide mb-4">
            {project.title}
          </h1>
          {project.status && (
            <div className="inline-block px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-mono text-[10px] mb-4 rounded-sm">
              Status: {project.status}
            </div>
          )}
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag, i) => (
              <span key={i} className={`font-mono text-[10px] px-2 py-1 rounded-sm bg-zinc-900 border border-zinc-800 ${tag.colorClass}`}>
                #{tag.name}
              </span>
            ))}
          </div>

          {project.link && project.link !== '#' && (
            <div className="mt-8">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all font-pixel text-sm uppercase rounded-sm"
              >
                Launch Project <ExternalLink size={16} strokeWidth={2.5} />
              </a>
            </div>
          )}
        </header>

        {/* Gallery */}
        <div className="space-y-8 animate-slide-in" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-zinc-800"></div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Media.Gallery</span>
            <div className="h-px flex-1 bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((media, i) => {
              const isFullWidth = i === 0 || (i % 3 === 0 && project.gallery.length > 2);
              
              return (
                <div 
                  key={i} 
                  className={`bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden relative group shing-effect ${isFullWidth ? 'md:col-span-2' : ''}`}
                >
                  {media.type === 'video' ? (
                    <div className="relative w-full aspect-video">
                      <video 
                        src={media.url} 
                        className="w-full h-full object-cover"
                        controls
                        muted
                        playsInline
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[16/9] md:aspect-auto h-full min-h-[300px]">
                      <img 
                        src={media.url} 
                        alt={`${project.title} preview ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}