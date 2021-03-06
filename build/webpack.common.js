const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config');
console.log('webpack.common.js==========================');
module.exports = {
  entry: {
    // app: './src/index.js'
    'hd.common': ['./src/hd.common.js'],
    'charts.common': ['./src/charts.common.js'],
    'draggable.common': ['./src/draggable.common.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib/lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  externals: config.externals,
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        // loader: 'vue-loader',
        // options: {
        //   preserveWhitespace: false
        // }
        use: [
          {
            loader: 'vue-loader',
            options: {
              preserveWhitespace: false
            }
          }
        ]
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader!postcss-loader',
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        // loader: 'style-loader!css-loader!less-loader'
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new VueLoaderPlugin()
  ]
};
