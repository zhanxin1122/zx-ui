/*
 * @Author: sj
 * @Date: 2018-09-21 9:3:26
 * @LastEditors: sj
 * @LastEditTime: 2018-07-25 09:13:35
 * @Description:
 */
import HdHeader from './src/hd-header.vue';
import HdAside from './src/hd-aside.vue';
import HdMain from './src/hd-main.vue';
import HdFooter from './src/hd-footer.vue';
import HdContainer from './src/hd-container.vue';

HdHeader.install = function(Vue) {
  Vue.component(HdHeader.name, HdHeader);
};

HdAside.install = function(Vue) {
  Vue.component(HdAside.name, HdAside);
};

HdMain.install = function(Vue) {
  Vue.component(HdMain.name, HdMain);
};
HdFooter.install = function(Vue) {
  Vue.component(HdFooter.name, HdFooter);
};
HdContainer.install = function(Vue) {
  Vue.component(HdContainer.name, HdContainer);
};
export { HdHeader, HdAside, HdMain, HdFooter, HdContainer };
