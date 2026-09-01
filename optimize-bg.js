const fs = require('fs');
let files = ['src/components/MobileView.tsx', 'src/components/DesktopView.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  const newBg = `
      {/* Preloaded and GPU-accelerated backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={\`absolute inset-0 transition-opacity duration-1000 ease-in-out \${activeTab === 'home' ? 'opacity-[0.15]' : 'opacity-0'}\`} style={{ backgroundImage: 'url("/Portogamegweh/images/bg.webp")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}></div>
        <div className={\`absolute inset-0 transition-opacity duration-1000 ease-in-out \${activeTab === 'story' ? 'opacity-[0.15]' : 'opacity-0'}\`} style={{ backgroundImage: 'url("/Portogamegweh/images/bgstory.webp")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}></div>
        <div className={\`absolute inset-0 transition-opacity duration-1000 ease-in-out \${activeTab === 'works' ? 'opacity-[0.15]' : 'opacity-0'}\`} style={{ backgroundImage: 'url("/Portogamegweh/images/bgwork.webp")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}></div>
      </div>`;
  
  const startMarker = '{/* Dynamic Background Area */}';
  const endMarker = '<div className="absolute inset-0 z-0 bg-noise opacity-50 pointer-events-none';
  
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  
  if (startIdx > -1 && endIdx > -1) {
    const before = content.slice(0, startIdx + startMarker.length);
    const after = content.slice(endIdx);
    
    content = before + '\n' + newBg + '\n      ' + after;
    fs.writeFileSync(file, content);
    console.log('Optimized backgrounds in ' + file);
  } else {
    console.log('Could not find markers in ' + file);
  }
});
