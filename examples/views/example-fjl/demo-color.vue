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
<script>
export default {
  name: 'DemoColor'
};
</script>
