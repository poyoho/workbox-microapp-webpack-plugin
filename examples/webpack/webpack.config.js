const { resolve } = require('node:path')
const Prefetch = require('unplugin-pre-exec/webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    Prefetch.default(),
    new HtmlWebpackPlugin(),
  ],
}
