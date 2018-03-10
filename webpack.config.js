const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/app.js',
  },
  output: {
    filename: './build.js',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', 'es2015'],
          ],
        },
      },
    }],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
