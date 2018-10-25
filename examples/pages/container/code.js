export const code1 = `<template>
  <div>
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
  </div>
</template>

<script>
export default {
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
</style>`;
