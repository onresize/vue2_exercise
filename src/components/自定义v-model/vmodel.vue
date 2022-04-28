<template>
  <div>
    <h2>
      自定义组件上 实现v-model => <span class="h2_span">{{ searchText }}</span>
    </h2>
    <custom-input :value1="searchText" @input1="parentInputHandle"></custom-input>
  </div>
</template>
 
<script>
import customInput from './child.vue'
export default {
  components: { customInput },
  data: () => ({
    searchText: ''
  }),
  methods: {
    parentInputHandle(val) {
      this.searchText = val
    },
  },
}
</script>

<style scoped>
.h2_span {
  background-color: pink;
}
</style>