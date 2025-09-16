const { mergeConfig } = require('vite');

module.exports = (config) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['sanskriti-setu-cms.onrender.com'],
    },
  });
};
