/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-28 11:43:06
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-28 15:42:57
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="cascader-wrapper">
    <rdm-title title="Cascader 联级选择器"
               content="当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。属性与 el-cascader 相同" />
    <!-- 基本用法 -->
    <rdm-content title="基础用法"
                 explain="有两种触发子菜单的方式"
                 tips="只需为 Cascader 的 options 属性指定选项数组即可渲染出一个级联选择器。通过 expand-trigger 可以定义展开子级菜单的触发方式。本例还展示了 change 事件，它的参数为 Cascader 的绑定值：一个由各级菜单的值所组成的数组。"
                 :code="code1">
      <el-row class="demo-item"
              type="flex"
              align="middle"
              :gutter="24">
        <el-col :span="4">
          默认 click 触发子菜单:
        </el-col>
        <el-col :span="6">
          <hd-cascader :options="options"
                       v-model="selectedOptions"
                       @change="handleChange">
          </hd-cascader>
        </el-col>
        <el-col :span="3">
          hover 触发子菜单:
        </el-col>
        <el-col :span="6">
          <hd-cascader expand-trigger="hover"
                       :options="options"
                       v-model="selectedOptions2"
                       @change="handleChange">
          </hd-cascader>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="禁用状态"
                 explain="通过在数据源中设置 disabled 字段来声明该选项是禁用的"
                 tips="本例中，options 指定的数组中的第一个元素含有 disabled: true键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的 disabled 字段是否为 true，如果你的数据中表示禁用含义的字段名不为 disabled，可以通过 props 属性来指定（详见下方 API 表格）。当然，value、label 和 children 这三个字段名也可以通过同样的方式指定。"
                 :code="code2">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-cascader :options="optionsWithDisabled"></hd-cascader>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="仅显示最后一级"
                 explain="可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。"
                 tips="属性 show-all-levels 定义了是否显示完整的路径，将其赋值为 false 则仅显示最后一级"
                 :code="code3">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-cascader :options="options"
                       :show-all-levels="false">
          </hd-cascader>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="默认值"
                 tips="默认值通过数组的方式指定。"
                 :code="code4">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-cascader :options="options"
                       v-model="selectedOptions3">
          </hd-cascader>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="选择即改变"
                 explain="点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。"
                 tips="若需要允许用户选择任意一级选项，则可将change-on-select赋值为true"
                 :code="code5">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-cascader :options="options"
                       change-on-select>
          </hd-cascader>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="动态加载次级选项"
                 explain="当选中某一级时，动态加载该级下的选项。"
                 tips="本例的选项数据源在初始化时不包含城市数据。利用 active-item-change 事件，可以在用户点击某个省份时拉取该省份下的城市数据。此外，本例还展示了 props 属性的用法。"
                 :code="code6">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <el-cascader :options="options2"
                       @active-item-change="handleItemChange"
                       :props="props">
          </el-cascader>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="可搜索"
                 explain="可以快捷地搜索选项并选择。"
                 tips="将 filterable 赋值为 true 即可打开搜索功能。"
                 :code="code7">
      <el-row class="demo-item"
              type="flex"
              align="middle"
              :gutter="24">
        <el-col :span="8">
          只可选择最后一级菜单的选项:
        </el-col>
        <el-col :span="8">
          可选择任意一级菜单的选项:
        </el-col>
      </el-row>
      <el-row class="demo-item"
              type="flex"
              align="middle"
              :gutter="24">
        <el-col :span="8">
          <el-cascader placeholder="试试搜索：指南"
                       :options="options"
                       filterable>
          </el-cascader>
        </el-col>
        <el-col :span="8">
          <el-cascader placeholder="试试搜索：指南"
                       :options="options"
                       filterable
                       change-on-select>
          </el-cascader>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-param title="Input Attributes"
               type="attr"
               :list="attrList1">
    </rdm-param>
    <rdm-param title="Input Attributes"
               type="attr"
               :list="attrList2">
    </rdm-param>
    <rdm-param title="Input Attributes"
               type="method"
               :list="eventList1">
    </rdm-param>
  </div>
</template>
<script>
import Code from './code-area.js';
import Attr from './attr.js';
import HdCascader from '@/components/cascader';
export default {
  components: {
    HdCascader
  },
  data() {
    return {
      code1: Code.normalStr,
      code2: Code.disableStr,
      code3: Code.onlyLastLevelStr,
      code4: Code.defaultValueStr,
      code5: Code.chooseAndChangeStr,
      code6: Code.dynamicStr,
      code7: Code.searchableStr,
      attrList1: Attr.paramsList,
      attrList2: Attr.propsList,
      eventList1: Attr.eventsList,
      selectedOptions: [],
      selectedOptions2: [],
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
      ],
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
      options2: [
        {
          label: '江苏',
          cities: []
        },
        {
          label: '浙江',
          cities: []
        }
      ],
      props: {
        value: 'label',
        children: 'cities'
      }
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleItemChange(val) {
      console.log('active item:', val);
      setTimeout(() => {
        if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [
            {
              label: '南京'
            }
          ];
        } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
          this.options2[1].cities = [
            {
              label: '杭州'
            }
          ];
        }
      }, 300);
    }
  }
};
</script>
