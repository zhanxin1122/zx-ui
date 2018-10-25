export const codeLine = `<template>
<hd-progress :data="data"></hd-progress>      
</template>
<script>
export default {
data() {
return {
data: [
  {
    description: '进行中',
    percentage: 0,
    color: '#1A74FA'
  },
  {
    description: '进行中',
    percentage: 1,
    color: '#1A74FA'
  },
  {
    description: '中断',
    percentage: 20,
    color: '#F8C031'
  },
  {
    description: '停止',
    percentage: 60,
    color: '#E44635'
  },
  {
    description: '完成',
    percentage: 100,
    color: '#52B92C'
  }
],
}
}
}
<script>`;
