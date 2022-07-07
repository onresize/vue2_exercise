<template>
  <div style="margin-top: 10px">
    <label><b>.sync修饰符实现双向绑定： 子组件2：</b></label>
    <el-input
      clearable
      type="text"
      :value="value1"
      @input="$emit('update:value1', $event)"
    />
  </div>
</template>

<script>
export default {
  props: ['value1'],
}
</script>
