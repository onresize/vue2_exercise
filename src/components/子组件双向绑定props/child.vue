<template>
  <div>
    <h2>子组件修改name值：<input type="text" v-model="newName" /></h2>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      newName: this.name,
    }
  },
  created() {
    console.log('created拿到props值：', this.name)
  },
  watch: {
    name(newVal) {
      console.log('watch--name:', newVal)
      this.newName = newVal
    },
    newName(newVal) {
      console.log('watch--newName:', newVal)
      this.$emit('ipt', newVal)
    },
  },
  // computed: {
  //   newName: {
  //     get() {
  //       return this.name
  //     },
  //     set(val) {
  //       console.log(val)
  //       this.$emit('ipt', val)
  //     },
  //   },
  // },
}
</script>

<style scoped></style>
