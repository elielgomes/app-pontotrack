/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatar.iran.liara.run",
      },
      {
        hostname: "images.unsplash.com",
      },

      {
        hostname: "tailwindui.com",
      },
    ],
  },
};

export default nextConfig;
