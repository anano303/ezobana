const fs = require("fs");
const path = require("path");

// Configure your website details here
const siteConfig = {
  siteUrl: "https://ezobana.ge",
  routes: [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    { path: "/about", priority: 0.8, changefreq: "monthly" },
    { path: "/services", priority: 0.8, changefreq: "monthly" },
    { path: "/portfolio", priority: 0.8, changefreq: "monthly" },
    { path: "/contact", priority: 0.8, changefreq: "monthly" },
    // Add any other routes your website has
  ],
  outputPath: path.join(__dirname, "../public/sitemap.xml"),
};

// Generate sitemap XML
function generateSitemap() {
  const date = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  // Add each route to the sitemap
  siteConfig.routes.forEach((route) => {
    xml += `
  <url>
    <loc>${siteConfig.siteUrl}${route.path}</loc>
    <lastmod>${date}</lastmod>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>`;
  });

  xml += `
</urlset>`;

  // Write the sitemap file
  fs.writeFileSync(siteConfig.outputPath, xml);
  console.log(`✅ Sitemap generated at: ${siteConfig.outputPath}`);
}

// Execute the sitemap generation
generateSitemap();
