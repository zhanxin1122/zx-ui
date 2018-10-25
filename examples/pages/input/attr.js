export const paramsList = [
  {
    param: 'type',
    explain: '类型',
    type: 'String',
    values: 'text，textarea 和其他原生 input 的 type 值',
    default: 'text'
  },
  {
    param: 'value',
    explain: '绑定值',
    type: 'String / Number',
    values: '--',
    default: '--'
  },
  {
    param: 'maxlength',
    explain: '原生属性，最大输入长度',
    type: 'Number',
    values: '--',
    default: '--'
  },
  {
    param: 'minlength',
    explain: '原生属性，最小输入长度',
    type: 'Number',
    values: '--',
    default: '--'
  },
  {
    param: 'placeholder',
    explain: '输入框占位文本',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'clearable',
    explain: '是否可清空',
    type: 'Boolean',
    values: '--',
    default: '--'
  },
  {
    param: 'disabled',
    explain: '禁用',
    type: 'Boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'size',
    explain: '恒大输入框尺寸，只在 type != "textarea" 时有效',
    type: 'String',
    values: 'large / medium / small',
    default: '--'
  },
  {
    param: 'prefix-icon',
    explain: '输入框头部图标',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'suffix-icon',
    explain: '输入框尾部图标',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'rows',
    explain: '输入框行数，只对 type="textarea" 有效',
    type: 'Number',
    values: '--',
    default: '2'
  },
  {
    param: 'autosize',
    explain: '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
    type: 'Boolean / Object',
    values: '--',
    default: 'false'
  },
  {
    param: 'auto-complete',
    explain: '原生属性，自动补全',
    type: 'String',
    values: 'on,off',
    default: 'off'
  },
  {
    param: 'name',
    explain: '原生属性',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'readonly',
    explain: '原生属性，是否只读',
    type: 'Boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'max',
    explain: '原生属性，设置最大值',
    type: '--',
    values: '--',
    default: '--'
  },
  {
    param: 'min',
    explain: '原生属性，设置最小值',
    type: '--',
    values: '--',
    default: '--'
  },
  {
    param: 'step',
    explain: '原生属性，设置输入字段的合法数字间隔',
    type: '--',
    values: '--',
    default: '--'
  },
  {
    param: 'resize',
    explain: '控制是否能被用户缩放',
    type: 'String',
    values: 'none, both, horizontal, vertical',
    default: '--'
  },
  {
    param: 'autofocus',
    explain: '原生属性，自动获取焦点',
    type: 'Boolean',
    values: 'true, false',
    default: 'false'
  },
  {
    param: 'form',
    explain: '原生属性',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'label',
    explain: '输入框关联的label文字',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'tabindex',
    explain: '输入框的tabindex',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'input-state',
    explain: '是否使用恒大验证样式',
    type: 'String',
    values: 'normal / correct / warning / error',
    default: 'normal'
  }
];

export const paramsListSlots = [
  {
    param: 'prefix',
    explain: '输入框头部内容，只对 type="text" 有效'
  },
  {
    param: 'suffix',
    explain: '输入框尾部内容，只对 type="text" 有效'
  },
  {
    param: 'prepend',
    explain: '输入框前置内容，只对 type="text" 有效'
  },
  {
    param: 'append',
    explain: '输入框后置内容，只对 type="text" 有效'
  }
];

export const inputEvents = [
  {
    eventName: 'blur',
    explain: '在 Input 失去焦点时触发',
    params: '(event: Event)'
  },
  {
    eventName: 'focus',
    explain: '在 Input 获得焦点时触发',
    params: '(event: Event)'
  },
  {
    eventName: 'change',
    explain: '在 Input 值改变时触发',
    params: '(value: String | Number)'
  },
  {
    eventName: 'clear',
    explain: '在点击由 clearable 属性生成的清空按钮时触发',
    params: '--'
  }
];

export const inputMethods = [
  {
    eventName: 'focus',
    explain: '使 input 获取焦点',
    params: '--'
  },
  {
    eventName: 'blur',
    explain: '使 input 失去焦点',
    params: '--'
  },
  {
    eventName: 'select',
    explain: '选中 input 中的文字',
    params: '--'
  }
];

export const autoCompleteAttr = [
  {
    param: 'placeholder',
    explain: '输入框占位文本',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'disabled',
    explain: '禁用',
    type: 'Boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'value-key',
    explain: '输入建议对象中用于显示的键名',
    type: 'String',
    values: '--',
    default: 'value'
  },
  {
    param: 'value',
    explain: '必填值，输入绑定值',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'debounce',
    explain: '获取输入建议的去抖延时',
    type: 'Number',
    values: '--',
    default: '300'
  },
  {
    param: 'placement',
    explain: '菜单弹出位置',
    type: 'String',
    values: 'top / top-start / top-end / bottom / bottom-start / bottom-end',
    default: 'bottom-start'
  },
  {
    param: 'fetch-suggestions',
    explain: '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
    type: 'Function(queryString, callback)',
    values: '--',
    default: '--'
  },
  {
    param: 'popper-class',
    explain: 'Autocomplete 下拉列表的类名',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'trigger-on-focus',
    explain: '是否在输入框 focus 时显示建议列表',
    type: 'Boolean',
    values: '--',
    default: 'true'
  },
  {
    param: 'name',
    explain: '原生属性',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'select-when-unmatched',
    explain: '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
    type: 'Boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'label',
    explain: '输入框关联的label文字',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'prefix-icon',
    explain: '输入框头部图标',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'suffix-icon',
    explain: '输入框尾部图标',
    type: 'String',
    values: '--',
    default: '--'
  },
  {
    param: 'hide-loading',
    explain: '是否隐藏远程加载时的加载图标',
    type: 'Boolean',
    values: '--',
    default: 'false'
  },
  {
    param: 'popper-append-to-body',
    explain: '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
    type: 'Boolean',
    values: '--',
    default: 'true'
  },
  {
    param: 'fetch-suggestions',
    explain: '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
    type: 'Function(queryString, callback)',
    values: '--',
    default: '--'
  }
];

export const autoCompleteSlots = [
  {
    param: 'prefix',
    explain: '输入框头部内容'
  },
  {
    param: 'suffix',
    explain: '输入框尾部内容'
  },
  {
    param: 'prepend',
    explain: '输入框前置内容'
  },
  {
    param: 'append',
    explain: '输入框后置内容'
  }
];

export const autoCompleteEvents = [
  {
    eventName: 'select',
    explain: '点击选中建议项时触发',
    params: '选中建议项'
  }
];

export const autoCompleteMethods = [
  {
    eventName: 'focus',
    explain: '使 input 获取焦点',
    params: '-'
  }
];
