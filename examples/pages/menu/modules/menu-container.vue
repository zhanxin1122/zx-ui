/*
 * @Author: shejuan
 * @Date: 2018-09-25 14:29:57
 * @LastEditors: shejuan
 * @LastEditTime: 2018-09-20 16:44:29
 * @Description: 侧边栏与导航栏结合
 */
<template>
  <hd-container direction="vertical">
    <hd-header>
      <div class="menu_col-style-more-light">
        <hd-menu default-active="1"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect">
          <hd-menu-item index="1">一级导航A</hd-menu-item>
          <hd-menu-item index="2">一级导航B</hd-menu-item>
          <hd-menu-item index="3">一级导航C</hd-menu-item>
          <hd-menu-item index="4">一级导航D</hd-menu-item>
        </hd-menu>
      </div>
    </hd-header>
    <hd-container>
      <hd-aside width="170px">
        <div class="menu_row-style-more-light">
          <hd-menu class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  default-active="1-1">
            <template v-for="(item,i) in mylist">
              <hd-submenu :key="i" :index="item.index"
              class="menu_row-style-more-sleep-second-step">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
                </template>
                <template v-for="(v,vi) in item.childs">
                <hd-menu-item :key="vi" :index="v.index">
                  <i class="el-icon-"></i>
                  <span>{{v.name}}</span>
                </hd-menu-item>
                </template>
              </hd-submenu>
            </template>
          </hd-menu>
        </div>
      </hd-aside>
      <hd-main>主体内容显示</hd-main>
    </hd-container>
  </hd-container>
</template>
<script>
import { HdHeader, HdAside, HdMain, HdContainer, HdFooter } from '@/components/container';
import HdMenu from '@/components/menu';
import HdMenuItem from '@/components/menu-item';
import HdSubmenu from '@/components/submenu';
export default {
  components: {
    HdMenu,
    HdMenuItem,
    HdSubmenu,
    HdHeader,
    HdAside,
    HdMain,
    HdContainer,
    HdFooter
  },
  data() {
    return {
      list: [
        {
          name: '二级导航(一)',
          index: '1',
          childs: [
            {
              name: '三级导航(一)A',
              index: '1-1'
            },
            {
              name: '三级导航(一)B',
              index: '1-2'
            }
          ]
        },
        {
          name: '二级导航(二)',
          index: '2',
          childs: [
            {
              name: '三级导航(二)A',
              index: '2-1'
            },
            {
              name: '三级导航(二)B',
              index: '2-2'
            }
          ]
        },
        {
          name: '二级导航(三)',
          index: '3',
          childs: [
            {
              name: '三级导航(三)A',
              index: '3-1'
            },
            {
              name: '三级导航(三)A',
              index: '3-2'
            }
          ]
        },
        {
          name: '二级导航(四)',
          index: '4',
          childs: [
            {
              name: '三级导航(四)A',
              index: '4-1'
            },
            {
              name: '三级导航(四)B',
              index: '4-2'
            }
          ]
        }
      ],
      mylist: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      let myindex = this.list.findIndex(i => i.index === key);
      this.mylist = [];
      this.mylist.push(this.list[myindex]);
      console.log(key, keyPath);
    }
  },
  created() {
    this.mylist = [];
    this.mylist.push(this.list[0]);
  }
};
</script>
