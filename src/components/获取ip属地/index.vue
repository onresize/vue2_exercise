<template>
  <div>
    <h2>
      当前ip：<el-tag>{{ ip }} </el-tag>
    </h2>
    <h2>
      当前地址：<el-tag>{{ address }}</el-tag>
    </h2>
    <h3>
      百度地图获取当前地址：<el-tag>{{ baiduMapLocation }}</el-tag>
    </h3>
    <el-button @click="getTwo">
      获取当前地址：{{ getAddress }}
    </el-button>
  </div>
</template>

<script>
import axios from 'axios'
import loadBMap from './loadMap'
// index.html全局引入百度地图js
export default {
  data() {
    return {
      ip: null,
      address: null,
      getAddress: null,
      baiduMapLocation: null,
    }
  },
  async created() {
    this.getOne()
    await loadBMap('bGGlPyz2j5Rtn0uQNA9jBhBFFH4vxuXO')
  },
  mounted() {
    this.getNowAddress()
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
    // 百度地图定位、获取地理位置
    getNowAddress() {
      let geolocation = new BMap.Geolocation()
      let that = this
      geolocation.getCurrentPosition(
        function (res) {
          if (res?.address) {
            console.log(
              '百度地图:',
              res.address.province + res.address.city
            )
            that.baiduMapLocation =
              res.address.province + res.address.city
          }
        },
        { enableHighAccuracy: true }
      )
      //enableHighAccuracy：是否要求浏览器获取最佳效果，默认为false
    },
  },
}
</script>

<style scoped></style>
