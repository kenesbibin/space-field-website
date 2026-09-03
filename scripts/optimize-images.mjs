import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const IMAGES_DIR = path.resolve('public/images');
const BACKUP_DIR = path.resolve('public/images/.originals');

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 75;
const PNG_QUALITY = 80;

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath);
  const backupPath = path.join(BACKUP_DIR, baseName);

  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return;
  }

  const stat = await fs.stat(filePath);
  if (stat.size < 150 * 1024) {
    return;
  }

  // Backup original if not already backed up
  try {
    await fs.access(backupPath);
  } catch {
    await fs.copyFile(filePath, backupPath);
  }

  // Read file into memory to avoid Windows file-lock issues
  const inputBuffer = await fs.readFile(filePath);
  const metadata = await sharp(inputBuffer).metadata();
  const resizeOptions = metadata.width && metadata.width > MAX_WIDTH ? { width: MAX_WIDTH, withoutEnlargement: true } : undefined;

  let pipeline = sharp(inputBuffer);
  if (resizeOptions) {
    pipeline = pipeline.resize(resizeOptions);
  }

  let outputBuffer;
  if (ext === '.webp') {
    outputBuffer = await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toBuffer();
  } else if (ext === '.jpg' || ext === '.jpeg') {
    outputBuffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  } else if (ext === '.png') {
    outputBuffer = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer();
  }

  if (!outputBuffer) return;

  await fs.writeFile(filePath, outputBuffer);

  const newStat = await fs.stat(filePath);
  const saved = stat.size - newStat.size;
  console.log(`Optimized ${baseName}: ${(stat.size / 1024).toFixed(1)} KB -> ${(newStat.size / 1024).toFixed(1)} KB (saved ${(saved / 1024).toFixed(1)} KB)`);
}

async function main() {
  await ensureDir(BACKUP_DIR);
  const files = await fs.readdir(IMAGES_DIR);
  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    const stat = await fs.stat(filePath);
    if (stat.isFile()) {
      try {
        await processFile(filePath);
      } catch (err) {
        console.error(`Failed to process ${file}:`, err);
      }
    }
  }
}

main();
