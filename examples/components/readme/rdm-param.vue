/*
 * @Author: zhanxin
 * @Date: 2018-08-09 11:15:21
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-28 15:44:18
 * @Description: 参数，方法说明组件
 */
<template>
  <div class="param-warpper">
    <p class="content-wrapper-title">{{title}}</p>
    <p v-if="explain"
       class="content-wrapper-explain">{{explain}}</p>
    <div class="param-content">
      <el-table :data="list">
        <el-table-column :key="i"
                         v-for="(column, i) in (type === 'attr' ? columnsAttr : columnsMethod)"
                         :prop="column.prop"
                         :width="column.width"
                         :label="column.label">
          <template slot-scope="scope">
            <span class="param-content-href"
                  v-html="scope.row[column.prop] || '--'"></span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RdmParam',
  data() {
    return {
      columnsAttr: [
        {
          label: '参数',
          prop: 'param',
          width: 150
        },
        {
          label: '说明',
          prop: 'explain'
        },
        {
          label: '类型',
          prop: 'type',
          width: 150
        },
        {
          label: '可选值',
          prop: 'values'
        },
        {
          label: '默认值',
          prop: 'default',
          width: 250
        }
      ],
      columnsMethod: [
        {
          label: '事件名',
          prop: 'eventName',
          width: 150
        },
        {
          label: '说明',
          prop: 'explain'
        },
        {
          label: '回调参数',
          prop: 'params'
        }
      ]
    };
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    explain: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'attr'
    },
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="less">
.param-warpper {
  margin-top: 30px;
}
.param-content-href {
  a {
    color: #0076ff !important;
  }
}
</style>
