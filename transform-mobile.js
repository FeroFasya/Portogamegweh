const fs = require('fs');

let file = 'src/components/MobileView.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Optimize Backgrounds (keeping mix-blend and blur)
const bgRegex = /\{\/\* Dynamic Background Area \*\/\}[\s\S]*?<div className="relative flex-1 overflow-hidden flex flex-col z-10">/;
const newBg = `{/* Dynamic Background Area */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={\`absolute inset-0 transition-opacity duration-700 ease-in-out mix-blend-screen \${activeTab === 'home' ? 'opacity-[0.15]' : 'opacity-0'}\`} style={{ backgroundImage: "url('/Portogamegweh/images/bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(120%)' }}></div>
        <div className={\`absolute inset-0 transition-opacity duration-700 ease-in-out mix-blend-screen \${activeTab === 'story' ? 'opacity-[0.15]' : 'opacity-0'}\`} style={{ backgroundImage: "url('/Portogamegweh/images/bgstory.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) contrast(120%)' }}></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-50 pointer-events-none mix-blend-overlay"></div>
      
      <div className="relative flex-1 overflow-hidden flex flex-col z-10">`;
content = content.replace(bgRegex, newBg);

// 2. Tab switching logic
content = content.replace(/\{activeTab === 'home' && \(/g, '<div style={{ display: activeTab === "home" ? "flex" : "none" }} className="flex-1 overflow-y-auto bg-transparent relative flex-col min-h-full">');
content = content.replace(/<div className="flex-1 overflow-y-auto bg-transparent relative flex flex-col min-h-full">/, '');

content = content.replace(/\{activeTab === 'works' && \(/g, '<div style={{ display: activeTab === "works" ? "block" : "none" }} className="flex-1 overflow-y-auto bg-transparent relative p-4 pt-6 pb-20">');
content = content.replace(/<div className="flex-1 overflow-y-auto bg-transparent relative p-4 pt-6 pb-20">/, '');

content = content.replace(/\{\/\* Story Tab on Mobile \*\/\}\s*\{activeTab === 'story' && \(/g, '{/* Story Tab on Mobile */}\n          <div style={{ display: activeTab === "story" ? "flex" : "none" }} className="flex-1 relative flex-col bg-transparent animate-fade-in pb-20">');
content = content.replace(/<div \s*className="flex-1 relative flex flex-col bg-transparent animate-fade-in pb-20"\s*>/, '');

// Close tags for the conditional renders were removed, we need to remove the closing } from before Works and Story.
content = content.replace(/\)\}\s*\{activeTab === 'works'/g, '          {/* activeTab works replaced */}');
// Actually, earlier we just replaced the opening `&& (` but didn't remove the closing `)}`!
// Let's do it right.

fs.writeFileSync('transform-mobile.js', 'console.log("Ready");');
