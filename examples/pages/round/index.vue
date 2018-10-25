/*
 * @Author: fengjialing
 * @Date: 2018-08-14 10:27:58
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-14 16:47:17
 * @Description: 
 */
<template>
  <div>
    <rdm-title title="echarts 圆环图" content="" />
    <rdm-content title="基础用法" :code="codeNormal" style="position:relative">
      <hd-round class="round-style" :width="'300'" :height="'300'" title="环形图一" :values="values2" :showVal="showVal2" :color="color2" :datas="datas2" :startAngle="startAngle" :endAngle="endAngle"></hd-round>
      <hd-round class="round-style" :width="'300'" :height="'300'" title="环形图二" :values="values1" :showVal="showVal1" :color="color1" :datas="datas1" :startAngle="startAngle1" :endAngle="endAngle1"></hd-round>
    </rdm-content>
    <rdm-param title="Attributes" type="attr" :list="paramsList"></rdm-param>
  </div>
</template>
<script>
import Round from '@/components/round';
import { codeNormal } from './code.js';
export default {
  components: {
    [Round.name]: Round
  },
  data() {
    return {
      // 图一
      values1: ['状态一', '状态二', '状态三'],
      datas1: [{ value: '60%', name: '状态一' }, { value: '78%', name: '状态二' }, { value: '76%', name: '状态三' }],
      color1: ['#09BB07', '#0076FF', '#F43530'],
      startAngle1: 150,
      endAngle1: 30,
      showVal1: true,
      // 图二
      values2: ['状态一', '状态二', '状态三'],
      datas2: [{ value: '60%', name: '状态一' }, { value: '78%', name: '状态二' }, { value: '76%', name: '状态三' }],
      color2: ['#09BB07', '#0076FF', '#F43530'],
      startAngle2: 270,
      endAngle2: 270,
      showVal2: true,
      codeNormal: codeNormal,
      paramsList: [
        {
          param: 'title',
          explain: '标题',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'datas',
          explain: '数据',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'width',
          explain: '环形图长度',
          type: 'String',
          values: '--',
          default: '400'
        },
        {
          param: 'height',
          explain: '环形图高度',
          type: 'String',
          values: '--',
          default: '300'
        },
        {
          param: 'colors',
          explain: '线条的颜色',
          type: 'Array',
          values: '所有颜色',
          default: '#000000'
        },
        {
          param: 'values',
          explain: '每个闭环表示的含义',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'showVal',
          explain: '是否在表上头显示每个图标对应的值',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        },
        {
          param: 'startAngle',
          explain: '圆环的开始角度',
          type: 'Number',
          values: '--',
          default: '-90'
        },
        {
          param: 'endAngle',
          explain: '圆环的结束角度',
          type: 'Number',
          values: '--',
          default: '-90'
        },
        {
          param: 'clockWise',
          explain: '是否是逆时针',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        }
      ]
    };
  }
};
</script>
<style>
.round-style {
  display: inline-block;
  margin-left: 20px;
}
</style>
