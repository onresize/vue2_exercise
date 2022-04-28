<template>
  <div ref="allmap" id="allmap" :style="` width:${width}px;height:${height}px`"></div>
</template>
<script>
import BMapGL from '@/bmpgl_lib.js'
import BMap from 'vue-baidu-map'
export default {
  props: {
    width: {
      type: String,
      default: '500',
    },
    height: {
      type: String,
      default: '500',
    },
    zoom: {
      type: Number,
      default: 2,
    },
    Longitude: {
      type: Number,
      default: 116.400244, //北京经度
    },
    latitude: {
      type: Number,
      default: 39.92556, //北京维度
    },
  },
  data() {
    return {
      map: null,
      point: null,
      lng: 0,
      lat: 0,
      comp: {},
    }
  },
  mounted() {
    this.lng = this.Longitude
    this.lat = this.latitude
    this.$nextTick(() => {
      this.init(this.$refs.allmap)
    })
  },
  methods: {
    //初始化
    init(htmlNode) {
      this.map = new BMapGL.Map(htmlNode) // 创建Map实例
      this.point = new BMapGL.Point(this.lng, this.lat) //设置中心点
      this.map.centerAndZoom(this.point, this.zoom) // 初始化地图,设置中心点坐标和地图显示比例级别
      this.map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
      this.map.setMapType(BMAP_EARTH_MAP) // 设置地图类型为地球模式
      this.getAddress()
      this.map.addEventListener('click', this.clickEvent)
    },
    //设置标记
    setLabel() {
      let marker = new BMapGL.Marker(this.point) //创建标记
      this.map.addOverlay(marker) //将标记加入地图上
      let label = new BMapGL.Label(`城市:${this.comp.city},径度:${this.lng},纬度:${this.lat}`, {
        offset: new BMapGL.Size(20, -10),
      })
      marker.setLabel(label) //将标记标注
    },
    //点击事件
    clickEvent(e) {
      this.lng = e.latlng.lng
      this.lat = e.latlng.lat
      this.map.clearOverlays()
      this.point = new BMapGL.Point(this.lng, this.lat)
      this.map.panTo(this.point)
      this.getAddress()
    },
    getAddress() {
      let _self = this
      var myGeo = new BMap.Geocoder()
      myGeo.getLocation(new BMap.Point(this.lng, this.lat), function (rs) {
        _self.comp = rs.addressComponents
        _self.setLabel()
        try {
          let temp = _self.comp
          temp['lng'] = _self.lng
          temp['lat'] = _self.lat
          _self.$emit('map-click', temp)
        } catch (err) {
          console.log(err)
        }
      })
    },
  },
}
</script>