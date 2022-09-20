<template>
  <div
    style="border: 3px solid gray; margin-top: 10px; padding: 10px"
  >
    <h2>子组件3：{{ query133 }}</h2>
    <el-input
      :value="query133"
      @input="changeInput"
      clearable
      style="width: 200px"
      placeholder="请输入"
    ></el-input>
  </div>
</template>

<script>
export default {
  props: ['query133'],
  model: {
    prop: 'query133',
    event: 'bba',
  },
  methods: {
    changeInput(e) {
      this.$emit('bba', e)
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
  &::placeholder {
    color: skyblue;
  }
}
</style>
