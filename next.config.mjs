/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: { formats: ["image/avif", "image/webp"] },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
