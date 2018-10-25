/*
 * @Author: zhanxin
 * @Date: 2018-08-09 10:32:34
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-10 16:20:21
 * @Description:
 */
<template>
  <div class="content-wrapper">
    <p class="content-wrapper-title">{{title}}</p>
    <p v-if="explain"
       class="content-wrapper-explain">{{explain}}</p>
    <div class="use-wrapper">
      <div class="use-detail">
        <slot></slot>
      </div>
      <transition name="fade">
        <div v-show="isShow"
             class="code-detail">
          <div class="tips" v-if="tips">
            <p>{{tips}}</p>
          </div>
          <p class="code-warpper"
             v-highlight>
            <pre><code class="hljs">{{code}}</code></pre>
          </p>
        </div>
      </transition>
      <div class="code-op"
           @click="isShow = !isShow">
        <i :class="isShow ? 'el-icon-caret-top' : 'el-icon-caret-bottom'">&nbsp;{{isShow ? '隐藏' : '显示'}}代码</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RdmContent',
  data() {
    return {
      isShow: false
    };
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    explain: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="less">
.content-wrapper {
  margin-bottom: 40px;
  .use-wrapper {
    box-shadow: 1px 0 10px #ccc;
    border-radius: 5px;
    .use-detail {
      padding: 15px;
    }
    .code-warpper {
      padding: 0 15px 15px;
      line-height: 20px;
      .hljs {
        background-color: #fafafa;
        padding: 20px;
        border-radius: 4px;
        line-height: 1.8;
        font-size: 12px;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
      }
      pre {
        white-space: pre;
        font-size: 14px;
      }
    }
    .code-op {
      text-align: center;
      padding: 15px 0;
      font-size: 12px;
      border-top: 1px solid #ddd;
      cursor: pointer;
      &:hover {
        background-color: #f3f3f3;
      }
    }
    .code-detail {
      background: #f3f3f3;
      padding-top: 15px;
      .tips {
        margin: 10px 15px;
        padding: 15px;
        line-height: 20px;
        font-size: 14px;
        color: #5e6d82;
        background: #fafafa;
        border-radius: 4px;
      }
    }
  }
}

.content-wrapper-title {
  font-size: 22px;
  color: #1f2f3d;
  font-weight: 400;
  margin-bottom: 20px;
}
.content-wrapper-explain {
  font-size: 14px;
  color: #5e6d82;
  margin-bottom: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
