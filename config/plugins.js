module.exports = ({ env }) => ({
  'content-type-builder': {
    enabled: env.bool('CONTENT_TYPE_BUILDER_ENABLED', true),
  },
});
