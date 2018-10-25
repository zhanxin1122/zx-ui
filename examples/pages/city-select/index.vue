/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-21 15:00:35
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-21 15:30:53
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="demo-city-select-wrapper">
    <rdm-title title="City select 城市选择器"
               content="选择城市，可精确到县/区" />
    <rdm-content title="基础用法"
                 explain="可选到地市级的选择器"
                 tips="可快速点击字母切换省份，可模糊搜索(暂不支持拼音搜索)，v-model 需传入对象，且返回 省-市 信息的对象"
                 :code="code1">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-city-select v-model="value1">
          </hd-city-select>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="县/区选择器"
                 explain="可精确到县/区级"
                 tips="通过修改 county-mode 属性，实现县/区级选择，v-model 需传入对象，且返回 省-市-县/区 信息的对象"
                 :code="code2">
      <el-row class="demo-item"
              :gutter="20">
        <el-col :span="6">
          <hd-city-select v-model="value2"
                          :county-mode="true">
          </hd-city-select>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-param title="City-Select Attributes"
               type="attr"
               :list="paramsList">
    </rdm-param>
  </div>
</template>
<script>
import HdCitySelect from '@/components/city-select';
import Code from './code-area.js';
import Attr from './attr.js';
export default {
  components: {
    HdCitySelect
  },
  data() {
    return {
      value1: {},
      value2: {}
    };
  },
  computed: {
    code1() {
      return Code.normalCode;
    },
    code2() {
      return Code.countyModeCode;
    },
    paramsList() {
      return Attr.paramsList;
    }
  }
};
</script>
