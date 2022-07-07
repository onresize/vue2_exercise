<template>
  <div>
    <input type="checkbox" :checked="checked" @change="myChange" />
    <h2>子组件：{{ checked }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    checked: {
      type: Boolean,
      default: () => true,
    },
  },
  //开启 model
  model: {
    prop: 'checked',
    event: 'change1',
  },
  methods: {
    myChange(e) {
      console.log('change:', e.target.checked)
      this.$emit('change1', e.target.checked)
    },
  },
}
</script>

<style scoped lang="less">
// input {
//   border: 1px solid #000;
//   &:focus {
//     border: 1px solid red;
//   }
//   &::placeholder {
//     color: gray;
//   }
// }
</style>
