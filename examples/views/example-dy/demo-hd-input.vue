<template>
  <div class="demo-hd-input-wrapper">
    <h1 class="first-title">Input 输入</h1>
    <div class="demo-wrapper">
      <h2 class="demo-title">尺寸</h2>
      <el-card class="demo-block">
        <el-row class="demo-item"
                :gutter="20">
          <el-col :span="6">
            <h3 class="item-title">大：</h3>
            <hd-input size="large"
                      v-model="inputVal">
            </hd-input>
          </el-col>
          <el-col :span="6">
            <h3 class="item-title">中：</h3>
            <hd-input size="medium"
                      v-model="inputVal">
            </hd-input>
          </el-col>
          <el-col :span="6">
            <h3 class="item-title">小：</h3>
            <hd-input size="small"
                      v-model="inputVal">
            </hd-input>
          </el-col>
          <el-col :span="6">
            <h3 class="item-title">小：</h3>
            <hd-input size="small"
                      :input-state="inputState"
                      :fill="true"
                      v-model="validateVal"
                      :suffix-icon="inputState"
                      >
            </hd-input>
          </el-col>
        </el-row>
      </el-card>
    </div>

  </div>
</template>
<script>
import HdInput from '@/components/input';
export default {
  name: 'DemoHdInput',
  components: {
    HdInput
  },
  data() {
    return {
      inputVal: '',
      validateVal: 'succe',
      inputState: 'correct'
    };
  },
  watch: {
    validateVal(val) {
      this.validateInput(val);
    }
  },
  methods: {
    validateInput(val) {
      if (val && val === 'success') {
        console.log('Input correct');
        this.inputState = 'el-icon-success';
      } else {
        console.log('Input error');
        this.inputState = 'el-icon-error';
      }
    }
  }
};
</script>
