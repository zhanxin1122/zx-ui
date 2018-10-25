/*
 * @Author: fengjialing
 * @Date: 2018-08-13 19:41:55
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-15 14:12:48
 * @Description: 
 */
<template>
  <div>
    <rdm-title title="Checkbox 按钮"
               content="属性与el-checkbox是一样的，没有新添加的属性" />
    <!-- 基本用法 -->
    <rdm-content title="基础用法"
                 :code="codeNormal">
      <hd-checkbox v-model="checked1">备选项</hd-checkbox>
    </rdm-content>
    <!-- 禁用状态 -->
    <rdm-content title="禁用状态"
                 :code="codeDisabled">
      <hd-checkbox v-model="checked2"
                   disabled>备选项</hd-checkbox>
      <hd-checkbox v-model="checked3"
                   disabled>备选项</hd-checkbox>
    </rdm-content>
    <!-- 带边框 -->
    <rdm-content title="带边框"
                 :code="codeBorder">
      <hd-checkbox v-model="checked4"
                   border>备选项</hd-checkbox>
      <hd-checkbox v-model="checked5"
                   size="medium"
                   border>备选项</hd-checkbox>
      <hd-checkbox v-model="checked6"
                   size="small"
                   border>备选项</hd-checkbox>
      <hd-checkbox v-model="checked7"
                   size="mini"
                   border>备选项</hd-checkbox>
    </rdm-content>
    <!-- 测试checkbox-group -->
    <!-- <rdm-content title="带边框" :code="codeBorder">
      <hd-checkbox-group v-model="checkList">
        <hd-checkbox label="d" border>备选项</hd-checkbox>
        <hd-checkbox label="a" size="medium" border>备选项</hd-checkbox>
        <hd-checkbox label="b" size="small" border>备选项</hd-checkbox>
        <hd-checkbox label="c" size="mini" border>备选项</hd-checkbox>
      </hd-checkbox-group>
    </rdm-content> -->
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
    <rdm-param title="Checkbox Events"
               type="method"
               :list="paramsList1"></rdm-param>
  </div>
</template>
<script>
import HdCheckbox from '@/components/checkbox';
import CheckboxGroup from '@/components/checkbox-group';
import { codeNormal, codeDisabled, codeBorder } from './code.js';
export default {
  components: {
    [HdCheckbox.name]: HdCheckbox,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkList: ['a', 'b'],
      checked1: true,
      checked2: true,
      checked3: false,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true,
      paramsList: [
        {
          param: 'label',
          explain: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
          type: 'String / Number / Boolean',
          values: '--',
          default: '--'
        },
        {
          param: 'true-label',
          explain: '选中时的值',
          type: 'String / Number',
          values: '--',
          default: '--'
        },
        {
          param: 'false-label',
          explain: '没有选中时的值',
          type: 'String / Number',
          values: '--',
          default: '--'
        },
        {
          param: 'disabled',
          explain: '是否禁用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'border',
          explain: '是否显示边框',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'size',
          explain: 'Checkbox 的尺寸，仅在 border 为真时有效',
          type: 'String',
          values: 'medium / small / mini',
          default: '--'
        },
        {
          param: 'name',
          explain: '原生 name 属性',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'checked',
          explain: '当前是否勾选',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'indeterminate',
          explain: '设置 indeterminate 状态，只负责样式控制',
          type: 'Boolean',
          values: '--',
          default: 'false'
        }
      ],
      paramsList1: [
        {
          eventName: 'change',
          explain: '绑定值变化时触发的事件',
          params: '更新后的值'
        }
      ],
      codeNormal: codeNormal,
      codeDisabled: codeDisabled,
      codeBorder: codeBorder
    };
  }
};
</script>
