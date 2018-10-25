/*
 * @Author: sj
 * @Date: 2018-08-09 08:47:35
 * @LastEditors: sj
 * @LastEditTime: 2018-08-13 15:18:54
 * @Description: 进度条参数说明
 */
<template>
  <div>
    <rdm-title title="进度条"
               content="针对el-progress进行改造，仅作用于显示" />
    <rdm-content title="基础用法"
                 explain="进度条显示"
                 :code="code">
      <hd-progress :data="data"></hd-progress>
    </rdm-content>
    <rdm-param title="Attributes"
               explain="可添加解释"
               type="attr"
               :list="paramsList"></rdm-param>
  </div>
</template>

<script>
import HdProgress from '@/components/progress';
import { codeLine } from './code.js';
export default {
  components: {
    HdProgress
  },
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
      paramsList: [
        {
          param: 'data',
          explain: '表格数据',
          type: 'Array',
          values: '--',
          default: '--'
        }
      ],
      code: codeLine
    };
  }
};
</script>
