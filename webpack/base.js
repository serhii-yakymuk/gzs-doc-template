var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './js/main.js',
    vendors: [
      'babel-polyfill',
      'axios',
      'connected-react-router',
      'material-ui',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-tap-event-plugin',
      'redux',
      'redux-axios-middleware',
      'redux-thunk'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].[chunkhash].js',
    chunkFilename: './js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/images/[name].[ext]'
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]'
          }
        }],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.resolve(__dirname, '../.eslintrc'),
              emitWarning: false,
              failOnWarning: false,
              failOnError: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      services: path.resolve(__dirname, '../js/services'),
      reducers: path.resolve(__dirname, '../js/store/reducers'),
      constants: path.resolve(__dirname, '../js/constants'),
      components: path.resolve(__dirname, '../js/components'),
      styles: path.resolve(__dirname, '../styles'),
      fonts: path.resolve(__dirname, '../fonts')
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../images'),
      to: path.resolve(__dirname, '../dist/images')
    },
    {
      from: path.resolve('./web.config'),
      to: path.resolve('./dist/web.config')
    },
    {
      from: path.resolve('./favicon.ico'),
      to: path.resolve('./dist/favicon.ico')
    }])
  ]
};
