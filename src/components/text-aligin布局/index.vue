<template>
  <div>
    <h2>
      探究text-align: justify 和 text-algn-last: justify 的应用场景
    </h2>
    <a href="https://blog.csdn.net/weixin_30824599/article/details/97002282?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-97002282-blog-113367706.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-97002282-blog-113367706.pc_relevant_aa&utm_relevant_index=1">参考</a>
    <h3>
      <div><span>密 码</span>：<input type="text" /></div>
      <div><span>用 户 名</span>：<input type="text" /></div>
      <div><span>身 份 证号</span>：<input type="text" /></div>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="less">
span {
  display: inline-block;
  width: 90px;
  // text-align: justify;
  text-align-last: justify;
}
</style>
