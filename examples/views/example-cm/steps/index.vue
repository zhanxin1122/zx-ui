<template>
  <div class="demo-steps">
    <div class="demo__header">
      Steps/流程
    </div>
    <div class="demo__body">
      <section>
        <div class="section__header">流程步骤</div>
        <div class="section__body">
          <template v-for="(item, index) in data">
            <hd-steps class="hd-steps section__component"
                      width="50%"
                      :list="item.list"
                      :key="index"
                      :current="item.current"></hd-steps>
          </template>
        </div>
      </section>

      <section>
        <div class="section__header">流程状态</div>
        <div class="section__body">
          <div class="step-item"
               v-for="(item, index) in stateObj"
               :key="index">
            <i class="iconfont"
               :class="'hd-icon-' + item.icon"
               :style="{color: item.color, fontSize: item.fontSize}" />
            <span class="step-item__label">{{item.name}}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HdSteps from '@/components/steps/src/steps';
import HdStep from '@/components/steps/src/steps-item';
import STATE_CONFIG from '@/components/steps/src/state';
import data from './data';
export default {
  components: {
    HdSteps,
    HdStep
  },
  data() {
    return {
      data: data,
      stateObj: STATE_CONFIG
    };
  }
};
</script>

<style lang="less">
.step-item {
  display: inline-block;
  margin-right: 20px;
  &__label {
    margin-left: 6px;
  }
}
</style>
