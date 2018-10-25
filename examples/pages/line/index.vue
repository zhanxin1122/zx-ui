/*
 * @Author: ChenMi
 * @Date: 2018-08-13 11:02:33
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 15:02:17
 * @Description: 
 */
<template>
  <div class="demo">
    <rdm-title title="折线图" />
    <rdm-content title="平滑折线图"
                 :code="code1">
      <hd-line :type="line1.type"
                       :title="line1.title"
                       :xAxis="line1.xAxis"
                       :datas="line1.datas"
                       :isSmooth="line1.isSmooth"
                       :values="line1.values"
                       loading/>
    </rdm-content>
    <rdm-content title="普通折线图"
                 :code="code2">
      <hd-line :type="line2.type"
                       :title="line2.title"
                       :xAxis="line2.xAxis"
                       :datas="line2.datas"
                       :values="line2.values"
                       :symbols="line2.symbols"
                       :colors="line2.colors"
                       loading/>
    </rdm-content>
    <rdm-content title="堆叠区域图"
                 :code="code3">
      <hd-line :type="line3.type"
                       :title="line3.title"
                       :xAxis="line3.xAxis"
                       :datas="line3.datas"
                       :values="line3.values"
                       :colors="line3.colors"
                       loading/>
    </rdm-content>
    <rdm-param title="Attributes"
               explain="可添加解释"
               type="attr"
               :list="attrList"></rdm-param>
    <rdm-param title="symbol项"
               type="attr"
               :list="symbolAttrList"></rdm-param>
  </div>
</template>


<script>
import Line from '@/components/line/src/line';

export default {
  components: {
    [Line.name]: Line
  },
  data() {
    return {
      code1: `
      <hd-line type="smoothType"
                       title="标题"
                       :xAxis="[27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
                       :datas="[80, 85, 175, 150, 200, 300, 300, 212, 220, 130, 40, 42, 440, 450, 290, 58, 66, 240, 300, 120, 96, 150]"
                       :isSmooth="true"
                       :values="['状态']" 
                       loading/>
      `,
      code2: `
      <hd-line type="brokenType"
                       :xAxis="[27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
                       :datas="[
                          [80, 85, 175, 150, 200, 300, 300, 212, 220, 130, 40, 42, 440, 450, 290, 58, 66, 240, 300, 120, 96, 150],
                          [35, 50, 100, 80, 200, 400, 420, 300, 320, 180, 200, 100, 136, 100, 220, 100, 80, 120, 280, 320, 300, 380]
                        ]"
                       :values="['状态1', '状态2']"
                       :symbols: [{ symbol: 'emptyCircle' }, { symbol: 'circle' }],
                       :colors="['#0076FF', '#09BB07']" 
                       loading/>
      `,
      code3: `
      <hd-line type="areaType"
                       :xAxis="['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']"
                       :datas="[
                          [460, 300, 375, 280, 200, 380, 300],
                          [380, 180, 200, 180, 100, 220, 220],
                          [220, 120, 180, 100, 40, 180, 160]
                        ]"
                       :values="['状态1', '状态2', '状态3']"
                       :colors="['#FFBE00', '#F43530', '#0076FF']" 
                       loading/>
      `,
      attrList: [
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
          param: 'datas',
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
          default: '1080'
        },
        {
          param: 'height',
          explain: '图标高度',
          type: 'String',
          values: '--',
          default: '288'
        },
        {
          param: 'colors',
          explain: '线段的颜色',
          type: 'Array',
          values: '所有颜色',
          default: ''
        },
        {
          param: 'symbols',
          explain: '状态标记',
          type: 'Array',
          values: '详见下文 [symbol项]',
          default: ''
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
          explain: '每条折线表示的含义',
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
            '（慎用）自定义参数，此项可参照 <a target="blank" href="http://echarts.baidu.com/option.html">echarts配置项文档</a>',
          type: 'Object',
          values: '--',
          default: '--'
        }
      ],
      symbolAttrList: [
        {
          param: 'showSymbol',
          explain: '是否显示数据点',
          type: 'Boolean',
          values: 'true/false',
          default: '类型默认'
        },
        {
          param: 'symbol',
          explain: '数据点的类型',
          type: 'String',
          values: 'circle/rect/roundRect/triangle/diamond/pin/arrow/none',
          default: '类型默认'
        },
        {
          param: 'symbolSize',
          explain: '数据点的尺寸',
          type: 'Number',
          values: '所有数值',
          default: '类型默认'
        }
      ],
      line1: {
        type: 'smoothType',
        title: '标题',
        xAxis: [27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datas: [80, 85, 175, 150, 200, 300, 300, 212, 220, 130, 40, 42, 440, 450, 290, 58, 66, 240, 300, 120, 96, 150],
        values: ['状态']
      },
      line2: {
        type: 'brokenType',
        title: {
          text: '标题超链接',
          link: 'http://echarts.baidu.com/option.html#title.link',
          textStyle: {
            color: '#666',
            fontSize: '14'
          },
          backgroundColor: 'pink'
        },
        xAxis: [27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datas: [
          [80, 85, 175, 150, 200, 300, 300, 212, 220, 130, 40, 42, 440, 450, 290, 58, 66, 240, 300, 120, 96, 150],
          [35, 50, 100, 80, 200, 400, 420, 300, 320, 180, 200, 100, 136, 100, 220, 100, 80, 120, 280, 320, 300, 380]
        ],
        values: ['状态1', '状态2'],
        symbols: [{ symbol: 'emptyCircle' }, { symbol: 'circle' }],
        colors: ['#0076FF', '#09BB07']
      },
      line3: {
        type: 'areaType',
        xAxis: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        datas: [
          [460, 300, 375, 280, 200, 380, 300],
          [380, 180, 200, 180, 100, 220, 220],
          [220, 120, 180, 100, 40, 180, 160]
        ],
        values: ['状态1', '状态2', '状态3'],
        colors: ['#FFBE00', '#F43530', '#0076FF']
      }
    };
  }
};
</script>
