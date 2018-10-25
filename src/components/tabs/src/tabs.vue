/*
 * @Author: fengjialing
 * @Date: 2018-07-16 16:23:04
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-14 14:49:19
 * @Description:
 */
<template>
  <el-tabs v-model="model"
           @tab-click="handleClick"
           @tab-remove="handleRemove"
           @tab-add="handleAdd"
           @edit="handleEdit"
           :type="ctype"
           :activeName="activeName"
           :closable="closable"
           :addable="addable"
           :editable="editable"
           :tabPosition="tabPosition"
           :beforeLeave="beforeLeave"
           :stretch="stretch"
           :class="tabClass">
    <slot></slot>
  </el-tabs>
</template>
<script>
import { Tabs } from 'element-ui';
export default {
  name: 'HdTabs',
  components: {
    [Tabs.name]: Tabs
  },
  props: {
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    },
    beforeLeave: Function,
    stretch: Boolean
  },

  methods: {
    handleClick(tab, event) {
      this.$emit('tab-click', tab, event);
    },
    handleRemove(name) {
      this.$emit('tab-remove', name);
    },
    handleAdd() {
      this.$emit('tab-add');
    },
    handleEdit(targetName, action) {
      this.$emit('edit', targetName, action);
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    ctype() {
      if (this.type === 'strokeRect' || this.type === 'topLine' || this.type === 'ynamicBottomLine') {
        return 'card';
      } else if (this.type === 'fillRect') {
        return 'border-card';
      } else {
        return '';
      }
    },
    tabClass() {
      if (this.type === 'bottomLine') return 'hd-tabs-bottom-line';
      else if (this.type === 'strokeRect') return 'hd-tabs-stroke-rect';
      else if (this.type === 'topLine') return 'hd-tabs-top-line';
      else if (this.type === 'fillRect') return 'hd-tabs-fill-rect';
      else if (this.type === 'ynamicBottomLine') return 'hd-tabs-ynamic-bottom-line';
      else return 'hd-tabs-normal';
    }
  }
};
</script>
