<template>
  <div>
    <label><b>:value 和 @input实现双向绑定： 子组件1：</b></label>
    <input
      type="text"
      :value="value1"
      @input="(e) => $emit('input1', e.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ['value1'],
}
</script>
