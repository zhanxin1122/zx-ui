<template>
  <section class="content">
    <h2 class="first-title"> Radio CheckBox/单选、复选</h2>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <el-row>
            <hd-radio v-model="selected"
                      @change="handleRadioChange"
                      label="1">已选择</hd-radio>
            <hd-radio v-model="selected"
                      label="0">未选择</hd-radio>
            <hd-radio disabled
                      v-model="disableSelected"
                      label="1">已选禁用</hd-radio>
            <hd-radio disabled
                      v-model="disableSelected"
                      label="0">未选禁用</hd-radio>
          </el-row>
          <el-row>
            <hd-radio v-model="selected"
                      border
                      label="1">已选择</hd-radio>
            <hd-radio v-model="selected"
                      border
                      label="0">未选择</hd-radio>
            <hd-radio v-model="disableSelected"
                      border
                      disabled
                      label="1">已选禁用</hd-radio>
            <hd-radio v-model="disableSelected"
                      disabled
                      border
                      label="0">未选禁用</hd-radio>
          </el-row>
          <el-row>
            <hd-checkbox v-model="testChecked"
                         true-label="1"
                         false-label="0"
                         @change="handleCheckBoxChange">已选择</hd-checkbox>
            <hd-checkbox v-model="unchecked">未选择</hd-checkbox>
            <hd-checkbox disabled
                         v-model="checked">已选禁用</hd-checkbox>
            <hd-checkbox disabled
                         v-model="unchecked">未选禁用</hd-checkbox>

          </el-row>
          <el-row>
            <hd-checkbox v-model="checked"
                         border>已选择</hd-checkbox>
            <hd-checkbox v-model="unchecked"
                         border>未选择</hd-checkbox>
            <hd-checkbox disabled
                         v-model="checked"
                         border>已选禁用</hd-checkbox>
            <hd-checkbox disabled
                         v-model="unchecked"
                         border>未选禁用</hd-checkbox>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import checkbox from '@/components/checkbox';
import radio from '@/components/radio';
export default {
  name: 'DemoRadioCheckbox',
  components: {
    [checkbox.name]: checkbox,
    [radio.name]: radio
  },
  data() {
    return {
      selected: '1',
      disableSelected: '1',
      checked: true,
      testChecked: '1',
      unchecked: false,
      radioVal: 1
    };
  },
  methods: {
    handleRadioChange(model) {
      console.log(model);
    },
    handleCheckBoxChange(value, event) {
      console.log(value, event);
    }
  }
};
</script>
