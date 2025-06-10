/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ezobana.ge",
  generateRobotsTxt: false, // Set to false since you already have a custom robots.txt
  outDir: "public",
  exclude: ["/admin/*", "/private/*", "/temp/*", "/draft/*"],
  alternateRefs: [
    {
      href: "https://ezobana.ge",
      hreflang: "ka",
    },
    {
      href: "https://ezobana.ge/en",
      hreflang: "en",
    },
  ],
  priority: 0.7,
  changefreq: "weekly",
  transform: async (config, path) => {
    // Custom priority for homepage
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Higher priority for important pages
    if (
      path.includes("/about") ||
      path.includes("/services") ||
      path.includes("/contact")
    ) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Default values for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
