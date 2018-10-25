/*
 * @Author: Mr.Tian 
 * @Date: 2018-08-20 14:49:14 
 * @Last Modified by:   Mr.Tian 
 * @Last Modified time: 2018-08-20 14:49:14 
 */
import TimePicker from './src/time-picker';

TimePicker.install = function(Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker;
