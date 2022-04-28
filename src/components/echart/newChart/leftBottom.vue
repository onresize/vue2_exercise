<template>
  <!-- 左下组件 长势监测 -->
  <div style="width: 100%; height: 100%">
    <div
      ref="myChart"
      style="width: 100%; height: 100%; margin-left: 2%"
    ></div>
  </div>
</template>
 
<script>
// import echarts from 'echarts'
export default {
  data() {
    return {
      option: {
        legend: {
          orient: 'horizontal',
          x: 'right',
          y: 'top',
          padding: [10, 30, 0, 0],
          icon: 'circle', //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 13, // 设置宽度
          itemHeight: 13, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            color: '#fff', // 图例文字颜色
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', '优秀', '达标', '未达标'],
          source: [
            { product: 'A区', 优秀: 320, 达标: 301, 未达标: 200 },
            { product: 'B区', 优秀: 520, 达标: 550, 未达标: 150 },
            { product: 'C区', 优秀: 620, 达标: 606, 未达标: 100 },
            { product: 'D区', 优秀: 530, 达标: 504, 未达标: 100 },
          ],
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
        },

        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#00DACD',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#FFCF5F',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#1893F2',
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart(this.option)
    })
    // echarts图表自适应
    window.addEventListener('resize', () => {
      this.$echarts.init(this.$refs['myChart']).resize()
    })
  },
  destroyed() {
    // 离开页面后清除echarts设置的自适应
    window.removeEventListener('resize', () => {
      this.$echarts.init(this.$refs['myChart']).resize()
    })
  },
  methods: {
    initChart(obj) {
      let chart = this.$echarts.init(this.$refs['myChart'])

      chart.setOption(obj)
    },
  },
}
</script>
 
<style scoped lang="less">
</style>