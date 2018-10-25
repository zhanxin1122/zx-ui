/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-28 15:22:52
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-28 15:40:18
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */
const paramsList = [
  {
    param: 'options',
    explain: '可选项数据源，键名可通过 props 属性配置',
    type: 'Array',
    values: '--',
    default: '--'
  },
  {
    param: 'props',
    explain: '配置选项，具体见下表',
    type: 'Object',
    values: '--',
    default: '--'
  },
  {
    param: 'value',
    explain: '选中项绑定值',
    type: 'Array',
    values: '--',
    default: '--'
  },
  {
    param: 'separator',
    explain: '选项分隔符',
    type: 'Atring',
    values: '--',
    default: '斜杠"/"'
  },
  {
    param: 'popper-class',
    explain: '自定义浮层类名',
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
    param: 'clearable',
    explain: '是否支持清空选项',
    type: 'Boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'expand-trigger',
    explain: '次级菜单的展开方式',
    type: 'String',
    values: 'click / hover',
    default: 'click'
  },
  {
    param: 'show-all-levels',
    explain: '输入框中是否显示选中值的完整路径',
    type: 'Boolean',
    values: '--',
    default: 'true'
  },
  {
    param: 'filterable',
    explain: '是否可搜索选项',
    type: 'Boolean',
    values: '--',
    default: '--'
  },
  {
    param: 'debounce',
    explain: '搜索关键词输入的去抖延迟，毫秒',
    type: 'Number',
    values: '--',
    default: '300'
  },
  {
    param: 'change-on-select',
    explain: '是否允许选择任意一级的选项',
    type: 'Boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'size',
    explain: '尺寸',
    type: 'String',
    values: '--',
    default: 'medium / small / mini'
  },
  {
    param: 'before-filter',
    explain: '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
    type: 'function(value)',
    values: '--',
    default: '--'
  }
];

const propsList = [
  {
    param: 'value',
    explain: '指定选项的值为选项对象的某个属性值',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'label',
    explain: '指定选项标签为选项对象的某个属性值',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'children',
    explain: '指定选项的子选项为选项对象的某个属性值',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'disabled',
    explain: '指定选项的禁用为选项对象的某个属性值',
    type: 'String',
    values: '--',
    default: '--'
  }
];
const eventsList = [
  {
    eventName: 'change',
    explain: '当绑定值变化时触发的事件',
    params: '当前值'
  },
  {
    eventName: 'active-item-change',
    explain: '当父级选项变化时触发的事件，仅在 change-on-select 为 false 时可用',
    params: '各父级选项组成的数组'
  },
  {
    eventName: 'focus',
    explain: '在 Cascader 获得焦点时触发',
    params: '(event: Event)'
  },
  {
    eventName: 'blur',
    explain: '在 Cascader 失去焦点时触发',
    params: '(event: Event)'
  }
];

const attr = {
  paramsList,
  propsList,
  eventsList
};
export default attr;
