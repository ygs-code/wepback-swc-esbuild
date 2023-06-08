var path = require('path');
let {
    NODE_ENV, // 环境参数
    WEB_ENV, // 环境参数
    target, // 环境参数
    htmlWebpackPluginOptions = '',
} = process.env; // 环境参数

//一个整合路径的方法
var resolve = function (dir) {
    return path.join(__dirname, '..', dir);
};
module.exports = function () {
    let mapPath = {
        development: resolve('.env.development'),
        production: resolve('.env.production'),
    };

    const { parsed } = require('dotenv').config({ path: mapPath[NODE_ENV] });

    return {
        ...parsed,
        NODE_ENV,
    };
};
