/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "media.s-bol.com"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "top10vandaag.nl" }],
        destination: "https://www.top10vandaag.nl/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
