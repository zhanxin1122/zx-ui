/*
 * @Author: fengjialing
 * @Date: 2018-08-13 17:24:43
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-15 11:12:06
 * @Description: 
 */
<template>
  <div>
    <rdm-title title="Radio 按钮"
               content="属性与el-radio是一样的，没有新添加的属性" />
    <!-- 基本用法 -->
    <rdm-content title="基础用法"
                 :code="codeNormal">
      <hd-radio v-model="radio"
                label="1">备选项</hd-radio>
      <hd-radio v-model="radio"
                label="2">备选项</hd-radio>
    </rdm-content>
    <!-- 禁用状态 -->
    <rdm-content title="禁用状态"
                 :code="codeDisabled">
      <hd-radio v-model="radio1"
                label="1"
                disabled>备选项</hd-radio>
      <hd-radio v-model="radio1"
                label="2"
                disabled>备选项</hd-radio>
    </rdm-content>
    <!-- 带边框 -->
    <rdm-content title="带边框"
                 :code="codeBorder">
      <hd-radio v-model="radio3"
                label="1"
                border>备选项</hd-radio>
      <hd-radio v-model="radio4"
                label="1"
                size="medium"
                border>备选项</hd-radio>
      <hd-radio v-model="radio5"
                label="1"
                size="small"
                border>备选项</hd-radio>
      <hd-radio v-model="radio5"
                label="1"
                size="mini"
                border>备选项</hd-radio>
    </rdm-content>
    <!-- <rdm-content title="测试group" :code="codeBorder">
      <hd-radio-group v-model="radio4">
        <hd-radio label="1" border>备选项</hd-radio>
        <hd-radio label="2" size="medium" border>备选项</hd-radio>
        <hd-radio label="3" size="small" border>备选项</hd-radio>
        <hd-radio label="4" size="mini" border>备选项</hd-radio>
      </hd-radio-group>
    </rdm-content> -->
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
    <rdm-param title="Table Events"
               type="method"
               :list="paramsList1"></rdm-param>
    <!-- <rdm-param title="Radio-group Attributes" type="attr" :list="paramsList2"></rdm-param> -->
  </div>
</template>
<script>
import HdRadio from '@/components/radio';
import HdRadioGroup from '@/components/radio-group';
import { codeNormal, codeDisabled, codeBorder } from './code.js';
export default {
  components: {
    [HdRadio.name]: HdRadio,
    [HdRadioGroup.name]: HdRadioGroup
  },
  data() {
    return {
      radio: '1',
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1',
      radio5: '1',
      paramsList: [
        {
          param: 'label',
          explain: 'Radio的value',
          type: 'String/Number/Boolean',
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
          explain: 'Radio 的尺寸，仅在 border 为真时有效',
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
        }
      ],
      paramsList1: [
        {
          eventName: 'change',
          explain: '绑定值变化时触发的事件',
          params: '选中的 Radio label 值'
        }
      ],
      // paramsList2:[
      //    {
      //     param: 'size',
      //     explain: '单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效',
      //     type: 'String',
      //     values: 'medium / small / mini',
      //     default: '--'
      //   },
      //   {
      //     param: 'disabled',
      //     explain: '是否禁用',
      //     type: 'Boolean',
      //     values: '--',
      //     default: 'false'
      //   },
      //    {
      //     param: 'text-color',
      //     explain: '按钮形式的 Radio 激活时的文本颜色',
      //     type: 'String',
      //     values: '--',
      //     default: '#ffffff'
      //   },
      //   {
      //     param: 'fill',
      //     explain: '按钮形式的 Radio 激活时的填充色和边框色',
      //     type: 'String',
      //     values: '--',
      //     default: '#ffffff'
      //   }
      // ],
      codeNormal: codeNormal,
      codeDisabled: codeDisabled,
      codeBorder: codeBorder
    };
  }
};
</script>
