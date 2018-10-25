<template>
  <div>
<hd-tabs v-model="activeName5" tab-position="top" type="fillRect">
  <hd-tab-pane label="待检查" name="1">待检查</hd-tab-pane>
  <hd-tab-pane label="待复查" name="2">待复查</hd-tab-pane>
  <hd-tab-pane label="待验收" name="3">待验收</hd-tab-pane>
  <hd-tab-pane label="已通过" name="4">已通过</hd-tab-pane>
  </hd-tabs>
  </div>
</template>
<script>
import HdTabs from '@/components/tabs';
import HdTabPane from '@/components/tab-pane';
export default {
  components: {
    [HdTabPane.name]: HdTabPane,
    [HdTabs.name]: HdTabs
  },
  data() {
    return {
      activeName5: '1'
    };
  }
};
</script>
<style>
.round-style {
  display: inline-block;
  margin-left: 20px;
}
</style>
