export const codeNormal = `<template>
  <div>
    <hd-round class="round-style" :width="'300'" :height="'300'" title="环形图一" :values="values2" :showVal="showVal2" :color="color2" :datas="datas2" :startAngle="startAngle" :endAngle="endAngle"></hd-charts-round>
    <hd-round class="round-style" :width="'300'" :height="'300'" title="环形图二" :values="values1" :showVal="showVal1" :color="color1" :datas="datas1" :startAngle="startAngle1" :endAngle="endAngle1"></hd-charts-round>
  </div>
</template>
<script>
export default{
  data() {
    return {
      // 图一
      values1: ['状态一', '状态二', '状态三'],
      datas1: [{ value: '60%', name: '状态一' }, { value: '78%', name: '状态二' }, { value: '76%', name: '状态三' }],
      color1: ['#09BB07', '#0076FF', '#F43530'],
      startAngle1: 150,
      endAngle1: 30,
      showVal1: true,
      // 图二
      values2: ['状态一', '状态二', '状态三'],
      datas2: [{ value: '60%', name: '状态一' }, { value: '78%', name: '状态二' }, { value: '76%', name: '状态三' }],
      color2: ['#09BB07', '#0076FF', '#F43530'],
      startAngle2: 270,
      endAngle2: 270,
      showVal2: true
    };
  }
}
</script>
<style>
.round-style {
  display: inline-block;
  margin-left: 20px;
}
</style>`;
