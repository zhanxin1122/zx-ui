/*
 * @Author: ChenMi
 * @Date: 2018-08-23 10:28:41
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-08-23 10:29:14
 * @Description: 
 */

import Line from './src/line';

Line.install = function(Vue) {
  Vue.component(Line.name, Line);
};

export default Line;
