<template>
  <div class="cm-page demo-total">
    <h1 class="demo-total__header">This is cm's show.</h1>
    <div class="demo-total__body">
      <demo-pagination></demo-pagination>
      <demo-steps></demo-steps>
      <demo-upload-group></demo-upload-group>
      <demo-echarts-line></demo-echarts-line>
    </div>
  </div>
</template>
<script>
import DemoPagination from './pagination';
import DemoSteps from './steps';
import DemoUploadGroup from './upload';
import DemoEchartsLine from './echars-line';
export default {
  components: {
    DemoPagination,
    DemoSteps,
    DemoUploadGroup,
    DemoEchartsLine
  }
};
</script>
<style lang="less">
@import '~@/style/base/variable';
@titleWidth: 35px;
.cm-page {
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
    &__body {
      padding: 0 10px;
    }
  }
  section {
    margin-bottom: 20px;
  }
  .section {
    &__header {
      font-size: 18px;
      padding: 20px 0;
    }
    &__body {
      overflow: hidden;
    }
    &__component {
      margin: 20px 0;
    }
  }
}
</style>
