/** @type {import('next').NextConfig} */
const nextConfig = {
  /*Creating the deploy folder*/
  output: "export",

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // basePath allows you to set a path prefix for the application when deploying
  basePath: "/deploy-to-gh-pages",
};

export default nextConfig;
