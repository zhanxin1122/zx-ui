<template>
  <div class="demo-container-wrapper">
    <rdm-title title="Container 布局容器"
               :content="status" />
    <rdm-content title="基础用法"
                 explain="可选到地市级的选择器"
                 :code="code1">

    <hd-container direction="vertical">
      <hd-header>Header</hd-header>
      <hd-main>Main</hd-main>
    </hd-container><br/>

    <hd-container direction="vertical">
      <hd-header>Header</hd-header>
      <hd-main>Main</hd-main>
      <hd-footer>Footer</hd-footer>
    </hd-container><br/>

    <hd-container>
      <hd-aside width="200px">Aside</hd-aside>
      <hd-main>Main</hd-main>
    </hd-container><br/>

    <hd-container direction="vertical">
      <hd-header>Header</hd-header>
      <hd-container direction="horizontal">
        <hd-aside width="200px">Aside</hd-aside>
        <hd-main>Main</hd-main>
      </hd-container>
    </hd-container><br/>

    <hd-container direction="vertical">
      <hd-header>Header</hd-header>
      <hd-container>
        <hd-aside width="200px">Aside</hd-aside>
        <hd-container direction="vertical">
          <hd-main>Main</hd-main>
          <hd-footer>Footer</hd-footer>
        </hd-container>
      </hd-container>
    </hd-container><br/>

    <hd-container>
      <hd-aside width="200px">Aside</hd-aside>
      <hd-container direction="vertical">
        <hd-header>Header</hd-header>
        <hd-main>Main</hd-main>
      </hd-container>
    </hd-container><br/>

    <hd-container>
      <hd-aside width="200px">Aside</hd-aside>
      <hd-container direction="vertical">
        <hd-header>Header</hd-header>
        <hd-main>Main</hd-main>
        <hd-footer>Footer</hd-footer>
      </hd-container>
    </hd-container><br/>
    </rdm-content>
    <rdm-param title="Container Attributes"
               type="attr"
               :list="paramsList1">
    </rdm-param>
    <rdm-param title="Header Attributes"
               type="attr"
               :list="paramsList2">
    </rdm-param>
    <rdm-param title="Aside Attributes"
               type="attr"
               :list="paramsList3">
    </rdm-param>
    <rdm-param title="Footer Attributes"
               type="attr"
               :list="paramsList4">
    </rdm-param>
  </div>
</template>

<script>
import code1 from './code.js';
import { HdHeader, HdAside, HdMain, HdContainer, HdFooter } from '@/components/container';
export default {
  components: {
    HdHeader,
    HdAside,
    HdMain,
    HdContainer,
    HdFooter
  },
  data() {
    return {
      status: `<p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
      <p>&lt;hd-container&gt;：外层容器。当子元素中包含 <hd-header> 或 <hd-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
      <p>&lt;hd-header&gt;：顶栏容器。</p>
      <p>&lt;hd-aside&gt;：侧边栏容器。</p>
      <p>&lt;hd-main&gt;：主要区域容器。</p>
      <p>&lt;hd-footer&gt;：底栏容器。</p>`,
      code1: code1,
      paramsList1: [
        {
          param: 'direction',
          explain: '子元素的排列方向',
          type: 'string',
          values: 'horizontal / vertical',
          default: '子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal'
        }
      ],
      paramsList2: [
        {
          param: 'height',
          explain: '顶栏高度',
          type: 'string',
          values: '-',
          default: 'height'
        }
      ],
      paramsList3: [
        {
          param: 'width',
          explain: '底栏高度',
          type: 'string',
          values: '-',
          default: '300px'
        }
      ],
      paramsList4: [
        {
          param: 'height',
          explain: '底栏高度',
          type: 'string',
          values: '-',
          default: '60px'
        }
      ]
    };
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
