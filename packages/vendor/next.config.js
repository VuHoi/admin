/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable static generation
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ttf|woff|woff2|eot|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/fonts/",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
