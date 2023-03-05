<template>
  <!-- rtmp依赖flash、谷歌浏览器已禁止、最好的方案rtsp转成http或者ws协议的 flv流 或 m3u8流 -->
  <!-- VLC可以直接播放rtsp、rtmp流 -->
  <div class="container">
    <div class="row">
      <videoFlv
        class="video"
        v-for="{ src, id } in videoSrc"
        :key="id"
        :videoSrc="src"
      ></videoFlv>
    </div>
  </div>
</template>
 
<script>
import videoFlv from './flv.vue'
export default {
  components: { videoFlv },
  data() {
    return {
      videoSrc: [
        {
          id: 2,
          src: 'http://localhost:8000/live/mp4.flv',
          //XXX node服务端代码： https://www.aliyundrive.com/s/TgDMfqosdyM
        },
        {
          id: 3,
          src: 'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        },
      ],
    }
  },
}
</script>
 
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  .row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .video {
      width: 33.3%;
      height: 33.3%;
    }
  }
}
</style>