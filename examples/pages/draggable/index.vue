/*
 * @Author: zhanxin
 * @Date: 2018-08-09 08:47:35
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 15:39:47
 * @Description: 拖拽表格参数说明
 */
<template>
  <div>
    <rdm-title title="表格拖拽"
               content="针对el-table进行改造，其他参数与el-table一样" />
    <rdm-content title="基础用法"
                 explain="拖拽行"
                 :code="code">
      <hd-draggable @end='endDrag'
                    :data="tableData"
                    border>
        <el-table-column prop="name"
                         label="名字" />
        <el-table-column prop="country"
                         label="国家" />
        <el-table-column prop="position"
                         label="职位" />
        <el-table-column prop="birth"
                         label="生日" />
      </hd-draggable>
    </rdm-content>
    <rdm-param title="Attributes"
               explain="可添加解释"
               type="attr"
               :list="paramsList"></rdm-param>
    <rdm-param title="Table Events"
               type="method"
               :list="paramsList1"></rdm-param>
  </div>
</template>
<script>
import HdDraggable from '@/components/draggable';
// import { Draggable } from 'hd-ui/lib/draggable.common';
// const HdDraggable = Draggable;
// console.log(Draggable);
export default {
  components: {
    [HdDraggable.name]: HdDraggable
  },
  data() {
    return {
      tableData: [
        {
          name: '张三',
          country: '中国',
          position: '医生',
          birth: '2018-08-08'
        },
        {
          name: '詹姆斯',
          country: '哈萨克斯塔',
          position: '歌手',
          birth: '2017-11-11'
        }
      ],
      paramsList: [
        {
          param: 'list',
          explain: '表格数据',
          type: 'Array',
          values: '--',
          default: '--'
        }
      ],
      paramsList1: [
        {
          eventName: 'end',
          explain: '当拖拽结束后发生该事件',
          params: '--'
        }
      ],
      code: `<hd-draggable @end='endDrag'
              :data="tableData"
              border>
  <el-table-column prop="name"
                    label="名字" />
  <el-table-column prop="country"
                    label="国家" />
  <el-table-column prop="position"
                    label="职位" />
  <el-table-column prop="birth"
                    label="生日" />
</hd-draggable>
<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: '张三',
            country: '中国',
            position: '医生',
            birth: '2018-08-08'
          },
          {
            name: '詹姆斯',
            country: '哈萨克斯塔',
            position: '歌手',
            birth: '2017-11-11'
          }
        ],
      }
    },
    methods: {
      endDrag() {
        console.log(this.tableData);
      }
    }
  }
<\/script>`
    };
  },
  methods: {
    endDrag() {
      console.log(this.tableData);
    }
  }
};
</script>
