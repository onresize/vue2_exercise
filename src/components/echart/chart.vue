<template>
  <div>
    <h2>echarts父组件</h2>
    <el-card style="background: #282c34">
      <div style="width: 100%; height: 400px">
        <Chart></Chart>
      </div>
      <dv-decoration-9 style="width: 100px; height: 100px">
        <div class="div_img2"></div>
      </dv-decoration-9>
    </el-card>
  </div>
</template>
 
<script>
import Chart from '@/child/echarts'
export default {
  components: { Chart },
  data() {
    return {}
  },
  methods: {},
  created() {},
}
</script>
 
<style scoped >
.div_img2 {
  width: 90px;
  height: 90px;
  background: url(http://jincunxiao.cn/tea3.png) no-repeat center
    center;
  background-size: cover;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
}
</style>