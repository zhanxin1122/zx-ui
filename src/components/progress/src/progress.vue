<template>
  <div style="height: 300px;"
       class="hd-progress">
    <template v-for="(item, index) in data">
      <div class="demo-progress"
           :key="index">
        <div class="demo-progress-text">{{item.description}}</div>
        <div class="demo-progress-status">
          <el-progress :text-inside="false"
                       :stroke-width="18"
                       :percentage="item.percentage"
                       :color="item.color"></el-progress>
          <span class="demo-progress-status-text">当前
            <span style="color: #E44635">{{item.percentage}}%</span>任务正在进行中</span>
        </div>
        <div></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Hdprogress',
  props: ['data']
};
</script>

<style lang="less">
.hd-progress {
  .demo-progress {
    display: flex;
    margin: 40px 0;
    .demo-progress-text {
      width: 100px;
      text-align: center;
    }
    .demo-progress-status {
      flex: 1;
      position: relative;
      .demo-progress-status-text {
        position: absolute;
        top: calc(100% - 50px);
      }
    }
  }
  .el-progress__text {
    display: none;
  }
}
</style>
