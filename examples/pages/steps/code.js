export let code1 = `
<hd-steps class="hd-steps section__component"
                width="50%"
                :list="step.list"
                :current="step.current"></hd-steps>
<script>
export default {
  data() {
    return {
      step: {
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
      }
    };
  }
}
<\/script>
`;

export let code2 = `
<hd-steps class="hd-steps section__component"
                width="50%"
                :list="step.list"></hd-steps>
<script>
export default {
  data() {
    return {
      step: {
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
      }
    };
  }
}
<\/script>
`;

export let code3 = `
<hd-steps class="hd-steps section__component"
                width="50%"
                :list="step.list"></hd-steps>
<script>
export default {
  data() {
    return {
      step: {
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
      }
    };
  }
}
<\/script>
`;
export let code4 = `
<hd-steps class="hd-steps section__component"
                width="50%"
                :list="step.list"></hd-steps>
<script>
export default {
  data() {
    return {
      step: {
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
    };
  }
}
<\/script>
`;
