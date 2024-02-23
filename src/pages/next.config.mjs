module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias["pages"] = path.join(__dirname, "src/pages");
    return config;
  },
};
