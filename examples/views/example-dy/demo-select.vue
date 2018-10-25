/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-11 09:44:14
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-07-13 17:11:21
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="demo-select-wrapper">
    <h1 class="first-title">Select／选择</h1>
    <div class="demo-wrapper">
      <h2 class="demo-title">状态</h2>
      <el-card class="demo-block">
        <el-row :gutter="20"
                class="demo-item">
          <el-col :span="4">
            <h3 class="item-title">Normal／正常</h3>
            <el-select v-model="value"
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <h3 class="item-title">Disabled／禁用</h3>
            <el-select v-model="value"
                       disabled
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <h3 class="item-title">Clear／可清除</h3>
            <el-select v-model="value"
                       clearable
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <h3 class="item-title">Multiselect／多选</h3>
            <el-select v-model="mValue"
                       multiple
                       clearable
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <h3 class="item-title">Can Search／可以搜索</h3>
            <el-select v-model="searchVal"
                       filterable
                       multiple
                       remote
                       reserve-keyword
                       placeholder="请输入关键词"
                       :remote-method="remoteMethod"
                       :loading="loading">
              <el-option v-for="item in options4"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="demo-wrapper">
      <h2 class="demo-title">恒大样式：</h2>
      <el-card class="demo-block">
        <el-row :gutter="20"
                class="demo-item">
          <el-col :span="4">
            <h3 class="item-title">Normal／正常</h3>
            <el-select v-model="sValue"
                       placeholder="请选择"
                       multiple
                       :popperAppendToBody="false"
                       class="hd-select">
              <el-option type="check"
                         v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <h3 class="item-title">Multiselect／多选样式一</h3>
            <hd-select v-model="sValue"
                       clearable
                       multiple
                       :options="options">
            </hd-select>
          </el-col>
          <el-col :span="4">
            <h3 class="item-title">Multiselect／多选样式二</h3>
            <hd-select v-model="sValue2"
                       clearable
                       multiple
                       checkbox
                       :options="options">
            </hd-select>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import './select.less';

import HdSelect from '@/components/select';
export default {
  name: 'demo-select',
  components: {
    HdSelect
    // [HDSelect.name]: HDSelect
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      mValue: [],
      sValue: [],
      sValue2: [],
      searchVal: [],
      options4: [],
      list: [],
      loading: false,
      states: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ]
    };
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options4 = [];
      }
    },
    changeStyle(event) {
      let popList = document.querySelector('.el-scrollbar__view');
      if (event) {
        popList.childNodes.forEach(el => {
          el.className += ' hd-select-dropdown__item';
          console.log(el);
        });
      } else {
        popList.childNodes.forEach(el => {
          el.className.replace('hd-select-dropdown__item', '');
          console.log(el);
        });
      }
    }
  }
};
</script>
