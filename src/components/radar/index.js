/*
 * @Author: zhanxin
 * @Date: 2018-07-25 17:43:01
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-07-25 17:43:01
 * @Description: 导入雷达图
 */
import Radar from './src/radar';

Radar.install = function(Vue) {
  Vue.component(Radar.name, Radar);
};

export default Radar;
