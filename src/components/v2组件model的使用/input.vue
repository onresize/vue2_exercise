<template>
  <div
    style="border: 3px solid gray; margin-top: 10px; padding: 10px"
  >
    <h2>子组件2：{{ query }}</h2>
    <el-input
      :value="query"
      @input="changeInput"
      clearable
      style="width: 200px"
      placeholder="请输入"
    ></el-input>
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

<style scoped lang="less">
.el-input {
  & :enabled {
    border: 2px solid #000;
    border-radius: 5px;
  }
  & :focus {
    border: 2px solid red;
  }
  & ::placeholder {
    color: skyblue;
  }
}
</style>
