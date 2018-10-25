const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'examples/index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('#', resolve('examples'));
  }
};
