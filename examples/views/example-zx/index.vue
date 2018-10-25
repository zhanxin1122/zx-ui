/*
 * @Author: zhanxin
 * @Date: 2018-07-17 10:38:58
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-27 15:15:07
 * @Description: 
 */
<template>
  <div class="intro-box">
    <h3 class="comp-title">拖拽表格</h3>
    <hd-draggable element="el-table"
                  :list="tableData"
                  :options="dragOptions"
                  dragSelector="tbody"
                  @end='endDrag'
                  :data="tableData"
                  border>
      <el-table-column prop="name"
                       label="名字" />
      <el-table-column prop="country"
                       label="国家" />
      <el-table-column prop="position"
                       label="职位" />
      <el-table-column prop="birth"
                       label="生日" />
    </hd-draggable>
    <h3 class="comp-title">弹出框</h3>
    <el-button @click="msgBox('1')">弹出框</el-button>
    <el-button @click="msgBox('2')">确认框</el-button>
    <el-button @click="msgBox('3')">气泡框</el-button>
    <el-button @click="msgBox('4')">输入提示框</el-button>
    <h3 class="comp-title">柱状图</h3>
    <hd-bar title="示例1"
                    :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                    :data="[120, 200, 150, 80, 70, 110, 130]"
                    :values="['value']">
    </hd-bar>
    <hd-bar title="示例2"
                    :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                    :data="[
                      [120, 200, 150, 80, 70, 110, 130],
                      [140, 100, 130, 100, 120, 160, 200]
                    ]"
                    :values="['value1', 'value2']">
    </hd-bar>
    <hd-bar title="示例3"
                    :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                    :data="[
                      [120, 200, 150, 80, 70, 110, 130],
                      [140, 100, 130, 100, 120, 160, 200],
                      [110, 120, 140, 130, 190, 60, 100]
                    ]"
                    :values="['value1', 'value2', 'value3']">
    </hd-bar>
    <hd-bar title="示例4"
                    :isStack="true"
                    :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                    :data="[
                      [120, 200, 150, 80, 70, 110, 130],
                      [140, 100, 130, 100, 120, 160, 200],
                      [110, 120, 140, 130, 190, 60, 100]
                    ]"
                    :values="['value1', 'value2', 'value3']">
    </hd-bar>
    <hd-bar title="示例5"
                    :isSwitch="true"
                    :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                    :data="[
                      [120, 200, 150, 80, 70, 110, 130],
                      [140, 100, 130, 100, 120, 160, 200]
                    ]"
                    :values="['value1', 'value2']">
    </hd-bar>
    <hd-bar title="示例6"
                    :isStack="true"
                    :isSwitch="true"
                    :xAxis="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                    :data="[
                      [120, 200, 150, 80, 70, 110, 130],
                      [140, 100, 130, 100, 120, 160, 200],
                      [110, 120, 140, 130, 190, 60, 100]
                    ]"
                    :options="{
                      title: {
                        textStyle: {
                          fontWeight: 'bold'
                        }
                      },
                      legend: {
                        textStyle: {
                          color: 'red'
                        }
                      }
                    }"
                    :values="['value1', 'value2', 'value3']">
    </hd-bar>
    <h3 class="comp-title">雷达图</h3>
    <hd-radar title="示例1"
                      :values="['状态1', '状态2', '状态3']"
                      :items="[{
                        name: '元素1',
                        max: 100
                      }, {
                        name: '元素2',
                        max: 100
                      }, {
                        name: '元素3',
                        max: 100
                      }, {
                        name: '元素4',
                        max: 100
                      }, {
                        name: '元素5',
                        max: 100
                      }]"
                      :data="[[30, 69, 24, 45, 23],[23, 47, 87, 93, 33], [73, 45, 53, 51, 22]]"></hd-radar>
    <h3 class="comp-title">switch开关</h3>
    <div class="switch-warpper">
      <hd-switch v-model="s1" />
      <hd-switch v-model="s1"
                 type="text" />
      <hd-switch v-model="s1"
                 type="icon" />
      <hd-switch v-model="s1"
                 type="empty" />
      <hd-switch v-model="s1"
                 type="scale" />
      <hd-switch v-model="s1"
                 type="rect"
                 :labels="['启动', '冻结']" />
      <hd-switch v-model="s1"
                 type="extarnal"
                 :activeTexts="['已开启', '已关闭']" />
    </div>
    <h3 class="comp-title">Tree</h3>
    <hd-tree ref="tree1"
             :data="treeData"
             :lineable="true"
             show-checkbox>
    </hd-tree>
    <hd-tree ref="tree2"
             :data="treeData2"
             show-checkbox>
      <div class="demo-tree"
           slot-scope="{ node, data }">
        <span class="demo-tree-label">{{ node.label }}</span>
        <span class="demo-tree-operate">
          <i class="el-icon-circle-plus-outline"
             @click.stop="addNode(data)"></i>
          <i class="el-icon-circle-close-outline"
             @click.stop="deleteNode(node, data)"></i>
        </span>
      </div>
    </hd-tree>
  </div>
</template>
<script>
import Vue from 'vue';
import './index.less';
// import a, { Draggable } from 'hd-ui';
import HdDraggable from '@/components/draggable';
import HdMessageBox from '@/components/message-box';
import Bar from '@/components/bar';
import Radar from '@/components/radar';
import HdSwitch from '@/components/switch';
import HdTree from '@/components/tree';
Vue.prototype.$hdAlert = HdMessageBox.alert;
Vue.prototype.$hdConfirm = HdMessageBox.confirm;
Vue.prototype.$hdToast = HdMessageBox.toast;
Vue.prototype.$hdPrompt = HdMessageBox.prompt;
export default {
  components: {
    [HdDraggable.name]: HdDraggable,
    [Bar.name]: Bar,
    [Radar.name]: Radar,
    [HdSwitch.name]: HdSwitch,
    [HdTree.name]: HdTree
  },
  data() {
    return {
      flag: true,
      tableData: [
        {
          name: '汪峰',
          country: '中国',
          position: 'web工程师',
          birth: '2018-08-08'
        },
        {
          name: '吉克隽逸',
          country: '哈萨克斯塔',
          position: 'web工1程师',
          birth: '2017-11-11'
        }
      ],
      dragOptions: {
        draggable: '.el-table__row'
      },
      s1: true,
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      treeData2: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
    };
  },
  methods: {
    addNode(data) {
      this.$hdPrompt({
        title: '提示',
        sure: v => {
          const newChild = { id: '', label: v, children: [] };
          if (!data.children) {
            this.$set(data, 'children', []);
          }
          data.children.push(newChild);
        }
      });
    },
    deleteNode(node, data) {
      this.$refs.tree2.remove(node, data);
    },
    endDrag(data) {
      console.log('data: ', data);
      console.log(this.tableData);
    },
    msgBox(type) {
      if (type === '1') {
        this.$hdAlert({
          icon: 'warning',
          title: '提示',
          content: '你好',
          close: true,
          closeModal: false
        });
      } else if (type === '2') {
        this.$hdConfirm({
          title: '提示',
          content: '你好吗？',
          secondTitle: '二级标题',
          sureBtnTxt: '我知道了',
          sure: () => {
            console.log('确定');
          },
          cancel: () => {
            console.log('取消');
          }
        });
      } else if (type === '3') {
        this.$hdToast({
          secondTitle: '二级标题',
          icon: 'error',
          content: '你好呀',
          close: true
        });
      } else {
        this.$hdPrompt({
          title: '提示',
          sure: v => {
            console.log(v);
          },
          cancel: () => {
            console.log('cancel');
          }
        });
      }
    }
  },
  watch: {
    s1(v) {
      console.log(v);
    }
  }
};
</script>
