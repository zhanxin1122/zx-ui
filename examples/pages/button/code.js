/*
 * @Author: fengjialing
 * @Date: 2018-08-14 09:05:25
 * @LastEditors: fengjialing
 * @LastEditTime: 2018-08-14 09:06:21
 * @Description:
 */
export const codeNormal = `<template>
  <div>
    <el-row class="row-margin">
      <hd-button type="primary" round>按钮</hd-button>
      <hd-button type="common" round>按钮</hd-button>
      <hd-button type="ghost" round>按钮</hd-button>
    </el-row>
    <el-row class="row-margin">
      <hd-button type="primary">按钮</hd-button>
      <hd-button type="common">按钮</hd-button>
      <hd-button type="ghost">按钮</hd-button>
    </el-row>
  </div>
</template>
<style>
.row-margin{
  margin-bottom:10px;
}
</style>`;

export const codeDisabled = `<template>
  <div>
    <hd-button type="primary" disabled>置灰按钮</hd-button>
    <hd-button type="common" disabled>置灰按钮</hd-button>
    <hd-button type="ghost" disabled>置灰按钮</hd-button>
  </div>
</template>`;

export const codeSize = `<template>
  <div>
    <hd-button type="ghost">默认按钮</hd-button>
    <hd-button type="ghost" size="medium">中按钮</hd-button>
    <hd-button type="ghost" size="small">小按钮</hd-button>
    <hd-button type="ghost" size="mini">特小按钮</hd-button>
  </div>
</template>`;

const codeIcon = `
<template>
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
</template>
`;

export const codeLevelStyle = `
<template>
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
</template>
`;
const code = {
  codeNormal,
  codeSize,
  codeDisabled,
  codeIcon,
  codeLevelStyle
};
export default code;
