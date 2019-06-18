console.log('local.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: '../dist',
    port: '3000',
    host: 'localhost',
    historyApiFallback: true
  },
  plugins: []
});
