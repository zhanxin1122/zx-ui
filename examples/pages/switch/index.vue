/*
 * @Author: zhanxin
 * @Date: 2018-08-10 15:14:12
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-22 10:39:24
 * @Description: 开关组件说明
 */
<template>
  <div>
    <rdm-title title="Switch 开关"
               content="在el-switch添加一些参数, 其他参数与el-switch一样" />
    <rdm-content title="基础用法"
                 explain="通过type改变switch类型"
                 :code="code">
      <div class="switch-warpper">
        <hd-switch v-model="s1" />
        <hd-switch v-model="s1"
                   type="text" />
        <hd-switch v-model="s1"
                   type="icon" />
        <hd-switch v-model="s1"
                   type="empty" />
        <hd-switch v-model="s1"
                   type="scale" />
        <hd-switch v-model="s1"
                   type="rect"
                   :labels="['启动', '冻结']" />
        <hd-switch v-model="s1"
                   type="extarnal"
                   :activeTexts="['已开启', '已关闭']" />
      </div>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
    <rdm-param title="Events"
               type="method"
               :list="sEvents"></rdm-param>
    <rdm-param title="Methods"
               type="method"
               :list="sMethods"></rdm-param>
  </div>
</template>
<script>
import HdSwitch from '@/components/switch';
export default {
  components: {
    [HdSwitch.name]: HdSwitch
  },
  data() {
    return {
      s1: false,
      paramsList: [
        {
          param: 'type',
          explain: 'switch类型',
          type: 'String',
          values: 'text,icon,empty,scale,rect,external',
          default: '‘’'
        },
        {
          param: 'labels',
          explain: '当type为rect时才起作用，开关的状态文字',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'activeTexts',
          explain: '当type为external时才起作用，开关的状态文字',
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
          param: 'width',
          explain: 'switch 的宽度（像素）',
          type: 'Number',
          values: '--',
          default: '40'
        },
        {
          param: 'active-icon-class',
          explain: 'switch 打开时所显示图标的类名，设置此项会忽略 active-text',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'inactive-icon-class',
          explain: 'switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'active-text',
          explain: 'switch 打开时的文字描述',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'inactive-text',
          explain: 'switch 关闭时的文字描述',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'active-value',
          explain: 'switch 打开时的值',
          type: 'Boolean / string / number',
          values: '--',
          default: 'true'
        },
        {
          param: 'inactive-value',
          explain: 'switch 关闭时的值',
          type: 'Boolean / string / number',
          values: '--',
          default: 'false'
        },
        {
          param: 'active-color',
          explain: 'switch 打开时的背景色',
          type: 'String',
          values: '--',
          default: '#D7000F'
        },
        {
          param: 'inactive-color',
          explain: 'switch 关闭时的背景色',
          type: 'String',
          values: '--',
          default: '#dcdfe6'
        },
        {
          param: 'name',
          explain: 'switch 对应的 name 属性',
          type: 'String',
          values: '--',
          default: '--'
        }
      ],
      sEvents: [
        {
          eventName: 'change',
          explain: 'switch 状态发生变化时的回调函数',
          params: '新状态的值'
        }
      ],
      sMethods: [
        {
          eventName: 'focus',
          explain: '使 Switch 获取焦点',
          params: '-'
        }
      ],
      code: `<hd-switch v-model="s1" />
<hd-switch v-model="s1"
            type="text" />
<hd-switch v-model="s1"
            type="icon" />
<hd-switch v-model="s1"
            type="empty" />
<hd-switch v-model="s1"
            type="scale" />
<hd-switch v-model="s1"
            type="rect"
            :labels="['启动', '冻结']" />
<hd-switch v-model="s1"
            type="extarnal"
            :activeTexts="['已开启', '已关闭']" />
<script>
export default{
  data() {
    return {
      s1: false
    }
  }
}
<\/script>`
    };
  }
};
</script>
<style lang="less" scoped>
.switch-warpper {
  padding-bottom: 15px;
  .hd-switch-warpper {
    margin-top: 20px;
    margin-right: 40px;
  }
}
</style>
