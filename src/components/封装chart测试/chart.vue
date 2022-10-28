<template>
  <div>
    <Chart :personHouse="personHouse" ref="chart111"></Chart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personHouse: {
        sum: 99,
      },
    }
  },
  components: {
    Chart: () => import('@/child/chart'),
  },
  mounted() {
    // 父组件调用子组件方法、此时拿不到子组件实例、所以用定时器
    setTimeout(() => {
      this.$refs.chart111.drawLine()
    }, 2000)
  },
}
</script>

<style scoped></style>
