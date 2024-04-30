/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
    return config;
  },
  // webpack: (config) => {
  //      config.resolve.alias.canvas = false;
  //      return config;
  //    },
};

export default nextConfig;
