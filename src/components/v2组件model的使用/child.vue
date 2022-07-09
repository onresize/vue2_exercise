<template>
  <div style="border: 3px solid gray;margin-top:10px; padding:10px;">
    <input type="checkbox" :checked="checked" @change="myChange" />
    <h2>子组件1：{{ checked }}</h2>
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