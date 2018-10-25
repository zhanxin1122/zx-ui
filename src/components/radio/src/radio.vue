/*
 * @Author: fengjialing
 * @Date: 2018-07-13 19:22:48
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-07-16 18:03:53
 * @Description: 
 */

<script>
import { Radio } from 'element-ui';
export default {
  extends: Radio,
  name: 'HdRadio',
  mounted() {
    this.$el.className += this.$props.border ? ' hd-radio-button' : ' hd-radio';
  }
};
</script>
