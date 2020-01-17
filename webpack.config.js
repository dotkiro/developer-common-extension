const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')

const { NODE_ENV } = process.env

module.exports = {

  mode: NODE_ENV === 'production' ? 'production' : 'development',

  entry: {
    app: './src/index.tsx'
  },

  target: 'web',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  // devtool: '',

  devServer: {
    hot: true,
    clientLogLevel: 'warning',
    contentBase: false,
    port: 8888,
    quiet: true,
    host: '0.0.0.0',
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|woff2?|ttf|svg|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin('From Kiro <dotkiro@gmail.com>'),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './publish/index.html',
      inject: true,
      minify: {
        decodeEntities: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,

        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,

        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
  ]
}