/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-08 14:23:18
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-09-18 15:01:39
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="side-bar-wrapper">
    <ul>
      <li v-for="(item, index) in menuList"
          :key="index">
        <a href="javascript:void(0);"
           :class="{'nav-title': item.type && item.type === 'title','nav-readme': item.type && item.type === 'readme'}"
           @click="item.path && $router.push(item.path)">{{item.label}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { routeList } from '#/router/routers';
export default {
  name: 'SideBar',
  data() {
    return {
      menuList: routeList
    };
  }
};
</script>
<style lang="less">
.side-bar-wrapper {
  position: relative;
  height: 100%;
  box-shadow: 1px 0 5px #ccc;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  /*滚动条里面小方块*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #ccc;
    opacity: 0.5;
  }
  ul {
    width: 200px;
    padding-left: 40px;
    li {
      a {
        width: 100%;
        display: inline-block;
        font-size: 14px;
        color: #444;
        height: 40px;
        line-height: 40px;
        &:hover {
          color: #409eff;
        }
      }
      .nav-title {
        font-size: 12px;
        color: #999;
        cursor: auto;
        &:hover {
          color: #999;
        }
      }
      .nav-readme {
        font-size: 16px;
        color: #333;
        font-weight: 700;
        &:hover {
          color: #333;
        }
      }
    }
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
