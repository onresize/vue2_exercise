<template>
  <div>
    <h2>
      当前ip：<el-tag>{{ ip }} </el-tag>
    </h2>
    <h2>
      当前地址：<el-tag>{{ address }}</el-tag>
    </h2>
    <el-button @click="getTwo">
      获取当前地址：{{ getAddress }}
    </el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      ip: null,
      address: null,
      getAddress: null,
    }
  },
  created() {
    this.getOne()
  },
  methods: {
    // 方案一
    getOne() {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      }
      axios.get('/apiSohu/cityjson?ie=utf-8', config).then((res) => {
        let r = JSON.parse(
          res.data.substring(19, res.data.length - 1)
        )
        this.ip = r.cip
        this.address = r.cname
        console.log(r)
      })
    },
    getTwo() {
      axios.get('https://api-v3.speedtest.cn/ip').then((res) => {
        let { data: result } = res.data
        this.getAddress = `${result.country}-${result.province}-${result.city}-(纬度：${result.lat}、经度：${result.lon})`
        console.log(result)
      })
    },
  },
}
</script>

<style scoped></style>
