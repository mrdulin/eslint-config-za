module.exports = {
  // 默认使用 babel-eslint 作为解析器，用于解析 eslint 未支持但常用的语法
  parser: 'babel-eslint',
  parserOptions: {
    // ecmaVersion 和 sourceType 继承自 eslint-config-airbnb
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false,
  },
  env: {
    // 默认增加 browser，其余继承自 eslint-config-airbnb
    browser: true,
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEVELOPMENT__: true,
    __DEBUG__: true,
    __DEVTOOLS__: true,
  },
};
