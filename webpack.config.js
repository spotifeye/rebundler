var path = require('path');
var SRC_DIR = path.join(__dirname, '/before');
var DIST_DIR = path.join(__dirname, '/after');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/bundle.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
};
