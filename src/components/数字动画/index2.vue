<template>
  <div>
    <el-tag>npm i vue-count-to -D</el-tag>
    <h2>数字动画</h2>
    <countTo
      :startVal="startVal"
      :endVal="endVal"
      :duration="duration"
    ></countTo>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  components: { countTo },
  data() {
    return {
      // 需要滚动的时间
      duration: 5000,
      // 初始值
      startVal: 0,
      // 最终值
      endVal: 2018,
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
