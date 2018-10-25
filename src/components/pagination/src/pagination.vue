/*
 * @Author: ChenMi
 * @Date: 2018-07-19 15:32:58
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-19 17:17:22
 * @Description: 
 */


<script>
import { Pagination } from 'element-ui';

export default {
  extends: Pagination,
  name: 'HdPagination',
  props: { round: Boolean },
  mounted() {
    this.$el.className = this.$el.className + ' is-round';
  }
};
</script>

<style lang="less">
.hd-pagination.el-pagination.is-round .el-pager li {
  border-radius: 50%;
  height: 30px;
  line-height: 30px;
}
</style>
