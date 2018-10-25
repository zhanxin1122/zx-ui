/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-26 11:30:01
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-07-26 11:56:07
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="demo-echarts-pie-wrapper">
    <h1 class="first-title">Pie／饼状图</h1>
    <div class="demo-wrapper">
      <hd-pie :title="'访问来源'"
                      :values="value1"
                      :datas="datas1"
                      :radius="['50%', '70%']">
      </hd-pie>
    </div>
  </div>
</template>
<script>
import Pie from '@/components/pie';
export default {
  name: 'DemoEchartsPie',
  components: {
    Pie
  },
  data() {
    return {
      cityList: [],
      selectCity: '',
      value1: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      datas1: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
