/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',

        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',

        },
      ],
    },
  }

export default nextConfig;
