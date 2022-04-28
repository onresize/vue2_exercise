<template>
  <div>
    <!-- <h2 style="color: red">子组件</h2> -->
    <el-input :value="query" @input="changeInput" clearable></el-input>{{ query }}
  </div>
</template>
 
<script>
export default {
  props: {
    query: {
      type: String,
    },
  },
  model: {
    prop: 'query',
    event: 'change',
  },
  watch: {},
  methods: {
    changeInput(e) {
      this.$emit('change', e)
    },
  },
}
</script>
 
<style scoped >
</style>