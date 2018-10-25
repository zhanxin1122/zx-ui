/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-09 15:04:48
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-09 11:51:28
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="dy-ui-wrapper">
    <demo-input></demo-input>
    <demo-select></demo-select>
    <demo-city-select></demo-city-select>
    <demo-pie></demo-pie>
    <demo-hd-input></demo-hd-input>
  </div>
</template>
<script>
import './example-dy.less';
import DemoInput from './demo-input.vue';
import DemoHdInput from './demo-hd-input.vue';
import DemoSelect from './demo-select.vue';
import DemoCitySelect from './demo-city-select.vue';
import DemoPie from './demo-pie.vue';

export default {
  name: 'dy-ui',
  components: {
    DemoInput,
    DemoSelect,
    DemoCitySelect,
    DemoPie,
    DemoHdInput
  },
  data() {
    return {};
  }
};
</script>
