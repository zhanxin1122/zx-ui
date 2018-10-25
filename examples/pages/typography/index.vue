<template>
  <div class="content">
    <rdm-title title="Font 字体" content="" />
    <!-- 大字体 -->
    <h3>large／大</h3>
    <table class="demo-typo-size">
      <thead>
         <tr>
          <td class="h1">示例</td>
          <td class="h1">粗细</td>
          <td >推荐颜色</td>
          <td >字号</td>
          <td >对应样式</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="main-title-large">我是标题</td>
          <td class="main-title-large">加粗</td>
          <td class="main-title-large">深色</td>
          <td class="main-title-large">18px</td>
          <td class="main-title-large">main-title-large</td>
        </tr>
       <tr>
          <td class="sub-title-large">我是标题</td>
          <td class="sub-title-large">加粗</td>
          <td class="sub-title-large">深色</td>
          <td class="sub-title-large">16px</td>
          <td class="sub-title-large">sub-title-large</td>
        </tr>
        <tr>
          <td class="small-title-large">我是标题</td>
          <td class="small-title-large">加粗</td>
          <td class="small-title-large">深色</td>
          <td class="small-title-large">14px</td>
          <td class="small-title-large">small-title-large</td>
        </tr>
        <tr>
          <td class="main-text-large">正文</td>
          <td class="main-text-large">默认</td>
          <td class="main-text-large">深色</td>
          <td class="main-text-large">14px</td>
          <td class="main-text-large">main-text-large</td>
        </tr>
        <tr>
          <td class="sub-text-large">辅助文字</td>
          <td class="sub-text-large">默认</td>
          <td class="sub-text-large">灰色</td>
          <td class="sub-text-large">14px</td>
          <td class="sub-text-large">sub-text-large</td>
        </tr>
        <tr>
          <td class="link-text-large">链接文字</td>
          <td class="link-text-large">默认</td>
          <td class="link-text-large">彩色</td>
          <td class="link-text-large">14px</td>
          <td class="link-text-large">link-text-large</td>
        </tr>
      </tbody>
    </table>
    <!-- 小字体 -->
    <h3>small／小</h3>
     <table class="demo-typo-size">
      <thead>
         <tr>
          <td class="h1">示例</td>
          <td class="h1">粗细</td>
          <td >推荐颜色</td>
          <td >字号</td>
          <td >对应样式</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="main-title-small">我是标题</td>
          <td class="main-title-small">加粗</td>
          <td class="main-title-small">深色</td>
          <td class="main-title-small">16px</td>
          <td class="main-title-small">main-title-small</td>
        </tr>
       <tr>
          <td class="sub-title-small">我是标题</td>
          <td class="sub-title-small">加粗</td>
          <td class="sub-title-small">深色</td>
          <td class="sub-title-small">14px</td>
          <td class="sub-title-small">sub-title-small</td>
        </tr>
        <tr>
          <td class="small-title-small">我是标题</td>
          <td class="small-title-small">加粗</td>
          <td class="small-title-small">深色</td>
          <td class="small-title-small">12px</td>
          <td class="small-title-small">small-title-small</td>
        </tr>
        <tr>
          <td class="main-text-small">正文</td>
          <td class="main-text-small">默认</td>
          <td class="main-text-small">深色</td>
          <td class="main-text-small">12px</td>
          <td class="main-text-small">main-text-small</td>
        </tr>
        <tr>
          <td class="sub-text-small">辅助文字</td>
          <td class="sub-text-small">默认</td>
          <td class="sub-text-small">灰色</td>
          <td class="sub-text-small">12px</td>
          <td class="sub-text-small">sub-text-small</td>
        </tr>
        <tr>
          <td class="link-text-small">链接文字</td>
          <td class="link-text-small">默认</td>
          <td class="link-text-small">彩色</td>
          <td class="link-text-small">12px</td>
          <td class="link-text-small">link-text-small</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less">
@import '~@/style/base/variable.less';
.first-title {
  margin: 20px 0;
  color: #d7000f;
  font-weight: bold;
  text-align: left;
}
// .main-title-large {
//   font-size: @main-title-large;
//   color: @normal-color;
//   font-family: PingFangSC-Medium;
//   font-weight: bold;
// }
// .sub-title-large {
//   font-size: @sub-title-large;
//   color: @normal-color;
//   font-family: PingFangSC-Medium;
//   font-weight: bold;
// }
// .small-title-large {
//   font-size: @small-title-large;
//   color: @normal-color;
//   font-family: PingFangSC-Medium;
//   font-weight: bold;
// }
// .main-text-large {
//   font-size: @main-text-large;
//   color: @normal-color;
//   font-family: PingFangSC-Regular;
// }
// .sub-text-large {
//   font-size: @sub-text-large;
//   color: @sub-text-color;
//   font-family: PingFangSC-Regular;
// }
// .link-text-large {
//   font-size: @link-text-large;
//   color: @link-text-color;
//   font-family: PingFangSC-Regular;
// }

// .main-title-small {
//   font-size: @main-title-small;
//   color: @normal-color;
//   font-family: PingFangSC-Medium;
//   font-weight: bold;
// }
// .sub-title-small {
//   font-size: @sub-title-small;
//   color: @normal-color;
//   font-family: PingFangSC-Medium;
//   font-weight: bold;
// }
// .small-title-small {
//   font-size: @small-title-small;
//   color: @normal-color;
//   font-family: PingFangSC-Medium;
//   font-weight: bold;
// }
// .main-text-small {
//   font-size: @main-text-small;
//   color: @normal-color;
//   font-family: PingFangSC-Regular;
// }
// .sub-text-small {
//   font-size: @sub-text-small;
//   color: @sub-text-color;
//   font-family: PingFangSC-Regular;
// }
// .link-text-small {
//   font-size: @link-text-small;
//   color: @link-text-color;
//   font-family: PingFangSC-Regular;
// }
// 表格样式
h3 {
  margin-bottom: 10px;
}
.demo-typo-size {
  margin-bottom: 20px;
  thead {
    background: #f5f5f9;
    td {
      height: 48px;
    }
  }
  tr {
    td {
      width: 200px;
      height: 36px;
      border-bottom: 1px solid #f5f5f9;
    }
  }
}
</style>
