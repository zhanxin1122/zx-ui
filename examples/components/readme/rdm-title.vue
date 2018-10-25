/*
 * @Author: zhanxin
 * @Date: 2018-08-09 10:50:32
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-09 11:14:01
 * @Description: 
 */
<template>
  <div class="title-wrapper">
    <p class="rdm-code-title">{{title}}</p>
    <p class="rdm-code-content" v-html="content"></p>
  </div>
</template>
<script>
export default {
  name: 'RdmTitle',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="less" scoped>
.title-wrapper {
  margin-bottom: 50px;
}
.rdm-code-title {
  font-weight: 400;
  font-size: 28px;
  color: #1f2f3d;
  margin-bottom: 20px;
}
.rdm-code-content {
  font-size: 14px;
  color: #5e6d82;
  margin-bottom: 10px;
}
</style>
