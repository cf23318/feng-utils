const path = require('path')
const webpack = require('webpack')
const config = require('../config')

const rootPath = path.resolve(__dirname, '../')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: path.resolve(rootPath, `src/main.js`),
  output: {
    path: config.assetsRoot,
    filename: `utils.js`,
    publicPath: config.assetsPublicPath,
    library: `utils`,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('static')]
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
