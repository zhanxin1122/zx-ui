/*
 * @Author: zhanxin
 * @Date: 2018-07-18 17:30:56
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-07-25 09:13:49
 * @Description: 引入拖拽
 */
import HdDraggable from './src/draggable';

HdDraggable.install = function(Vue) {
  Vue.component(HdDraggable.name, HdDraggable);
};

export default HdDraggable;
