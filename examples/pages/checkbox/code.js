/*
 * @Author: fengjialing
 * @Date: 2018-08-15 14:26:00
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-15 14:26:00
 * @Description: 
 */
export const codeNormal = `<template>
  <div>3d0f5b1b44f8eb33457a8ede00caa5b6d9c52a4e
    <hd-checkbox v-model="checked1"></hd-checkbox>
  </div>
</template>
<script>
export default{
  data(){
    return {
      checked1:true
    }
  }
}
</script>`;

export const codeDisabled = `<template>
  <div>
    <hd-checkbox v-model="checked2" disabled>备选项</hd-checkbox>
    <hd-checkbox v-model="checked3" disabled>备选项</hd-checkbox>
  </div>
</template>
<script>
export default{
  data(){
    return {
      checked2:true,
      checked3:false
    }
  }
}
</script>`;

export const codeBorder = `<template>
  <div>
    <hd-checkbox v-model="checked4" border>备选项</hd-checkbox>
    <hd-checkbox v-model="checked5" size="medium" border>备选项</hd-checkbox>
    <hd-checkbox v-model="checked6" size="small" border>备选项</hd-checkbox>
    <hd-checkbox v-model="checked7" size="mini" border>备选项</hd-checkbox>
  </div>
</template>
<script>
export default{
  data(){
    return {
      checked4: true,
      checked5: true,
      checked6: true,
      checked7:true,
    }
  }
}
</script>`;
