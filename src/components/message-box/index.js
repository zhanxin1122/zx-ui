/*
 * @Author: zhanxin
 * @Date: 2018-07-19 10:22:26
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-07-25 09:13:35
 * @Description: 引入弹出框
 */
import MessageBox from './src/msgbox';

MessageBox.install = function(Vue) {
  Vue.prototype.$hdAlert = MessageBox.alert;
  Vue.prototype.$hdConfirm = MessageBox.confirm;
  Vue.prototype.$hdToast = MessageBox.toast;
  Vue.prototype.$hdPrompt = MessageBox.prompt;
};

export default MessageBox;
