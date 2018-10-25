/*
 * @Author: fengjialing
 * @Date: 2018-07-16 16:23:09
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-16 17:44:12
 * @Description: 
 */
import HdTabsPane from './src/tab-pane.vue';

HdTabsPane.install = function(Vue) {
  Vue.component(HdTabsPane.name, HdTabsPane);
};

export default HdTabsPane;
