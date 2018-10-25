/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-17 15:57:06
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-17 17:54:48
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="demo-select-wrapper">
    <rdm-title title="Select 选择器"
               content="针对 el-select 进行改造，增加多选的样式">
    </rdm-title>
    <rdm-content title="基础用法"
                 :code="code1">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </hd-select>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="多选"
                 :code="code2">
      <el-row class="demo-item"
              type="flex"
              align="middle"
              :gutter="20">
        <el-col :span="2">
          默认样式 :
        </el-col>
        <el-col :span="5">
          <hd-select v-model="value4"
                     multiple
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </hd-select>
        </el-col>
        <el-col :span="2.5">
          恒大样式一:
        </el-col>
        <el-col :span="5">
          <hd-select v-model="value5"
                     multiple
                     select-style="circle"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </hd-select>
        </el-col>
        <el-col :span="2.5">
          恒大样式二:
        </el-col>
        <el-col :span="5"
                type="flex"
                align="middle">
          <hd-select v-model="value6"
                     multiple
                     select-style="checkbox"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </hd-select>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-param title="Select Attributes"
               type="attr"
               :list="paramsList">
    </rdm-param>
    <rdm-param title="Select Events"
               type="method"
               :list="selectEvents">
    </rdm-param>
    <rdm-param title="Select Slots"
               type="attr"
               :list="selectSlots">
    </rdm-param>
    <rdm-param title="Option Group Attributes"
               type="attr"
               :list="optionsGroupAttributes">
    </rdm-param>
    <rdm-param title="Option Attributes"
               type="attr"
               :list="optionsAttr">
    </rdm-param>
    <rdm-param title="Methods"
               type="method"
               :list="sMethods">
    </rdm-param>
  </div>
</template>
<script>
import HdSelect from '@/components/select';
import Code from './code-area.js';
export default {
  components: {
    HdSelect
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      value4: [],
      value5: [],
      value6: [],
      paramsList: [
        {
          param: 'multiple',
          explain: '是否多选',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'select-style',
          explain: '多选样式',
          type: 'String',
          values: 'normal / circle / checkbox',
          default: 'normal'
        },
        {
          param: 'disabled',
          explain: '是否禁用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'value-key',
          explain: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
          type: 'String',
          values: '--',
          default: 'value'
        },
        {
          param: 'size',
          explain: '输入框尺寸',
          type: 'String',
          values: 'medium / small / mini',
          default: '--'
        },
        {
          param: 'clearable',
          explain: '单选时是否可以清空选项',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'collapse-tags',
          explain: '多选时是否将选中值按文字的形式展示',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'multiple-limit',
          explain: '多选时用户最多可以选择的项目数，为 0 则不限制',
          type: 'Number',
          values: '--',
          default: '0'
        },
        {
          param: 'name',
          explain: 'select input 的 name 属性',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'auto-complete',
          explain: 'select input 的 autocomplete 属性',
          type: 'String',
          values: '--',
          default: 'off'
        },
        {
          param: 'placeholder',
          explain: '占位符',
          type: 'String',
          values: '--',
          default: '请选择'
        },
        {
          param: 'filterable',
          explain: '是否可搜索',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'allow-create',
          explain: '是否允许用户创建新条目，需配合 filterable 使用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'filter-method',
          explain: '自定义搜索方法',
          type: 'Function',
          values: '--',
          default: '--'
        },
        {
          param: 'remote',
          explain: '是否为远程搜索',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'remote-method',
          explain: '远程搜索方法',
          type: 'Function',
          values: '--',
          default: '--'
        },
        {
          param: 'loading',
          explain: '是否正在从远程获取数据',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'loading-text',
          explain: '远程加载时显示的文字',
          type: 'String',
          values: '--',
          default: '加载中'
        },
        {
          param: 'no-match-text',
          explain: '搜索条件无匹配时显示的文字',
          type: 'String',
          values: '--',
          default: '无匹配数据'
        },
        {
          param: 'no-data-text',
          explain: '选项为空时显示的文字',
          type: 'String',
          values: '--',
          default: '无匹配'
        },
        {
          param: 'popper-class',
          explain: 'Select 下拉框的类名',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'reserve-keyword',
          explain: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'default-first-option',
          explain: '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'popper-append-to-body',
          explain: '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
          type: 'Boolean',
          values: '--',
          default: 'true'
        },
        {
          param: 'automatic-dropdown',
          explain: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'select-style',
          explain: '多选样式',
          type: 'String',
          values: 'normal / circle / checkbox',
          default: 'normal'
        }
      ],
      selectEvents: [
        {
          eventName: 'change',
          explain: '选中值发生变化时触发',
          params: '目前的选中值'
        },
        {
          eventName: 'visible-change',
          explain: '下拉框出现/隐藏时触发',
          params: '出现则为 true，隐藏则为 false'
        },
        {
          eventName: 'remove-tag',
          explain: '多选模式下移除tag时触发',
          params: '移除的tag值'
        },
        {
          eventName: 'clear',
          explain: '可清空的单选模式下用户点击清空按钮时触发',
          params: '--'
        },
        {
          eventName: 'blur',
          explain: '当 input 失去焦点时触发',
          params: '(event: Event)'
        },
        {
          eventName: 'focus',
          explain: '当 input 获得焦点时触发',
          params: '(event: Event)'
        }
      ],
      selectSlots: [
        {
          param: '—',
          explain: 'Option 组件列表'
        },
        {
          param: 'prefix',
          explain: 'Select 组件头部内容'
        }
      ],
      optionsGroupAttributes: [
        {
          param: 'label',
          explain: '分组的组名',
          type: 'String',
          values: '',
          default: '--'
        },
        {
          param: 'disabled',
          explain: '是否将该分组下所有选项置为禁用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        }
      ],
      optionsAttr: [
        {
          param: 'value',
          explain: '选项的值',
          type: 'String/Number/object',
          values: '--',
          default: '--'
        },
        {
          param: 'label',
          explain: '选项的标签，若不设置则默认与 value 相同',
          type: 'String/Number',
          values: '--',
          default: '--'
        },
        {
          param: 'disabled',
          explain: '是否禁用该选项',
          type: 'Boolean',
          values: '--',
          default: 'false'
        }
      ],
      sMethods: [
        {
          eventName: 'focus',
          explain: '使 input 获取焦点',
          params: '-'
        },
        {
          eventName: 'blur',
          explain: '使 input 失去焦点，并隐藏下拉框',
          params: '-'
        }
      ]
    };
  },
  computed: {
    code1() {
      return Code.normalStr;
    },
    code2() {
      return Code.multipleStr;
    }
  }
};
</script>
