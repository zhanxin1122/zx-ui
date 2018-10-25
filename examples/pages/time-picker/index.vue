<template>
  <div>
    <rdm-title title="time-picker 时间选择器"
               content="针对 el-time-picker 进行改造，其参数与 el-time-picker 一样" />
    <rdm-content title="时间格式 HH:mm:ss"
                 :code="code1">
      <el-row>
        <el-col :span="8">
          <hd-time-picker v-model="value1"
                          :picker-options="{selectableRange:'08:30:00 - 20:30:00'}">
          </hd-time-picker>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="时间格式 HH:mm"
                 :code="code2">
      <el-row>
        <el-col :span="8">
          <hd-time-picker v-model="value2"
                          value-format="HH:mm"
                          :picker-options="{selectableRange:'08:30:00 - 20:30:00',format:'HH:mm'}"
                          popper-class="hd-minute">
          </hd-time-picker>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="任意时间范围"
                 :code="code3">
      <el-row>
        <el-col :span="8">
          <hd-time-picker is-range
                          v-model="value3"
                          range-separator="至"
                          start-placeholder="开始时间"
                          end-placeholder="结束时间"
                          placeholder="选择时间范围">
          </hd-time-picker>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList1"></rdm-param>
    <rdm-param title="Events"
               type="method"
               :list="paramsList2"></rdm-param>
  </div>
</template>

<script>
import HdTimePicker from '@/components/time-picker';
export default {
  data() {
    return {
      value1: new Date(2018, 8, 29, 10, 30, 25),
      value2: '',
      value3: [new Date(2018, 8, 29, 10, 30, 25), new Date(2018, 8, 29, 18, 30, 25)],
      code1: `<template>
  <hd-time-picker v-model="value1"
                  :picker-options="{selectableRange:'08:30:00 - 20:30:00'}">
  </hd-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date(2018, 8, 29, 10, 30, 25)
      }
    }
  }
<\/script>`,
      code2: `<template>
  <hd-time-picker v-model="value1"
                  :picker-options="{selectableRange:'08:30:00 - 20:30:00'}">
  </hd-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value2: ''
      }
    }
  }
<\/script>`,
      code3: `<template>
  <hd-time-picker is-range
                  v-model="value3"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
  </hd-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value3: [new Date(2018, 8, 29, 10, 30, 25), new Date(2018, 8, 29, 18, 30, 25)]
      }
    }
  }
<\/script>`,
      paramsList1: [
        {
          param: 'readonly',
          explain: '完全只读',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'disabled',
          explain: '禁用',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'editable',
          explain: '文本框可输入',
          type: 'boolean',
          values: '--',
          default: 'true'
        },
        {
          param: 'clearable',
          explain: '是否显示清除按钮',
          type: 'boolean',
          values: '--',
          default: 'true'
        },
        {
          param: 'size',
          explain: '输入框尺寸',
          type: 'string',
          values: 'medium / small / mini',
          default: '--'
        },
        {
          param: 'placeholder',
          explain: '非范围选择时的占位内容',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'start-placeholder',
          explain: '范围选择时开始日期的占位内容',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'end-placeholder',
          explain: '范围选择时开始日期的占位内容',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'is-range',
          explain: '是否为时间范围选择',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'arrow-control',
          explain: '是否使用箭头进行时间选择',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'value',
          explain: '绑定值',
          type: 'date',
          values: '--',
          default: '--'
        },
        {
          param: 'align',
          explain: '对齐方式',
          type: 'string',
          values: 'left / center / right',
          default: 'left'
        },
        {
          param: 'popper-class',
          explain: 'TimePicker 下拉框的类名',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'range-separator',
          explain: '选择范围时的分隔符',
          type: 'string',
          values: '--',
          default: '-'
        },
        {
          param: 'value-format',
          explain: '绑定值的格式',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'default-value',
          explain: '可选，选择器打开时默认显示的时间',
          type: 'Date',
          values: '--',
          default: '--'
        },
        {
          param: 'prefix-icon',
          explain: '自定义头部图标的类名',
          type: 'string',
          values: '--',
          default: 'el-icon-time'
        },
        {
          param: 'clear-icon',
          explain: '自定义清空图标的类名',
          type: 'string',
          values: '--',
          default: 'el-icon-circle-close'
        },
        {
          param: 'selectableRange',
          explain: '可选时间段',
          type: 'string / array',
          values: '--',
          default: '--'
        },
        {
          param: 'format',
          explain: '时间格式化',
          type: 'string',
          values: '小时：HH，分：mm，秒：ss，AM/PM A',
          default: 'HH:mm:ss'
        }
      ],
      paramsList2: [
        {
          eventName: 'change',
          explain: '用户确认选定的值时触发',
          params: '组件绑定值'
        },
        {
          eventName: 'blur',
          explain: '当 input 失去焦点时触发',
          params: '组件实例'
        },
        {
          eventName: 'focus',
          explain: '当 input 获得焦点时触发',
          params: '组件实例'
        }
      ]
    };
  },
  components: {
    HdTimePicker
  }
};
</script>
