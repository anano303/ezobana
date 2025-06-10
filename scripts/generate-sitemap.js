const fs = require("fs");
const path = require("path");

// Current date in ISO format
const currentDate = new Date().toISOString();

// Create the sitemap XML content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://ezobana.ge/</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.00</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://ezobana.ge/about</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.80</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://ezobana.ge/services</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.80</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://ezobana.ge/portfolio</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.80</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://ezobana.ge/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.80</priority>
    <changefreq>monthly</changefreq>
  </url>
</urlset>`;

// Write to the sitemap.xml file
const outputPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, sitemapContent);

console.log(`✅ Sitemap generated successfully at ${outputPath}`);
console.log(`🕒 Last modified date: ${currentDate}`);
