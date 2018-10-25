/*
 * @Author: Shejuan
 * @Date: 2018-08-9 16:17:21
 * @LastEditors: Shejuan
 * @LastEditTime: 2018-8-10 11:00:31
 * @Description: 
 */

import TimeLine from './src/time-line';

TimeLine.install = function(Vue) {
  Vue.component('TimeLine.name', TimeLine);
};

export default TimeLine;
