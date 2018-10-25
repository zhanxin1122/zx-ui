<template>
  <div>
    <hd-charts-round class="round-style" :width="'300'" :height="'300'" :title="title" :values="values" :showVal="showVal" :color="color" :datas="datas" :startAngle="startAngle" :endAngle="endAngle"></hd-charts-round>
    <hd-charts-round class="round-style" :width="'300'" :height="'300'" :clockWise="clockWise1" :title="title1" :values="values1" :showVal="showVal1" :color="color1" :datas="datas1" :startAngle="startAngle1" :endAngle="endAngle1"></hd-charts-round>
  </div>

</template>
<script>
import HdChartsRound from '@/components/hdcharts-round';
export default {
  name: 'DemoRound',
  components: {
    [HdChartsRound.name]: HdChartsRound
  },
  data() {
    return {
      title: '环形图二',
      values: ['状态一', '状态二', '状态三'],
      datas: [{ value: '60%', name: '状态一' }, { value: '78%', name: '状态二' }, { value: '76%', name: '状态三' }],
      color: ['#09BB07', '#0076FF', '#F43530'],
      startAngle: 270,
      endAngle: 270,
      showVal: true,
      title1: '环形图三',
      values1: ['状态一', '状态二', '状态三'],
      datas1: [{ value: '60%', name: '状态一' }, { value: '78%', name: '状态二' }, { value: '76%', name: '状态三' }],
      color1: ['#09BB07', '#0076FF', '#F43530'],
      startAngle1: 150,
      endAngle1: 30,
      showVal1: true,
      clockWise1: false
    };
  }
};
</script>
<style scoped>
.round-style {
  float: left;
}
</style>
