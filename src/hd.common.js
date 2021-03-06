/* Automatically generated by './build/bin/build-entry.js' */

import Button from './components/button/index.js';
import Card from './components/card/index.js';
import Cascader from './components/cascader/index.js';
import Checkbox from './components/checkbox/index.js';
import CheckboxGroup from './components/checkbox-group/index.js';
import CitySelect from './components/city-select/index.js';
import Round from './components/round/index.js';
import Input from './components/input/index.js';
import MessageBox from './components/message-box/index.js';
import Menu from './components/menu/index.js';
import MenuItem from './components/menu-item/index.js';
import Submenu from './components/submenu/index.js';
import Pagination from './components/pagination/index.js';
import Progress from './components/progress/index.js';
import Radio from './components/radio/index.js';
import RadioGroup from './components/radio-group/index.js';
import Select from './components/select/index.js';
import Slider from './components/slider/index.js';
import Steps from './components/steps/index.js';
import Switch from './components/switch/index.js';
import Tabs from './components/tabs/index.js';
import TabPane from './components/tab-pane/index.js';
import TimePicker from './components/time-picker/index.js';
import TimeLine from './components/time-line/index.js';
import Tree from './components/tree/index.js';
import Upload from './components/upload/index.js';
// import locale from 'element-ui/src/locale';
// import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Button,
  Card,
  Cascader,
  Checkbox,
  CheckboxGroup,
  CitySelect,
  Round,
  Input,
  Menu,
  MenuItem,
  Submenu,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Steps,
  Switch,
  Tabs,
  TabPane,
  TimePicker,
  TimeLine,
  Tree,
  Upload
  // CollapseTransition
];

const install = function(Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
  Vue.prototype.$hdAlert = MessageBox.alert;
  Vue.prototype.$hdConfirm = MessageBox.confirm;
  Vue.prototype.$hdPrompt = MessageBox.prompt;
  Vue.prototype.$hdToast = MessageBox.toast;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.10',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  // CollapseTransition,
  // Loading,
  Button,
  Card,
  Cascader,
  Checkbox,
  CheckboxGroup,
  CitySelect,
  Round,
  Input,
  MessageBox,
  Menu,
  MenuItem,
  Submenu,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Steps,
  Switch,
  Tabs,
  TabPane,
  TimePicker,
  TimeLine,
  Tree,
  Upload
};

module.exports.default = module.exports;
