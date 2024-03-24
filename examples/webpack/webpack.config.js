const { resolve } = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WorkboxMicroSubAppPlugin } = require('workbox-microapp-webpack-plugin/plugin')
const path = require('path')
const { generateKey } = require('node:crypto')

const swSrc = path.resolve(__dirname, './src/sw-precache.js');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new WorkboxMicroSubAppPlugin({
      swSrc,
      dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
    })
  ],
}
