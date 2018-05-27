const path = require('path')

module.exports = {
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: '',
  assetsPublicPath: '',

  productionSourceMap: true,
  devtool: '#source-map',

  productionGzip: true,
  productionGzipExtensions: ['js', 'css'],

  bundleAnalyzerReport: process.env.npm_config_report
}
