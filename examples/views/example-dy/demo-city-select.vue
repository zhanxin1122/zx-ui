/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-19 10:25:26
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-07-19 17:10:08
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

<template>
  <div class="demo-city-select-wrapper">
    <h1 class="first-title">City-Select／城市选择器</h1>
    <div class="demo-wrapper">
      <hd-city-select :cityList="cityList"
                      v-model="selectCity">

      </hd-city-select>
    </div>
  </div>
</template>
<script>
import HdCitySelect from '@/components/city-select';
// import { getCity } from '@/server/city.js';
export default {
  name: 'DemoCitySelect',
  components: {
    HdCitySelect
  },
  data() {
    return {
      cityList: [],
      selectCity: ''
    };
  },
  created() {
    this.getCityList();
  },
  methods: {
    getCityList() {
      // getCity().then(res => {
      //   this.cityList = res;
      // });
    }
  }
};
</script>
