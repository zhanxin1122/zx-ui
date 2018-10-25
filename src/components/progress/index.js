/*
 * @Author: Shejuan
 * @Date: 2018-08-10 14:17:21
 * @LastEditors: Shejuan
 * @LastEditTime: 2018-08-10 17:00:31
 * @Description: 
 */

import Progress from './src/progress';

Progress.install = function(Vue) {
  Vue.component('Progress.name', Progress);
};

export default Progress;
