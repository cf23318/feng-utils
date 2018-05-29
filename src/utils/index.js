/**
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */
let moduleExports = {};

const r = require.context('./', true, /^.+\.js$/);
r.keys().forEach(key => {
  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  // 这里的default读取默认到处的default
  moduleExports[attr] = r(key).default;
});

module.exports = moduleExports;
