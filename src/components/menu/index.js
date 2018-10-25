/*
 * @Author: sj
 * @Date: 2018-09-12 17:40:26
 * @LastEditors: sj
 * @LastEditTime: 2018-07-25 09:13:35
 * @Description: 
 */
import HdMenu from './src/menu.vue';

HdMenu.install = function(Vue) {
  Vue.component(HdMenu.name, HdMenu);
};
export default HdMenu;
