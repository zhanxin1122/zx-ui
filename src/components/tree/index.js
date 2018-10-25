/*
 * @Author: zhanxin
 * @Date: 2018-08-06 15:44:50
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-06 15:44:50
 * @Description: 
 */
import Tree from './src/tree';

Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

export default Tree;
