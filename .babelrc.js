/*
 * @Description: webpack 配置
 * @Author: wjt
 * @CreateTime: 2021-04-30
 */

// npm文档 https://www.npmjs.com/package/babel-plugin-module-resolver
// example https://gist.github.com/nodkz/41e189ff22325a27fe6a5ca81df2cb91

const path = require('path');

const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('./src')], // 从哪个文件开始设置绝对路径
      alias: {
        '@/res': './src/res', //静态资源
      }
    }
  ],
];

module.exports = {
  plugins: [...commonPlugins]
};
