<template>
  <div>
    <h2>探究vue2中组件上使用v-model双向绑定、使用model: {prop:'checked', event: 'change'}自定义
    </h2>
    <h2>父组件：{{ checked }}</h2>
    <hr />
    <!-- 下面这两行代码写法都是一样的效果 -->
    <myCheckout v-model="checked" />
    <myCheckout :checked="checked"  @change1="(e) => { checked = e }"></myCheckout>
  </div>
</template>

<script>
import myCheckout from './child.vue'
export default {
  components: { myCheckout },
  data() {
    return {
      checked: false,
    }
  },
  methods: {},
}
</script>

<style scoped></style>
