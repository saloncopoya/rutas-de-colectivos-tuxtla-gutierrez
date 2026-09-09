const fs = require('fs');
const path = require('path');

const datosPath = path.join(__dirname, 'datos.json');
const rawData = fs.readFileSync(datosPath, 'utf-8');
const data = JSON.parse(rawData);

console.log(`[BUILD] Generando páginas estáticas para ${data.appName}...`);

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Generación de Sitemap dinámico
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mi-repositorio.pages.dev/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapContent);
console.log('[BUILD] sitemap.xml generado con éxito.');
