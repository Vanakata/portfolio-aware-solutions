/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output keeps the Docker image small for the Synology NAS deploy.
  output: "standalone",
  reactStrictMode: true,
};

export default nextConfig;
