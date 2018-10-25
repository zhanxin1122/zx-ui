<script>
import { TimePicker } from 'element-ui';
export default {
  extends: TimePicker,
  name: 'HdTimePicker',
  props: {
    popperClass: {
      type: String,
      default: 'hd'
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  }
};
</script>

<style lang="less">
@import '~@/style/base/variable.less';
.el-date-editor--time {
  .el-input__inner:focus {
    border-color: @match-color;
  }
}
.el-date-editor--timerange {
  &.el-input__inner {
    &.is-active {
      border-color: @match-color !important;
    }
  }
  &.el-input__inner:focus {
    border-color: @match-color !important;
  }
  &.el-range-editor {
    &.is-active:hover {
      border-color: @match-color !important;
    }
  }
}
.el-time-spinner__item.active:not(.disabled) {
  color: #fff !important;
}
.hd {
  &.el-time-panel {
    width: 220px;
  }
}
.hd-minute {
  &.el-tiem-panel {
    width: 145px;
  }
}
.hd,
.hd-minute {
  .el-time-panel__content::before {
    left: 0;
    right: 0;
    height: 32px;
    margin-left: 0;
    margin-right: 0;
    background: @base-color;
  }
  .el-time-panel__content::after {
    opacity: 0;
  }
  .el-time-spinner__wrapper {
    border-right: 1px solid #ebeef5;
    box-sizing: content-box;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
}
</style>
