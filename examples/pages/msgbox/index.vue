<template>
  <div>
    <rdm-title title="MessageBox 消息框"
               content="包括alert,confirm,toast,prompt" />
    <rdm-content title="Alert"
                 :code="code1">
      <hd-button @click="onAlert">弹出框</hd-button>
    </rdm-content>
    <rdm-content title="Confirm"
                 :code="code2">
      <hd-button @click="onConfirm">确认框</hd-button>
    </rdm-content>
    <rdm-content title="Toast"
                 :code="code3">
      <hd-button @click="onToast">气泡框</hd-button>
    </rdm-content>
    <rdm-content title="Prompt"
                 :code="code4">
      <hd-button @click="onPrompt">输入提示框</hd-button>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="paramsList"></rdm-param>
  </div>
</template>
<script>
import Vue from 'vue';
import HdButton from '@/components/button';
import HdMessageBox from '@/components/message-box';
// Vue.prototype.$hdAlert = HdMessageBox.alert;
// Vue.prototype.$hdConfirm = HdMessageBox.confirm;
// Vue.prototype.$hdToast = HdMessageBox.toast;
// Vue.prototype.$hdPrompt = HdMessageBox.prompt;
Vue.use(HdMessageBox);
export default {
  components: {
    [HdButton.name]: HdButton
  },
  data() {
    return {
      code1: `<template>
  <hd-button @click="onAlert">弹出框</hd-button>
</template>

<script>
  export default {
    methods: {
      onAlert() {
        this.$hdAlert({
          icon: 'warning',
          title: '提示',
          content: '你好',
          close: true,
          closeModal: false
        });
      }
    }
  }
<\/script>`,
      code2: `<template>
  <hd-button @click="onConfirm">确认框</hd-button>
</template>

<script>
  export default {
    methods: {
      onConfirm() {
        this.$hdConfirm({
          title: '提示',
          content: '你好吗？',
          secondTitle: '二级标题',
          sureBtnTxt: '我知道了',
          sure: () => {
            console.log('确定');
          },
          cancel: () => {
            console.log('取消');
          }
        });
      }
    }
  }
<\/script>`,
      code3: `<template>
  <hd-button @click="onToast">气泡框</hd-button>
</template>

<script>
  export default {
    methods: {
      onToast() {
        this.$hdToast({
          secondTitle: '二级标题',
          icon: 'error',
          content: '你好呀',
          close: true
        });
      }
    }
  }
<\/script>`,
      code4: `<template>
  <hd-button @click="onPrompt">输入提示框</hd-button>
</template>

<script>
  export default {
    methods: {
      onPrompt() {
        this.$hdPrompt({
          title: '提示',
          sure: v => {
            console.log(v);
          },
          cancel: () => {
            console.log('cancel');
          }
        });
      }
    }
  }
<\/script>`,
      paramsList: [
        {
          param: 'title',
          explain: '提示框头部标题',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'icon',
          explain: '提示框图标',
          type: 'String',
          values: 'success,error,info,warning,question',
          default: '--'
        },
        {
          param: 'secondTitle',
          explain: '二级标题',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'content',
          explain: '内容',
          type: 'String',
          values: '--',
          default: '--'
        },
        {
          param: 'closeModal',
          explain: '点击遮罩层是否关闭提示框',
          type: 'Boolean',
          values: 'true,false',
          default: 'true'
        },
        {
          param: 'close',
          explain: '是否显示关闭按钮',
          type: 'Boolean',
          values: 'true,false',
          default: 'false'
        },
        {
          param: 'btnTxt',
          explain: 'alert时按钮的文本',
          type: 'String',
          values: '--',
          default: '确认'
        },
        {
          param: 'sureBtnTxt',
          explain: 'confirm时确认按钮的文本',
          type: 'String',
          values: '--',
          default: '确认'
        },
        {
          param: 'cancelBtnTxt',
          explain: 'confirm时取消按钮的文本',
          type: 'String',
          values: '--',
          default: '取消'
        },
        {
          param: 'cancelBtnTxt',
          explain: 'confirm时取消按钮的文本',
          type: 'String',
          values: '--',
          default: '取消'
        },
        {
          param: 'sure',
          explain: '确认按钮的回调',
          type: 'Function',
          values: '--',
          default: 'noop'
        },
        {
          param: 'cancel',
          explain: '取消按钮的回调',
          type: 'Function',
          values: '--',
          default: 'noop'
        },
        {
          param: 'String',
          explain: 'prompt时的报错文本',
          type: 'Function',
          values: '--',
          default: '输入不能为空'
        }
      ]
    };
  },
  methods: {
    onAlert() {
      this.$hdAlert({
        icon: 'warning',
        title: '提示',
        content: '你好',
        close: true,
        closeModal: false
      });
    },
    onConfirm() {
      this.$hdConfirm({
        title: '提示',
        content: '你好吗？',
        secondTitle: '二级标题',
        sureBtnTxt: '我知道了',
        sure: () => {
          console.log('确定');
        },
        cancel: () => {
          console.log('取消');
        }
      });
    },
    onToast() {
      this.$hdToast({
        secondTitle: '二级标题',
        icon: 'error',
        content: '你好呀',
        close: true
      });
    },
    onPrompt() {
      this.$hdPrompt({
        title: '提示',
        sure: v => {
          console.log(v);
        },
        cancel: () => {
          console.log('cancel');
        }
      });
    }
  }
};
</script>
