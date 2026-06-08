/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'i.ibb.co.com'
      },
      {
        hostname: 'lh3.googleusercontent.com' 
      },
    ]
  }
};

export default nextConfig;