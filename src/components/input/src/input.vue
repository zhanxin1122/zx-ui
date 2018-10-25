/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-09 10:01:17
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-09 17:26:40
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<script>
import { Input } from 'element-ui';
import { addClass, removeClass } from '@/utils/handle-class.js';
import '@/style/input.less';
export default {
  extends: Input,
  name: 'HdInput',
  props: {
    hdStyle: {
      type: Boolean,
      default: false
    },
    inputState: {
      type: String,
      default: '' // normal, correct, warning, error
    },
    suffixIcon: {
      type: String
    }
  },
  data() {
    return {
      isCorrect: false,
      slotClassName: ''
    };
  },
  watch: {
    inputState(newVal) {
      // this.validateInput(this.$el.className, this.$el.querySelector('.el-input__icon').className, newVal);
      this.validateInput(newVal);
    }
  },
  mounted() {
    if (!this.size) {
      this.confirmSize('medium');
    } else {
      this.confirmSize(this.size);
    }
    this.confirmStyle(this.hdStyle);
    if (this.inputState) {
      this.useHdFillStyle(true);
      // this.validateInput(this.$el.className, this.$el.querySelector('.el-input__icon').className, this.inputState);
      this.validateInput(this.inputState);
    }
  },
  methods: {
    // 确认尺寸
    confirmSize(size) {
      switch (size) {
        case 'large':
          // this.$el.className += ' hd-input-large';
          this.$el.className = addClass(this.$el.className, 'hd-input-large');
          break;
        case 'medium':
          this.$el.className = addClass(this.$el.className, 'hd-input-medium');
          break;
        case 'small':
          this.$el.className = addClass(this.$el.className, 'hd-input-small');
          break;
        default:
          break;
      }
    },
    // 是否使用恒大样式
    confirmStyle(style) {
      if (style) {
        this.$el.className = addClass(this.$el.className, 'hd-input');
      }
    },
    // 是否使用'恒大验证(填充)'样式
    useHdFillStyle(checkflag) {
      if (checkflag) {
        this.$el.className = addClass(this.$el.className, 'hd-input fill');
        // this.$el.className = addClass(this.$el.className, '');
      }
    },
    // 验证输入值
    validateInput(val) {
      // 如果有大神能优化这组 DOM 操作(不支持传参进来修改)
      // switch (val) {
      //   case 'normal':
      //     // 清除样式
      //     wrapClassName = removeClass(wrapClassName, 'hd-input-correct hd-input-error hd-input-warning');
      //     slotClassName = removeClass(slotClassName, 'el-icon-success el-icon-error icon-warning');
      //     break;
      //   case 'correct':
      //     wrapClassName = removeClass(wrapClassName, 'hd-input-error hd-input-warning');
      //     wrapClassName = addClass(wrapClassName, 'hd-input-correct');
      //     slotClassName = removeClass(slotClassName, 'el-icon-error icon-warning');
      //     slotClassName = addClass(slotClassName, 'el-icon-success');
      //     break;
      //   case 'error':
      //     wrapClassName = removeClass(wrapClassName, 'hd-input-correct hd-input-warning');
      //     wrapClassName = addClass(wrapClassName, 'hd-input-error');
      //     slotClassName = removeClass(slotClassName, 'el-icon-success icon-warning');
      //     slotClassName = addClass(slotClassName, 'el-icon-error');
      //     break;
      //   case 'warning':
      //     wrapClassName = removeClass(wrapClassName, 'hd-input-correct hd-input-error');
      //     wrapClassName = addClass(wrapClassName, 'hd-input-warning');
      //     slotClassName = removeClass(slotClassName, 'el-icon-success');
      //     slotClassName = addClass(slotClassName, 'el-icon-error icon-warning');
      //     break;
      //   default:
      //     break;
      // }
      // 如果有大神能优化这组 DOM 操作
      switch (val) {
        case 'normal':
          // 清除样式
          this.$el.className = removeClass(this.$el.className, 'hd-input-correct hd-input-error hd-input-warning');
          this.$el.querySelector('.el-input__icon').className = removeClass(
            this.$el.querySelector('.el-input__icon').className,
            'el-icon-success el-icon-error icon-warning'
          );
          break;
        case 'correct':
          this.$el.className = removeClass(this.$el.className, 'hd-input-error hd-input-warning');
          this.$el.className = addClass(this.$el.className, 'hd-input-correct');
          this.$el.querySelector('.el-input__icon').className = removeClass(
            this.$el.querySelector('.el-input__icon').className,
            'el-icon-error icon-warning'
          );
          this.$el.querySelector('.el-input__icon').className = addClass(
            this.$el.querySelector('.el-input__icon').className,
            'el-icon-success'
          );
          break;
        case 'error':
          this.$el.className = removeClass(this.$el.className, 'hd-input-correct hd-input-warning');
          this.$el.className = addClass(this.$el.className, 'hd-input-error');
          this.$el.querySelector('.el-input__icon').className = removeClass(
            this.$el.querySelector('.el-input__icon').className,
            'el-icon-success icon-warning'
          );
          this.$el.querySelector('.el-input__icon').className = addClass(
            this.$el.querySelector('.el-input__icon').className,
            'el-icon-error'
          );
          break;
        case 'warning':
          this.$el.className = removeClass(this.$el.className, 'hd-input-correct hd-input-error');
          this.$el.className = addClass(this.$el.className, 'hd-input-warning');
          this.$el.querySelector('.el-input__icon').className = removeClass(
            this.$el.querySelector('.el-input__icon').className,
            'el-icon-success'
          );
          this.$el.querySelector('.el-input__icon').className = addClass(
            this.$el.querySelector('.el-input__icon').className,
            'el-icon-error icon-warning'
          );
          break;
        default:
          break;
      }
    }
  }
};
</script>
