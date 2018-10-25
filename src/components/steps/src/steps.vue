/*
 * @Author: ChenMi
 * @Date: 2018-07-20 15:06:32
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-23 17:24:50
 * @Description: 
 */

<template>
  <div class="hd-steps"
       :style="'width:' + width">
    <template v-for="(item, index) in list">
      <hd-step-item :name="item.name"
                    :state="item.state"
                    :key="index"
                    :isLast="index === list.length - 1 ? true : false"
                    :isOver="index === list.length - 1 && isOver"></hd-step-item>

    </template>
  </div>
</template>

<script>
import STATE_CONFIG from './state';
import HdStepItem from './steps-item';
export default {
  props: {
    width: String,
    list: Array,
    current: Number
  },
  name: 'HdSteps',
  components: {
    HdStepItem
  },
  data() {
    return {
      STATE: STATE_CONFIG,
      newList: []
    };
  },
  computed: {
    isOver() {
      let res = true;
      this.newList.forEach(element => {
        if (!(element.state === 'finished' || element.state === 'over')) {
          res = false;
        }
      });
      return res;
    }
  },
  created() {
    this.newList = [].concat(this.list);
    if (this.current) {
      this.newList.forEach((element, index) => {
        if (index + 1 < this.current) {
          element.state = 'finished';
        } else if (index + 1 === this.current) {
          element.state = 'pending';
        } else {
          element.state = 'waiting';
        }
      });
    }
  }
};
</script>

<style lang="less">
.hd-steps {
  display: flex;
}
</style>
