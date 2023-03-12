<template>
  <div>
    <a
      href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"
      target="_blank"
      >参考</a
    >
    <h2 style="width: 600px;">
      grid布局基本使用、grid-template-columns: repeat(auto-fill,
      100px);父级设置每一列100px宽度、由外部盒子自动填充、高度自适应变化
    </h2>
    <div class="father">
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  created() {},
  methods: {},
}
</script>
 
<style scoped lang="less">
.father {
  width: 623px;
  height: 600px;
  border: 1px solid black;
  // padding: 2px;
  display: grid;
  // grid-template-columns: repeat(6, 3fr);
  // grid-template-rows: repeat(4, 25%);
  grid-template-columns: repeat(auto-fill, 100px);
  column-gap: 4px; // 列间距
  row-gap: 4px; // 行间距
  // gap: 4px 4px; //简写：行间距、列间距
  // border: 1px solid red;

  .child {
    background-color: pink;
    // border: 4px solid #fff;
  }
}
</style>