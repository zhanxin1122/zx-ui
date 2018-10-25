/*
 * @Author: ChenMi
 * @Date: 2018-07-23 10:28:20
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-25 14:56:52
 * @Description: 
 */

import Pagination from './src/pagination';

Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
