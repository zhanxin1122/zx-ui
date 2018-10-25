/*
 * @Author: fengjialing
 * @Date: 2018-08-13 14:55:28
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-14 15:46:48
 * @Description:
 */
<template>
  <div>
    <rdm-title title="Button 按钮"
               content="除了type的类型,其它参数基本与el-button一样" />
    <!-- 基本用法 -->
    <rdm-content title="基础用法"
                 :code="codeNormal">
      <el-row class="row-margin">
        <hd-button type="primary"
                   round>按钮</hd-button>
        <hd-button type="common"
                   round>按钮</hd-button>
        <hd-button type="ghost"
                   round>按钮</hd-button>
      </el-row>
      <el-row class="row-margin">
        <hd-button type="primary">按钮</hd-button>
        <hd-button type="common">按钮</hd-button>
        <hd-button type="ghost">按钮</hd-button>
      </el-row>
    </rdm-content>
    <!-- 禁用状态 -->
    <rdm-content title="禁用状态"
                 :code="codeDisabled">
      <hd-button type="primary"
                 disabled>置灰按钮</hd-button>
      <hd-button type="common"
                 disabled>置灰按钮</hd-button>
      <hd-button type="ghost"
                 disabled>置灰按钮</hd-button>
    </rdm-content>
    <!-- 按钮尺寸 -->
    <rdm-content title="按钮尺寸"
                 :code="codeSize">
      <hd-button type="ghost">默认按钮</hd-button>
      <hd-button type="ghost"
                 size="medium">中按钮</hd-button>
      <hd-button type="ghost"
                 size="small">小按钮</hd-button>
      <hd-button type="ghost"
                 size="mini">特小按钮</hd-button>
    </rdm-content>
    <!-- 按钮icon -->
    <rdm-content title="带图标按钮"
                 tips="注意区分 icon 在左右的写法"
                 :code="codeIcon">
      <hd-button type="primary"
                 icon="el-icon-upload2">
        发送
      </hd-button>
      <hd-button type="primary">
        按钮<i class="el-icon-arrow-right el-icon--right"></i>
      </hd-button>
      <hd-button type="primary">
        按钮<i class="el-icon-arrow-down el-icon--right"></i>
      </hd-button>
    </rdm-content>
    <!-- 按钮分级 -->
    <rdm-content title="按钮层级演示"
                 tips=""
                 :code="codeLevelStyle">
      <el-row class="demo-item"
              :gutter="24"
              type="flex"
              align="middle">
        <el-col :span="8"
                align="middle">
          <h3>一级按钮</h3>
        </el-col>
        <el-col :span="8"
                align="middle">
          <h3>二级按钮</h3>
        </el-col>
        <el-col :span="8"
                align="middle">
          <h3>三级按钮</h3>
        </el-col>
      </el-row>
      <el-row class="demo-item"
              :gutter="24"
              type="flex"
              align="middle">
        <el-col :span="4"
                align="middle">
          <span>主样式</span>
        </el-col>
        <el-col :span="4"
                align="middle">
          <span>着重强调样式</span>
        </el-col>
        <el-col :span="4"
                align="middle">
          <span>主样式</span>
        </el-col>
        <el-col :span="4"
                align="middle">
          <span>着重强调样式</span>
        </el-col>
        <el-col :span="4"
                align="middle">
          <span>主样式</span>
        </el-col>
        <el-col :span="4"
                align="middle">
          <span>着重强调样式</span>
        </el-col>
      </el-row>
      <el-row class="demo-item"
              :gutter="24"
              type="flex"
              align="middle">
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="1"
                     round>按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="1"
                     round
                     :emphasis="true">按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="2"
                     round>按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="2"
                     round
                     :emphasis="true">按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="3"
                     round>按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="3"
                     round
                     :emphasis="true">按钮</hd-button>
        </el-col>
      </el-row>
      <el-row class="demo-item"
              :gutter="24"
              type="flex"
              align="middle">
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="1"
                     round
                     :loading="true">按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="1"
                     round
                     :emphasis="true"
                     :loading="true">按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="2"
                     round
                     :loading="true">按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="2"
                     round
                     :emphasis="true"
                     :loading="true">按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="3"
                     round
                     :loading="true">按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="3"
                     round
                     :emphasis="true"
                     :loading="true">按钮</hd-button>
        </el-col>
      </el-row>
      <el-row class="demo-item"
              :gutter="24"
              type="flex"
              align="middle">
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="1"
                     round
                     disabled>按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="1"
                     round
                     :emphasis="true"
                     disabled>按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="2"
                     round
                     disabled>按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="2"
                     round
                     :emphasis="true"
                     disabled>按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="3"
                     round
                     disabled>按钮</hd-button>
        </el-col>
        <el-col :span="4"
                align="middle">
          <hd-button type="primary"
                     level="3"
                     round
                     :emphasis="true"
                     disabled>按钮</hd-button>
        </el-col>
      </el-row>
      <!-- <hd-button type="primary"
                 icon="el-icon-upload2">发送</hd-button>
      <hd-button type="primary">按钮<i class="el-icon-arrow-right el-icon--right"></i></hd-button>
      <hd-button type="primary">按钮<i class="el-icon-arrow-down el-icon--right"></i></hd-button> -->
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList">
    </rdm-param>
  </div>
</template>
<script>
import HdButton from '@/components/button';
import Code from './code.js';
export default {
  components: {
    [HdButton.name]: HdButton
  },
  data() {
    return {
      paramsList: [
        {
          param: 'size',
          explain: '尺寸',
          type: 'String',
          values: 'medium/small/mini',
          default: '--'
        },
        {
          param: 'type',
          explain: '类型',
          type: 'String',
          values: 'primary/common/ghost',
          default: '--'
        },
        {
          param: 'round',
          explain: '是否是圆角按钮',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'circle',
          explain: '是否是圆形按钮',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'loading',
          explain: '是否加载中状态',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'disabled',
          explain: '是否禁用状态',
          type: 'Boolean',
          values: '--',
          default: 'false'
        },
        {
          param: 'icon',
          explain: '图标类名',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'autofocus',
          explain: '是否默认聚焦',
          type: 'Boolean',
          values: '--',
          default: '--'
        },
        {
          param: 'native-type',
          explain: '原生type属性',
          type: 'String',
          values: 'button/submit/reset',
          default: 'button'
        }
      ],
      codeNormal: Code.codeNormal,
      codeDisabled: Code.codeDisabled,
      codeSize: Code.codeSize,
      codeIcon: Code.codeIcon,
      codeLevelStyle: Code.codeLevelStyle
    };
  }
};
</script>
<style scoped>
.row-margin {
  margin-bottom: 10px;
}
</style>
