module.exports = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: "./src",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },
};
