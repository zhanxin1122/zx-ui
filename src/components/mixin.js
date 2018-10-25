/*
 * @Author: zhanxin
 * @Date: 2018-08-07 11:04:58
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-07 17:35:28
 * @Description: 
 */
let $myListener = null;
let $this = null;
export default (element, renderOption = () => {}) => {
  const $element = require('element-ui')[`${element.substr(0, 1).toUpperCase()}${element.substr(1)}`];
  const methods = {};
  for (let key in $element.methods) {
    methods[key] = function() {
      return this.$refs[element][key]();
    };
  }
  return {
    created() {
      $myListener = this.$listeners;
      $this = this;
    },
    methods,
    render(h) {
      return h(`el-${element}`, {
        ref: element,
        on: {
          ...$myListener
        },
        props: {
          ...this.$props
        },
        attrs: {
          ...this.$attrs
        },
        scopedSlots: this.$scopedSlots,
        ...renderOption($this)
      });
    }
  };
};
