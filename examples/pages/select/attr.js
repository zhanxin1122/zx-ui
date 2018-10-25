export const paramsList = [
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
    type: 'boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'multiple-limit',
    explain: '多选时用户最多可以选择的项目数，为 0 则不限制',
    type: 'number',
    values: '--',
    default: '0'
  },
  {
    param: 'name',
    explain: 'select input 的 name 属性',
    type: 'string',
    values: '--',
    default: '--'
  },
  {
    param: 'auto-complete',
    explain: 'select input 的 autocomplete 属性',
    type: 'string',
    values: '--',
    default: 'off'
  },
  {
    param: 'placeholder',
    explain: '占位符',
    type: 'string',
    values: '--',
    default: '请选择'
  },
  {
    param: 'filterable',
    explain: '是否可搜索',
    type: 'boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'allow-create',
    explain: '是否允许用户创建新条目，需配合 filterable 使用',
    type: 'boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'filter-method',
    explain: '自定义搜索方法',
    type: 'function',
    values: '--',
    default: '--'
  },
  {
    param: 'remote',
    explain: '是否为远程搜索',
    type: 'boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'remote-method',
    explain: '远程搜索方法',
    type: 'function',
    values: '--',
    default: '--'
  },
  {
    param: 'loading',
    explain: '是否正在从远程获取数据',
    type: 'boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'loading-text',
    explain: '远程加载时显示的文字',
    type: 'string',
    values: '--',
    default: '加载中'
  },
  {
    param: 'no-match-text',
    explain: '搜索条件无匹配时显示的文字',
    type: 'string',
    values: '--',
    default: '无匹配数据'
  },
  {
    param: 'no-data-text',
    explain: '选项为空时显示的文字',
    type: 'string',
    values: '--',
    default: '无匹配'
  },
  {
    param: 'popper-class',
    explain: 'Select 下拉框的类名',
    type: 'string',
    values: '--',
    default: '--'
  },
  {
    param: 'reserve-keyword',
    explain: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
    type: 'boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'default-first-option',
    explain: '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用',
    type: 'boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'popper-append-to-body',
    explain: '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
    type: 'boolean',
    values: '--',
    default: 'true'
  },
  {
    param: 'automatic-dropdown',
    explain: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
    type: 'boolean',
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
];
export const selectEvents = [
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
];
export const selectSlots = [
  {
    param: '—',
    explain: 'Option 组件列表'
  },
  {
    param: 'prefix',
    explain: 'Select 组件头部内容'
  }
];
export const optionsGroupAttributes = [
  {
    params: 'label',
    explain: '分组的组名',
    type: 'string',
    values: '',
    default: '--'
  },
  {
    params: 'disabled',
    explain: '是否将该分组下所有选项置为禁用',
    type: 'boolean',
    values: '--',
    default: 'false'
  }
];
export const optionsAttr = [
  {
    params: 'value',
    explain: '选项的值',
    type: 'string/number/object',
    values: '--',
    default: '--'
  },
  {
    params: 'label',
    explain: '选项的标签，若不设置则默认与 value 相同',
    type: 'string/number',
    values: '--',
    default: '--'
  },
  {
    params: 'disabled',
    explain: '是否禁用该选项',
    type: 'boolean',
    values: '--',
    default: 'false'
  }
];
export const sMethods = [
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
];
