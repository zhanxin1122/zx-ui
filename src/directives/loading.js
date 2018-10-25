/*
 * @Author: zhanxin
 * @Date: 2018-08-27 09:04:36
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 15:21:36
 * @Description: 局部加载指令
 */
import '../style/loading.less';
const createDiv = () => document.createElement('div');

const loading = {
  inserted(el, binding) {
    const style = binding.value.style;
    if (el.getElementsByClassName('hd-part-loading').length === 0 && binding.value.flag) {
      const $shade = createDiv();
      $shade.setAttribute('class', 'hd-part-loading');
      const $box = createDiv();
      $box.setAttribute('class', 'loading-box');
      const $outer = createDiv();
      $outer.setAttribute('class', style ? `outer${style}` : 'outer2');
      const $inner = createDiv();
      $inner.setAttribute('class', style ? `inner${style}` : 'inner2');
      $box.appendChild($outer);
      $box.appendChild($inner);
      $shade.appendChild($box);
      el.appendChild($shade);
    }
  },
  update(el, binding) {
    const $box = el.getElementsByClassName('hd-part-loading')[0];
    if (!binding.value.flag) {
      $box.style.opacity = '0';
      setTimeout(() => {
        $box.style.display = 'none';
      }, 500);
    } else {
      $box.style.display = 'block';
      $box.style.opacity = '1';
    }
  }
};

export default loading;
