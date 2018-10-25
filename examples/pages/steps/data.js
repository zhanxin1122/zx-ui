module.exports = [
  {
    list: [
      {
        name: '项目上报',
        state: 'pending',
        icon: '',
        color: '',
        fontSize: ''
      },
      {
        name: '最终批示同意',
        state: 'waiting'
      },
      {
        name: '签约',
        state: 'waiting'
      },
      {
        name: '取得',
        state: 'waiting'
      },
      {
        name: '履约完毕',
        state: 'waiting'
      }
    ],
    current: 3 // 当前所在节点，默认当前为PENDING 之前为FINISHED 之后为WAITING
  },
  {
    list: [
      {
        name: '项目上报',
        state: 'finished',
        icon: '',
        color: '',
        fontSize: ''
      },
      {
        name: '最终批示同意',
        state: 'finished'
      },
      {
        name: '签约',
        state: 'pending'
      },
      {
        name: '取得',
        state: 'waiting'
      },
      {
        name: '履约完毕',
        state: 'waiting'
      }
    ],
    current: 5 // 当前所在节点，默认当前为PENDING 之前为FINISHED 之后为WAITING
  },
  {
    list: [
      {
        name: '项目上报',
        state: 'finished',
        icon: '',
        color: '',
        fontSize: ''
      },
      {
        name: '最终批示同意',
        state: 'finished'
      },
      {
        name: '签约',
        state: 'finished'
      },
      {
        name: '取得',
        state: 'finished'
      },
      {
        name: '履约完毕',
        state: 'finished'
      }
    ]
  },
  {
    list: [
      {
        name: '节点一',
        state: 'finished',
        icon: '',
        color: '',
        fontSize: ''
      },
      {
        name: '节点二',
        state: 'finished'
      },
      {
        name: '节点三',
        state: 'finished'
      },
      {
        name: '节点四',
        state: 'back'
      },
      {
        name: '结束',
        state: 'waiting'
      }
    ]
  },
  {
    list: [
      {
        name: '节点一',
        state: 'finished',
        icon: '',
        color: '',
        fontSize: ''
      },
      {
        name: '节点二',
        state: 'finished'
      },
      {
        name: '节点三',
        state: 'finished'
      },
      {
        name: '节点四',
        state: 'reject'
      },
      {
        name: '结束',
        state: 'waiting'
      }
    ]
  }
];
