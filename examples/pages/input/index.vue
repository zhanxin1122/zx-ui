/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-13 11:39:55
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-13 17:52:03
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="demo-input-wrapper">
    <rdm-title title="Input 输入框"
               content="针对 el-input 进行改造，其他参数与 el-input 一样" />
    <rdm-content title="基础用法"
                 :code="code1">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-input v-model="value1"
                    placeholder="请输入内容">
          </hd-input>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="禁用状态"
                 tips="通过 disabled 属性指定是否禁用 input 组件"
                 :code="code4">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-input placeholder="请输入内容"
                    v-model="input1"
                    :disabled="true">
          </hd-input>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="可清空"
                 tips="使用 clearable 属性即可得到一个可清空的输入框"
                 :code="code5">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-input placeholder="请输入内容"
                    v-model="input2"
                    clearable>
          </hd-input>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="带 icon 的输入框"
                 explain="带有图标标记输入类型"
                 tips="可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。"
                 :code="code6">
      <el-row class="demo-item"
              type="flex"
              align="middle"
              :gutter="20">
        <el-col :span="2">
          属性方式 :
        </el-col>
        <el-col :span="6">
          <hd-input placeholder="请选择日期"
                    suffix-icon="el-icon-date"
                    v-model="input30">
          </hd-input>
        </el-col>
        <el-col :span="6">
          <hd-input placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input31">
          </hd-input>
        </el-col>
      </el-row>
      <el-row class="demo-item"
              type="flex"
              align="middle"
              :gutter="20">
        <el-col :span="2">
          slot 方式 :
        </el-col>
        <el-col :span="6">
          <hd-input placeholder="请选择日期"
                    v-model="input32">
            <i slot="suffix"
               class="el-input__icon el-icon-date">
            </i>
          </hd-input>
        </el-col>
        <el-col :span="6">
          <hd-input placeholder="请输入内容"
                    v-model="input33">
            <i slot="prefix"
               class="el-input__icon el-icon-search">
            </i>
          </hd-input>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="文本域"
                 explain="用于输入多行文本信息，通过将 type 属性的值指定为 textarea。"
                 :code="code7">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-input type="textarea"
                    placeholder="请输入内容"
                    v-model="textarea"
                    :rows="2">
          </hd-input>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="尺寸"
                 tips="可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large 和 small 三种尺寸。"
                 :code="code2">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-input size="large"
                    v-model="inputVal"
                    placeholder="请输入内容">
          </hd-input>
        </el-col>
        <el-col :span="6">
          <hd-input size="medium"
                    v-model="inputVal"
                    placeholder="请输入内容">
          </hd-input>
        </el-col>
        <el-col :span="6">
          <hd-input size="small"
                    v-model="inputVal"
                    placeholder="请输入内容">
          </hd-input>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="状态"
                 explain="带有根据状态而填充样式的输入框"
                 tips="可通过传入 input-state 来调节输入状态，若此做，必须带有 suffix 插槽，且 suffix 插槽不能有其他图标"
                 :code="code3">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-input placeholder="请输入内容"
                    v-model="input9"
                    :input-state="inputState_9">
            <i slot="suffix"
               class="el-input__icon"></i>
          </hd-input>
        </el-col>
        <el-col :span="6">
          <hd-input placeholder="请输入内容"
                    v-model="input10"
                    :input-state="inputState_10">
            <i slot="suffix"
               class="el-input__icon"></i>
          </hd-input>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="禁用状态"
                 tips="通过 disabled 属性指定是否禁用 input 组件"
                 :code="code4">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-input placeholder="请输入内容"
                    v-model="input1"
                    :disabled="true">
          </hd-input>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-param title="Input Attributes"
               type="attr"
               :list="paramsList">
    </rdm-param>
    <rdm-param title="Input Slots"
               type="attr"
               :list="paramsListSlots">
    </rdm-param>
    <rdm-param title="Input Events"
               type="method"
               :list="inputEvents">
    </rdm-param>
    <rdm-param title="Input Methods"
               type="method"
               :list="inputMethods">
    </rdm-param>
    <rdm-param title="Autocomplete Attributes"
               type="attr"
               :list="autoCompleteAttr">
    </rdm-param>
    <rdm-param title="Autocomplete Slots"
               type="attr"
               :list="autoCompleteSlots">
    </rdm-param>
    <rdm-param title="Autocomplete Events"
               type="method"
               :list="autoCompleteEvents">
    </rdm-param>
    <rdm-param title="Autocomplete Methods"
               type="method"
               :list="autoCompleteMethods">
    </rdm-param>
  </div>
</template>
<script>
import HdInput from '@/components/input';
import Code from './code-area.js';
import {
  paramsList,
  paramsListSlots,
  inputEvents,
  inputMethods,
  autoCompleteAttr,
  autoCompleteSlots,
  autoCompleteEvents,
  autoCompleteMethods
} from './attr.js';
export default {
  components: {
    [HdInput.name]: HdInput
  },
  data() {
    return {
      value1: '',
      inputVal: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: 'success',
      input10: 'warning',
      input30: '',
      input31: '',
      input32: '',
      input33: '',
      textarea: '',
      inputState_9: 'correct',
      inputState_10: 'warning',
      code1: Code.normalStr,
      code2: Code.sizeStr,
      code3: Code.validateStr,
      code4: Code.disableStr,
      code5: Code.clearableStr,
      code6: Code.iconSlotStr,
      code7: Code.textareaStr,
      paramsList: paramsList,
      paramsListSlots: paramsListSlots,
      inputEvents: inputEvents,
      inputMethods: inputMethods,
      autoCompleteAttr: autoCompleteAttr,
      autoCompleteSlots: autoCompleteSlots,
      autoCompleteEvents: autoCompleteEvents,
      autoCompleteMethods: autoCompleteMethods,
      eventsList: []
    };
  },
  watch: {
    input9(val) {
      this.inputState_9 = this.validateInput(val);
    },
    input10(val) {
      this.inputState_10 = this.validateInput(val);
    }
  },
  methods: {
    validateInput(val) {
      if (val && val === 'success') {
        return 'correct';
      } else if (val && val === 'warning') {
        return 'warning';
      } else {
        return 'error';
      }
    }
  }
};
</script>
