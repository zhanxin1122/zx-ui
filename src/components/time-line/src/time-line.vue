<template>
  <div :class='direction === "vertical"?"time-line-vertical":"time-line-horizontal"'>
    <el-steps :direction='direction === "vertical"?direction:"horizontal"'>
      <template v-for="(item, index) in data">
        <el-step status="finish"
                 :title="item.title"
                 :key="index"
                 :description="item.description"></el-step>
      </template>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'HdTimeLine',
  props: ['data', 'direction']
};
</script>

<style lang="less">
.time-line-vertical {
  height: 300px;
  padding: 30px;
  .el-step.is-vertical .el-step__head {
    width: 16px;
  }
  .el-step__icon.is-text {
    border: 4px solid;
  }
  .el-step__icon {
    width: 16px;
    height: 16px;
  }
  .el-step__icon-inner {
    display: none;
  }
  .el-step.is-vertical .el-step__line {
    left: calc(16px / 2);
    top: calc(25px);
  }
  .el-step__title {
    font-size: 12px;
  }
  .el-step__title {
    color: #4a4a4a;
    font-family: PingFangSC-Medium;
  }
  .el-step__description {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    margin-left: 10px;
  }
  .el-step__line {
    background-color: #ebeef5;
  }
  .el-step__main {
    position: absolute;
    top: -10px;
    left: 22px;
    white-space: nowrap;
  }
}
.time-line-horizontal {
  height: 100px;
  padding: 30px;
  .el-step.is-vertical .el-step__head {
    width: 16px;
  }
  .el-step__icon.is-text {
    border: 4px solid;
  }
  .el-step__icon {
    width: 16px;
    height: 16px;
  }
  .el-step__icon-inner {
    display: none;
  }
  .el-step.is-horizontal .el-step__line {
    left: calc(25px);
    right: calc(9px);
  }
  .el-step__title {
    font-size: 12px;
  }
  .el-step__title {
    color: #4a4a4a;
    font-family: PingFangSC-Medium;
  }
  .el-step__description {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
  }
  .el-step__line {
    background-color: #ebeef5;
  }
  .el-step__main {
    position: absolute;
    left: -19px;
    white-space: nowrap;
  }
}
</style>
