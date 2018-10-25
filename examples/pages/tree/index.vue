/*
 * @Author: zhanxin
 * @Date: 2018-08-13 09:09:50
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-22 11:39:44
 * @Description: 树组件说明
 */
<template>
  <div>
    <rdm-title title="树"
               content="基于el-tree进行封装" />
    <rdm-content title="基础用法"
                 :code="code">
      <hd-tree ref="tree1"
               :data="treeData"
               :lineable="true"
               show-checkbox />
    </rdm-content>
    <rdm-content title="添加删除节点"
                 :code="code">
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
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
    <rdm-param title="Props"
               type="attr"
               :list="tProps"></rdm-param>
    <rdm-param title="方法"
               type="method"
               :list="tMethods"></rdm-param>
    <rdm-param title="Events"
               type="method"
               :list="tEvents"></rdm-param>
    <rdm-param title="Scope Slot"
               type="attr"
               :list="scopedSlot"></rdm-param>
  </div>
</template>
<script>
import Vue from 'vue';
import HdTree from '@/components/tree';
import HdMessageBox from '@/components/message-box';
Vue.prototype.$hdPrompt = HdMessageBox.prompt;
export default {
  components: {
    [HdTree.name]: HdTree
  },
  data() {
    return {
      code: `<hd-tree ref="tree1"
        :data="treeData"
        :lineable="true"
        show-checkbox />

<script>
export default {
  data() {
    return {
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
        }
      ]
    }
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
    }
  }
}
< /script>
<style>
.demo-tree {
  flex: 1;
}
.demo-tree-label {
  font-size: 12px;
  color: #000;
}
.demo-tree-operate {
  float: right;
  i {
    color: #ccc;
    margin-left: 6px;
  }
}
</style>`,
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
        }
      ],
      paramsList: [
        {
          param: 'data',
          explain: '展示数据',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'empty-text',
          explain: '内容为空的时候展示的文本',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'node-key',
          explain: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'props',
          explain: '配置选项，具体看下表',
          type: 'Object',
          values: '--',
          default: '--'
        },
        {
          param: 'render-after-expand',
          explain: '是否在第一次展开某个树节点后才渲染其子节点',
          type: 'Boolean',
          values: '--',
          default: 'true'
        },
        {
          param: 'load',
          explain: '加载子树数据的方法，仅当 lazy 属性为true 时生效',
          type: 'Function(node, resolve)',
          values: '--',
          default: '--'
        },
        {
          param: 'render-content',
          explain: '树节点的内容区的渲染 Function',
          type: 'Function(h, { node, data, store }',
          values: '--',
          default: '--'
        },
        {
          param: 'highlight-current',
          explain: '是否高亮当前选中节点，默认值是 false。',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'default-expand-all',
          explain: '是否默认展开所有节点',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'expand-on-click-node',
          explain:
            '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
          type: 'Boolean',
          values: '--',
          default: 'true'
        },
        {
          param: 'check-on-click-node',
          explain: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'auto-expand-parent',
          explain: '展开子节点的时候是否自动展开父节点',
          type: 'Boolean',
          values: '--',
          default: 'true'
        },
        {
          param: 'show-checkbox',
          explain: '节点是否可被选择',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'check-strictly',
          explain: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'default-checked-keys',
          explain: '默认勾选的节点的 key 的数组',
          type: 'Array',
          values: '--',
          default: '--'
        },
        {
          param: 'filter-node-method',
          explain: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
          type: 'Function(value, data, node)',
          values: '--',
          default: '--'
        },
        {
          param: 'accordion',
          explain: '是否每次只打开一个同级树节点展开',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'indent',
          explain: '相邻级节点间的水平缩进，单位为像素',
          type: 'Number',
          values: '--',
          default: '16'
        },
        {
          param: 'lazy',
          explain: '是否懒加载子节点，需与 load 方法结合使用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'draggable',
          explain: '是否懒加载子节点，需与 load 方法结合使用',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'allow-drag',
          explain: '判断节点能否被拖拽',
          type: 'Function(node)',
          values: '--',
          default: '--'
        },
        {
          param: 'allow-drop',
          explain:
            "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
          type: 'Function(draggingNode, dropNode, type)',
          values: '--',
          default: '--'
        },
        {
          param: 'lineable',
          explain: '是否显示目录线',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        }
      ],
      tProps: [
        {
          param: 'label',
          explain: '指定节点标签为节点对象的某个属性值',
          type: 'String, Function(data, node)',
          values: '--',
          default: '--'
        },
        {
          param: 'children',
          explain: '指定子树为节点对象的某个属性值',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'disabled',
          explain: '指定节点选择框是否禁用为节点对象的某个属性值',
          type: 'Boolean, Function(data, node)',
          values: '--',
          default: '--'
        },
        {
          param: 'isLeaf',
          explain: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
          type: 'Boolean, Function(data, node)',
          values: '--',
          default: '--'
        }
      ],
      tMethods: [
        {
          eventName: 'filter',
          explain: '对树节点进行筛选操作',
          params: '接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数'
        },
        {
          eventName: 'updateKeyChildren',
          explain: '通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性',
          params: '(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组'
        },
        {
          eventName: 'getCheckedNodes',
          explain: '若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组',
          params:
            '(leafOnly, includeHalfChecked) 接收两个 Boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false'
        },
        {
          eventName: 'setCheckedNodes',
          explain: '设置目前勾选的节点，使用此方法必须设置 node-key 属性',
          params: '(nodes) 接收勾选节点数据的数组'
        },
        {
          eventName: 'getCheckedKeys',
          explain: '若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组',
          params: 'leafOnly) 接收一个 Boolean 类型的参数，若为 true 则仅返回被选中的叶子节点的 keys，默认值为 false'
        },
        {
          eventName: 'setCheckedKeys',
          explain: '通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性',
          params:
            '(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. Boolean 类型的参数，若为 true 则仅设置叶子节点的选中状态，默认值为 false'
        },
        {
          eventName: 'setChecked',
          explain: '通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性',
          params:
            '(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. Boolean 类型，节点是否选中 3. Boolean 类型，是否设置子节点 ，默认为 false'
        },
        {
          eventName: 'getHalfCheckedNodes',
          explain: '若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组',
          params: '-'
        },
        {
          eventName: 'getHalfCheckedKeys',
          explain: '若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组',
          params: '-'
        },
        {
          eventName: 'getCurrentKey',
          explain: '获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null',
          params: '-'
        },
        {
          eventName: 'getCurrentNode',
          explain: '获取当前被选中节点的 node，若没有节点被选中则返回 null',
          params: ''
        },
        {
          eventName: 'getNode',
          explain: '根据 data 或者 key 拿到 Tree 组件中的 node',
          params: '(data) 要获得 node 的 key 或者 data'
        },
        {
          eventName: 'remove',
          explain: '删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性',
          params: '(data) 要删除的节点的 data 或者 node'
        },
        {
          eventName: 'append',
          explain: '为 Tree 中的一个节点追加一个子节点',
          params: '(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node'
        },
        {
          eventName: 'insertBefore',
          explain: '为 Tree 的一个节点的前面增加一个节点',
          params:
            '(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node'
        },
        {
          eventName: 'insertAfter',
          explain: '为 Tree 的一个节点的后面增加一个节点',
          params:
            '(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node'
        }
      ],
      tEvents: [
        {
          eventName: 'node-click',
          explain: '节点被点击时的回调',
          params: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。'
        },
        {
          eventName: 'node-contextmenu',
          explain: '当某一节点被鼠标右键点击时会触发该事件',
          params:
            '共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。'
        },
        {
          eventName: 'check',
          explain: '当复选框被点击的时候触发',
          params:
            '共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性'
        },
        {
          eventName: 'current-change',
          explain: '当前选中节点变化时触发的事件',
          params: '共两个参数，依次为：当前节点的数据，当前节点的 Node 对象'
        },
        {
          eventName: 'node-expand',
          explain: '节点被展开时触发的事件',
          params: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身'
        },
        {
          eventName: 'node-collapse',
          explain: '节点被关闭时触发的事件',
          params: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身'
        },
        {
          eventName: 'node-drag-start',
          explain: '节点开始拖拽时触发的事件',
          params: '共两个参数，依次为：被拖拽节点对应的 Node、event'
        },
        {
          eventName: 'node-drag-enter',
          explain: '拖拽进入其他节点时触发的事件',
          params: '共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event'
        },
        {
          eventName: 'node-drag-leave',
          explain: '拖拽离开某个节点时触发的事件',
          params: '共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event'
        },
        {
          eventName: 'node-drag-over',
          explain: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）',
          params: '共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event'
        },
        {
          eventName: 'node-drag-end',
          explain: '拖拽结束时（可能未成功）触发的事件',
          params:
            '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event'
        },
        {
          eventName: 'node-drop',
          explain: '拖拽成功完成时触发的事件',
          params:
            '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event'
        }
      ],
      scopedSlot: [
        {
          param: '--',
          explain: '自定义树节点的内容，参数为 { node, data }'
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
    }
  }
};
</script>
<style lang="less" scoped>
.demo-tree {
  flex: 1;
}
.demo-tree-label {
  font-size: 12px;
  color: #000;
}
.demo-tree-operate {
  float: right;
  i {
    color: #ccc;
    margin-left: 6px;
  }
}
</style>
