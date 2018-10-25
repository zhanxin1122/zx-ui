var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');
var saladConfig = require('./salad.config.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
// var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
// var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`eaf-ui/src/${key}`] = `eaf-ui/lib/lib/${key}`;
});

// externals['element-ui/src/locale'] = 'element-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`eaf-ui/src/utils/${file}`] = `eaf-ui/lib/lib/utils/${file}`;
});
// mixinsList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`element-ui/src/mixins/${file}`] = `element-ui/lib/mixins/${file}`;
// });
// transitionList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`element-ui/src/transitions/${file}`] = `element-ui/lib/transitions/${file}`;
// });

externals = [
  Object.assign(
    {
      'hd-ui/lib/assets/fonts/iconfont': 'hd-ui/lib/assets/fonts/iconfont',
      vue: 'vue',
      'element-ui': 'element-ui',
      sortablejs: 'sortablejs',
      echarts: 'echarts'
    },
    externals
  ),
  nodeExternals()
];

exports.externals = externals;

exports.alias = {
  '@': path.resolve(__dirname, '../src'),
  'eaf-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;

exports.postcss = function(webapck) {
  saladConfig.features.partialImport = {
    addDependencyTo: webapck
  };
  return [require('postcss-salad')(saladConfig)];
};
