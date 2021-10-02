module.exports = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: "./src",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "my-build-id";
  },
};
