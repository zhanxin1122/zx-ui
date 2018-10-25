/*
 * @Author: ChenMi
 * @Date: 2018-08-13 10:45:19
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-08-14 10:34:14
 * @Description: 
 */

<template>
  <div class="demo">
    <rdm-title title="Pagination/分页"
               content="针对el-pagination进行改造，其他参数与el-pagination一样" />
    <rdm-content title="Simple/简单样式"
                 :code="code1">
      <section>
        <hd-pagination class="hd-pagination section__component"
                       layout="prev, pager, next"
                       :total="50">
        </hd-pagination>
      </section>
    </rdm-content>
    <rdm-content title="Basic/基础样式"
                 :code="code2">
      <section>
        <hd-pagination class="hd-pagination section__component"
                       layout="prev, pager, next"
                       :total="230">
        </hd-pagination>
      </section>
    </rdm-content>
    <rdm-content title="Square Background/方底背景样式"
                 :code="code3">
      <section>
        <hd-pagination class="hd-pagination section__component"
                       layout="prev, pager, next"
                       background
                       :total="230">
        </hd-pagination>
      </section>
    </rdm-content>
    <rdm-content title="Round Background/圆底背景样式"
                 :code="code4">
      <section>
        <hd-pagination class="hd-pagination section__component"
                       layout="prev, pager, next"
                       background1
                       :total="230"
                       round>
        </hd-pagination>
      </section>
    </rdm-content>
    <rdm-content title="Combination/组合式样式"
                 :code="code5">
      <section>
        <hd-pagination class="hd-pagination section__component"
                       layout="total, sizes, prev, pager, next, jumper"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       :total="1000"
                       background
                       round>
        </hd-pagination>
      </section>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="attrList"></rdm-param>
    <rdm-param title="Table Events"
               type="method"
               :list="eventList"></rdm-param>
    <rdm-param title="Slot"
               type="attr"
               :list="pSlot"></rdm-param>
  </div>
</template>

<script>
import HdPagination from '@/components/pagination/src/pagination.vue';
export default {
  components: {
    HdPagination
  },
  data() {
    return {
      code1: `<hd-pagination class="hd-pagination section__component"
                       layout="prev, pager, next"
                       :total="50">
</hd-pagination>`,
      code2: `<hd-pagination class="hd-pagination section__component"
                       layout="prev, pager, next"
                       :total="230">
</hd-pagination>`,
      code3: `<hd-pagination class="hd-pagination section__component"
                       layout="prev, pager, next"
                       background
                       :total="230">
</hd-pagination>`,
      code4: `<hd-pagination class="hd-pagination section__component"
                       layout="prev, pager, next"
                       background1
                       :total="230"
                       round>
</hd-pagination>`,
      code5: `<hd-pagination class="hd-pagination section__component"
                       layout="total, sizes, prev, pager, next, jumper"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       :total="1000"
                       background
                       round>
</hd-pagination>`,
      attrList: [
        {
          param: 'small',
          explain: '是否使用小型分页样式',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'background',
          explain: '是否为分页按钮添加背景色',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'page-size',
          explain: '每页显示条目个数，支持 .sync 修饰符',
          type: 'Number',
          values: '--',
          default: '10'
        },
        {
          param: 'total',
          explain: '总条目数',
          type: 'Number',
          values: '--',
          default: '--'
        },
        {
          param: 'page-count',
          explain:
            '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
          type: 'Number',
          values: '--',
          default: '--'
        },
        {
          param: 'pager-count',
          explain: '页码按钮的数量，当总页数超过该值时会折叠',
          type: 'Number',
          values: '大于等于 5 且小于等于 21 的奇数',
          default: '7'
        },
        {
          param: 'current-page',
          explain: '当前页数，支持 .sync 修饰符',
          type: 'Number',
          values: '--',
          default: '1'
        },
        {
          param: 'layout',
          explain: '组件布局，子组件名用逗号分隔',
          type: 'String',
          values: 'sizes, prev, pager, next, jumper, ->, total, slot',
          default: "'prev, pager, next, jumper, ->, total'"
        },
        {
          param: 'page-sizes',
          explain: '每页显示个数选择器的选项设置',
          type: 'Number[]',
          values: '--',
          default: '[10, 20, 30, 40, 50, 100]'
        },
        {
          param: 'popper-class',
          explain: '每页显示个数选择器的下拉框类名',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'prev-text',
          explain: '替代图标显示的上一页文字',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'next-text',
          explain: '替代图标显示的下一页文字',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'disabled',
          explain: '是否禁用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'round',
          explain: '圆形背景',
          type: 'Boolean',
          values: '--',
          default: 'false'
        }
      ],
      eventList: [
        {
          eventName: 'size-change',
          explain: 'pageSize 改变时会触发',
          params: '每页的条数'
        },
        {
          eventName: 'current-change',
          explain: 'currentPage 改变时会触发',
          params: '当前页'
        },
        {
          eventName: 'prev-click',
          explain: '用户点击上一页按钮改变当前页后触发',
          params: '当前页'
        },
        {
          eventName: 'next-click',
          explain: '用户点击下一页按钮改变当前页后触发',
          params: '当前页'
        }
      ],
      pSlot: [
        {
          param: '--',
          explain: '自定义内容，需要在 layout 中列出 slot'
        }
      ]
    };
  }
};
</script>
