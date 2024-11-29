/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/deploy-to-gh-pages/",
  basePath: "/deploy-to-gh-pages",
};

export default nextConfig;
