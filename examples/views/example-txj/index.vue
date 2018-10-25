<template>
  <div class="t-container clearfix">
    <h2>TimePicker 时间选择器</h2>
    <el-row style="margin-bottom:200px;">
      <el-col :span="8">
        <p class="title">时间格式 HH:mm:ss</p>
        <hd-time-picker v-model="value1"
                        :picker-options="{selectableRange:'08:30:00 - 20:30:00'}"
                        @change="rangeChange1">
        </hd-time-picker>
      </el-col>
      <el-col :span="8"
              :offset="6">
        <p class="title">时间格式 HH:mm</p>
        <hd-time-picker v-model="value2"
                        value-format="HH:mm"
                        :picker-options="{selectableRange:'08:30:00 - 20:30:00',format:'HH:mm'}"
                        popper-class="hd-minute"
                        @change="rangeChange2">
        </hd-time-picker>
      </el-col>
    </el-row>
    <h2>Card 卡片</h2>
    <el-row>
      <el-col :span="8">
        <p class="title">基础用法</p>
        <hd-card>
          <div slot="header">文字内容</div>
          <div> 诗歌是一种抒情言志的文学体裁。《毛诗-大序》记载：“诗者，志之所之也。在心为志，发言为诗”。 南宋严羽《沧浪诗话》云：“诗者，吟咏性情也”。 只有一种用言语表达的艺术就是诗歌。
          </div>
        </hd-card>
      </el-col>
      <el-col :span="8"
              :offset="6">
        <p class="title">无阴影，分界线间隔</p>
        <hd-card shadow="never"
                 :border-gap="true">
          <div slot="header">文字内容</div>
          <div> 诗歌是一种抒情言志的文学体裁。《毛诗-大序》记载：“诗者，志之所之也。在心为志，发言为诗”。 南宋严羽《沧浪诗话》云：“诗者，吟咏性情也”。 只有一种用言语表达的艺术就是诗歌。
          </div>
        </hd-card>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:100px;">
      <el-col :span="8">
        <p class="title">带图片显示</p>
        <hd-card>
          <img src="./images/card.jpg">
          <div style="text-align:center;margin-top:5px;">描述性文字</div>
        </hd-card>
      </el-col>
      <el-col :span="8"
              :offset="6">
        <p class="title">图片显示铺满</p>
        <hd-card :body-style="{padding:0}">
          <img src="./images/card.jpg">
          <div style="text-align:center;line-height:3;">描述性文字</div>
        </hd-card>
      </el-col>
    </el-row>
    <h2>Slider 滑块</h2>
    <el-row>
      <el-col :span="8">
        <p class="title">基础用法</p>
        <hd-slider v-model="slider1"></hd-slider>
      </el-col>
      <el-col :span="8"
              :offset="6">
        <p class="title">离散值</p>
        <hd-slider v-model="slider2"
                   :step="10"
                   show-stops></hd-slider>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:100px;">
      <el-col :span="8">
        <p class="title">范围选择</p>
        <hd-slider v-model="slider3"
                   range></hd-slider>
      </el-col>
      <el-col :span="8"
              :offset="6">
        <p class="title">带有输入框</p>
        <hd-slider v-model="slider4"
                   show-input
                   :show-input-controls="false"></hd-slider>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import HdTimePicker from '@/components/time-picker';
import HdCard from '@/components/card';
import HdSlider from '@/components/slider';
export default {
  data() {
    return {
      value1: new Date(2018, 8, 20, 10, 30, 25),
      value2: '',
      slider1: 20,
      slider2: 20,
      slider3: [20, 70],
      slider4: 20
    };
  },
  methods: {
    rangeChange1(e) {
      console.log(e);
    },
    rangeChange2(e) {
      console.log(e);
    }
  },
  components: {
    HdTimePicker,
    HdCard,
    HdSlider
  }
};
</script>
<style lang="less" scoped>
.t-container {
  h2 {
    font-weight: bold;
    margin-top: 20px;
    font-size: 22px;
  }
  width: 1220px;
  margin: 0 auto;
  line-height: 1.5;
  .title {
    line-height: 3;
  }
}
</style>
