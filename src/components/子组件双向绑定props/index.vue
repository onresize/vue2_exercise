<template>
  <div>
    <h1>
      <mark
        >演示子组件双向绑定父组件传过来的props的方案：
        watch配合data箭头、computed双向绑定搭配get/set</mark
      >
    </h1>
    <h2>父组件修改name值： <input type="text" v-model="name" /></h2>
    <Child :name="name" @ipt="(e) => (this.name = e)" />
  </div>
</template>

<script>
import Child from './child'
export default {
  components: { Child },
  data() {
    return {
      name: '默认值',
    }
  },
}
</script>

<style scoped></style>
