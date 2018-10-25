/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-26 10:02:14
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-07-30 18:01:07
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

 <template>
  <div class="hd-chart-box"
       v-loading="{flag}">
    <div class="hd-pie-wrapper"
         :ref="hashRef"
         :style="{'width': `${width}px`,'height': `${height}px`}" />
  </div>
</template>
 <script>
import loading from '../../../directives/loading';
import { merge } from '../../../utils';
import { getHashCodeByTime } from '@/utils/hash-code.js';
export default {
  name: 'HdPie',
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
      default: '350'
    },
    height: {
      type: String,
      default: '290'
    },
    loading: {
      type: Boolean,
      default: false
    },
    // 饼状图每类的含义
    values: {
      type: Array,
      default: () => []
    },
    // 饼状图数据
    data: {
      type: Array,
      default: () => []
    },
    radius: {
      type: Array,
      default: () => ['0', '50%']
    },
    // 颜色
    colors: {
      type: Array,
      default: () => ['#0076FF', '#F43530', '#FFBE00', '#F030E0', '#09BB07', '#9D4FF1']
    },
    // 饼图方向
    clockWise: {
      type: Boolean,
      default: () => false
    },
    // 开始角度
    startAngle: {
      type: Number,
      default: () => 90
    },
    // 显示inner的label
    showItemLabel: {
      type: Boolean,
      default: () => false
    },
    roseType: {
      type: String,
      default: () => ''
    },
    // 可以覆盖组件的option
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      hashRef: '',
      laodFlag: true
    };
  },
  beforeCreate() {
    this.hashRef = getHashCodeByTime();
  },
  mounted() {
    import(/* webpackChunkName: 'echarts.min'*/ 'echarts').then(Module => {
      this.initEchartsPie(Module.default);
    });
  },
  methods: {
    initEchartsPie(echarts) {
      let that = this;
      let myChart = this.$refs[this.hashRef];
      let textStyle = {
        //文字颜色
        color: '#666',
        //字体风格,'normal','italic','oblique'
        fontStyle: 'normal',
        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        fontWeight: 'normal',
        //字体系列
        fontFamily: 'sans-serif',
        //字体大小
        fontSize: 14
      };
      // 在图形内部显示百分比
      let itemStyle = {
        normal: {
          label: {
            show: that.showItemLabel,
            position: 'inner',
            formatter: function(params) {
              return (params.percent - 0).toFixed(0) + '%';
            }
          },
          labelLine: {
            show: false
          }
        },
        emphasis: {
          label: {
            show: false,
            formatter: function(params) {
              return (params.percent - 0).toFixed(0) + '%';
            }
          }
        }
      };

      // 设置 series
      let series = [
        {
          name: that.title,
          type: 'pie',
          startAngle: that.startAngle,
          clockWise: that.clockWise,
          center: ['50%', '57%'],
          radius: that.radius,
          avoidLabelOverlap: false,
          // 去掉label防止出现labe文字大于超出圈圈范围的情况
          // label: {
          //   normal: {
          //     show: false,
          //     position: 'center'
          //   }
          //   emphasis: {
          //     show: true,
          //     textStyle: {
          //       fontSize: '30',
          //       fontWeight: 'bold'
          //     }
          //   }
          // },
          itemStyle: itemStyle,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: that.data
        }
      ];
      // 如果是南丁格尔玫瑰图
      if (that.roseType !== '') {
        series[0].roseType = that.roseType;
      }
      // 默认参数
      const options = {
        title: {
          text: that.title,
          x: 'left',
          textStyle: textStyle
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {d}%'
        },
        legend: {
          icon: 'circle',
          orient: 'horizontal',
          y: '30',
          right: '3%',
          textStyle: {
            color: '#666',
            fontSize: 12
          },
          itemWidth: 10,
          data: that.values
        },
        series
      };
      // 如果设置了颜色值
      if (that.colors.length > 0) {
        options.color = that.colors;
      }
      merge(options, that.options);
      echarts.init(myChart).setOption(options);
      this.laodFlag = false;
    }
  },
  computed: {
    flag() {
      return this.loading && this.laodFlag;
    }
  }
};
</script>
