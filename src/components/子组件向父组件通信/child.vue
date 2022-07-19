<template>
  <div>
    <h2>子组件</h2>
    <el-button @click="emitToFather">事件方式emitToFather</el-button>
    <el-button @click="emitToFatherCallBack"
      >回调方式emitToFather</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    emitToFather() {
      this.$emit('childEmit', 123)
    },
    emitToFatherCallBack() {
      this.$emit('childEmitCallBack', 99)
    },
  },
}
</script>

<style scoped></style>
