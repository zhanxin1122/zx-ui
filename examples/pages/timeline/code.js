export const code1 = `<template>
<hd-time-line :data="data" :direction="direction1"></hd-time-line>
</template>
<script>
export default {
  data() {
    return {
      data: [ 
        {
          title: '2017/02/09',
          description: '项目上报'
        },
        {
          title: '2017/02/09',
          description: '最终批示同意'
        },
        {
          title: '2017/02/09',
          description: '签约'
        },
        {
          title: '2017/02/09',
          description: '取得'
        },
        {
          title: '2017/02/09',
          description: '履约完毕'
        }
      ],
      direction1: '',
    }
  }
}
<script>`;

export const code2 = `<template>
<hd-time-line :data="data" :direction="direction2"></hd-time-line>
</template>
<script>
export default {
  data() {
    return {
      data: [ 
        {
          title: '2017/02/09',
          description: '项目上报'
        },
        {
          title: '2017/02/09',
          description: '最终批示同意'
        },
        {
          title: '2017/02/09',
          description: '签约'
        },
        {
          title: '2017/02/09',
          description: '取得'
        },
        {
          title: '2017/02/09',
          description: '履约完毕'
        }
      ],
      direction2: 'vertical'
    }
  }
}
<script>`;
