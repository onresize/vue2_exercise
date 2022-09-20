<template>
  <div
    style="border: 3px solid gray; margin-top: 10px; padding: 10px"
  >
    <h2>子组件2：{{ query122 }}</h2>
    <input type="text" :value="query122" @input="changeInput" />
  </div>
</template>

<script>
export default {
  props: {
    query122: {
      type: String,
    },
  },
  model: {
    //XXX 这里写prop指定接收props内的参数名为 'query122'、如果不写那么props就默认是value
    prop: 'query122',
    // event指定下面触发给父组件标签的事件名是ipt
    event: 'ipt',
  },
  methods: {
    changeInput(e) {
      // this.$emit('change', e)
      this.$emit('ipt', e.target.value)
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
