const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const config = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server')
  },

  externals: [ webpackNodeExternals() ]
}

module.exports = merge(baseConfig, config);
