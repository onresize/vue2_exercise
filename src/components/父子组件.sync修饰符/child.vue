<template>
  <div>
    <h2>子组件money数 = {{ money }}</h2>
    <el-button type="primary" plain @click="btnClick">子组件按钮</el-button>
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
  data() {
    return {}
  },
  methods: {
    btnClick() {
      this.$emit('update:money', this.money - 100)
    },
  },
}
</script>
 
<style scoped >
</style>