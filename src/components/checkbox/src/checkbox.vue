/*
 * @Author: fengjialing
 * @Date: 2018-07-18 17:50:55
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-07-18 17:50:55
 * @Description: 
 */

<script>
import { Checkbox } from 'element-ui';
export default {
  extends: Checkbox,
  name: 'HdCheckbox',
  mounted() {
    this.$el.className += this.$props.border ? ' hd-checkbox-border' : ' hd-checkbox';
  }
};
</script>
