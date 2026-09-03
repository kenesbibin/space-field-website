const fs = require('fs');
const path = require('path');

const dirs = ['app', 'components', 'lib'];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
      files.push(fullPath);
    }
  }
  return files;
}

const imgTagRegex = /<img\b[^>]*>/g;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = content.replace(imgTagRegex, (tag) => {
    // Skip if already has loading or is the hero poster (eager) or SVG/image sources inside code strings that shouldn't be touched
    if (/\bloading=/.test(tag)) return tag;
    if (/\bfetchPriority\s*=/.test(tag)) return tag;
    if (/\bpriority\b/.test(tag)) return tag;
    // Add loading lazy and decoding async before the closing />
    const modified = tag.replace(/\s*\/>$/, ' loading="lazy" decoding="async" />');
    return modified;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + filePath);
  }
}

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  const files = walk(dir);
  for (const file of files) {
    try {
      processFile(file);
    } catch (err) {
      console.error('Failed ' + file + ':', err.message);
    }
  }
}
