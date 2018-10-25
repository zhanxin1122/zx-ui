<template>
  <div class="hd el-card"
       :class="'is-' + shadow + '-shadow'">
    <div class="el-card__header"
         v-if="$slots.header || header"
         :class="{gap:borderGap}">
      <slot name="header">{{header}}</slot>
    </div>
    <div class="el-card__body"
         :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HdCard',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String,
      default: 'always'
    },
    borderGap: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="less">
.hd {
  &.el-card {
    border: 1px solid #dfe3e9;
  }
  .el-card__header {
    text-align: center;
    &.gap {
      position: relative;
      border-bottom: none;
      &::after {
        content: '';
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 0;
        border-bottom: 1px solid #dfe3e9;
      }
    }
  }
}
</style>
