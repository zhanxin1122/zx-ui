const normalStr = `
<div class="block">
  <span class="demonstration">默认 click 触发子菜单</span>
  <hd-cascader
    :options="options"
    v-model="selectedOptions"
    @change="handleChange">
  </hd-cascader>
</div>
<div class="block">
  <span class="demonstration">hover 触发子菜单</span>
  <hd-cascader
    expand-trigger="hover"
    :options="options"
    v-model="selectedOptions2"
    @change="handleChange">
  </hd-cascader>
</div>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                  {
                    value: 'yizhi',
                    label: '一致'
                  },
                  {
                    value: 'fankui',
                    label: '反馈'
                  },
                  {
                    value: 'xiaolv',
                    label: '效率'
                  },
                  {
                    value: 'kekong',
                    label: '可控'
                  }
                ]
              },
              {
                value: 'daohang',
                label: '导航',
                children: [
                  {
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  },
                  {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }
                ]
              }
            ]
          },
          {
            value: 'zujian',
            label: '组件',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout 布局'
                  },
                  {
                    value: 'color',
                    label: 'Color 色彩'
                  },
                  {
                    value: 'typography',
                    label: 'Typography 字体'
                  },
                  {
                    value: 'icon',
                    label: 'Icon 图标'
                  },
                  {
                    value: 'button',
                    label: 'Button 按钮'
                  }
                ]
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio 单选框'
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                  },
                  {
                    value: 'input',
                    label: 'Input 输入框'
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                  },
                  {
                    value: 'select',
                    label: 'Select 选择器'
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                  },
                  {
                    value: 'switch',
                    label: 'Switch 开关'
                  },
                  {
                    value: 'slider',
                    label: 'Slider 滑块'
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                  },
                  {
                    value: 'upload',
                    label: 'Upload 上传'
                  },
                  {
                    value: 'rate',
                    label: 'Rate 评分'
                  },
                  {
                    value: 'form',
                    label: 'Form 表单'
                  }
                ]
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table 表格'
                  },
                  {
                    value: 'tag',
                    label: 'Tag 标签'
                  },
                  {
                    value: 'progress',
                    label: 'Progress 进度条'
                  },
                  {
                    value: 'tree',
                    label: 'Tree 树形控件'
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination 分页'
                  },
                  {
                    value: 'badge',
                    label: 'Badge 标记'
                  }
                ]
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert 警告'
                  },
                  {
                    value: 'loading',
                    label: 'Loading 加载'
                  },
                  {
                    value: 'message',
                    label: 'Message 消息提示'
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                  },
                  {
                    value: 'notification',
                    label: 'Notification 通知'
                  }
                ]
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                  },
                  {
                    value: 'steps',
                    label: 'Steps 步骤条'
                  }
                ]
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog 对话框'
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                  },
                  {
                    value: 'popover',
                    label: 'Popover 弹出框'
                  },
                  {
                    value: 'card',
                    label: 'Card 卡片'
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                  }
                ]
              }
            ]
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [
              {
                value: 'axure',
                label: 'Axure Components'
              },
              {
                value: 'sketch',
                label: 'Sketch Templates'
              },
              {
                value: 'jiaohu',
                label: '组件交互文档'
              }
            ]
          }
        ]
        selectedOptions: [],
        selectedOptions2: []
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
`;

const disableStr = `
<hd-cascader
  :options="optionsWithDisabled">
</hd-cascader>
<script>
  export default {
    data() {
      return {
        optionsWithDisabled: [
          {
            value: 'zhinan',
            label: '指南',
            disabled: true,
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                  {
                    value: 'yizhi',
                    label: '一致'
                  },
                  {
                    value: 'fankui',
                    label: '反馈'
                  },
                  {
                    value: 'xiaolv',
                    label: '效率'
                  },
                  {
                    value: 'kekong',
                    label: '可控'
                  }
                ]
              },
              {
                value: 'daohang',
                label: '导航',
                children: [
                  {
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  },
                  {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }
                ]
              }
            ]
          },
          {
            value: 'zujian',
            label: '组件',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout 布局'
                  },
                  {
                    value: 'color',
                    label: 'Color 色彩'
                  },
                  {
                    value: 'typography',
                    label: 'Typography 字体'
                  },
                  {
                    value: 'icon',
                    label: 'Icon 图标'
                  },
                  {
                    value: 'button',
                    label: 'Button 按钮'
                  }
                ]
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio 单选框'
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                  },
                  {
                    value: 'input',
                    label: 'Input 输入框'
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                  },
                  {
                    value: 'select',
                    label: 'Select 选择器'
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                  },
                  {
                    value: 'switch',
                    label: 'Switch 开关'
                  },
                  {
                    value: 'slider',
                    label: 'Slider 滑块'
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                  },
                  {
                    value: 'upload',
                    label: 'Upload 上传'
                  },
                  {
                    value: 'rate',
                    label: 'Rate 评分'
                  },
                  {
                    value: 'form',
                    label: 'Form 表单'
                  }
                ]
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table 表格'
                  },
                  {
                    value: 'tag',
                    label: 'Tag 标签'
                  },
                  {
                    value: 'progress',
                    label: 'Progress 进度条'
                  },
                  {
                    value: 'tree',
                    label: 'Tree 树形控件'
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination 分页'
                  },
                  {
                    value: 'badge',
                    label: 'Badge 标记'
                  }
                ]
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert 警告'
                  },
                  {
                    value: 'loading',
                    label: 'Loading 加载'
                  },
                  {
                    value: 'message',
                    label: 'Message 消息提示'
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                  },
                  {
                    value: 'notification',
                    label: 'Notification 通知'
                  }
                ]
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                  },
                  {
                    value: 'steps',
                    label: 'Steps 步骤条'
                  }
                ]
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog 对话框'
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                  },
                  {
                    value: 'popover',
                    label: 'Popover 弹出框'
                  },
                  {
                    value: 'card',
                    label: 'Card 卡片'
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                  }
                ]
              }
            ]
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [
              {
                value: 'axure',
                label: 'Axure Components'
              },
              {
                value: 'sketch',
                label: 'Sketch Templates'
              },
              {
                value: 'jiaohu',
                label: '组件交互文档'
              }
            ]
          }
        ],
      };
    }
  };
</script>
`;

const onlyLastLevelStr = `
<hd-cascader
  :options="options"
  :show-all-levels="false">
</hd-cascader>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                  {
                    value: 'yizhi',
                    label: '一致'
                  },
                  {
                    value: 'fankui',
                    label: '反馈'
                  },
                  {
                    value: 'xiaolv',
                    label: '效率'
                  },
                  {
                    value: 'kekong',
                    label: '可控'
                  }
                ]
              },
              {
                value: 'daohang',
                label: '导航',
                children: [
                  {
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  },
                  {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }
                ]
              }
            ]
          },
          {
            value: 'zujian',
            label: '组件',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout 布局'
                  },
                  {
                    value: 'color',
                    label: 'Color 色彩'
                  },
                  {
                    value: 'typography',
                    label: 'Typography 字体'
                  },
                  {
                    value: 'icon',
                    label: 'Icon 图标'
                  },
                  {
                    value: 'button',
                    label: 'Button 按钮'
                  }
                ]
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio 单选框'
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                  },
                  {
                    value: 'input',
                    label: 'Input 输入框'
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                  },
                  {
                    value: 'select',
                    label: 'Select 选择器'
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                  },
                  {
                    value: 'switch',
                    label: 'Switch 开关'
                  },
                  {
                    value: 'slider',
                    label: 'Slider 滑块'
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                  },
                  {
                    value: 'upload',
                    label: 'Upload 上传'
                  },
                  {
                    value: 'rate',
                    label: 'Rate 评分'
                  },
                  {
                    value: 'form',
                    label: 'Form 表单'
                  }
                ]
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table 表格'
                  },
                  {
                    value: 'tag',
                    label: 'Tag 标签'
                  },
                  {
                    value: 'progress',
                    label: 'Progress 进度条'
                  },
                  {
                    value: 'tree',
                    label: 'Tree 树形控件'
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination 分页'
                  },
                  {
                    value: 'badge',
                    label: 'Badge 标记'
                  }
                ]
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert 警告'
                  },
                  {
                    value: 'loading',
                    label: 'Loading 加载'
                  },
                  {
                    value: 'message',
                    label: 'Message 消息提示'
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                  },
                  {
                    value: 'notification',
                    label: 'Notification 通知'
                  }
                ]
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                  },
                  {
                    value: 'steps',
                    label: 'Steps 步骤条'
                  }
                ]
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog 对话框'
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                  },
                  {
                    value: 'popover',
                    label: 'Popover 弹出框'
                  },
                  {
                    value: 'card',
                    label: 'Card 卡片'
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                  }
                ]
              }
            ]
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [
              {
                value: 'axure',
                label: 'Axure Components'
              },
              {
                value: 'sketch',
                label: 'Sketch Templates'
              },
              {
                value: 'jiaohu',
                label: '组件交互文档'
              }
            ]
          }
        ]
      }
    }
  }
</script>
`;

const defaultValueStr = `
<hd-cascader
  :options="options"
  v-model="selectedOptions3">
</hd-cascader>
<script>
  export default {
    data() {
      return {
        selectedOptions3: ['zujian', 'data', 'tag'],
        options: [
          {
            value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                  {
                    value: 'yizhi',
                    label: '一致'
                  },
                  {
                    value: 'fankui',
                    label: '反馈'
                  },
                  {
                    value: 'xiaolv',
                    label: '效率'
                  },
                  {
                    value: 'kekong',
                    label: '可控'
                  }
                ]
              },
              {
                value: 'daohang',
                label: '导航',
                children: [
                  {
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  },
                  {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }
                ]
              }
            ]
          },
          {
            value: 'zujian',
            label: '组件',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout 布局'
                  },
                  {
                    value: 'color',
                    label: 'Color 色彩'
                  },
                  {
                    value: 'typography',
                    label: 'Typography 字体'
                  },
                  {
                    value: 'icon',
                    label: 'Icon 图标'
                  },
                  {
                    value: 'button',
                    label: 'Button 按钮'
                  }
                ]
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio 单选框'
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                  },
                  {
                    value: 'input',
                    label: 'Input 输入框'
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                  },
                  {
                    value: 'select',
                    label: 'Select 选择器'
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                  },
                  {
                    value: 'switch',
                    label: 'Switch 开关'
                  },
                  {
                    value: 'slider',
                    label: 'Slider 滑块'
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                  },
                  {
                    value: 'upload',
                    label: 'Upload 上传'
                  },
                  {
                    value: 'rate',
                    label: 'Rate 评分'
                  },
                  {
                    value: 'form',
                    label: 'Form 表单'
                  }
                ]
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table 表格'
                  },
                  {
                    value: 'tag',
                    label: 'Tag 标签'
                  },
                  {
                    value: 'progress',
                    label: 'Progress 进度条'
                  },
                  {
                    value: 'tree',
                    label: 'Tree 树形控件'
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination 分页'
                  },
                  {
                    value: 'badge',
                    label: 'Badge 标记'
                  }
                ]
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert 警告'
                  },
                  {
                    value: 'loading',
                    label: 'Loading 加载'
                  },
                  {
                    value: 'message',
                    label: 'Message 消息提示'
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                  },
                  {
                    value: 'notification',
                    label: 'Notification 通知'
                  }
                ]
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                  },
                  {
                    value: 'steps',
                    label: 'Steps 步骤条'
                  }
                ]
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog 对话框'
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                  },
                  {
                    value: 'popover',
                    label: 'Popover 弹出框'
                  },
                  {
                    value: 'card',
                    label: 'Card 卡片'
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                  }
                ]
              }
            ]
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [
              {
                value: 'axure',
                label: 'Axure Components'
              },
              {
                value: 'sketch',
                label: 'Sketch Templates'
              },
              {
                value: 'jiaohu',
                label: '组件交互文档'
              }
            ]
          }
        ]
      }
    }
  }
</script>
`;

const chooseAndChangeStr = `
<hd-cascader
  :options="options"
  change-on-select>
</hd-cascader>
<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                  {
                    value: 'yizhi',
                    label: '一致'
                  },
                  {
                    value: 'fankui',
                    label: '反馈'
                  },
                  {
                    value: 'xiaolv',
                    label: '效率'
                  },
                  {
                    value: 'kekong',
                    label: '可控'
                  }
                ]
              },
              {
                value: 'daohang',
                label: '导航',
                children: [
                  {
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  },
                  {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }
                ]
              }
            ]
          },
          {
            value: 'zujian',
            label: '组件',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout 布局'
                  },
                  {
                    value: 'color',
                    label: 'Color 色彩'
                  },
                  {
                    value: 'typography',
                    label: 'Typography 字体'
                  },
                  {
                    value: 'icon',
                    label: 'Icon 图标'
                  },
                  {
                    value: 'button',
                    label: 'Button 按钮'
                  }
                ]
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio 单选框'
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                  },
                  {
                    value: 'input',
                    label: 'Input 输入框'
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                  },
                  {
                    value: 'select',
                    label: 'Select 选择器'
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                  },
                  {
                    value: 'switch',
                    label: 'Switch 开关'
                  },
                  {
                    value: 'slider',
                    label: 'Slider 滑块'
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                  },
                  {
                    value: 'upload',
                    label: 'Upload 上传'
                  },
                  {
                    value: 'rate',
                    label: 'Rate 评分'
                  },
                  {
                    value: 'form',
                    label: 'Form 表单'
                  }
                ]
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table 表格'
                  },
                  {
                    value: 'tag',
                    label: 'Tag 标签'
                  },
                  {
                    value: 'progress',
                    label: 'Progress 进度条'
                  },
                  {
                    value: 'tree',
                    label: 'Tree 树形控件'
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination 分页'
                  },
                  {
                    value: 'badge',
                    label: 'Badge 标记'
                  }
                ]
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert 警告'
                  },
                  {
                    value: 'loading',
                    label: 'Loading 加载'
                  },
                  {
                    value: 'message',
                    label: 'Message 消息提示'
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                  },
                  {
                    value: 'notification',
                    label: 'Notification 通知'
                  }
                ]
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                  },
                  {
                    value: 'steps',
                    label: 'Steps 步骤条'
                  }
                ]
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog 对话框'
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                  },
                  {
                    value: 'popover',
                    label: 'Popover 弹出框'
                  },
                  {
                    value: 'card',
                    label: 'Card 卡片'
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                  }
                ]
              }
            ]
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [
              {
                value: 'axure',
                label: 'Axure Components'
              },
              {
                value: 'sketch',
                label: 'Sketch Templates'
              },
              {
                value: 'jiaohu',
                label: '组件交互文档'
              }
            ]
          }
        ]
      }
    }
  }
</script>
`;

const dynamicStr = `
<hd-cascader
  :options="options2"
  @active-item-change="handleItemChange"
  :props="props">
</hd-cascader>

<script>
  export default {
    data() {
      return {
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        }
      };
    },

    methods: {
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
  };
</script>
`;

const searchableStr = `
<div class="block">
  <span class="demonstration">只可选择最后一级菜单的选项</span>
  <hd-cascader
    placeholder="试试搜索：指南"
    :options="options"
    filterable
  ></hd-cascader>
</div>
<div class="block">
  <span class="demonstration">可选择任意一级菜单的选项</span>
  <hd-cascader
    placeholder="试试搜索：指南"
    :options="options"
    filterable
    change-on-select
  ></hd-cascader>
</div>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                  {
                    value: 'yizhi',
                    label: '一致'
                  },
                  {
                    value: 'fankui',
                    label: '反馈'
                  },
                  {
                    value: 'xiaolv',
                    label: '效率'
                  },
                  {
                    value: 'kekong',
                    label: '可控'
                  }
                ]
              },
              {
                value: 'daohang',
                label: '导航',
                children: [
                  {
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  },
                  {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }
                ]
              }
            ]
          },
          {
            value: 'zujian',
            label: '组件',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout 布局'
                  },
                  {
                    value: 'color',
                    label: 'Color 色彩'
                  },
                  {
                    value: 'typography',
                    label: 'Typography 字体'
                  },
                  {
                    value: 'icon',
                    label: 'Icon 图标'
                  },
                  {
                    value: 'button',
                    label: 'Button 按钮'
                  }
                ]
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio 单选框'
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                  },
                  {
                    value: 'input',
                    label: 'Input 输入框'
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                  },
                  {
                    value: 'select',
                    label: 'Select 选择器'
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                  },
                  {
                    value: 'switch',
                    label: 'Switch 开关'
                  },
                  {
                    value: 'slider',
                    label: 'Slider 滑块'
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                  },
                  {
                    value: 'upload',
                    label: 'Upload 上传'
                  },
                  {
                    value: 'rate',
                    label: 'Rate 评分'
                  },
                  {
                    value: 'form',
                    label: 'Form 表单'
                  }
                ]
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table 表格'
                  },
                  {
                    value: 'tag',
                    label: 'Tag 标签'
                  },
                  {
                    value: 'progress',
                    label: 'Progress 进度条'
                  },
                  {
                    value: 'tree',
                    label: 'Tree 树形控件'
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination 分页'
                  },
                  {
                    value: 'badge',
                    label: 'Badge 标记'
                  }
                ]
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert 警告'
                  },
                  {
                    value: 'loading',
                    label: 'Loading 加载'
                  },
                  {
                    value: 'message',
                    label: 'Message 消息提示'
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                  },
                  {
                    value: 'notification',
                    label: 'Notification 通知'
                  }
                ]
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                  },
                  {
                    value: 'steps',
                    label: 'Steps 步骤条'
                  }
                ]
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog 对话框'
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                  },
                  {
                    value: 'popover',
                    label: 'Popover 弹出框'
                  },
                  {
                    value: 'card',
                    label: 'Card 卡片'
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                  }
                ]
              }
            ]
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [
              {
                value: 'axure',
                label: 'Axure Components'
              },
              {
                value: 'sketch',
                label: 'Sketch Templates'
              },
              {
                value: 'jiaohu',
                label: '组件交互文档'
              }
            ]
          }
        ]
      }
    }
  }
</script>
`;

const Code = {
  normalStr,
  disableStr,
  onlyLastLevelStr,
  defaultValueStr,
  chooseAndChangeStr,
  dynamicStr,
  searchableStr
};

export default Code;
