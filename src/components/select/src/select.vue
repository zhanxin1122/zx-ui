/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-13 14:54:15
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-17 15:57:27
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */


<script>
import '@/style/select.less';
import { Select } from 'element-ui';
import { addClass } from '@/utils/handle-class.js';
export default {
  extends: Select,
  name: 'HdSelect',
  props: {
    selectStyle: {
      type: String,
      default: 'normal'
    },
    popperAppendToBody: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    if (this.selectStyle === 'circle') {
      this.$el.className = addClass(this.$el.className, 'hd-select circle');
    } else if (this.selectStyle === 'checkbox') {
      this.$el.className = addClass(this.$el.className, 'hd-select checkbox');
    } else {
      this.$el.className = addClass(this.$el.className, 'hd-select');
    }
  },
  methods: {}
};
</script>
