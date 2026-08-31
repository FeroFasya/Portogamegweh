const fs = require('fs');
const path = require('path');

function findFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next')) {
        results = results.concat(findFiles(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = findFiles('./src');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  if (content.includes('"/images/')) {
    content = content.replace(/"\/images\//g, '"/Portogamegweh/images/');
    changed = true;
  }
  if (content.includes("'/images/")) {
    content = content.replace(/'\/images\//g, "'/Portogamegweh/images/");
    changed = true;
  }
  if (content.includes('"/avatar.png"')) {
    content = content.replace(/"\/avatar\.png"/g, '"/Portogamegweh/avatar.png"');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(f, content);
    console.log('Updated ' + f);
  }
});
