/*
 * @Author: zhanxin
 * @Date: 2018-08-10 16:06:40
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 15:01:56
 * @Description: 柱状图参数说明
 */
<template>
  <div>
    <rdm-title title="柱状图"
               content="在echarts基础提供基本柱状图，可省去在echarts文档上查一些常规参数的时间" />
    <rdm-content title="基础用法"
                 :code="code1">
      <hd-bar title="示例1"
                      :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                      :data="[120, 200, 150, 80, 70, 110, 130]"
                      :values="['value']"
                      loading/>
    </rdm-content>
    <rdm-content title="两栏数据"
                 :code="code2">
      <hd-bar title="示例2"
                      :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                      :data="[
                        [120, 200, 150, 80, 70, 110, 130],
                        [140, 100, 130, 100, 120, 160, 200]
                      ]"
                      :values="['value1', 'value2']"
                      loading/>
    </rdm-content>
    <rdm-content title="三栏数据"
                 :code="code3">
      <hd-bar title="示例3"
                      :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                      :data="[
                        [120, 200, 150, 80, 70, 110, 130],
                        [140, 100, 130, 100, 120, 160, 200],
                        [110, 120, 140, 130, 190, 60, 100]
                      ]"
                      :values="['value1', 'value2', 'value3']"
                      loading/>
    </rdm-content>
    <rdm-content title="数据堆叠"
                 :code="code4">
      <hd-bar title="示例4"
                      :isStack="true"
                      :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                      :data="[
                        [120, 200, 150, 80, 70, 110, 130],
                        [140, 100, 130, 100, 120, 160, 200],
                        [110, 120, 140, 130, 190, 60, 100]
                      ]"
                      :values="['value1', 'value2', 'value3']"
                      loading/>
    </rdm-content>
    <rdm-content title="坐标轴对换"
                 :code="code5">
      <hd-bar title="示例5"
                      :isSwitch="true"
                      :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                      :data="[
                        [120, 200, 150, 80, 70, 110, 130],
                        [140, 100, 130, 100, 120, 160, 200]
                      ]"
                      :values="['value1', 'value2']"
                      loading/>
    </rdm-content>
    <rdm-content title="坐标轴对换，堆叠数据，自定义参数"
                 :code="code6">
      <hd-bar title="示例6"
                      :isStack="true"
                      :isSwitch="true"
                      :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                      :data="[
                        [120, 200, 150, 80, 70, 110, 130],
                        [140, 100, 130, 100, 120, 160, 200],
                        [110, 120, 140, 130, 190, 60, 100]
                      ]"
                      :options="{
                        title: {
                          textStyle: {
                            fontWeight: 'bold'
                          }
                        },
                        legend: {
                          textStyle: {
                            color: 'red'
                          }
                        }
                      }"
                      :values="['value1', 'value2', 'value3']"
                      loading/>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
  </div>
</template>
<script>
import Bar from '@/components/bar';
export default {
  components: {
    [Bar.name]: Bar
  },
  data() {
    return {
      code1: `<hd-bar title="示例2"
                :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                :data="[
                  [120, 200, 150, 80, 70, 110, 130],
                  [140, 100, 130, 100, 120, 160, 200]
                ]"
                :values="['value1', 'value2']" 
                loading/>`,
      code2: `<hd-bar title="示例2"
                :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                :data="[
                  [120, 200, 150, 80, 70, 110, 130],
                  [140, 100, 130, 100, 120, 160, 200]
                ]"
                :values="['value1', 'value2']" 
                loading/>`,
      code3: `<hd-bar title="示例3"
                :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                :data="[
                  [120, 200, 150, 80, 70, 110, 130],
                  [140, 100, 130, 100, 120, 160, 200],
                  [110, 120, 140, 130, 190, 60, 100]
                ]"
                :values="['value1', 'value2', 'value3']" 
                loading/>`,
      code4: `<hd-bar title="示例4"
                :isStack="true"
                :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                :data="[
                  [120, 200, 150, 80, 70, 110, 130],
                  [140, 100, 130, 100, 120, 160, 200],
                  [110, 120, 140, 130, 190, 60, 100]
                ]"
                :values="['value1', 'value2', 'value3']" 
                loading/>`,
      code5: `<hd-bar title="示例5"
                :isSwitch="true"
                :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                :data="[
                  [120, 200, 150, 80, 70, 110, 130],
                  [140, 100, 130, 100, 120, 160, 200]
                ]"
                :values="['value1', 'value2']" 
                loading/>`,
      code6: `<hd-bar title="示例6"
                :isStack="true"
                :isSwitch="true"
                :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                :data="[
                  [120, 200, 150, 80, 70, 110, 130],
                  [140, 100, 130, 100, 120, 160, 200],
                  [110, 120, 140, 130, 190, 60, 100]
                ]"
                :options="{
                  title: {
                    textStyle: {
                      fontWeight: 'bold'
                    }
                  },
                  legend: {
                    textStyle: {
                      color: 'red'
                    }
                  }
                }"
                :values="['value1', 'value2', 'value3']" 
                loading/>`,
      paramsList: [
        {
          param: 'title',
          explain: '标题',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'xAxis',
          explain: 'x轴数据',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'data',
          explain: '数据',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'width',
          explain: '图表长度',
          type: 'String',
          values: '--',
          default: '400'
        },
        {
          param: 'height',
          explain: '图标高度',
          type: 'String',
          values: '--',
          default: '300'
        },
        {
          param: 'colors',
          explain: '柱体的颜色',
          type: 'Array',
          values: '所有颜色',
          default: "['#0076ff', '#d7000f', '#09bb07', '#9f44d3', '#8e9eab'],超过5个后，将按照echarts默认颜色显示"
        },
        {
          param: 'isStack',
          explain: '表示柱体数据是否堆叠',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        },
        {
          param: 'isSwitch',
          explain: '表示坐标轴是否对换',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        },
        {
          param: 'values',
          explain: '每类柱体表示的含义',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'loading',
          explain: '是否显示加载图案',
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
      ]
    };
  }
};
</script>
