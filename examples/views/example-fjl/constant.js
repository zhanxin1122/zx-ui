export const publicOptions = {
  title: {
    x: 'left',
    textStyle: {
      //文字颜色
      color: '#485465',
      //字体风格,'normal','italic','oblique'
      fontStyle: 'normal',
      //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
      fontWeight: 'bold',
      //字体系列
      fontFamily: 'sans-serif',
      //字体大小
      fontSize: 14
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}:{d}%'
  },
  legend: {
    orient: 'horizontal',
    icon: 'circle',
    y: '30',
    x: 'right'
  },
  toolbox: {
    show: true,
    feature: {
      mark: {
        show: true
      },
      dataView: {
        show: true,
        readOnly: false
      },
      magicType: {
        show: true,
        type: ['pie', 'funnel'],
        option: {
          funnel: {
            x: '25%',
            width: '50%',
            funnelAlign: 'center',
            max: 1548
          }
        }
      },
      restore: {
        show: true
      },
      saveAsImage: {
        show: true
      }
    }
  },
  calculable: true,
  series: [
    {
      name: '访问来源',
      type: 'pie',
      // 内半径、外半径
      radius: [50, 70],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        },
        emphasis: {
          label: {
            show: true,
            position: 'center',
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            }
          }
        }
      }
    }
  ]
};
// 灰色样式
export const placeHolderStyle = {
  normal: {
    color: '#DBECF8',
    label: {
      show: false
    },
    labelLine: {
      show: false
    }
  },
  emphasis: {
    color: '#DBECF8'
  }
};
// 隐藏
export const hideStyle = {
  normal: {
    color: 'rgba(0,0,0,0)',
    label: {
      show: false
    },
    labelLine: {
      show: false
    }
  },
  emphasis: {
    color: 'rgba(0,0,0,0)'
  }
};
