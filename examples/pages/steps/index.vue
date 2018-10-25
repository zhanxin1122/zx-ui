/*
 * @Author: ChenMi
 * @Date: 2018-08-13 10:56:52
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-08-13 10:57:20
 * @Description: 
 */

 <template>
  <div class="demo demo-steps">
    <rdm-title title="Steps/流程" />
    <rdm-content title="当前节点"
                 :code="tpl.code1">
      <hd-steps class="hd-steps section__component"
                width="50%"
                :list="step1.list"
                :current="step1.current"></hd-steps>
    </rdm-content>
    <rdm-content title="流程完成"
                 :code="tpl.code2">
      <hd-steps class="hd-steps section__component"
                width="50%"
                :list="step2.list"></hd-steps>
    </rdm-content>
    <rdm-content title="节点退回"
                 :code="tpl.code3">
      <hd-steps class="hd-steps section__component"
                width="50%"
                :list="step3.list"></hd-steps>
    </rdm-content>
    <rdm-content title="节点不通过"
                 :code="tpl.code4">
      <hd-steps class="hd-steps section__component"
                width="50%"
                :list="step4.list"></hd-steps>
    </rdm-content>
    <rdm-content title="节点状态">
      <div class="step-item"
           v-for="(item, index) in stateObj"
           :key="index">
        <i class="iconfont"
           :class="'hd-icon-' + item.icon"
           :style="{color: item.color, fontSize: item.fontSize}" />
        <span class="step-item__label">{{item.name}}</span>
      </div>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="attrList"></rdm-param>
    <rdm-param title="数据列表"
               explain="list数组元素"
               type="attr"
               :list="listAttrList"></rdm-param>
  </div>
</template>

<script>
import HdSteps from '@/components/steps/src/steps';
import HdStep from '@/components/steps/src/steps-item';
import STATE_CONFIG from '@/components/steps/src/state';
import * as tpl from './code';
export default {
  components: {
    HdSteps,
    HdStep
  },
  data() {
    return {
      step1: {
        list: [
          {
            name: '项目上报',
            state: 'pending',
            icon: '',
            color: '',
            fontSize: ''
          },
          {
            name: '最终批示同意',
            state: 'waiting'
          },
          {
            name: '签约',
            state: 'waiting'
          },
          {
            name: '取得',
            state: 'waiting'
          },
          {
            name: '履约完毕',
            state: 'waiting'
          }
        ],
        current: 3 // 当前所在节点，默认当前为PENDING 之前为FINISHED 之后为WAITING
      },
      step2: {
        list: [
          {
            name: '项目上报',
            state: 'finished',
            icon: '',
            color: '',
            fontSize: ''
          },
          {
            name: '最终批示同意',
            state: 'finished'
          },
          {
            name: '签约',
            state: 'finished'
          },
          {
            name: '取得',
            state: 'finished'
          },
          {
            name: '履约完毕',
            state: 'finished'
          }
        ]
      },
      step3: {
        list: [
          {
            name: '节点一',
            state: 'finished',
            icon: '',
            color: '',
            fontSize: ''
          },
          {
            name: '节点二',
            state: 'finished'
          },
          {
            name: '节点三',
            state: 'finished'
          },
          {
            name: '节点四',
            state: 'back'
          },
          {
            name: '结束',
            state: 'waiting'
          }
        ]
      },
      step4: {
        list: [
          {
            name: '节点一',
            state: 'finished',
            icon: '',
            color: '',
            fontSize: ''
          },
          {
            name: '节点二',
            state: 'finished'
          },
          {
            name: '节点三',
            state: 'finished'
          },
          {
            name: '节点四',
            state: 'reject'
          },
          {
            name: '结束',
            state: 'waiting'
          }
        ]
      },
      stateObj: STATE_CONFIG,
      tpl: tpl,
      attrList: [
        {
          param: 'width',
          explain: '流程条总宽度',
          type: 'String',
          values: '百分比/像素值',
          default: ''
        },
        {
          param: 'list',
          explain: '数据列表',
          type: 'Array',
          values: '详见下文 [数据列表]',
          default: '[]'
        },
        {
          param: 'current',
          explain:
            '设置当前节点，默认当前为pending状态，之前的节点为finished之后的节点为waiting状态。优先级大于list[i].state',
          type: 'Number',
          values: '',
          default: ''
        }
      ],
      listAttrList: [
        {
          param: 'name',
          explain: '节点名称',
          type: 'String',
          values: '',
          default: ''
        },
        {
          param: 'state',
          explain: '节点状态',
          type: 'String',
          values: 'waiting/pending/finished/back/reject/over（未开始/当前节点/已结束/退回/不通过/流程结束）',
          default: 'waiting'
        },
        {
          param: 'icon',
          explain: '自定义icon',
          type: 'String',
          values: '',
          default: 'hd-icon-${节点状态}'
        },
        {
          param: 'color',
          explain: '自定义icon颜色',
          type: 'String',
          values: '',
          default: '默认颜色'
        },
        {
          param: 'fontSize',
          explain: '自定义字号',
          type: 'String',
          values: '',
          default: '18px'
        }
      ]
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
