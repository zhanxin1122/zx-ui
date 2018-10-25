/*
 * @Author: ChenMi
 * @Date: 2018-07-20 15:17:12
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-23 17:26:16
 * @Description: 
 */

<script>
import STATE_CONFIG from './state';
export default {
  name: 'HdStepsItem',
  props: {
    name: String,
    state: String,
    isLast: Boolean,
    icon: String,
    color: String,
    fontSize: String,
    enableLineColor: {
      type: String,
      default: '#f3b2b7'
    },
    unableLineColor: {
      type: String,
      default: '#ebeef5'
    },
    isOver: Boolean // 流程全部结束状态
  },
  render() {
    return (
      <div class="hd-steps-item">
        <div class="step__header">
          <div class="step__icon">
            <i
              class={['iconfont', this.icon ? this.icon : 'hd-icon-' + STATE_CONFIG[this.realState].icon]}
              style={{
                color: this.color ? this.color : STATE_CONFIG[this.realState].color,
                fontSize: this.fontSize ? this.fontSize : STATE_CONFIG[this.realState].fontSize
              }}
            />
          </div>
          <div
            class="step__line"
            style={{
              display: this.isLast ? 'none' : 'block',
              backgroundColor: this.state === 'finished' ? this.enableLineColor : this.unableLineColor
            }}
          />
        </div>
        <div class="step__body">
          <div class="step__label">{this.name}</div>
        </div>
      </div>
    );
  },
  computed: {
    realState() {
      if (this.isOver) {
        return 'over';
      }
      return this.state;
    }
  }
};
</script>

<style lang="less">
@stepIconWidth: 30px;
@ableLineColor: #f3b2b7;
@disableLineColor: #ebeef5;
.hd-steps-item {
  display: inline-block;
  position: relative;
  flex: 1;
  .step {
    position: relative;
    &__icon {
      position: relative;
      z-index: 2;
      display: inline-block;
      width: @stepIconWidth;
      height: @stepIconWidth;
      background-color: #fff;
      text-align: center;
      line-height: @stepIconWidth;
    }
    &__line {
      position: absolute;
      z-index: 1;
      height: 2px;
      width: 100%;
      top: calc(@stepIconWidth / 2);
      left: 0;
      background-color: @disableLineColor;
    }
    &__label {
      margin-top: 12px;
    }
  }
}
</style>
