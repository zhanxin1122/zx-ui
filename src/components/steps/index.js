/*
 * @Author: ChenMi
 * @Date: 2018-07-20 14:53:19
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-20 14:54:00
 * @Description: 
 */

import Steps from './src/steps';

Steps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
};

export default Steps;
