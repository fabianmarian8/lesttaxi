import sharp from 'sharp';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, '..', 'public', 'lovable-uploads');

const logo  = '08bb4537-9151-4684-bf39-abc2900ea374.webp';        // transparentné
const suv   = '2c4085f5-69ea-4561-baae-9a987e4939e7.webp';        // foto
const pizza = 'c673d198-bf62-4c01-8827-484fb2d3df6e.webp';        // transparentné

async function ensureDir() { await fs.mkdir(pub, { recursive: true }); }

async function main() {
  await ensureDir();

  // LOGO – lossless WebP (zachová alfa)
  await sharp(join(pub, logo)).resize(48, 48).webp({ lossless: true })
    .toFile(join(pub, '08bb4537-9151-4684-bf39-abc2900ea374-48.webp'));
  await sharp(join(pub, logo)).resize(96, 96).webp({ lossless: true })
    .toFile(join(pub, '08bb4537-9151-4684-bf39-abc2900ea374-96.webp'));

  // PIZZA – lossless WebP (zachová alfa)
  await sharp(join(pub, pizza)).resize(80, 80).webp({ lossless: true })
    .toFile(join(pub, 'c673d198-bf62-4c01-8827-484fb2d3df6e-80.webp'));
  await sharp(join(pub, pizza)).resize(160, 160).webp({ lossless: true })
    .toFile(join(pub, 'c673d198-bf62-4c01-8827-484fb2d3df6e-160.webp'));

  // SUV – lossy WebP (menšie veľkosti)
  await sharp(join(pub, suv)).resize(320).webp({ quality: 72, effort: 4 })
    .toFile(join(pub, '2c4085f5-69ea-4561-baae-9a987e4939e7-320.webp'));
  await sharp(join(pub, suv)).resize(480).webp({ quality: 72, effort: 4 })
    .toFile(join(pub, '2c4085f5-69ea-4561-baae-9a987e4939e7-480.webp'));
  await sharp(join(pub, suv)).resize(640).webp({ quality: 72, effort: 4 })
    .toFile(join(pub, '2c4085f5-69ea-4561-baae-9a987e4939e7-640.webp'));
}
main().catch((e) => { console.error(e); process.exit(1); });