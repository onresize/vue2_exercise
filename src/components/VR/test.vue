<template>
  <div style="width: calc(100vw - 260px)">
    <!-- <h2>npm install photo-sphere-viewer</h2> -->
    <div id="viewer" ref="viewer"></div>
  </div>
</template>
 
<script>
import { Viewer } from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

export default {
  data() {
    return {
      viewer: '',
      imgUrl: require('@/assets/img/sun.jpg'),
    }
  },
  mounted() {
    this.viewer = new Viewer({
      container: this.$refs['viewer'],
      panorama: this.imgUrl,
      size: {
        width: '100vw',
        height: '96vh',
      },
    })
  },
}
</script>
 
<style scoped lang="less">
</style>