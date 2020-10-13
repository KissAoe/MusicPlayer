const path = require('path')
const webpack = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')[1]

module.exports = webpack.merge(baseWebpackConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'dist_dev'),
    port: 1234,
    open: true,
    overlay: true
  }
})
