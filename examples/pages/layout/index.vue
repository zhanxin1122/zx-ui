/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-08 14:32:26
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-09-18 15:01:36
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="layout-wrapper">
    <div>
      <layout-header class="header-wrapper"></layout-header>
      <section class="container-flex">
        <side-bar/>
        <section class="main-wrapper">
          <router-view/>
        </section>
      </section>
    </div>
  </div>
</template>
<script>
import './layout.less';
import SideBar from './side-bar.vue';
import LayoutHeader from './header.vue';

export default {
  name: 'layout',
  components: {
    SideBar,
    LayoutHeader
  }
};
</script>
