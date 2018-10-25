/*
 * @Author: zhanxin
 * @Date: 2018-08-09 10:36:34
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-09 10:36:57
 * @Description: 
 */
// highlight.js
import Hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
let Highlight = {};
Highlight.install = function(Vue) {
  Vue.directive('highlight', function(el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
      Hljs.highlightBlock(block);
    });
  });
};
export default Highlight;
