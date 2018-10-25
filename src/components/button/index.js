/*
 * @Author: fengjialing
 * @Date: 2018-07-13 15:03:01
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-07-13 15:03:01
 * @Description: 
 */
import HdButton from './src/button';

HdButton.install = function(Vue) {
  Vue.component(HdButton.name, HdButton);
};

export default HdButton;
