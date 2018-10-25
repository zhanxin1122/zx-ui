<script>
import { Slider } from 'element-ui';
export default {
  extends: Slider,
  name: 'HdSlider'
};
</script>

<style lang="less">
@import '~@/style/base/variable.less';
.el-slider__runway {
  height: 4px !important;
  background: #ebeef5 !important;
  .show-input {
    margin-right: 130px;
  }
}
.el-slider__bar {
  height: 4px !important;
}
.el-slider__stop {
  width: 4px !important;
  height: 4px !important;
  background: #d8d8d8 !important;
}
.el-slider {
  .el-slider__input {
    width: 100px;
  }
  .el-input__inner {
    &:focus {
      border-color: @match-color;
    }
  }
  .el-input-number__increase,
  .el-input-number__decrease {
    top: 2px;
    &:hover {
      color: @match-color !important;
    }
  }
  .el-input-number__increase:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled),
  .el-input-number__decrease:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled) {
    border-color: @match-color;
  }
}
</style>
