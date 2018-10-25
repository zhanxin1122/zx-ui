<template>
  <div>
    <rdm-title title="slider/滑块"
               content="针对 el-slider 进行改造，其参数与 el-slider 一样" />
    <rdm-content title="基础用法"
                 :code="code1">
      <el-row>
        <el-col :span="10">
          <hd-slider v-model="slider1"></hd-slider>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="离散值"
                 :code="code2">
      <el-row>
        <el-col :span="10">
          <hd-slider v-model="slider2"
                     :step="10"
                     show-stops></hd-slider>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="范围选择"
                 :code="code3">
      <el-row>
        <el-col :span="8">
          <hd-slider v-model="slider3"
                     range></hd-slider>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="带有输入框"
                 :code="code4">
      <el-row>
        <el-col :span="8">
          <hd-slider v-model="slider4"
                     show-input
                     :show-input-controls="false"></hd-slider>
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
import HdSlider from '@/components/slider';
export default {
  data() {
    return {
      slider1: 20,
      slider2: 20,
      slider3: [20, 60],
      slider4: 20,
      code1: `<template>
  <hd-slider v-model="slider"></hd-slider>
</template>

<script>
  export default {
    data() {
      return {
        slider: 20
      }
    }
  }
<\/script>`,
      code2: `<template>
  <hd-slider v-model="slider" :step="10" show-stops></hd-slider>
</template>

<script>
  export default {
    data() {
      return {
        slider: 20
      }
    }
  }
<\/script>`,
      code3: `<template>
  <hd-slider v-model="slider" range></hd-slider>
</template>

<script>
  export default {
    data() {
      return {
        slider: [20, 60]
      }
    }
  }
<\/script>`,
      code4: `<template>
  <hd-slider v-model="slider" show-input :show-input-controls="false"></hd-slider>
</template>

<script>
  export default {
    data() {
      return {
        slider: 20
      }
    }
  }
<\/script>`,
      paramsList1: [
        {
          param: 'min',
          explain: '最小值',
          type: 'number',
          values: '--',
          default: '0'
        },
        {
          param: 'max',
          explain: '最大值',
          type: 'number',
          values: '--',
          default: '100'
        },
        {
          param: 'disabled',
          explain: '是否禁用',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'step',
          explain: '步长',
          type: 'number',
          values: '--',
          default: '1'
        },
        {
          param: 'show-input',
          explain: '是否显示输入框，仅在非范围选择时有效',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'show-input-controls',
          explain: '在显示输入框的情况下，是否显示输入框的控制按钮',
          type: 'boolean',
          values: '--',
          default: 'true'
        },
        {
          param: 'input-size',
          explain: '输入框的尺寸',
          type: 'string',
          values: 'large / medium / small / mini',
          default: 'small'
        },
        {
          param: 'show-stops',
          explain: '是否显示间断点',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'show-tooltip',
          explain: '是否显示 tooltip',
          type: 'boolean',
          values: '--',
          default: 'true'
        },
        {
          param: 'format-tooltip',
          explain: '格式化 tooltip message',
          type: 'function(value)',
          values: '--',
          default: '--'
        },
        {
          param: 'range',
          explain: '是否为范围选择',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'vertical',
          explain: '是否竖向模式',
          type: 'boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'height',
          explain: 'Slider 高度，竖向模式时必填',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'label',
          explain: '屏幕阅读器标签',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'debounce',
          explain: '输入时的去抖延迟，毫秒，仅在show-input等于true时有效',
          type: 'number',
          values: '--',
          default: '300'
        },
        {
          param: 'tooltip-class',
          explain: 'tooltip 的自定义类名',
          type: 'string',
          values: '--',
          default: '--'
        }
      ],
      paramsList2: [
        {
          eventName: 'change',
          explain: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
          params: '改变后的值'
        }
      ]
    };
  },
  components: {
    HdSlider
  }
};
</script>
