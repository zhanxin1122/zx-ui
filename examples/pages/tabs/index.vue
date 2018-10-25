/*
 * @Author: fengjialing
 * @Date: 2018-08-14 11:57:06
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-14 17:05:46
 * @Description: 
 */
<template>
  <div>
    <rdm-title title="tabs 标签页"
               content="" />
    <rdm-content title="标签类型一"
                 :code="codeNormal">
      <hd-tabs v-model="activeName1">
        <hd-tab-pane label="待检查"
                     name="1">待检查</hd-tab-pane>
        <hd-tab-pane label="待复查"
                     name="2">待复查</hd-tab-pane>
        <hd-tab-pane label="待验收"
                     name="3">待验收</hd-tab-pane>
        <hd-tab-pane label="已通过"
                     name="4">已通过</hd-tab-pane>
      </hd-tabs>
    </rdm-content>
    <rdm-content title="标签类型二"
                 :code="codeStrokeRect">
      <hd-tabs v-model="activeName2"
               type="strokeRect">
        <hd-tab-pane label="待检查"
                     name="1">待检查</hd-tab-pane>
        <hd-tab-pane label="待复查"
                     name="2">待复查</hd-tab-pane>
        <hd-tab-pane label="待验收"
                     name="3">待验收</hd-tab-pane>
        <hd-tab-pane label="已通过"
                     name="4">已通过</hd-tab-pane>
      </hd-tabs>
    </rdm-content>
    <rdm-content title="标签类型三"
                 :code="codeTopLine">
      <hd-tabs v-model="activeName3"
               type="topLine">
        <hd-tab-pane label="待检查"
                     name="1">待检查</hd-tab-pane>
        <hd-tab-pane label="待复查"
                     name="2">待复查</hd-tab-pane>
        <hd-tab-pane label="待验收"
                     name="3">待验收</hd-tab-pane>
        <hd-tab-pane label="已通过"
                     name="4">已通过</hd-tab-pane>
      </hd-tabs>
    </rdm-content>
    <rdm-content title="标签类型四"
                 :code="codeBottomLine">
      <hd-tabs v-model="activeName4"
               type="bottomLine">
        <hd-tab-pane label="待检查"
                     name="1">待检查</hd-tab-pane>
        <hd-tab-pane label="待复查"
                     name="2">待复查</hd-tab-pane>
        <hd-tab-pane label="待验收"
                     name="3">待验收</hd-tab-pane>
        <hd-tab-pane label="已通过"
                     name="4">已通过</hd-tab-pane>
      </hd-tabs>
    </rdm-content>
    <rdm-content title="标签类型五"
                 :code="codeFillRect">
      <hd-tabs v-model="activeName5"
               type="fillRect">
        <hd-tab-pane label="待检查"
                     name="1">待检查</hd-tab-pane>
        <hd-tab-pane label="待复查"
                     name="2">待复查</hd-tab-pane>
        <hd-tab-pane label="待验收"
                     name="3">待验收</hd-tab-pane>
        <hd-tab-pane label="已通过"
                     name="4">已通过</hd-tab-pane>
      </hd-tabs>
    </rdm-content>
    <rdm-content title="标签类型六-动态增减标签页1"
                 :code="codeYnamicBottomLine1">
      <div class="hd-ynamic-content">
        <hd-tabs class="hd-ynamic-label-tabs"
                 type="ynamicBottomLine"
                 v-model="activeName6"
                 closable
                 @tab-remove="removeTab">
          <hd-tab-pane v-for="(item) in editableTabs"
                       :key="item.name"
                       :label="item.title"
                       :name="item.name">
          </hd-tab-pane>
        </hd-tabs>
        <div class="add-label-tabs"
             style="margin-bottom: 20px;">
          <el-button size="small"
                     @click="addTab(activeName6)">
            添加{{addTabName}}
          </el-button>
        </div>
      </div>
    </rdm-content>
    <rdm-content title="标签类型六-动态增减标签页2"
                 :code="codeYnamicBottomLine2">
      <div class="hd-ynamic-content remove-background">
        <hd-tabs class="hd-ynamic-label-tabs"
                 type="ynamicBottomLine"
                 v-model="activeName6"
                 closable
                 @tab-remove="removeTab">
          <hd-tab-pane v-for="(item) in editableTabs"
                       :key="item.name"
                       :label="item.title"
                       :name="item.name">
          </hd-tab-pane>
        </hd-tabs>
        <div class="add-label-tabs"
             style="margin-bottom: 20px;">
          <el-button size="small"
                     @click="addTab(activeName6)">
            添加{{addTabName}}
          </el-button>
        </div>
      </div>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
    <rdm-param title="Table Events"
               type="method"
               :list="paramsList1"></rdm-param>
    <rdm-param title="Tab-pane Attributes"
               type="attr"
               :list="paramsList2"></rdm-param>

  </div>
</template>

<script>
import HdTabs from '@/components/tabs';
import HdTabPane from '@/components/tab-pane';
import {
  codeNormal,
  codeStrokeRect,
  codeTopLine,
  codeBottomLine,
  codeFillRect,
  codeYnamicBottomLine1,
  codeYnamicBottomLine2
} from './code.js';
export default {
  components: {
    [HdTabs.name]: HdTabs,
    [HdTabPane.name]: HdTabPane
  },
  data() {
    return {
      activeName1: '1',
      activeName2: '1',
      activeName3: '1',
      activeName4: '1',
      activeName5: '1',
      activeName6: '1',
      codeBottomLine: codeBottomLine,
      codeStrokeRect: codeStrokeRect,
      codeTopLine: codeTopLine,
      codeNormal: codeNormal,
      codeFillRect: codeFillRect,
      codeYnamicBottomLine1: codeYnamicBottomLine1,
      codeYnamicBottomLine2: codeYnamicBottomLine2,
      paramsList: [
        {
          param: 'type',
          explain: '风格类型',
          type: 'String',
          values: 'normal,strokeRect,fillRect,topLine,bottomLine,ynamicBottomLine',
          default: 'normal'
        },
        {
          param: 'closable',
          explain: '标签是否可关闭',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'addable',
          explain: '标签是否可增加',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'editable',
          explain: '标签是否可增加和关闭',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'value',
          explain: '绑定值，选中选项卡的 name',
          type: 'String',
          values: '--',
          default: '第一个选项卡的 name'
        },
        {
          param: 'tab-position',
          explain: '选项卡所在位置',
          type: 'String',
          values: 'top/right/bottom/left',
          default: 'top'
        },
        {
          param: 'stretch',
          explain: '标签的宽度是否自撑开',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'before-leave',
          explain: '切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
          type: 'Function(activeName, oldActiveName)',
          values: '--',
          default: '--'
        }
      ],
      paramsList1: [
        {
          eventName: 'tab-click',
          explain: 'tab 被选中时触发',
          params: '被选中的标签 tab 实例'
        },
        {
          eventName: 'tab-remove',
          explain: '点击 tab 移除按钮后触发',
          params: '被删除的标签的 name'
        },
        {
          eventName: 'tab-add',
          explain: '点击 tabs 的新增按钮后触发',
          params: '--'
        },
        {
          eventName: 'edit',
          explain: '点击 tabs 的新增按钮或 tab 被关闭后触发',
          params: '(targetName, action)'
        }
      ],
      paramsList2: [
        {
          param: 'label',
          explain: '选项卡标题',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'disabled',
          explain: '是否禁用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'name',
          explain: '与选项卡 activeName 对应的标识符，表示选项卡别名',
          type: 'String',
          values: '--',
          default: "该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'"
        },
        {
          param: 'closable',
          explain: '标签是否可关闭',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'lazy',
          explain: '标签是否延迟渲染',
          type: 'Boolean',
          values: '--',
          default: 'false'
        }
      ],
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
  },
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
};
</script>
