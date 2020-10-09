var merge = require('webpack-merge').merge
var baseConfig = require('./webpack.base.conf')
var path = require('path')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: path.join(__dirname, 'dist')
  }
})
