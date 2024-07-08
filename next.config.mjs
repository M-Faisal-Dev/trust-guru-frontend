
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'backend.trustyourguru.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  