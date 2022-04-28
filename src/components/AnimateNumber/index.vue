<template>
  <div>
    <h2>
      测试数字减缓动画插件 npm install animated-number-vue --save
    </h2>
    <animated-number
      :value="value"
      :duration="duration"
      :formatValue="formatToPrice"
    />
  </div>
</template>
 
<script>
import AnimatedNumber from 'animated-number-vue'
export default {
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      value: 19999,
      duration: 1000, // 动画时长 ms
    }
  },
  created() {},
  methods: {
    formatToPrice(value) {
      //使用tofixed（0）限制跳动的小数位数
      return `<el-tag type="success">${Number(value).toFixed(
        0
      )}</el-tag>`
    },
  },
}
</script>
 
<style scoped >
</style>