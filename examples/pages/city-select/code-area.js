/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-21 15:00:39
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-21 15:00:39
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */
const normalCode = `
<template>
  <hd-city-select v-model="value1"></hd-city-select>
</template>
<script>
export default {
  data() {
    return {
      value1: {}
    };
  }
};
</script>
`;
const countyModeCode = `
<template>
<hd-city-select v-model="value2"
                :county-mode="true">
</hd-city-select>
</template>
<script>
export default {
  data() {
    return {
      value2: {}
    };
  }
};
</script>
`;

let code = {
  normalCode,
  countyModeCode
};

export default code;
