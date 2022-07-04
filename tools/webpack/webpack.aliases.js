const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
  '@assets': 'assets',
  '@components': 'src/renderer/components',
  '@common': 'src/common',
  '@main': 'src/main',
  '@renderer': 'src/renderer',
  '@shared': 'src/shared',
  '@src': 'src',
});
