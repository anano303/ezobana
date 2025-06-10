/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add i18n configuration for multilingual support
  i18n: {
    locales: ["ka", "en"],
    defaultLocale: "ka",
  },

  // Improve page load speed with compression
  compress: true,

  // Add proper redirects for old URLs
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
