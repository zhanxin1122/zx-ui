/*
 * @Author: shejuan
 * @Date: 2018-09-18 14:29:57
 * @LastEditors: shejuan
 * @LastEditTime: 2018-09-20 16:44:29
 * @Description: 侧边导航栏一级（当导航栏字符≦4个时优先考虑）
 */
 <template>
  <div>
    <input type="button"
           value="点击变成切换背景色"
           @click="changeBgColor" />
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
      defaultColr: true // 默认显示的的浅色
    };
  },
  methods: {
    changeBgColor() {
      this.defaultColr = !this.defaultColr;
    }
  }
};
</script>
<style lang="less" scoped>
</style>
