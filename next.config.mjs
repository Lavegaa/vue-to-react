/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://project-vue.tobecon.co.kr/:path*",
      },
    ];
  },
};

export default nextConfig;
