/*
 * @Author: zhanxin
 * @Date: 2018-07-27 09:50:28
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-07-27 09:51:11
 * @Description: 开关组件引入
 */
import Switch from './src/switch';

Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch;
