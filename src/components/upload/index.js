/*
 * @Author: ChenMi
 * @Date: 2018-07-25 14:55:30
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-25 15:18:01
 * @Description: 
 */

import UploadGroup from './src/upload';

UploadGroup.install = function(Vue) {
  Vue.component(UploadGroup.name, UploadGroup);
};

export default UploadGroup;
