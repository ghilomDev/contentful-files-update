/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
},
async rewrites() {
    return [
        {
            source: '/document/:path*',
            destination: 'https://res.cloudinary.com/dev-wynn-las-vegas/image/upload/visit-wynn/:path*',
        },
    ];
},
  // webpack: (config) => {
  //      config.resolve.alias.canvas = false;
  //      return config;
  //    },
};

export default nextConfig;
