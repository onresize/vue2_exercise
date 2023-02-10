<template>
  <div>
    <scroll-number :value="num"></scroll-number>
  </div>
</template>

<script>
import ScrollNumber from './scroll-number.vue'
export default {
  components: {
    ScrollNumber,
  },
  data() {
    return {
      num: 69,
    }
  },
  mounted() {
    this.LoopMethod()
  },
  methods: {
    LoopMethod() {
      setTimeout(() => {
        this.num--
        this.LoopMethod()
      }, 1000)
    },
  },
}
</script>

<style scoped></style>
