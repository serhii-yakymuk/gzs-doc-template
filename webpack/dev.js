var path = require('path');
var base = require('./base');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = Object.assign(base, {
  output: {
    path: '/',
    filename: './js/[name].[hash].js',
    chunkFilename: './js/[name].[hash].js'
  },
  module: {
    rules: base.module.rules.concat({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMaps: true
          }
        }
      ]
    })
  },
  devServer: {
    port: 3000,
    compress: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL ? process.env.API_URL : 'http://localhost:1433/api')
    })
  ]
});
