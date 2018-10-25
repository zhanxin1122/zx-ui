/*
 * @Author: zhanxin
 * @Date: 2018-08-31 11:18:53
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-31 11:36:33
 * @Description: 复制pakcages
 */
var Copy = require('./copy');
var path = require('path');
var fs = require('fs');

fs.mkdirSync('./lib');
fs.mkdirSync('./lib/packages');
Copy.copyFolder(
  path.resolve(__dirname, '../../src/components'),
  path.resolve(__dirname, '../../lib/packages'),
  function(err) {
    if (err) {
      return;
    }
  }
);
Copy.copyFile('./package.json', './lib/package.json');
Copy.copyFile('./README.md', './lib/README.md');
