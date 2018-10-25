/*
 * @Author: shejuan
 * @Date: 2018-09-14 14:29:57
 * @LastEditors: shejuan
 * @LastEditTime: 2018-09-18 16:44:29
 * @Description: 顶部导航栏一级
 */
 <template>
  <div>
    <input type="button"
           value="点击变成切换背景色"
           @click="changeBgColor" />
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
    changeBgColor() {
      this.defaultColr = !this.defaultColr;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
