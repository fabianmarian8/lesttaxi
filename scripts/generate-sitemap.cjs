// Walk dist/ and build sitemap.xml (Node LTS, no deps)
const { readdirSync, writeFileSync, statSync } = require('fs');
const { join, relative } = require('path');

const BASE  = 'https://www.lesttaxi.com';
const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Bratislava' });           // YYYY-MM-DD (local time for Bratislava)
const htmls = [];

(function walk(dir){
  for (const entry of readdirSync(dir)){
    const full = join(dir, entry);
    statSync(full).isDirectory() ? walk(full)
      : entry.endsWith('.html') && htmls.push(relative('dist', full));
  }
})('dist');

const urls = htmls.map(p=>{
  let loc = '/' + p.replace(/index\.html$/,'').replace(/\.html$/,'');
  if(loc === '/') { loc = '/'; }
  return `
  <url>
    <loc>${BASE}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${loc === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

writeFileSync('dist/sitemap.xml', xml.trim());
console.log('✅  sitemap.xml generated', today);
