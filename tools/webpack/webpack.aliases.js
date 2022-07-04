const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
  '@main': 'src/main',
  '@renderer': 'src/renderer',
  '@shared': 'src/shared',
  '@src': 'src',
});
