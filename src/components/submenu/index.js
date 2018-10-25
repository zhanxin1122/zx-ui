/*
 * @Author: sj
 * @Date: 2018-09-12 17:40:26
 * @LastEditors: sj
 * @LastEditTime: 2018-07-25 09:13:35
 * @Description: 
 */
import HdSubmenu from '../menu/src/submenu';

HdSubmenu.install = function(Vue) {
  Vue.component(HdSubmenu.name, HdSubmenu);
};
export default HdSubmenu;
