<template>
  <div>
    <hd-echarts-pie title="饼图分析1" :values="value1" :datas="datas1" :color="color1"  :width="'300'" :height="'300'" class="hd-echarts-pie" :radius="['20%', '40%']">
    </hd-echarts-pie>
    <hd-echarts-pie title="饼图分析2" :values="value2" :datas="datas2" :color="color2"  :showItemLabel="true" :width="'300'" :height="'300'" class="hd-echarts-pie" :radius="['20%', '40%']">
    </hd-echarts-pie>
    <hd-echarts-pie title="饼图分析3" :values="value3" :datas="datas3" :color="color3"  :showItemLabel="true" :width="'300'" :height="'300'" class="hd-echarts-pie" :radius="['0%','40%']">
    </hd-echarts-pie>
    <hd-echarts-pie title="南丁格尔玫瑰图" :values="value4" :datas="datas4" :color="color4" :roseType="'radius'" :width="'300'" :height="'300'" class="hd-echarts-pie" :radius="['0%','40%']">
    </hd-echarts-pie>
  </div>
</template>
<script>
import HdEchartsPie from '@/components/echarts-pie';
export default {
  components: {
    [HdEchartsPie.name]: HdEchartsPie
  },
  data() {
    return {
      // 图一
      value1: ['状态一', '状态二', '状态三'],
      datas1: [{ value: 15, name: '状态一' }, { value: 70, name: '状态二' }, { value: 15, name: '状态三' }],
      color1: ['#F43530', '#0076FF', '#09BB07'],
      // 图二
      value2: ['状态一', '状态二', '状态三', '状态四'],
      datas2: [
        { value: 20, name: '状态一' },
        { value: 60, name: '状态二' },
        { value: 4, name: '状态三' },
        { value: 16, name: '状态四' }
      ],
      color2: ['#FFBE00', '#F43530', '#0076FF', '#09BB07'],
      // 图三
      value3: ['状态一', '状态二'],
      datas3: [{ value: 84, name: '状态一' }, { value: 16, name: '状态二' }],
      color3: ['#0076FF', '#EBEEF5'],
      // 图四
      value4: ['状态一', '状态二', '状态三', '状态四', '状态五', '状态六'],
      datas4: [
        { value: 100, name: '状态一' },
        { value: 50, name: '状态二' },
        { value: 25, name: '状态三' },
        { value: 20, name: '状态四' },
        { value: 15, name: '状态五' },
        { value: 10, name: '状态六' }
      ],
      color4: ['#0076FF', '#F43530', '#FFBE00', '#F030E0', '#09BB07', '#9D4FF1']
    };
  }
};
</script>
<style>
.hd-echarts-pie {
  display: inline-block;
}
</style>
