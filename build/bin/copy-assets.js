/*
 * @Author: zhanxin
 * @Date: 2018-08-15 16:33:13
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-31 14:16:42
 * @Description: copy svg文件
 */
var Copy = require('./copy');
var path = require('path');
var fs = require('fs');

fs.mkdirSync(path.resolve(__dirname, '../../lib/lib/assets'));

Copy.copyFolder(
  path.resolve(__dirname, '../../src/assets/images'),
  path.resolve(__dirname, '../../lib/lib/assets/images'),
  function(err) {
    if (err) {
      return;
    }
  }
);

Copy.copyFolder(
  path.resolve(__dirname, '../../src/style/base/fonts'),
  path.resolve(__dirname, '../../lib/lib/style/base/fonts'),
  function(err) {
    if (err) {
      return;
    }
  }
);
