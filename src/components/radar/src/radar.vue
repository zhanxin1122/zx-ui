/*
 * @Author: zhanxin
 * @Date: 2018-07-25 17:42:32
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 15:06:57
 * @Description: 雷达图
 */
<template>
  <div class="hd-chart-box"
       v-loading="{flag}">
    <div :ref="id"
         :style="{'width': `${width}px`,'height': `${height}px`}" /></div>
</template>
<script>
import loading from '../../../directives/loading';
import { merge } from '../../../utils';
export default {
  name: 'HdRadar',
  directives: {
    loading
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '400'
    },
    height: {
      type: String,
      default: '300'
    },
    loading: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array,
      default: () => ['#ffbe00', '#f43530', '#0076ff', '#09bb07', '#9f44d3']
    },
    // 雷达图每个闭环的含义
    values: {
      type: Array,
      default: () => []
    },
    // 纵轴
    items: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    // 可以覆盖组件的option
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      id: Math.floor(Math.random() * 10e12),
      laodFlag: true
    };
  },
  mounted() {
    const _this = this;
    const myChart = _this.$refs[_this.id];
    // 默认参数
    const options = {
      title: {
        text: _this.title,
        textStyle: {
          color: '#666',
          fontSize: 14,
          fontWeight: 'normal'
        }
      },
      legend: {
        data: _this.values,
        icon: 'circle',
        right: '10%',
        itemWidth: 10,
        textStyle: {
          color: '#666',
          fontSize: 12
        }
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#333',
            fontSize: 12
          }
        },
        center: ['50%', '55%'],
        radius: '60%',
        splitArea: {
          show: false
        },
        indicator: _this.items,
        splitLine: {
          lineStyle: {
            color: ['#ccc']
          }
        }
      },
      tooltip: {},
      series: [
        {
          type: 'radar',
          width: 0.5,
          symbolSize: 6,
          data: _this.values.map((item, i) => ({
            value: _this.data[i],
            name: item,
            lineStyle: {
              normal: {
                width: 1,
                color: _this.colors[i]
              }
            },
            itemStyle: {
              color: _this.colors[i]
            }
          }))
        }
      ]
    };
    merge(options, _this.options);
    import(/* webpackChunkName: 'echarts.min'*/ 'echarts').then(Module => {
      Module.default.init(myChart).setOption(options);
      this.laodFlag = false;
    });
  },
  computed: {
    flag() {
      return this.loading && this.laodFlag;
    }
  }
};
</script>
