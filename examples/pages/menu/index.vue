<template>
  <div>
    <rdm-title title="NavMenu 导航菜单"
               content="为网站提供导航功能的菜单" />
    <rdm-content title="侧边导航栏"
                 explain="一级侧边栏：当导航栏字符≦4个时优先考虑"
                 tips="有两种样式，浅色系：menu_row-style-less-light，深色系：menu_row-style-less-deep"
                 :code="code1">
      <menu-row-less></menu-row-less>
    </rdm-content>

    <rdm-content title="侧边导航栏"
                 explain="一级侧边栏：当导航栏字符≥4个时优先考虑"
                 tips="有两种样式，浅色系：menu_row-style-more-light，深色系：menu_row-style-more-deep"
                 :code="code2">
      <menu-row-more></menu-row-more>
    </rdm-content>

    <rdm-content title="顶部导航栏"
                 explain="一级顶部导航栏"
                 tips="有两种样式，浅色系：menu_col-style-more-light，深色系：menu_col-style-more-deep"
                 :code="code3">
      <menu-col-more></menu-col-more>
    </rdm-content>

    <rdm-content title="顶部与侧边栏结合布局"
                 :code="code4">
      <menu-container></menu-container>
    </rdm-content>
  
    <rdm-param title="Menu Attribute"
               type="attr"
               :list="paramsList1">
    </rdm-param>
    <rdm-param title="Menu Methods"
               type="method"
               :list="paramsList2">
    </rdm-param>
    <rdm-param title="Menu Events"
               type="method"
               :list="paramsList3">
    </rdm-param>
    <rdm-param title="SubMenu Attribute"
               type="attr"
               :list="paramsList4">
    </rdm-param>
    <rdm-param title="Menu-Item Attribute"
               type="attr"
               :list="paramsList5">
    </rdm-param>
    <rdm-param title="Menu-Group Attribute"
               type="attr"
               :list="paramsList6">
    </rdm-param>
  </div>
</template>

<script>
import MenuRowLess from './modules/menu-row-less';
import MenuRowMore from './modules/menu-row-more';
import MenuColMore from './modules/menu-col-more';
import MenuContainer from './modules/menu-container';
import { code1, code2, code3, code4 } from './code.js';

export default {
  components: {
    MenuRowLess,
    MenuRowMore,
    MenuColMore,
    MenuContainer
  },
  data() {
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      paramsList1: [
        {
          param: 'mode',
          explain: '模式',
          type: 'string',
          values: 'horizontal / vertical',
          default: 'vertical'
        },
        {
          param: 'collapse',
          explain: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'default-active',
          explain: '当前激活菜单的 index',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'default-openeds',
          explain: '当前打开的 sub-menu 的 index 的数组',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'unique-opened',
          explain: '是否只保持一个子菜单的展开',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'menu-trigger',
          explain: '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)',
          type: 'string',
          values: 'hover / click',
          default: 'hover'
        },
        {
          param: 'router',
          explain: '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'collapse-transition',
          explain: 'boolean',
          type: '--',
          values: '--',
          default: 'true'
        }
      ],
      paramsList2: [
        {
          eventName: 'open',
          explain: '展开指定的 sub-menu',
          params: 'index: 需要打开的 sub-menu 的 index'
        },
        {
          eventName: 'close',
          explain: '收起指定的 sub-menu',
          params: 'index: 需要收起的 sub-menu 的 index'
        }
      ],
      paramsList3: [
        {
          eventName: 'select',
          explain: '菜单激活回调',
          params: 'index: 选中菜单项的 index, indexPath: 选中菜单项的 index path'
        },
        {
          eventName: 'open',
          explain: 'sub-menu 展开的回调',
          params: 'index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path'
        },
        {
          eventName: 'close',
          explain: 'sub-menu 收起的回调',
          params: 'index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path'
        }
      ],
      paramsList4: [
        {
          param: 'index',
          explain: '唯一标志',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'popper-class',
          explain: '弹出菜单的自定义类名',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'show-timeout',
          explain: '展开 sub-menu 的延时',
          type: 'number',
          values: '--',
          default: '300'
        },
        {
          param: 'hide-timeout',
          explain: '收起 sub-menu 的延时',
          type: 'number',
          values: '--',
          default: '300'
        },
        {
          param: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'popper-append-to-body',
          explain: '是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性',
          type: 'boolean',
          values: '--',
          default: '一级子菜单：true / 非一级子菜单：false'
        }
      ],
      paramsList5: [
        {
          param: 'index',
          explain: '唯一标志',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'route',
          explain: 'Vue Router 路径对象',
          type: 'Object',
          values: '--',
          default: '--'
        },
        {
          param: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          values: '--',
          default: 'false'
        }
      ],
      paramsList6: [
        {
          param: 'title',
          explain: '分组标题',
          type: 'string',
          values: '--',
          default: '--'
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
</style>
