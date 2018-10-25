/*
 * @Author: fengjialing
 * @Date: 2018-08-14 09:07:33
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-14 09:30:42
 * @Description: 
 */
export const codeNormal = `<template>
  <div>
    <hd-radio v-model="radio" label="1"></hd-radio>
    <hd-radio v-model="radio" label="2"></hd-radio>
  </div>
</template>
<script>
export default{
  data(){
    return {
      radio:'1'
    }
  }
}
</script>`;

export const codeDisabled = `<template>
  <div>
    <hd-radio disabled v-model="radio1" label="1"></hd-radio>
    <hd-radio disabled v-model="radio1" label="2"></hd-radio>
  </div>
</template>
<script>
export default{
  data(){
    return {
      radio1:'1'
    }
  }
}
</script>`;

export const codeBorder = `<template>
  <div>
    <hd-radio v-model="radio3" label="1" border>备选项</hd-radio>
    <hd-radio v-model="radio4" label="1" size="medium" border>备选项</hd-radio>
    <hd-radio v-model="radio5" label="1" size="small" border>备选项</hd-radio>
    <hd-radio v-model="radio5" label="1" size="mini" border>备选项</hd-radio>
  </div>
</template>
<script>
export default{
  data(){
    return {
      radio3:'1',
      radio4:'1',
      radio5:'1'
    }
  }
}
</script>`;
