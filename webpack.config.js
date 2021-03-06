const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    filename: './src/app.js',
  },
  output: {
    filename: './build.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      },
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      use: ['file-loader'],
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
      use: {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
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
