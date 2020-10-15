const path = require('path')
const cwp = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackMode = process.env.NODE_ENV === 'prod' ? 'production' : 'development'
const webpackDevtool = process.env.NODE_ENV === 'prod' ? '' : 'cheap-module-eval-source-map'
const isWatch = process.env.NODE_ENV === 'dev'
const webpackAlias = {
  '@': path.resolve(__dirname, '../rander'),
  '$': path.resolve(__dirname, '../common')
}

const electronMain = {
  mode: webpackMode,
  devtool: webpackDevtool,
  watch: isWatch,
  entry: {
    main: './electron/background.ts'
  },
  output: {
    filename: 'electron/background.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  resolve: {
    alias: webpackAlias,
    extensions: ['.ts', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new cwp.CleanWebpackPlugin()
  ],
  target: 'electron-renderer'
}

const electronRender = {
  mode: webpackMode,
  devtool: webpackDevtool,
  watch: isWatch,
  entry: {
    render: './render/main.ts'
  },
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  resolve: {
    alias: webpackAlias,
    extensions: ['.ts', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: ''
    })
  ],
  target: 'electron-renderer'
}

module.exports = [electronMain, electronRender]
