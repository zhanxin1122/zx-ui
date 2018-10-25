// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import config from './config';
// 导入样式文件
import '#/style/index.less';
// 注册element-ui组件
import ElementUI from 'element-ui';
import '@/style/base/index.less';
// import '@/assets/fonts/iconfont.js';
Vue.use(ElementUI);
// axios
import fetch from '#/utils/fetch';
// highlighit
import Highlight from '#/utils/highlight';
Vue.use(Highlight);
import '#/utils/code-comp';

Vue.prototype.$fetch = fetch;
Vue.prototype.$config = config;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
