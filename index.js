module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
    './rules/es',
    './rules/import',
  ].map(require.resolve),
};
