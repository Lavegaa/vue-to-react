/** @type {import('next').NextConfig} */
const target = "https://project-vue.tobecon.co.kr";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${target}/:path*`,
      },
      {
        source: "/assets/:path*",
        destination: `${target}/:path*`,
      },
    ];
  },
};

export default nextConfig;
