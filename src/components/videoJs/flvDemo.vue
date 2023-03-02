<template>
  <!-- FLV能播放rtsp流、也能播放rtmp流 -->
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
        // {
        //   id: 1,
        //   src: 'http://47.103.76.152:8091/live/livestream.flv',
        // },
        // {
        //   id: 2,
        //   src: 'http://localhost:8000/livemydesktop2/mydesktop2.flv',
        // },
        {
          id: 3,
          src: 'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        },
        {
          id: 4,
          src: 'ws://192.168.31.91:8888/rtsp://127.0.0.1/test',
        },
        // {
        //   id: 5,
        //   src: 'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        // },
        // {
        //   id: 6,
        //   src: 'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        // },
        // {
        //   id: 7,
        //   src: 'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        // },
        // {
        //   id: 8,
        //   src: 'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        // },
        // {
        //   id: 9,
        //   src: 'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        // },
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