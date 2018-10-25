<template>
  <div>
    <rdm-title title="card/卡片"
               content="针对 el-card 进行改造，其参数与 el-card 一样" />
    <rdm-content title="基础用法"
                 :code="code1">
      <el-row>
        <el-col :span="8">
          <hd-card>
            <div slot="header">文字内容</div>
            <div> 诗歌是一种抒情言志的文学体裁。《毛诗-大序》记载：“诗者，志之所之也。在心为志，发言为诗”。 南宋严羽《沧浪诗话》云：“诗者，吟咏性情也”。 只有一种用言语表达的艺术就是诗歌。
            </div>
          </hd-card>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="无阴影，分界线间隔"
                 :code="code2">
      <el-row>
        <el-col :span="8">
          <hd-card shadow="never"
                   :border-gap="true">
            <div slot="header">文字内容</div>
            <div> 诗歌是一种抒情言志的文学体裁。《毛诗-大序》记载：“诗者，志之所之也。在心为志，发言为诗”。 南宋严羽《沧浪诗话》云：“诗者，吟咏性情也”。 只有一种用言语表达的艺术就是诗歌。
            </div>
          </hd-card>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="带图片显示"
                 :code="code3">
      <el-row>
        <el-col :span="8">
          <hd-card>
            <img src="./images/card.jpg">
            <div style="text-align:center;margin-top:5px;">描述性文字</div>
          </hd-card>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-content title="图片显示铺满"
                 :code="code4">
      <el-row>
        <el-col :span="8">
          <hd-card :body-style="{padding:0}">
            <img src="./images/card.jpg">
            <div style="text-align:center;line-height:3;">描述性文字</div>
          </hd-card>
        </el-col>
      </el-row>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
  </div>
</template>

<script>
import HdCard from '@/components/card';
export default {
  data() {
    return {
      code1: `<template>
  <hd-card>
    <div slot="header">文字内容</div>
    <div> 诗歌是一种抒情言志的文学体裁。《毛诗-大序》记载：“诗者，志之所之也。在心为志，发言为诗”。 南宋严羽《沧浪诗话》云：“诗者，吟咏性情也”。 只有一种用言语表达的艺术就是诗歌。
    </div>
  </hd-card>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
<\/script>`,
      code2: `<template>
  <hd-card shadow="never"
          :border-gap="true">
    <div slot="header">文字内容</div>
    <div> 诗歌是一种抒情言志的文学体裁。《毛诗-大序》记载：“诗者，志之所之也。在心为志，发言为诗”。 南宋严羽《沧浪诗话》云：“诗者，吟咏性情也”。 只有一种用言语表达的艺术就是诗歌。
    </div>
  </hd-card>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
<\/script>`,
      code3: `<template>
  <hd-card>
    <img src="./images/card.jpg">
    <div style="text-align:center;margin-top:5px;">描述性文字</div>
  </hd-card>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
<\/script>`,
      code4: `<template>
  <hd-card :body-style="{padding:0}">
    <img src="./images/card.jpg">
    <div style="text-align:center;line-height:3;">描述性文字</div>
  </hd-card>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
<\/script>`,
      paramsList: [
        {
          param: 'header',
          explain: '设置 header，也可以通过 slot#header 传入 DOM',
          type: 'string',
          values: '--',
          default: '--'
        },
        {
          param: 'body-style',
          explain: '设置 body 的样式',
          type: 'object',
          values: '--',
          default: '{ padding: "20px" }'
        },
        {
          param: 'shadow',
          explain: '设置阴影显示时机',
          type: 'string',
          values: 'always / hover / never',
          default: 'always'
        },
        {
          param: 'border-gap',
          explain: '分界线间隔',
          type: 'boolean',
          values: '--',
          default: 'false'
        }
      ]
    };
  },
  components: {
    HdCard
  }
};
</script>
