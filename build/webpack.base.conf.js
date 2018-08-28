const path = require('path')
const webpack = require('webpack')
const config = require('../config')

const rootPath = path.resolve(__dirname, '../')
let args = process.argv.slice(2)[0];

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: path.resolve(rootPath, `src/${args}`),
  output: {
    path: `${config.assetsRoot}/${args}`,
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
