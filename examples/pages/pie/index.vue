/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-26 11:30:01
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-22 10:09:47
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div>
    <rdm-title title="echarts 饼图"
               content="" />
    <!-- 基本用法 -->
    <rdm-content title="基础用法1"
                 :code="codeNormal1">
      <hd-pie title="饼图分析1"
                      :values="['状态一', '状态二', '状态三']"
                      :data="[{ value: 15, name: '状态一' }, { value: 70, name: '状态二' }, { value: 15, name: '状态三' }]"
                      :radius="['0', '65%']"
                      :showItemLabel="true"
                      loading/>
    </rdm-content>
    <rdm-content title="基础用法2"
                 :code="codeNormal2">
      <hd-pie title="饼图分析2"
                      :values="['状态一', '状态二', '状态三', '状态四']"
                      :data="[
                        { value: 20, name: '状态一' },
                        { value: 60, name: '状态二' },
                        { value: 4, name: '状态三' },
                        { value: 16, name: '状态四' }
                      ]"
                      :radius="['40%', '65%']"
                      :showItemLabel="true"
                      loading/>
    </rdm-content>
    <rdm-content title="南丁格尔玫瑰图"
                 :code="codeNormal3">
      <hd-pie title="南丁格尔玫瑰图"
                      :values="['状态一', '状态二', '状态三', '状态四', '状态五', '状态六']"
                      :data="[
                        { value: 100, name: '状态一' },
                        { value: 50, name: '状态二' },
                        { value: 25, name: '状态三' },
                        { value: 20, name: '状态四' },
                        { value: 15, name: '状态五' },
                        { value: 10, name: '状态六' }
                      ]"
                      :radius="['0', '65%']"
                      :roseType="'radius'"
                      loading/>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
  </div>
</template>
<script>
import Pie from '@/components/pie';
import { codeNormal1, codeNormal2, codeNormal3 } from './code.js';
export default {
  components: {
    [Pie.name]: Pie
  },
  data() {
    return {
      paramsList: [
        {
          param: 'title',
          explain: '题目',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'width',
          explain: '宽度',
          type: 'String',
          values: '--',
          default: '350'
        },
        {
          param: 'height',
          explain: '高度',
          type: 'String',
          values: '--',
          default: '290'
        },
        {
          param: 'values',
          explain: '饼状图每类的含义',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'data',
          explain: '饼状图数据',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'loading',
          explain: '是否显示局部加载',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        },
        {
          param: 'colors',
          explain: '每块扇形的颜色',
          type: 'Array',
          values: '--',
          default: "['#0076FF', '#F43530', '#FFBE00', '#F030E0', '#09BB07', '#9D4FF1']"
        },
        {
          param: 'clockWise',
          explain: '是否是逆时针',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        },
        {
          param: 'startAngle',
          explain: '开始的角度',
          type: 'Number',
          values: '--',
          default: '90'
        },
        {
          param: 'showItemLabel',
          explain: '是否在饼图内部显示对应数据',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        },
        {
          param: 'radius',
          explain:
            '半径，支持绝对值（px）和百分比，百分比计算比，min(width, height) / 2 * 75%， 传数组实现环形图，[内半径，外半径]',
          type: '数组或者是百分比或者像素值',
          values: '--',
          default: '--'
        },
        {
          param: 'roseType',
          explain: '是否是玫瑰图',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        },
        {
          param: 'options',
          explain:
            '自定义参数，此项可参照 <a target="blank" href="http://echarts.baidu.com/option.html">echarts配置项文档</a>',
          type: 'Object',
          values: '--',
          default: '--'
        }
      ],
      codeNormal1: codeNormal1,
      codeNormal2: codeNormal2,
      codeNormal3: codeNormal3
    };
  },
  created() {},
  methods: {}
};
</script>
