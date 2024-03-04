module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-env', '@babel/preset-typescript'],
    plugins: ['@babel/plugin-transform-flow-strip-types', ['@babel/plugin-transform-private-methods', { loose: true }]],
  };
};
