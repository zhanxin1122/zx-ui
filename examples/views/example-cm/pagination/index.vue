<template>
  <div class="demo-pagination">
    <div class="demo__header">
      Pagination/分页
    </div>
    <div class="demo__body">
      <section>
        <div class="section__header">Simple/简单样式</div>
        <div class="section__body">
          <hd-pagination class="hd-pagination section__component"
                         layout="prev, pager, next"
                         :total="50"></hd-pagination>
        </div>
      </section>
      <section>
        <div class="section__header">Basic/基础样式</div>
        <div class="section__body">
          <hd-pagination class="hd-pagination section__component"
                         layout="prev, pager, next"
                         :total="230"></hd-pagination>
        </div>
      </section>
      <section>
        <div class="section__header">Square Background/方底背景样式</div>
        <div class="section__body">
          <hd-pagination class="hd-pagination section__component"
                         layout="prev, pager, next"
                         background
                         :total="230"></hd-pagination>
        </div>
      </section>
      <section>
        <div class="section__header">Round Background/圆底背景样式</div>
        <div class="section__body">
          <hd-pagination class="hd-pagination section__component"
                         layout="prev, pager, next"
                         background
                         :total="230"
                         round></hd-pagination>
        </div>
      </section>
      <section>
        <div class="section__header">Combination/组合式样式</div>
        <div class="section__body">
          <hd-pagination class="hd-pagination section__component"
                         layout="total, prev, pager, next"
                         :total="230"></hd-pagination>
          <hd-pagination class="hd-pagination section__component"
                         layout="sizes, prev, pager, next"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         :total="1000"></hd-pagination>
          <hd-pagination class="hd-pagination section__component"
                         layout="prev, pager, next, jumper"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         :total="1000"></hd-pagination>
          <hd-pagination class="hd-pagination section__component"
                         layout="total, sizes, prev, pager, next, jumper"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         :total="1000"></hd-pagination>
          <hd-pagination class="hd-pagination section__component"
                         layout="total, sizes, prev, pager, next, jumper"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         :total="1000"
                         background></hd-pagination>
          <hd-pagination class="hd-pagination section__component"
                         layout="total, sizes, prev, pager, next, jumper"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         :total="1000"
                         background
                         round></hd-pagination>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import HdPagination from '@/components/pagination/src/pagination.vue';
export default {
  components: {
    HdPagination
  }
};
</script>
