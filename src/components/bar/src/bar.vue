/*
 * @Author: zhanxin
 * @Date: 2018-07-25 09:12:51
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 10:34:07
 * @Description: 柱状图
 */
<template>
  <div class="hd-chart-box"
       v-loading="{flag}">
    <div :ref="id"
         :style="{'width': `${width}px`,'height': `${height}px`}" /></div>

</template>
<script>
import { merge } from '../../../utils';
import loading from '../../../directives/loading';
export default {
  name: 'HdBar',
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
      default: () => ['#0076ff', '#d7000f', '#09bb07', '#9f44d3', '#8e9eab']
      // default: () => []
    },
    // 数据是否堆叠
    isStack: {
      type: Boolean,
      default: false
    },
    // x y是否转向
    isSwitch: {
      type: Boolean,
      default: false
    },
    // 柱状图每类的含义
    values: {
      type: Array,
      default: () => []
    },
    xAxis: {
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
    import(/* webpackChunkName: 'echarts.min'*/ 'echarts').then(Module => {
      const echarts = Module.default;
      const _this = this;
      const myChart = _this.$refs[_this.id];
      // 设置series
      const series = [];
      const commonSeries = {
        type: 'bar',
        barGap: '0%',
        barCategroyGap: '100%',
        barMaxWidth: '30px',
        stack: _this.isStack ? '总量' : null
      };
      if (_this.data[0] instanceof Array) {
        _this.data.forEach((item, i) => {
          series.push({
            name: _this.values[i],
            data: item,
            itemStyle: {
              color: _this.colors[i]
            },
            ...commonSeries
          });
        });
      } else {
        series.push({
          name: _this.values[0],
          data: _this.data,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ])
          },
          ...commonSeries
        });
      }
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
        tooltip: {},
        xAxis: {
          data: this.xAxis,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          type: _this.isSwitch ? 'value' : 'category'
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: ['#eee']
            }
          },
          type: _this.isSwitch ? 'category' : 'value',
          data: _this.isSwitch ? _this.xAxis : null
        },
        series
      };
      merge(options, _this.options);
      echarts.init(myChart).setOption(options);
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
