<template>
  <div>
    <!-- 114.758709  26.472829 -->
    <!-- 地图类型 mapType="BMAP_SATELLITE_MAP" -->
    <baidu-map
      class="bm-view"
      center="万安县"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @click="handMap"
      @ready="handler"
    >
      <!-- 行政区域范围 -->
      <bm-boundary
        name="万安县"
        :strokeWeight="2"
        strokeColor="blue"
        @click="alertContent"
      ></bm-boundary>
      <!-- 略缩图 -->
      <bm-overview-map
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :isOpen="false"
      ></bm-overview-map>
      <bm-local-search
        class="local_search"
        :keyword="keyword"
        :auto-viewport="true"
        location="万安县"
      ></bm-local-search>
      <div class="search_input">
        <a-input-search
          v-model.trim="searchValue"
          placeholder="请输入搜索内容"
          enter-button
          @search="onSearch"
        />
      </div>
      <!-- 定位按钮 -->
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :offset="{ width: '10px', height: '10px' }"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>

      <!-- 全景图 -->
      <bm-panorama></bm-panorama>

      <!-- 标点 -->
      <!-- 
          animation="BMAP_ANIMATION_BOUNCE" 
          :position="{ lng: 114.758709, lat: 26.472829 }"
        -->
      <bm-marker
        :position="centerMap"
        animation="BMAP_ANIMATION_BOUNCE"
        :dragging="true"
        @click="infoWindowOpen"
      >
        <!-- <bm-label
            content="万安县"
            :labelStyle="{ color: 'red', fontSize: '24px', borderRadius: '10px' }"
            :offset="{ width: -35, height: 30 }"
          /> -->
        <!-- 标点弹出框 -->
        <bm-info-window
          :show="show"
          @close="
            () => {
              this.show = false
            }
          "
          @open="infoWindowOpen"
        >
          {{
            `经度: ${this.lng} 
                纬度: ${this.lat}`
          }}
        </bm-info-window>
      </bm-marker>
    </baidu-map>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      show: false,
      center: { lng: 0, lat: 0 },
      zoom: 10,
      lat: null,
      lng: null,
      // 地图搜索默认字段
      keyword: '',
      // 定义标点经纬度
      centerMap: { lng: 114.758709, lat: 26.472829 },
      // 搜索框绑定值
      searchValue: '',
    }
  },
  created() {},
  methods: {
    // 点击地图触发、获取经纬度和位置
    handMap(e) {
      console.log('e:', e)
      const point = new BMap.Point(e.point.lng, e.point.lat)
      this.centerMap = point
      const gc = new BMap.Geocoder()
      gc.getLocation(point, (res) => {
        alert(res.address)
      })
    },
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 8
    },
    // 搜索框
    onSearch() {
      this.keyword = this.searchValue
    },
    alertContent(e) {
      console.log(`
        经度: ${e.point.lng}
        纬度: ${e.point.lat}
      `)
    },
    infoWindowOpen(e) {
      this.show = true
      this.lng = e.point.lng
      this.lat = e.point.lat
    },
  },
}
</script>
 
<style scoped >
.bm-view {
  width: 100%;
  height: 88vh;
}
::v-deep .bm-view .BMap_cpyCtrl {
  display: none;
}

::v-deep .bm-view .anchorBL {
  display: none;
}
.local_search {
  position: absolute;
  top: 71px;
  left: 273px;
  width: 228px;
}
.search_input {
  position: absolute;
  top: 40px;
  left: 300px;
}
</style>