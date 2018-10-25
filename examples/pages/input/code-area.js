const normalStr = `
<hd-input v-model="input" placeholder="请输入内容"></hd-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
`;

const sizeStr = `
<div class="demo-input-size">
  <hd-input size="large"
            placeholder="请输入内容"
            v-model="input6">
  </hd-input>
  <hd-input size="medium"
            placeholder="请输入内容"
            v-model="input7">
  </hd-input>
  <hd-input size="small"
            placeholder="请输入内容"
            v-model="input8">
  </hd-input>
</div>

<script>
export default {
  data() {
    return {
      input6: '',
      input7: '',
      input8: ''
    }
  }
}
</script>
`;
const validateStr = `
<hd-input placeholder="请输入内容"
          v-model="input9"
          :fill="true"
          :input-state="inputState_9">
  <i slot="suffix"
      class="el-input__icon"></i>
</hd-input>

<hd-input placeholder="请输入内容"
          v-model="input10"
          :fill="true"
          :input-state="inputState_10">
  <i slot="suffix"
      class="el-input__icon"></i>
</hd-input>

<script>
export default {
  data() {
    return {
      input9: 'success',
      input10: 'warning',
      inputState_9: 'correct',
      inputState_10: 'warning',
    }
  },
  watch: {
    input9(val) {
      this.inputState_9 = this.validateInput(val);
    },
    input10(val) {
      this.inputState_10 = this.validateInput(val);
    }
  },
  methods: {
    // 该逻辑可自定义，保证返回的是 normal、correct、warning、error 之中的一个值
    validateInput(val) {
      if (val && val === 'success') {
        return 'correct';
      } else if (val && val === 'warning') {
        return 'warning';
      } else {
        return 'error';
      }
    }
  }
}
</script>
`;
const disableStr = `
<hd-input
  placeholder="请输入内容"
  v-model="input1"
  :disabled="true">
</hd-input>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>
`;

const clearableStr = `
<hd-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</hd-input>

<script>
  export default {
    data() {
      return {
        input10: ''
      }
    }
  }
</script>
`;

const iconSlotStr = `
<div>
  <hd-input placeholder="请选择日期"
            suffix-icon="el-icon-date"
            v-model="input30">
  </hd-input>
  <hd-input placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input31">
  </hd-input>
</div>
<div>
  <hd-input placeholder="请选择日期"
            v-model="input32">
    <i slot="suffix"
      class="el-input__icon el-icon-date">
    </i>
  </hd-input>
  <hd-input placeholder="请输入内容"
            v-model="input33">
    <i slot="prefix"
      class="el-input__icon el-icon-search">
    </i>
  </hd-input>
</div>

<script>
  export default {
    data() {
      return {
        input30: ''
        input31: ''
        input32: ''
        input33: ''
      }
    }
  }
</script>
`;

const textareaStr = `
<hd-input type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          :rows="2">
</hd-input>

<script>
  export default {
    data() {
      return {
        textarea: ''
      }
    }
  }
</script>
`;

let code = {
  normalStr,
  sizeStr,
  validateStr,
  disableStr,
  clearableStr,
  iconSlotStr,
  textareaStr
};
export default code;
