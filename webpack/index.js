const { merge } = require('webpack-merge');
const clientBaseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');
const getEnv = require('./getEnv');
let {
    NODE_ENV, // 环境参数
    WEB_ENV, // 环境参数
    target, // 环境参数
    htmlWebpackPluginOptions = '',
} =  getEnv(); // 环境参数
//    是否是生产环境
const isEnvProduction = NODE_ENV === 'production';
//   是否是测试开发环境
const isEnvDevelopment = NODE_ENV === 'development';
module.exports = merge(
    // baseConfig,
    clientBaseConfig,
    isEnvDevelopment ? devConfig : prodConfig
);
