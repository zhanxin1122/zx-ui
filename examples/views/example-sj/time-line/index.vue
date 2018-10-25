<template>
  <div class="demo-time-line">
    <div class="demo_header">
      TimeLine/时间轴纵向排列
    </div>
    <hd-time-line :data="data" :direction="direction"></hd-time-line>
  </div>
</template>
<script>
import HdTimeLine from '@/components/time-line';

export default {
  components: { HdTimeLine },
  data() {
    return {
      data: [
        {
          title: '2017/02/09',
          description: '项目上报'
        },
        {
          title: '2017/02/09',
          description: '最终批示同意'
        },
        {
          title: '2017/02/09',
          description: '签约'
        },
        {
          title: '2017/02/09',
          description: '取得'
        },
        {
          title: '2017/02/09',
          description: '履约完毕'
        }
      ],
      direction: 'vertical'
    };
  }
};
</script>
