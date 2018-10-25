/*
 * @Author: zhanxin
 * @Date: 2018-07-19 10:29:57
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-08-13 11:06:29
 * @Description: 弹出框
 */
<template>
  <div class="hd-shade"
       @click.self="modalHandle"
       v-show="visible">
    <div class="hd-msgbox"
         :class="{'hd-msgbox-toast__bottom': type === 'toast'}">
      <label class="hd-msgbox__close"
             v-show="close"
             @click="doClose">+</label>
      <div class="hd-msgbox-header"
           v-if="title">
        {{title}}
      </div>
      <div class="hd-msgbox-content"
           :class="{'hd-msgbox-content__top': type === 'toast'}">
        <i v-if="icon"
           :class="`el-icon-${icon} hd-msgbox-content__${icon}`"></i>
        <div class="hd-msgbox-content__title"
             v-if="secondTitle">{{secondTitle}}</div>
        <div class="hd-msgbox-content__msg"
             v-html="content"></div>
        <div class="hd-msgbox-content__ipt"
             v-if="type === 'prompt'">
          <el-input v-model="iptVal"></el-input>
          <label v-show="isErr">{{errTxt}}</label>
        </div>
      </div>
      <div class="hd-msgbox-footer"
           v-show="type !== 'toast'">
        <hd-button type="ghost"
                   size="mini"
                   v-if="type === 'confirm' || type === 'prompt'"
                   @click="cancelHandle">{{cancelBtnTxt}}</hd-button>
        <hd-button size="mini"
                   type="primary"
                   :class="{'hd-msgbox-footer__surebtn': type === 'confirm'}"
                   @click="sureHandle">{{type === 'alert' ? btnTxt : sureBtnTxt}}</hd-button>
      </div>
    </div>
  </div>
</template>
<script>
import HdButton from '../../button';
import '@/style/msgbox.less';
export default {
  name: 'HdMessageBox',
  components: {
    [HdButton.name]: HdButton
  },
  props: {},
  data() {
    return {
      closeModal: true,
      close: false,
      visible: false,
      type: '',
      title: '',
      icon: '',
      secondTitle: '',
      content: '',
      btnTxt: '',
      sureBtnTxt: '',
      cancelBtnTxt: '',
      sure: null,
      cancel: null,
      iptVal: '',
      errTxt: '',
      isErr: false
    };
  },
  methods: {
    doClose() {
      if (!this.visible) return;
      this.visible = false;
    },
    sureHandle() {
      if (this.type === 'prompt' && !this.iptVal.replace(/\s/g, '')) {
        this.isErr = true;
        return;
      }
      if (this.sure instanceof Function) {
        this.sure(this.iptVal);
      }
      this.doClose();
    },
    cancelHandle() {
      this.doClose();
      if (this.cancel instanceof Function) {
        this.cancel();
      }
    },
    modalHandle() {
      this.closeModal && this.doClose();
    }
  },
  watch: {
    $route() {
      console.log('haha');
    },
    visible() {
      this.iptVal = '';
      this.isErr = false;
    }
  }
};
</script>
