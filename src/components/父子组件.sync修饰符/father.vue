<template>
  <div>
    <h2>
      以下子组件绑定
      <h3 class="sync">:money.sync="total"</h3>
      自定义组件上的.sync修饰符相当于
      <h3 class="sync">
        :money="total" @update:money="total = $event
      </h3>
    </h2>
    <hr />
    <h2>父组件total数 = {{ total }}</h2>
    <hr />
    <!--以下种写法都可以、$event是子组件传过来的参数 -->
    <!-- <child :money.sync="total"></child> -->
    <child :money="total" @update:money="total = $event"></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  components: {
    child
  },
  data() {
    return {
      total: 10001
    }
  },
  mounted() {
    this.total = 222
  },
  methods: {}
}
</script>

<style scoped>
.sync {
  color: red;
}
</style>
