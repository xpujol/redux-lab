var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isDev             = (process.env.NODE_ENV === 'dev');

console.log("IS DEV : " + (isDev ? "YES" : "NO"));

var config  =
{
  entry   :
  {
    points : './src/main.js'
  },
  devtool : isDev ? 'source-map' : false,
  devServer:
  {
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  output  :
  {
    chunkFilename : '[name].js',
    filename      : '[name].js',
    path          : './assets/',
    publicPath    : '/assets/',
  },
  module:
  {
    loaders:
    [
      {
        test    : /\.jsx?$/,
        exclude : /(node_modules)/,
        loader  : isDev ? 'react-hot!babel!eslint-loader' : 'babel'
      },
      {
        test   : /\.less$/,
        loader : ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      //Fonts
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins:
  [
    new webpack.DefinePlugin(
    {
      'process.env' : {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)},
      __DEV__       : isDev,
    }),
    new ExtractTextPlugin('[name].css')
  ]
};

if (isDev)
{
 config.eslint = {configFile: '.eslintrc'};
}

module.exports = config;
