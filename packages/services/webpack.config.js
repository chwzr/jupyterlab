/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

const version = require('./package.json').version;

module.exports = {
  entry: './lib',
  experiments: {
    outputModule: true
  },
  output: {
    filename: './dist/index.js',
    libraryTarget: 'module',
    umdNamedDefine: true,
    publicPath: 'https://unpkg.com/@cavorit/jupyterlabservices@' + version + '/dist/'
  },
  bail: true,
  mode: 'production',
  devtool: 'source-map'
};
