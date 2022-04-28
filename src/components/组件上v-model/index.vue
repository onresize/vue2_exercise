<template>
  <div class="container">
    <h3>
      父组件 引入注册 子组件中的组件，父组件标签上用v-model绑定，子组件同props平级用model: { prop: '', event: '' }接收
    </h3>
    <h2 style="color: red">父组件----{{ query }}</h2>
    <myInput v-model="query" @change="parentChange"></myInput>
  </div>
</template>
 
<script>
import myInput from './input.vue'
export default {
  components: {
    myInput,
  },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    parentChange(e) {
      console.log('父组件引入子组件input框改变了---', e)
    },
  },
}
</script>
 
<style scoped >
</style>