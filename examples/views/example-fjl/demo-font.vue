<template>
  <section class="content">
    <h2 class="first-title"> font/字体</h2>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-row :gutter="20">
          <el-col class="main-title-large">主标题</el-col>
          <el-col class="sub-title-large">次级标题</el-col>
          <el-col class="small-title-large">小标题</el-col>
          <el-col class="main-text-large">正文</el-col>
          <el-col class="sub-text-large">辅助文字</el-col>
          <el-col class="link-text-large">链接文字</el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row :gutter="20">
          <el-col class="main-title-small">主标题</el-col>
          <el-col class="sub-title-small">次级标题</el-col>
          <el-col class="small-title-small">小标题</el-col>
          <el-col class="main-text-small">正文</el-col>
          <el-col class="sub-text-small">辅助文字</el-col>
          <el-col class="link-text-small">链接文字</el-col>
        </el-row>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  name: 'DemoFont'
};
</script>
