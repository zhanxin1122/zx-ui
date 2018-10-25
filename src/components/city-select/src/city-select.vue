/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-20 15:41:18
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-28 16:13:37
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="city-select-wrapper">
    <div class="input-wrapper"
         :class="[countyMode ? 'has-county' : 'no-county']"
         @click="handleWrapperClick">
      <span class="provinces-name">{{selectVal.provinces.name}}</span>
      <span>-</span>
      <span class="city-name">{{selectVal.city.name}}</span>
      <template v-if="countyMode">
        <span>-</span>
        <span class="county-name">{{selectVal.county.name}}</span>
      </template>
      <span class="icon-arrow">
        <i class="el-icon-caret-bottom"
           ref="arrow">
        </i>
      </span>
    </div>
    <transition name="el-fade-in-linear">
      <!-- <div class="dropdown-toggle"
           tabindex='1'
           v-show="showCitiesDisplay"
           v-focus="showCitiesDisplay"
           @blur="handleBlur"> -->
      <div class="dropdown-toggle"
           v-show="showCitiesDisplay">
        <div class="search-box">
          <el-input placeholder="输入城市名／区／县名"
                    prefix-icon="el-icon-search"
                    class="search-bar"
                    v-model="searchVal">
          </el-input>
          <el-button round
                     @click="handleSearch(originCities, searchVal)">
            搜索
          </el-button>
        </div>
        <div class="quick-search">
          <div class="quick-search-left">省：</div>
          <div class="quick-search-right">
            <div class="letter">
              <span @click="resetProvinceQuickPick()">全部</span>
            </div>
            <div class="letter"
                 v-for="(item,index) in citiesList"
                 :key="index">
              <span @click="handleProvinceQuickPick(item.letter)">
                {{item.letter}}
              </span>
            </div>
          </div>
        </div>
        <transition name="el-fade-in-linear">
          <div class="cities-display"
               v-show="!showListType"
               transition-group
               ref="display-list">
            <transition-group name="list-complete">
              <div class="provinces-item clearfix list-complete-item"
                   v-for="(item,index) in cityFilterList"
                   :key="index">
                <div class="first-letter">{{item.letter}}</div>
                <div class="provices-wrapper">
                  <div class="provices-item"
                       v-for="provinces in item.cities"
                       :key="provinces.id">
                    <div class="provinces-name">
                      {{provinces.name}}:
                    </div>
                    <div class="cities clearfix">
                      <span class="city-item"
                            v-for="city in provinces.children"
                            :class="[{'active': city.name === selectVal.city.name}]"
                            :key="city.id"
                            @click="citySelected(provinces, city)">
                        {{city.name}}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
        </transition>
        <transition name="el-fade-in-linear">
          <div class="counties-display"
               v-show="showListType === 1">
            <el-button round
                       @click="handleBack()">
              返回
            </el-button>
            <div class="counties-list"
                 v-if="countyList.length > 0">
              <span class="county-item"
                    v-for="county in countyList"
                    :key="county.id"
                    :class="[{'active': county.name === selectVal.county.name}]"
                    @click="countySelected(county)">
                {{county.name}}
              </span>
            </div>
          </div>
        </transition>
        <transition name="el-fade-in-linear">
          <div class="counties-display"
               v-show="showListType === 2">
            <el-button round
                       @click="handleBack()">
              返回
            </el-button>
            <div class="counties-list"
                 v-if="searchResult.length > 0">
              <span class="county-item"
                    v-for="item in searchResult"
                    :key="item.id"
                    :class="[{'active': item.name === selectVal.county.name}]"
                    @click="resultSelected(item)">
                {{item.name}}
              </span>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
import Cities from './cities-list.js';
import '@/style/city-select.less';
import { Button, Input } from 'element-ui';
const HIDE_DISPLAY = 0; // 隐藏二级界面
const COUNTY_DISPLAY = 1; // 二级界面 - 县/区
const SEARCH_RESULT_DISPLAY = 2; // 二级界面 - 搜索结果
export default {
  name: 'HdCitySelect',
  components: {
    [Button.name]: Button,
    [Input.name]: Input
  },
  props: {
    value: {
      type: Object
    },
    // 未来扩展传入城市列表功能
    cityList: Array,
    countyMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 搜索值
      searchVal: '',
      // 搜索列表
      searchResult: [],
      // 县/区 列表
      countyList: [],
      // 筛选后的城市列表
      cityFilterList: [],
      // 是否展示可选择的城市列表
      showCitiesDisplay: false,
      // 1: 显示县/区 列表; 2：显示搜索结果;
      showListType: HIDE_DISPLAY
    };
  },
  computed: {
    citiesList() {
      return this.classifyCities(Cities);
    },
    originCities() {
      // 用于原始搜索
      return Cities;
    },
    selectVal: {
      get: function() {
        return {
          provinces: {
            id: '',
            code: '',
            name: ''
          },
          city: {
            id: '',
            name: '',
            code: '',
            cityLevel: '',
            provinceCode: '',
            administrationLevel: ''
          },
          county: {
            id: '',
            name: '',
            code: '',
            cityCode: ''
          }
        };
      },
      set: function(newVal) {
        // el 默认的触发器: input
        this.$emit('input', newVal);
      }
    }
  },
  mounted() {
    this.cityFilterList = JSON.parse(JSON.stringify(this.citiesList));
    document.addEventListener('click', e => {
      if (!this.$el.contains(e.target)) {
        this.showCitiesDisplay = false;
        this.handleArrowRotate();
      }
    });
  },
  activated() {
    document.addEventListener('click', e => {
      if (!this.$el.contains(e.target)) {
        this.showCitiesDisplay = false;
        this.handleArrowRotate();
      }
    });
  },
  deactivated() {
    document.removeEventListener('click');
  },
  // directives: {
  //   focus: {
  //     update: function(el, { value }) {
  //       if (value) {
  //         el.focus();
  //       }
  //     }
  //   },
  // },
  methods: {
    // handleBlur(e) {
    //   if (!this.$el.contains(e.target)) {
    //     this.showCitiesDisplay = false;
    //   }
    // },
    // 点击事件
    handleWrapperClick() {
      this.showCitiesDisplay = !this.showCitiesDisplay;
      this.handleArrowRotate();
    },
    // 箭头动画
    handleArrowRotate() {
      if (this.$refs['arrow']) {
        if (this.showCitiesDisplay) {
          this.$refs['arrow'].style.transform = 'rotate(180deg)';
        } else {
          this.$refs['arrow'].style.transform = 'rotate(0deg)';
        }
      }
    },
    // 选择地市级时，同时处理省份和城市
    citySelected(provinces, city) {
      this.handleSelectVal(provinces, city, {});
      // 如果城市没有县城/区(比如香港)，或者不是县城模式，则直接结束选择
      if (city && city.children.length !== 0 && this.countyMode) {
        this.countyList = city.children;
        this.showListType = COUNTY_DISPLAY;
      } else {
        this.countyList = city;
        this.showCitiesDisplay = false;
      }
    },
    // 选择县城时，更新选择的 Data 对象
    countySelected(county) {
      this.handleSelectVal({}, {}, county);
      // this.showListType = HIDE_DISPLAY;
      this.clearData();
      this.showListType = HIDE_DISPLAY;
      this.showCitiesDisplay = false;
    },
    // 选择搜索的结果
    resultSelected(picker) {
      // 如果选的是县/区级
      if (picker.cityCode) {
        this.findParentCity(this.originCities, picker);
        this.showListType = HIDE_DISPLAY;
        this.showCitiesDisplay = false;
        this.clearData();
      }
      // 如果选的是地市级
      if (picker.provinceCode) {
        this.findParentProvince(this.originCities, picker);
        if (this.countyMode) {
          this.countyList = picker.children;
          this.showListType = COUNTY_DISPLAY;
        } else {
          this.clearData();
          this.showListType = HIDE_DISPLAY;
          this.showCitiesDisplay = false;
        }
        // this.showCitiesDisplay = false;
      }
    },
    // 处理选择后的返回值
    handleSelectVal(provinces, city, county) {
      if (provinces && provinces != null && Object.keys(provinces).length !== 0) {
        this.selectVal.provinces = {
          id: provinces.id,
          code: provinces.code,
          name: provinces.name
        };
      }
      if (city && city != null && Object.keys(city).length !== 0) {
        this.selectVal.city = {
          id: city.id,
          name: city.name,
          code: city.code,
          cityLevel: city.cityLevel,
          provinceCode: city.provinceCode,
          administrationLevel: city.administrationLevel
        };
      }
      if (county && county != null && Object.keys(county).length !== 0) {
        this.selectVal.county = {
          id: county.id,
          name: county.name,
          code: county.code,
          cityCode: county.cityCode
        };
      } else {
        this.selectVal.county = {
          id: '',
          name: '',
          code: '',
          cityCode: ''
        };
      }
    },
    // 只选择县城的情况下，查询上级城市
    findParentCity(dataSource, county) {
      for (let i = 0, len = dataSource.length; i < len; i++) {
        for (let j = 0, len = dataSource[i].children.length; j < len; j++) {
          if (dataSource[i].children[j].code === county.cityCode) {
            this.handleSelectVal(dataSource[i], dataSource[i].children[j], county);
            return true;
          }
        }
      }
    },
    // 只选择城市的情况下，查询上级省份
    findParentProvince(dataSource, city) {
      for (let i = 0, len = dataSource.length; i < len; i++) {
        if (dataSource[i].code === city.provinceCode) {
          this.handleSelectVal(dataSource[i], city, {});
          return true;
        }
      }
    },
    // 对 省/市/县 进行排序并分类
    classifyCities(dataSource) {
      let citiesArr = [];
      let flag = true;
      // 先按字母排序
      let list = dataSource.sort(function(a, b) {
        return a.firstLetter > b.firstLetter ? 1 : -1;
      });
      // 再按字母分类
      for (let i = 0, len = list.length; i < len; i++) {
        flag = true;
        for (let j = 0, len = citiesArr.length; j < len; j++) {
          if (citiesArr[j].letter === list[i].firstLetter) {
            citiesArr[j].cities.push(list[i]);
            flag = false;
            break;
          }
        }
        if (flag) {
          let obj = {
            letter: list[i].firstLetter,
            cities: [list[i]]
          };
          citiesArr.push(obj);
        }
      }
      // 城市再按行政代码排序
      citiesArr = citiesArr.map(item => {
        return {
          ...item,
          cities: item.cities.sort(function(a, b) {
            return a.code - b.code;
          })
        };
      });
      return citiesArr;
    },
    // 处理快速选择省份
    handleProvinceQuickPick(letter) {
      let filterArr = [];
      let cityArr = this.citiesList;
      if (letter) {
        filterArr = cityArr.filter(item => {
          return letter === item.letter;
        });
      }
      // 实现动画，先清空，再添加
      this.cityFilterList.splice(0, this.cityFilterList.length);
      if (filterArr[0].letter !== 'A') {
        setTimeout(() => {
          this.cityFilterList = filterArr;
        }, 0);
      } else {
        this.cityFilterList = filterArr;
      }
      // 重置候选列表
      if (this.showListType) {
        this.showListType = HIDE_DISPLAY;
      }
    },
    // 重置快速选择省份事件
    resetProvinceQuickPick() {
      this.cityFilterList = JSON.parse(JSON.stringify(this.citiesList));
      // 重置候选列表
      if (this.showListType) {
        this.showListType = HIDE_DISPLAY;
      }
    },
    // 模糊搜索
    findCityName(dataSource, searchVal) {
      // debugger;
      for (let i = 0, len = dataSource.length; i < len; i++) {
        if (dataSource[i].name.indexOf(searchVal) !== -1) {
          if (!dataSource[i].firstLetter) {
            this.searchResult.push(dataSource[i]);
          }
        }
        if (dataSource[i].children && dataSource[i].children.length !== 0) {
          this.findCityName(dataSource[i].children, searchVal);
        }
      }
    },
    // 处理搜索事件
    handleSearch(dataSource, searchVal) {
      if (this.searchResult.length === 0) {
        this.findCityName(dataSource, searchVal);
        this.showListType = SEARCH_RESULT_DISPLAY;
        // 非 county 模式下，过滤县/区
        if (!this.countyMode) {
          this.searchResult = this.searchResult.filter(item => {
            return item.provinceCode;
          });
        }
      }
    },
    // 返回键逻辑
    handleBack() {
      // 如果当前是搜索结果界面
      if (this.showListType === SEARCH_RESULT_DISPLAY && this.countyList.length > 0) {
        this.showListType = COUNTY_DISPLAY;
        this.searchResult = [];
      } else {
        this.showListType = HIDE_DISPLAY;
        this.clearData();
      }
    },
    clearData() {
      this.countyList = [];
      this.searchResult = [];
    }
  }
};
</script>
