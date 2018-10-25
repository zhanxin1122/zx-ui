/*
 * @Author: zhanxin
 * @Date: 2018-08-13 08:54:20
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 15:06:17
 * @Description: 雷达图说明
 */
<template>
  <div>
    <rdm-title title="雷达图"
               content="在echarts基础提供基本雷达图，可省去在echarts文档上查一些常规参数的时间" />
    <rdm-content title="基础用法"
                 :code="code">
      <hd-radar title="示例"
                        :values="['状态1', '状态2', '状态3']"
                        :items="[{
                          name: '元素1',
                          max: 100
                        }, {
                          name: '元素2',
                          max: 100
                        }, {
                          name: '元素3',
                          max: 100
                        }, {
                          name: '元素4',
                          max: 100
                        }, {
                          name: '元素5',
                          max: 100
                        }]"
                        :data="[[30, 69, 24, 45, 23],[23, 47, 87, 93, 33], [73, 45, 53, 51, 22]]"
                        loading/>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
  </div>
</template>
<script>
import Radar from '@/components/radar';
export default {
  components: {
    [Radar.name]: Radar
  },
  data() {
    return {
      paramsList: [
        {
          param: 'title',
          explain: '标题',
          type: 'String',
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
          explain: '线条的颜色',
          type: 'Array',
          values: '所有颜色',
          default: "['#0076ff', '#d7000f', '#09bb07', '#9f44d3', '#8e9eab'],超过5个后，将按照echarts默认颜色显示"
        },
        {
          param: 'values',
          explain: '每个闭环表示的含义',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'items',
          explain: '纵轴最大值',
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
      ],
      code: `<hd-radar title="示例"
                      :values="['状态1', '状态2', '状态3']"
                      :items="[{
                        name: '元素1',
                        max: 100
                      }, {
                        name: '元素2',
                        max: 100
                      }, {
                        name: '元素3',
                        max: 100
                      }, {
                        name: '元素4',
                        max: 100
                      }, {
                        name: '元素5',
                        max: 100
                      }]"
                      :data="[[30, 69, 24, 45, 23],[23, 47, 87, 93, 33], [73, 45, 53, 51, 22]]" 
                      loading/>`
    };
  }
};
</script>
