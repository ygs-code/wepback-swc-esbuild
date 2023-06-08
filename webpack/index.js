const { merge } = require("webpack-merge");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const clientBaseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
// const prodConfig = require('./webpack.prod.config')

module.exports = merge(
  // baseConfig,
  clientBaseConfig,
  devConfig
);
