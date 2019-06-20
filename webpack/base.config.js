const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: ['babel-polyfill', '../src/index.js'],
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [{
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader','css-loader'],
        test: /\.s?css$/
      }]
    },
    resolve: {
      modules: [
        path.join(__dirname, './'),
        'node_modules'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: '../index.html',
        inject: false
      })
    ]
};