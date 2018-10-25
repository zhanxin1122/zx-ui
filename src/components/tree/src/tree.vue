/*
 * @Author: zhanxin
 * @Date: 2018-08-06 15:46:53
 * @LastEditors: zhanxin
 * @LastEditTime: 2018-08-08 08:55:40
 * @Description: 
 */
<script>
import { Tree } from 'element-ui';
export default {
  extends: Tree,
  name: 'HdTree',
  mounted() {
    this.$el.className += this.lineable ? ' hd-tree' : '';
  },
  props: {
    lineable: {
      type: Boolean,
      default: false
    }
  }
};
</script>
