/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-08 10:39:26
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-09 11:59:04
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div id="app"
       class="full-screen">
    <router-view/>
  </div>
</template>
import './style/app.less';
<script>
export default {
  name: 'App'
};
</script>
<style>
#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* overflow: hidden; */
}
</style>
