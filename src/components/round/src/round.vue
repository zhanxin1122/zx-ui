/*
 * @Author: fengjialing
 * @Date: 2018-07-31 14:45:38
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-07-31 17:33:19
 * @Description:
 */
<template>
  <div :style="{'width': `${width}px`,'height': `${height}px`}">
    <div class="title">{{title}}</div>
    <ul class="legend clearfix">
      <li class="legend-title"
          v-for="(item,index) in values"
          :key="index">
        <span :style="{background:discColor(index)}"
              class="legend-disc"></span>
        <span class="legend-title-text"
              v-show="showVal"> {{datas[index].value}}</span>
        <span class=" legend-title-subtext ">{{item}}</span>
      </li>
    </ul>
    <canvas class="hd-pie-wrapper clearfix "
            :ref="hashRef "
            :style="{'width':`${width}px`,'height':`${height-40}px`}"
            :width="width"
            :height="canvasHeight">
      浏览器不支持Canvas,请升级或改用其它浏览器！
    </canvas>
  </div>
</template>
 <script>
import { getHashCodeByTime } from '@/utils/hash-code.js';
import { toPoint } from '../../../utils';
import constant from './constant';
export default {
  name: 'HdRound',
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '300'
    },
    height: {
      type: String,
      default: '300'
    },
    // 饼状图每类的含义
    values: {
      type: Array,
      default: () => []
    },
    // 饼状图数据
    datas: {
      type: Array,
      default: () => []
    },

    // 颜色
    color: {
      type: Array,
      default: () => []
    },
    // 饼图方向
    clockWise: {
      type: Boolean,
      default: () => false
    },
    // 开始角度
    startAngle: {
      type: Number,
      default: () => -90
    },
    // 结束角度
    endAngle: {
      type: Number,
      default: () => -90
    },
    showVal: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      hashRef: '',
      canvasHeight: this.height - 40,
      option: {}
    };
  },
  beforeCreate() {
    this.hashRef = getHashCodeByTime();
  },
  mounted() {
    this.initEchartsPie();
  },
  computed: {},
  methods: {
    initEchartsPie() {
      let el = this.$refs[this.hashRef];
      if (el.getContext) {
        let context = el.getContext('2d');
        var ratio = 2;
        el.width = el.width * ratio;
        el.height = el.height * ratio;
        context.scale(ratio, ratio);
        context.translate(0.5, 0.5);

        // 确定圆心所在位置
        let pointX = this.width / 2;
        let pointY = this.height / 2;
        context.lineWidth = constant.defaultLineWidth;

        // 确定半径
        let d = this.width < this.canvasHeight ? this.width : this.canvasHeight;
        let r = d / 4;
        let lineWidth = constant.defaultLineWidth;
        // 如果线条的宽度已经间隔和大于半径
        let len = this.datas.length;
        let minR = len * constant.defaultLineWidth + len * constant.defaultLineWidth;
        if (minR > len) {
          lineWidth = Math.floor(r / (len * 2));
        }
        // 总角度
        let wholeAngle = 2 * Math.PI;
        let startRad = (this.startAngle / 180) * Math.PI;
        let endRad = (this.endAngle / 180) * Math.PI;
        wholeAngle = endRad - startRad;
        wholeAngle = wholeAngle > 0 ? wholeAngle : wholeAngle + 2 * Math.PI;
        if (this.clockWise) {
          wholeAngle = 2 * Math.PI - wholeAngle;
        }
        for (let i = 0, len = this.datas.length; i < len; i++) {
          // 确定画的弧长
          let nextRad = startRad + (this.clockWise ? -1 : 1) * toPoint(this.datas[i].value) * wholeAngle;
          // 获得圆圈颜色
          context.strokeStyle = this.discColor(i);
          context.beginPath();
          console.log(startRad, nextRad, wholeAngle);
          context.arc(pointX, pointY, r, startRad, nextRad, this.clockWise);
          context.stroke();
          context.beginPath();
          context.strokeStyle = constant.unactiveColor;
          context.arc(pointX, pointY, r, nextRad, endRad, this.clockWise);
          context.stroke();
          r = r - lineWidth * 2;
        }
      }
    },
    discColor(index) {
      let bgColor = this.color.length > 0 ? this.color[index] : constant.defaultLegendColor[index];
      return bgColor;
    }
  }
};
</script>
<style lang="less">
.title {
  color: #485465;
}
.clearfix {
  clear: both;
}
.legend {
  float: right;
  margin-top: 5px;
  margin-right: 10px;
  .legend-title {
    position: relative;
    float: left;
    margin-left: 5px;
  }
  .legend-disc {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: red;
    position: absolute;
    left: 0px;
    top: 5px;
  }
  .legend-title-text {
    margin-left: 15px;
    color: #485465;
    display: block;
  }
  .legend-title-subtext {
    padding-left: 15px;
    margin-top: 22px;
    color: #485465;
  }
}
</style>
