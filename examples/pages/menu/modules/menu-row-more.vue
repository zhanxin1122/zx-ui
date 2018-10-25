/*
 * @Author: shejuan
 * @Date: 2018-09-18 14:29:57
 * @LastEditors: shejuan
 * @LastEditTime: 2018-09-20 16:44:29
 * @Description: 侧边导航栏一级(当导航栏字符≥4个时优先考虑)
 */
 <template>
  <div>
    <input type="button" value="点击变成切换背景色" @click="changeBgColor"/>
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
  </div>
</template>

 <script>
import HdMenu from '@/components/menu';
import HdMenuItem from '@/components/menu-item';
import HdSubmenu from '@/components/submenu';

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
</script>
<style lang="less" scoped>
</style>
