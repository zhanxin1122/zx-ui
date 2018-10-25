/*
 * @Author: sj
 * @Date: 2018-08-09 08:47:35
 * @LastEditors: sj
 * @LastEditTime: 2018-08-13 15:18:54
 * @Description: 时间轴参数说明
 */
<template>
  <div>
    <rdm-title title="时间轴"
               content="针对el-steps进行改造，仅作用于显示" />
    <rdm-content title="基础用法"
                 explain="时间轴横向显示"
                 :code="code1">
      <hd-time-line :data="data"
                    :direction="direction1"></hd-time-line>
    </rdm-content>
    <rdm-content title=""
                 explain="时间轴纵向显示"
                 :code="code2">
      <hd-time-line :data="data"
                    :direction="direction2"></hd-time-line>
    </rdm-content>
    <rdm-param title="Attributes"
               explain="可添加解释"
               type="attr"
               :list="paramsList"></rdm-param>
  </div>
</template>
<script>
import HdTimeLine from '@/components/time-line';
import { code1, code2 } from './code.js';

export default {
  components: {
    HdTimeLine
  },
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
      direction1: '',
      direction2: 'vertical',
      paramsList: [
        {
          param: 'data',
          explain: '表格数据',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'direction',
          explain: '显示方向',
          type: 'String',
          values: 'vertical/horizontal',
          default: 'horizontal'
        }
      ],
      code1: code1,
      code2: code2
    };
  }
};
</script>
