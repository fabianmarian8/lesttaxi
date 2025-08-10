import { globby } from 'globby';
import { writeFileSync } from 'fs';

const BASE = 'https://www.lesttaxi.com';
const today = new Date().toISOString().slice(0, 10);   // YYYY-MM-DD
const pages = (await globby('dist/**/*.html', { onlyFiles: true })).filter(p => !/\/404\.html$/.test(p));

const urls = pages.map(p => {
  const loc = BASE + p.replace(/^dist/, '').replace(/index\.html$/, '')   // /sub/ → /sub/
                     .replace(/\.html$/, '');
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${loc === BASE + '/' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

writeFileSync('public/sitemap.xml', xml.trim());
console.log('✅  sitemap.xml generated with lastmod', today);