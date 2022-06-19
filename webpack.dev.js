const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  entry: {
    index: './src/index.html',
  },

  devServer: {
    port: 8080,
    devMiddleware: {
      writeToDisk: false,
    },
  },

  module: {
    rules: [
      {
        test: /\m?js$/i,
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
};
