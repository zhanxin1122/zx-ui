<template>
  <div>
    <section class="content">
      <h2 class="first-title"> Color /颜色</h2>
      <h3 class="second-title">主色调</h3>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="demo-color-box bg-main">Base
            <div class="value">#D7000F</div>
          </div>
        </el-col>
      </el-row>
      <h3 class="second-title">基础配色</h3>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="demo-color-box bg-success">Success
            <div class="value">#09BB07</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="demo-color-box bg-warning">Warning
            <div class="value">#FFBE00</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="demo-color-box bg-hint">Hint
            <div class="value">#F43530</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="demo-color-box bg-match">Info
            <div class="value">#0076FF</div>
          </div>
        </el-col>
      </el-row>
    </section>
    <section class="content">
      <h2 class="first-title"> Gradient /渐变色</h2>
      <h3 class="second-title">主色系渐变</h3>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="demo-color-box base-gradient">Green
            <div class="value">#D7000F</div>
          </div>
        </el-col>
      </el-row>
      <h3 class="second-title">同色系渐变</h3>
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="demo-color-box yellow-gradient">
          </div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box blue-gradient"></div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box pink-gradient">
          </div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box purple-gradient">
          </div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box blue-gradient">
          </div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box green-gradient">
          </div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box gray-gradient">
          </div>
        </el-col>
      </el-row>
      <h3 class="second-title">邻近色渐变</h3>
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="demo-color-box yellow-pink">
          </div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box blue-purple">
          </div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box pink-purple">
          </div>
        </el-col>
        <el-col :span="3">
          <div class="demo-color-box green-blue">
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<style lang="less" scoped>
@import '~@/style/base/variable.less';
.fjl-ui-wrapper {
  padding: 10px;
}
.box-card .el-row {
  margin-bottom: 20px;
}
.row-margin {
  margin-bottom: 20px;
}
// 颜色
.first-title {
  margin: 20px 0;
  color: #d7000f;
  font-weight: bold;
  text-align: left;
}
.second-title {
  margin: 10px 0;
  color: #666666;
  text-align: left;
}
.demo-color-box {
  border-radius: 4px;
  padding: 20px;
  margin: 5px 0;
  height: 74px;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  .value {
    font-size: 12px;
    opacity: 0.69;
    line-height: 24px;
  }
}
.base-gradient {
  // background: @base-color;
  background: @main-color-gradient;
}
.bg-main {
  background: @base-color;
}
.bg-success {
  background: @success-color;
}
.bg-warning {
  background: @warning-color;
}
.bg-hint {
  background: @hint-color;
}
.bg-match {
  background: @match-color;
}
// 渐变
.yellow-gradient {
  background: @single-yellow-gradient;
}
.blue-gradient {
  background: @single-blue-gradient;
}
.pink-gradient {
  background: @single-pink-gradient;
}
.purple-gradient {
  background: @single-purple-gradient;
}
.blue-gradient {
  background: @single-blue-gradient;
}
.green-gradient {
  background: @single-green-gradient;
}
.gray-gradient {
  background: @single-gray-gradient;
}

.yellow-pink {
  background: @yellow-pink-gradient;
}
.blue-purple {
  background: @blue-purple-gradient;
}
.pink-purple {
  background: @pink-purple-gradient;
}
.green-blue {
  background: @green-blue-gradient;
}
</style>
