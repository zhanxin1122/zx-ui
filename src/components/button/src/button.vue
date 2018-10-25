/*
 * @Author: fengjialing
 * @Date: 2018-07-13 15:02:51
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-13 16:49:04
 * @Description:
 */

<script>
import { Button } from 'element-ui';
import { addClass } from '@/utils/handle-class.js';
export default {
  extends: Button,
  name: 'HdButton',
  props: {
    level: {
      type: String,
      default: ''
    },
    emphasis: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // this.$el.className += this.$props.type === 'common' ? ' hd-btn-common' : '';
    if (this.$props.type === 'common') {
      this.$el.className = addClass(this.$el.className, 'hd-btn-common');
    }
    if (this.$props.type === 'ghost') {
      this.$el.className = addClass(this.$el.className, 'hd-btn-ghost');
    }
    // this.$el.className += this.$props.type === 'ghost' ? ' hd-btn-ghost' : '';
    if (this.emphasis && this.level !== '') {
      switch (this.level) {
        case '1':
          this.$el.className = addClass(this.$el.className, 'hd-btn-level-1 emphasis');
          break;
        case '2':
          this.$el.className = addClass(this.$el.className, 'hd-btn-level-2 emphasis');
          break;
        case '3':
          this.$el.className = addClass(this.$el.className, 'hd-btn-level-3 emphasis');
          break;
        default:
          break;
      }
    } else if (this.level !== '') {
      switch (this.level) {
        case '1':
          this.$el.className = addClass(this.$el.className, 'hd-btn-level-1');
          break;
        case '2':
          this.$el.className = addClass(this.$el.className, 'hd-btn-level-2');
          break;
        case '3':
          this.$el.className = addClass(this.$el.className, 'hd-btn-level-3');
          break;
        default:
          break;
      }
    }
  }
};
</script>
