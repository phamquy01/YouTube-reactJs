const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@containers': path.resolve(__dirname, 'src/containers'),
    '@screens': path.resolve(__dirname, 'src/screens'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
  }),
);
