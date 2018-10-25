export const codeBottomLine = `
<hd-tabs v-model="activeName1" type="bottomLine">
  <hd-tab-pane label="待检查" name="1">待检查</hd-tab-pane>
  <hd-tab-pane label="待复查" name="2">待复查</hd-tab-pane>
  <hd-tab-pane label="待验收" name="3">待验收</hd-tab-pane>
  <hd-tab-pane label="已通过" name="4">已通过</hd-tab-pane>
</hd-tabs>
<script>
export default{
  data() {
    return {
      activeName1:'1'
    };
  }
}
</script>`;

export const codeStrokeRect = `<hd-tabs v-model="activeName2" type="strokeRect">
  <hd-tab-pane label="待检查" name="1">待检查</hd-tab-pane>
  <hd-tab-pane label="待复查" name="2">待复查</hd-tab-pane>
  <hd-tab-pane label="待验收" name="3">待验收</hd-tab-pane>
  <hd-tab-pane label="已通过" name="4">已通过</hd-tab-pane>
</hd-tabs>
<script>
export default{
  data() {
    return {
      activeName2:'1'
    };
  }
}
</script>`;

export const codeTopLine = `<hd-tabs v-model="activeName3"  type="topLine">
  <hd-tab-pane label="待检查" name="1">待检查</hd-tab-pane>
  <hd-tab-pane label="待复查" name="2">待复查</hd-tab-pane>
  <hd-tab-pane label="待验收" name="3">待验收</hd-tab-pane>
  <hd-tab-pane label="已通过" name="4">已通过</hd-tab-pane>
</hd-tabs>
<script>
export default{
  data() {
    return {
      activeName3:'1'
    };
  }
}
</script>`;

export const codeNormal = `<hd-tabs v-model="activeName4">
  <hd-tab-pane label="待检查" name="1">待检查</hd-tab-pane>
  <hd-tab-pane label="待复查" name="2">待复查</hd-tab-pane>
  <hd-tab-pane label="待验收" name="3">待验收</hd-tab-pane>
  <hd-tab-pane label="已通过" name="4">已通过</hd-tab-pane>
</hd-tabs>
<script>
export default{
  data() {
    return {
      activeName4:'1'
    };
  }
}
</script>`;

export const codeFillRect = `<hd-tabs v-model="activeName5"  type="fillRect">
  <hd-tab-pane label="待检查" name="1">待检查</hd-tab-pane>
  <hd-tab-pane label="待复查" name="2">待复查</hd-tab-pane>
  <hd-tab-pane label="待验收" name="3">待验收</hd-tab-pane>
  <hd-tab-pane label="已通过" name="4">已通过</hd-tab-pane>
  </hd-tabs>
<script>
export default{
  data() {
    return {
      activeName5:'1'
    };
  }
}
</script>`;

export const codeYnamicBottomLine1 = `<div class="hd-ynamic-content">
<hd-tabs class="hd-ynamic-label-tabs" type="ynamicBottomLine" v-model="activeName6" closable @tab-remove="removeTab">
  <hd-tab-pane
    v-for="(item) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name">
  </hd-tab-pane>
</hd-tabs>
<div class="add-label-tabs" style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(activeName6)">
    添加{{addTabName}}
  </el-button>
</div
<script>
export default{
  data() {
    return {
      activeName6:'1',
      editableTabs: [
        {
          title: '资金单1',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: '资金单2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      addTabName: '资金单',
      tabIndex: 2
    };
    methods: {
      addTab() {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: this.addTabName,
          name: newTabName,
          content: 'New Tab content'
        });
        this.activeName6 = newTabName;
      },
      removeTab(targetName) {
        console.log(targetName, '--');
        let tabs = this.editableTabs;
        let activeName = this.activeName6;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
  
        this.activeName6 = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
}
</script>`;

export const codeYnamicBottomLine2 = `<div class="hd-ynamic-content remove-background">
<hd-tabs class="hd-ynamic-label-tabs" type="ynamicBottomLine" v-model="activeName6" closable @tab-remove="removeTab">
  <hd-tab-pane
    v-for="(item) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name">
  </hd-tab-pane>
</hd-tabs>
<div class="add-label-tabs" style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(activeName6)">
    添加{{addTabName}}
  </el-button>
</div
<script>
export default{
  data() {
    return {
      activeName6:'1',
      editableTabs: [
        {
          title: '资金单1',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: '资金单2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      addTabName: '资金单',
      tabIndex: 2
    };
    methods: {
      addTab() {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: this.addTabName,
          name: newTabName,
          content: 'New Tab content'
        });
        this.activeName6 = newTabName;
      },
      removeTab(targetName) {
        console.log(targetName, '--');
        let tabs = this.editableTabs;
        let activeName = this.activeName6;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
  
        this.activeName6 = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
}
</script>
<style lang="less" scoped>
.remove-background {
  .hd-ynamic-label-tabs {
    .el-tabs__item.is-active, .el-tabs__item {
      background-color: initial !important;     
      border-left: none; 
    }
  }
}
<style>`;
