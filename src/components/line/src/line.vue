/*
 * @Author: ChenMi
 * @Date: 2018-08-01 14:56:23
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 14:57:24
 * @Description: 
 */

<template>
  <div class="hd-chart-box"
       v-loading="{flag}">
    <div ref="echarts-line-container"
         :style="styleObject"></div>
  </div>
</template>

<script>
import loading from '../../../directives/loading';
import { merge } from '../../../utils';
import defaultOptions from './options';
const noopArray = [];
export default {
  name: 'HdLine',
  directives: {
    loading
  },
  props: {
    type: {
      type: String,
      default: 'smoothType'
    },
    title: [String, Object],
    width: {
      type: String,
      default: '800'
    },
    height: {
      type: String,
      default: '288'
    },
    loading: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array,
      default() {
        return noopArray;
      }
    },
    isSwitch: Boolean,
    values: {
      type: Array,
      default() {
        return noopArray;
      }
    },
    xAxis: {
      type: Array,
      default() {
        return noopArray;
      }
    },
    datas: {
      type: Array,
      default() {
        return noopArray;
      }
    },
    symbols: {
      type: Array,
      default() {
        return noopArray;
      }
    },
    options: Object
  },
  data() {
    return {
      charts: null,
      laodFlag: true
    };
  },
  computed: {
    styleObject() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
    },
    flag() {
      return this.loading && this.laodFlag;
    }
  },
  mounted() {
    import(/* webpackChunkName: 'echarts.min'*/ 'echarts').then(Module => {
      const echarts = Module.default;
      this.charts = echarts.init(this.$refs['echarts-line-container']);
      this.setOptions();
    });
  },
  methods: {
    setOptions() {
      const series = [];
      const defaultOptionsClone = Object.assign({}, defaultOptions[this.type]);
      if (this.datas[0] instanceof Array) {
        this.datas.forEach((item, i) => {
          const defaultSeriesClone = Object.assign({}, defaultOptions[this.type].series);
          series.push(
            merge(defaultSeriesClone, {
              name: this.values[i],
              data: item,
              itemStyle: {
                color: this.colors[i]
              },
              ...this.symbols[i]
            })
          );
        });
      } else {
        const defaultSeriesClone = Object.assign({}, defaultOptions[this.type].series);
        series.push(
          merge(defaultSeriesClone, {
            name: this.values[0],
            data: this.datas,
            itemStyle: {
              color: this.colors[0]
            },
            ...this.symbols[0]
          })
        );
      }
      const options = merge(defaultOptionsClone, {
        title:
          Object.prototype.toString.call(this.title) === '[object Object]'
            ? this.title
            : {
                text: this.title,
                textStyle: {
                  color: '#666',
                  fontSize: 14,
                  fontWeight: 'normal'
                }
              },
        legend: {
          data: this.values,
          icon: 'circle',
          right: '10%',
          itemWidth: 10,
          textStyle: {
            color: '#666',
            fontSize: 12
          }
        },
        xAxis: {
          data: this.xAxis,
          type: this.isSwitch ? 'value' : 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: this.isSwitch ? 'category' : 'value',
          data: this.isSwitch ? this.xAxis : [],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series
      });
      merge(options, this.options);
      this.charts.setOption(options);
      this.laodFlag = false;
    }
  }
};
</script>
