<template>
  <div>
    <h2>子组件2--{{ num2 }}</h2>
    <h2>子组件2--{{ name }}</h2>
  </div>
</template>
 
<script>
export default {
  inject: ['name'],
  data() {
    return {
      num2: 0,
    }
  },
  mounted() {
    // 接收到兄弟组件child1的num值
    this.$bus.$on('changeNum', (e) => {
      console.log('子组件2', e)
      this.num2 = e
    })
  },
  destroyed() {
    this.$bus.$off()
  },
  methods: {},
}
</script>
 
<style scoped >
</style>