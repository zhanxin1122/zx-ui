/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-11 09:44:08
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-07-11 09:44:08
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="demo-input-wrapper">
    <h1 class="first-title">Input / 输入</h1>
    <div class="demo-wrapper">
      <h2 class="demo-title">尺寸</h2>
      <el-card class="demo-block">
        <el-row :gutter="20"
                class="demo-item">
          <el-col :span="6">
            <h3 class="item-title">大：</h3>
            <el-input v-model="inputVal"
                      placeholder="请输入内容"
                      clearable
                      class="hd-input-large">
            </el-input>
          </el-col>
          <el-col :span="6">
            <h3 class="item-title">中：</h3>
            <el-input v-model="inputVal"
                      placeholder="请输入内容"
                      clearable
                      class="hd-input-medium">
            </el-input>
          </el-col>
          <el-col :span="6">
            <h3 class="item-title">小：</h3>
            <el-input v-model="inputVal"
                      placeholder="请输入内容"
                      clearable
                      class="hd-input-small">
            </el-input>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="demo-wrapper">
      <h2 class="demo-title">尺寸可调节</h2>
      <el-card class="demo-block">
        <el-row :gutter="20"
                class="demo-item">
          <el-col :span="6">
            <h3 class="item-title">输入状态：</h3>
            <el-input type="textarea"
                      placeholder="请输入内容"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      v-model="textareaVal">
            </el-input>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="demo-wrapper">
      <h2 class="demo-title">状态</h2>
      <el-card class="demo-block">
        <el-row :gutter="20"
                class="demo-item">
          <el-col :span="6">
            <h3 class="item-title">正常：</h3>
            <el-input placeholder="请输入内容"
                      v-model="inputVal"
                      class="hd-input">
            </el-input>
          </el-col>
          <el-col :span="6">
            <h3 class="item-title">成功 / 失败：</h3>
            <el-input placeholder="请输入内容"
                      v-model="successVal"
                      class="hd-input"
                      :class="inputBorder"
                      :suffix-icon="inputState">
            </el-input>
          </el-col>
          <el-col :span="6">
            <h3 class="item-title">禁用</h3>
            <el-input placeholder="请输入内容"
                      clearable
                      v-model="successVal"
                      class="hd-input"
                      :disabled="true"
                      :class="inputBorder">
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20"
                class="demo-item">
          <el-col :span="6">
            <h3 class="item-title">正确状态：</h3>
            <el-input placeholder="请输入内容"
                      clearable
                      v-model="successVal"
                      class="hd-input"
                      :class="[inputBorder, 'fill']"
                      :suffix-icon="inputState">
            </el-input>
          </el-col>
          <el-col :span="6">
            <h3 class="item-title">警告状态：</h3>
            <el-input placeholder="请输入内容"
                      clearable
                      v-model="successVal"
                      class="hd-input"
                      :class="[inputBorderWraning, 'fill']"
                      :suffix-icon="inputStateWarning">
            </el-input>
          </el-col>

          <el-col :span="6">
            <h3 class="item-title">错误状态</h3>
            <el-input placeholder="请输入内容"
                      clearable
                      v-model="successVal"
                      class="hd-input"
                      :class="[inputBorder, 'fill']"
                      :suffix-icon="inputState">
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20"
                class="demo-item">
          <el-col :span="12">
            <h3 class="item-title">修改输入内容以查看效果</h3>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import './input.less';
export default {
  name: 'demo-input',
  data() {
    return {
      inputVal: '',
      textareaVal: '',
      successVal: 'success',
      errorVal: '',
      isCorrect: true
    };
  },
  computed: {
    inputBorder: function() {
      if (this.successVal) {
        if (this.isCorrect) {
          return 'hd-input-correct';
        } else {
          return 'hd-input-error';
        }
      }
    },
    inputBorderWraning: function() {
      if (this.successVal) {
        if (this.isCorrect) {
          return 'hd-input-correct';
        } else {
          return 'hd-input-warning';
        }
      }
    },
    inputState: function() {
      if (this.successVal) {
        if (this.isCorrect) {
          return 'el-icon-success';
        } else {
          return 'el-icon-error';
        }
      }
    },
    inputStateWarning: function() {
      if (this.successVal) {
        if (this.isCorrect) {
          return 'el-icon-success';
        } else {
          return 'el-icon-error icon-wraning';
        }
      }
    }
  },
  watch: {
    successVal(val) {
      this.validateInput(val);
    }
  },
  methods: {
    validateInput(val) {
      if (val && val === 'success') {
        console.log('correct');
        this.isCorrect = true;
      } else {
        console.log('error');
        this.isCorrect = false;
      }
    }
  }
};
</script>
