/*
 * @Author: fengjialing
 * @Date: 2018-07-13 19:23:23
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-07-13 19:23:55
 * @Description: 
 */
import HdRadio from './src/radio';

HdRadio.install = function(Vue) {
  Vue.component(HdRadio.name, HdRadio);
};

export default HdRadio;
