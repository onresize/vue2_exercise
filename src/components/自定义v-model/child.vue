<template>
  <div>
    <input type="text" :value="value1" @input="(e) => $emit('input1', e.target.value)" />
  </div>
</template>
 
<script>
export default {
  props: ['value1'],
}
</script>
