/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-08 14:35:17
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-21 15:08:53
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

import Layout from '#/pages/layout';
import Error404 from '#/pages/error/404';
import ExampleFjl from '#/views/example-fjl/example-fjl.vue';
import ExampleDy from '#/views/example-dy/example-dy.vue';
import ExampleZx from '#/views/example-zx';
import ExampleCm from '#/views/example-cm';
import ExampleSj from '#/views/example-sj';
import ExampleTxj from '#/views/example-txj';

export const routeList = [
  {
    label: '使用说明',
    path: 'readme',
    type: 'readme'
  },
  {
    label: 'Charts',
    type: 'title'
  },
  {
    label: 'Bar 柱状图',
    path: 'bar'
  },
  {
    label: 'Line 折线图',
    path: 'line'
  },
  {
    label: 'Pie 饼状图',
    path: 'pie'
  },
  {
    label: 'Round 圆环图',
    path: 'round'
  },
  {
    label: 'Radar 雷达图',
    path: 'radar'
  },
  {
    label: 'Basic',
    type: 'title'
  },
  {
    label: 'Container 布局容器',
    path: 'container'
  },
  {
    label: 'Color 色彩',
    path: 'color'
  },
  {
    label: 'Typography 字体',
    path: 'typography'
  },
  {
    label: 'Icon 图标',
    path: 'icon'
  },
  {
    label: 'Button 按钮',
    path: 'button'
  },
  {
    label: 'Form',
    type: 'title'
  },
  {
    label: 'Switch 开关',
    path: 'switch'
  },
  {
    label: 'Input 输入框',
    path: 'input'
  },
  {
    label: 'Radio 单选框',
    path: 'radio'
  },
  {
    label: 'Checkbox 复选框',
    path: 'checkbox'
  },
  {
    label: 'Select 选择器',
    path: 'select'
  },
  {
    label: 'City select 城市选择',
    path: 'city-select'
  },
  {
    label: 'Cascader 级联选择',
    path: 'cascader'
  },
  {
    label: 'Slider 滑块',
    path: 'slider'
  },
  {
    label: 'TimePicker 时间选择器',
    path: 'time-picker'
  },
  {
    label: 'Upload 上传',
    path: 'upload'
  },
  {
    label: 'Data',
    type: 'title'
  },
  {
    label: 'Draggable 拖拽',
    path: 'draggable'
  },
  {
    label: 'Pagination 分页',
    path: 'pagination'
  },
  {
    label: 'Tree 树',
    path: 'tree'
  },
  {
    label: 'Progress 进度条',
    path: 'progress'
  },
  {
    label: 'Notice',
    type: 'title'
  },
  {
    label: 'MessageBox 消息框',
    path: 'msgbox'
  },
  {
    label: 'Navigation',
    type: 'title'
  },
  {
    label: 'Menu 菜单',
    path: 'menu'
  },
  {
    label: 'Tabs 导航',
    path: 'tabs'
  },
  {
    label: 'Timeline 时间轴',
    path: 'timeline'
  },
  {
    label: 'Steps 步骤条',
    path: 'steps'
  },
  {
    label: 'Others',
    type: 'title'
  },
  {
    label: 'Card 卡片',
    path: 'card'
  }
];

export const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/readme',
    component: Layout,
    children: routeList.filter(item => !item.type || item.type === 'readme').map(item => ({
      ...item,
      component: () => import(`#/pages/${item.path}`)
    }))
  },
  {
    path: '/example-fjl',
    name: 'example-fjl',
    component: ExampleFjl
  },
  {
    path: '/example-dy',
    name: 'example-dy',
    component: ExampleDy
  },
  {
    path: '/example-zx',
    name: 'example-zx',
    component: ExampleZx
  },
  {
    path: '/example-cm',
    name: 'example-cm',
    component: ExampleCm
  },
  {
    path: '/example-sj',
    name: 'example-sj',
    component: ExampleSj
  },
  {
    path: '/example-txj',
    name: 'example-txj',
    component: ExampleTxj
  },
  {
    path: '/404',
    name: '404',
    component: Error404
  },
  {
    path: '/*',
    name: 'page404',
    component: Error404
  }
];
