const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  entry: {
    styles: './src/js/styles.js',
    images: './src/js/images.js',
    matrix: './src/js/matrix.js',
    dom_changes: './src/js/dom-changes.js',
  },

  output: {
    filename: '[name].[contenthash].js',
    path: buildPath,
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
      },

      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],

  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
