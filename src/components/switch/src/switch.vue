/*
 * @Author: zhanxin
 * @Date: 2018-07-27 09:49:28
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-07-27 17:45:39
 * @Description: switch开关
 */
<template>
  <div class="hd-switch-warpper">
    <div class="hd-switch-content"
         v-if="type === 'text' || type === 'icon' || type === 'rect'"
         @click="handleClick">
      <div :class="{'hd-switch-rect-text': type === 'rect'}">
        <span v-show="checked && type === 'text'">开</span>
        <label class="el-icon-check"
               v-show="checked && type === 'icon'"></label>
        <p :class="{'hd-switch-rect-text__selected': !checked}"
           v-show="type === 'rect'">{{labels[1]}}</p>
      </div>
      <div :class="{'hd-switch-rect-text': type === 'rect'}">
        <span v-show="!checked && type === 'text'">关</span>
        <label class="el-icon-close"
               v-show="!checked && type === 'icon'"></label>
        <p :class="{'hd-switch-rect-text__selected': checked}"
           v-show="type === 'rect'">{{labels[0]}}</p>
      </div>
    </div>
    <el-switch ref="switch"
               v-model="checked"
               :width="type === 'rect' ? width * 2 : width"
               :disabled="disabled"
               :inactiveText="inactiveText"
               :name="name"
               @change="handleChange"
               :class="`hd-switch ${switchClass}`"></el-switch>
  </div>
</template>
<script>
import '@/style/switch.less';
import { Switch } from 'element-ui';
export default {
  name: 'HdSwitch',
  components: {
    [Switch.name]: Switch
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: 40
    },
    labels: {
      type: Array,
      default: () => ['开启', '关闭']
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeTexts: {
      type: Array,
      default: () => ['已开启', '已关闭']
    }
  },
  data() {
    return {
      checked: this.value,
      switchClass: this.type ? `hd-switch-${this.type}` : '',
      inactiveText: this.type === 'extarnal' ? (this.value ? this.activeTexts[0] : this.activeTexts[1]) : ''
    };
  },
  methods: {
    handleClick() {
      this.$refs.switch.handleChange();
    },
    handleChange(v) {
      this.$emit('change', v);
    },
    focus() {
      this.$refs.switch.focus();
    }
  },
  watch: {
    checked(v) {
      this.$emit('input', v);
      if (this.type === 'extarnal') {
        this.inactiveText = v ? this.activeTexts[0] : this.activeTexts[1];
      }
    }
  }
};
</script>
