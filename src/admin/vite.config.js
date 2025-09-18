import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['sanskriti-setu-cms.onrender.com', 'sanskriti-setu-cms-v2.onrender.com'],
    },
  });
};
