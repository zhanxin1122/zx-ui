<template>
  <div class="sj-page demo-total">
    <h1 class="demo-total__header">This is sj's show.</h1>
    <div class="demo-content">
      <time-line></time-line>
      <hd-progress></hd-progress>
    </div>
  </div>
</template>

<script>
import TimeLine from './time-line';
import HdProgress from './progress';
export default {
  components: { TimeLine, HdProgress }
};
</script>
<style lang="less">
@import '~@/style/base/variable';
@titleWidth: 35px;
.sj-page {
  .demo {
    &__header {
      font-size: 24px;
      color: @base-color;
      padding: 20px 0;
      padding-left: calc(~'6px + @{titleWidth}');
      position: relative;
      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        content: '';
        width: @titleWidth;
        height: 8px;
        background-color: @base-color;
      }
    }
  }
  .demo-content {
    margin-left: 30px;
  }
  .demo_header {
    margin: 20px 0;
    color: #d7000f;
    font-weight: 600;
  }
}
</style>
