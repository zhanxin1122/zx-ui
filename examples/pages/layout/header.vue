/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-08 14:25:02
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-09-18 15:01:35
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="layout-header-wrapper clearfix">
    <div class="logo-wrapper">
      <img :src="require('#/assets/images/logo-min.png')" />
      <h1>恒大前端组件库</h1>
    </div>
    <div class="nav-right">

    </div>
  </div>
</template>
<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      isCollapse: false
    };
  }
};
</script>
<style lang="less">
@header-height: 60px;
.layout-header-wrapper {
  height: @header-height;
  background-color: #545c64;
  .logo-wrapper {
    float: left;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 15px;
    img {
      width: 40px;
    }
    h1 {
      height: @header-height;
      line-height: @header-height;
      color: #fff;
      text-align: center;
      font-size: 16px;
      margin-left: 10px;
    }
  }
  .nav-left {
    display: flex;
    float: left;
    height: @header-height;
    // margin: 0 20px;
    align-items: center;
    justify-content: space-between;
  }
  .nav-right {
    display: flex;
    float: right;
    align-items: center;
    justify-content: space-between;
    .user-info {
      display: inline-block;
      border: 0;
    }
  }
  .nav-btn {
    display: inline-block;
    margin: 0 20px;
    color: #fff;
    transition: all 0.5s;
    cursor: pointer;
  }
}
.nav-btn.active {
  color: #f88912;
  transform: rotate(360deg);
  transition: all 0.5s;
}
</style>
