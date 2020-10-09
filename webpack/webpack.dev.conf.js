var merge = require('webpack-merge').merge
var baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'development'
})
