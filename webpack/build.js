const { merge } = require('webpack-merge');
const { getAbsPath } = require('./utils');
const devConfig = require('./dev');

const buildConfig = {
  mode: 'production',
  devtool: false,
  output: {
    path: getAbsPath('public'),
    filename: 'js/bundle.min.js',
  },
};

module.exports = merge(devConfig, buildConfig);
