/*
 * @Author: zhanxin
 * @Date: 2018-07-19 10:29:51
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-07-25 09:13:21
 * @Description: 弹出框前置处理
 */
import Vue from 'vue';
import msgboxVue from './msgbox.vue';

const msgboxConstructor = Vue.extend(msgboxVue);

let instance;

const noop = () => {};
const initInstance = () => {
  instance = new msgboxConstructor({
    el: document.createElement('div')
  });
};

const MessageBox = {
  name: 'HdMessageBox'
};

const showMsgBox = (newOptions, oldOptions) => {
  newOptions.close = 'close' in oldOptions ? oldOptions.close : false;
  newOptions.closeModal = 'closeModal' in oldOptions ? oldOptions.closeModal : true;
  newOptions.icon = oldOptions.icon || '';
  const options = {
    ...oldOptions,
    ...newOptions
  };
  !instance && initInstance();
  for (let key in options) {
    instance[key] = options[key];
  }
  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.visible = true;
  });
};
const alert = options => {
  const op = {
    type: 'alert'
  };
  if (typeof options === 'object') {
    op.title = options.title || '';
    op.icon = options.icon || '';
    op.secondTitle = options.secondTitle || '';
    op.content = options.content || '';
    op.sure = options.sure || noop;
    op.btnTxt = options.btnTxt || '确认';
  } else {
    op.title = '';
    op.icon = '';
    op.secondTitle = '';
    op.content = options;
    op.sure = noop;
    op.btnTxt = '确认';
  }
  showMsgBox(op, options);
};
MessageBox.alert = alert;
const confirm = options => {
  const op = {
    type: 'confirm'
  };
  op.title = options.title || '';
  op.icon = options.icon || '';
  op.secondTitle = options.secondTitle || '';
  op.content = options.content || '';
  op.sure = options.sure || noop;
  op.cancel = options.cancel || noop;
  op.sureBtnTxt = options.sureBtnTxt || '确认';
  op.cancelBtnTxt = options.cancelBtnTxt || '取消';
  showMsgBox(op, options);
};
MessageBox.confirm = confirm;
const toast = options => {
  const op = {
    type: 'toast'
  };
  if (typeof options === 'object') {
    op.title = options.title || '';
    op.icon = options.icon || '';
    op.secondTitle = options.secondTitle || '';
    op.content = options.content || '';
  } else {
    op.title = '';
    op.icon = '';
    op.secondTitle = '';
    op.content = options;
  }
  showMsgBox(op, options);
};
MessageBox.toast = toast;
const prompt = options => {
  const op = {
    type: 'prompt'
  };
  op.title = options.title || '';
  op.icon = options.icon || '';
  op.secondTitle = options.secondTitle || '';
  op.content = options.content || '';
  op.sure = options.sure || noop;
  op.cancel = options.cancel || noop;
  op.errTxt = options.errTxt || '输入不能为空';
  op.sureBtnTxt = options.sureBtnTxt || '确认';
  op.cancelBtnTxt = options.cancelBtnTxt || '取消';
  showMsgBox(op, options);
};
MessageBox.prompt = prompt;
export default MessageBox;
export { MessageBox };
