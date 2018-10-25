/*
 * @Author: shejuan
 * @Date: 2018-08-14 09:07:33
 * @LastEditors: shejuan
 * @LastEditTime: 2018-08-14 09:30:42
 * @Description: 
 */
export const code1 = `<template>
<div :class="{'menu_row-style-less-light': defaultColr, 'menu_row-style-less-deep': !defaultColr}">
<hd-menu default-active="2"
              class="el-menu-vertical-demo">
  <hd-menu-Item index="1">
    <i class="el-icon-location"></i>
    <span>导航一</span>
  </hd-menu-Item>
  <hd-menu-Item index="2">
    <i class="el-icon-menu"></i>
    <span>导航二</span>
  </hd-menu-Item>
  <hd-menu-Item index="3">
    <i class="el-icon-document"></i>
    <span>导航三</span>
  </hd-menu-Item>
  <hd-menu-Item index="4">
    <i class="hd-icon-setting"></i>
    <span>导航四十</span>
  </hd-menu-Item>
</hd-menu>
</div>
</template>
<script>
export default {
  components: {
    HdMenu,
    HdMenuItem,
    HdSubmenu
  },
  data() {
    return {
      defaultColr: true, // 默认显示的的浅色
    };
  },
  methods: {
    changeBgColor() {
      this.defaultColr = !this.defaultColr;
    }
  }
</script>`;

export const code2 = `<template>
<div :class="{'menu_row-style-more-light': defaultColr, 'menu_row-style-more-deep': !defaultColr}">
<hd-menu class="el-menu-vertical-demo"
         @open="handleOpen"
         @close="handleClose"
         default-active="4">
  <hd-submenu index="1"
  :class="{'menu_row-style-more-sleep-second-step': defaultColr, 'menu_row-style-more-deep-second-step': !defaultColr}">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>一级导航(一)</span>
    </template>
    <hd-menu-item index="1-1">
      <i class="el-icon-"></i>
      <span>二级导航A</span>
    </hd-menu-item>
    <hd-menu-item index="1-2">
      <i class="el-icon-menu"></i>
      <span>二级导航B</span>
    </hd-menu-item>
    <hd-menu-item index="1-3">
      <i class="el-icon-menu"></i>
      <span>二级导航C</span>
    </hd-menu-item>
  </hd-submenu>
  <hd-submenu index="2"
  :class="{'menu_row-style-more-sleep-second-step': defaultColr, 'menu_row-style-more-deep-second-step': !defaultColr}">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>一级导航(二)</span>
    </template>
    <hd-menu-item index="2-2">
      <i class="el-icon-"></i>
      <span>二级导航A</span>
    </hd-menu-item>
  </hd-submenu>
  <hd-menu-item index="3">
    <i class="el-icon-document"></i>
    <span>一级导航三</span>
  </hd-menu-item>
  <hd-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span>一级导航四</span>
  </hd-menu-item>
</hd-menu>
</div>
</template>
<script>
export default {
  components: {
    HdMenu,
    HdMenuItem,
    HdSubmenu
  },
  data() {
    return {
      defaultColr: true, // 默认显示的的浅色
      activeIndex: '1'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeBgColor() {
      this.defaultColr = !this.defaultColr;
    }
  }
};
</script>`;

export const code3 = `<template>
<div :class="{'menu_col-style-more-light': defaultColr, 'menu_col-style-more-deep': !defaultColr}">
        <hd-menu :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect">
          <hd-menu-item index="1">一级导航A</hd-menu-item>
          <hd-menu-item index="2">一级导航B</hd-menu-item>
          <hd-menu-item index="3">一级导航C</hd-menu-item>
          <hd-menu-item index="4">一级导航D</hd-menu-item>
        </hd-menu>
      </div>
<script>
export default {
  components: {
    HdMenu,
    HdMenuItem,
    HdSubmenu
  },
  data() {
    return {
      defaultColr: true, // 默认显示的的浅色
      activeIndex: '1'
    };
  },
  methods: {
    changeBgColor() {
      this.defaultColr = !this.defaultColr;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};

</script>
</template>`;

export const code4 = `<template>
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
export default {
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
`;
