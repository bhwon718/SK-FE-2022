const { getAbsPath } = require('./utils');

const devConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: getAbsPath('src/index.js'),
  },
  output: {
    path: getAbsPath('public'),
    filename: 'js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = devConfig;
