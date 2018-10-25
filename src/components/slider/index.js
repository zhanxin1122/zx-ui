/*
 * @Author: Mr.Tian 
 * @Date: 2018-08-28 09:51:09 
 * @Last Modified by: Mr.Tian
 * @Last Modified time: 2018-08-28 09:58:30
 */

import Slider from './src/slider';

Slider.install = function(Vue) {
  Vue.component(Slider.name, Slider);
};

export default Slider;
