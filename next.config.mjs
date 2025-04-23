/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  sassOptions: {
    prependData: `
      @import "_mixins.scss";
      @import "_variables.scss";
  
   `,
    includePaths: ["./src/styles"],
  },
};

export default nextConfig;
