/*
 * @Author: zhanxin
 * @Date: 2018-08-09 11:27:20
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-09 11:27:41
 * @Description: 
 */
<template>
  <div>
    <rdm-title title="说明"
               content="组件库是在element-ui基础上进行开发，所以组件不但包含所有element-ui的参数，也加上了一些我们自己的参数(针对ui给出的标准设计图)，所以使用组件库前，需先安装element-ui。" />
    <h1>安装</h1>
    <p class="mlh mgb">
      npm i --save hd-ui --registry http://10.100.173.32:4873
    </p>
    <h1>注意事项</h1>
    <p class="mlh"
       :key="i"
       v-for="(item, i) in attens">
      {{`${i + 1}.${item}`}}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      attens: [
        '本组件库依赖第三方库(echarts, sortablejs)，不用某些特定组件时，无需安装此依赖',
        '使用draggable,需要 import { draggable } from "hd-ui/lib/draggable.common"，同时需安装依赖sortablejs',
        '使用bar,line,pie,radar,需要 import { Bar, Line, Pie, Radar } from "hd-ui/lib/charts.common",同时需安装依赖echarts',
        '其他组件均import { ... } from "hd-ui"',
        '需引入样式文件：import "hd-ui/lib/style/base/index.css";'
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.mlh {
  padding: 10px 0;
  font-size: 14px;
  font-weight: normal;
  color: #666;
}
.mgb {
  margin-bottom: 20px;
}
</style>
