/*
 * @Author: sj
 * @Date: 2018-09-12 17:40:26
 * @LastEditors: sj
 * @LastEditTime: 2018-07-25 09:13:35
 * @Description: 
 */
import HdMenuItem from '../menu/src/menu-item';

HdMenuItem.install = function(Vue) {
  Vue.component(HdMenuItem.name, HdMenuItem);
};
export default HdMenuItem;
