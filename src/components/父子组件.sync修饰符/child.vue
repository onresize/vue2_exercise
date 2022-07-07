<template>
  <div>
    <h2 class="top_h2">
      v2中父子组件生命周期执行顺序：(父created) -> (子created) ->
      (子mounted) -> (父mounted) -> (子destroyed) -> (父destroyed)
    </h2>
    <h2 class="top_h2">
      vue组件挂载阶段执行顺序：props -> data -> computed -> methods ->
      watch -> created -> mounted
    </h2>
    <h3>子组件生命周期不能拿到props值的问题参考：</h3>
    <el-tag>
      <el-link
        href="http://t.zoukankan.com/taohuaya-p-11413178.html"
        target="_blank"
        >http://t.zoukankan.com/taohuaya-p-11413178.html</el-link
      >
    </el-tag>
    <el-tag style="margin-left: 10px">
      <el-link
        href="https://blog.csdn.net/weixin_44242181/article/details/124447062"
        target="_blank"
        >https://blog.csdn.net/weixin_44242181/article/details/124447062</el-link
      >
    </el-tag>
    <h2>子组件money数 = {{ money }}</h2>
    <el-button type="primary" plain @click="btnClick"
      >子组件按钮</el-button
    >
  </div>
</template>

<script>
export default {
  props: {
    money: {
      type: Number,
      default: 1000,
      required: true,
    },
  },
  // props: ['money'],
  data() {
    return {}
  },
  // 子组件生命周期不能拿到props值的问题：
  // http://t.zoukankan.com/taohuaya-p-11413178.html
  // https://blog.csdn.net/weixin_44242181/article/details/124447062
  // 这里生命周期没有拿到父组件mounted传过来的值、是因为生命周期执行顺序是 父created -> 子created -> 子created -> 父mounted
  created() {
    console.log('created打印props', this.money)
  },
  mounted() {
    console.log('mounted打印props', this.money)
  },
  methods: {
    btnClick() {
      this.$emit('update:money', this.money - 100)
    },
  },
}
</script>

<style scoped></style>
