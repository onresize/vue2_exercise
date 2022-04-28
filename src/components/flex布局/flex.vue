<template>
  <div>
    <a
      href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"
      target="_bank"
      >参考</a
    >
    <h2>
      flex基本属性、flex-wrap:wrap换行后行间距不紧挨、设置align-content:
      flex-start解决
    </h2>
    <div class="father">
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">0</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">2</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">123</div>
      <div class="child">4</div>
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
  width: 606px;
  height: 600px;
  padding: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // align-items: center;
  align-content: flex-start; // 解决换行后行间距的空隙、控制轴线对齐
  justify-content: flex-start;
  border: 1px solid black;

  .child {
    width: 100px;
    height: 100px;
    background-color: pink;
    border: 4px solid #fff;
  }
}
</style>