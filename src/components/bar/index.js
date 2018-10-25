/*
 * @Author: zhanxin
 * @Date: 2018-07-25 09:09:53
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-07-25 09:10:17
 * @Description: 
 */
import Bar from './src/bar';

Bar.install = function(Vue) {
  Vue.component(Bar.name, Bar);
};

export default Bar;
