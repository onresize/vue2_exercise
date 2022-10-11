<template>
  <div>
    <h2>webrtc流播放测试</h2>
    <!-- <WebRtc :videoSrc="src"></WebRtc> -->
    <video id="video-webrtc" controls></video>
  </div>
</template>
 
<script>
import WebRtc from './webRtc.vue'
export default {
  components: { WebRtc },
  data() {
    return {
      // url: 'rtsp://admin:DSMY666666@192.168.3.42:5545/Streaming/Channels/102',
      url: 'webrtc://47.108.76.168/live/livestream',
      // url: 'https://ping.mfyke.com/data/video/1.webm',
    }
  },
  mounted() {
    var video = document.getElementById('video-webrtc')
    var player = new JSWebrtc.Player(this.url, {
      video: video,
      autoplay: true,
      onPlay: (obj) => {
        console.log('播放成功', obj)
      },
    })
  },

  methods: {},
}
</script>
 
<style scoped >
.jswebrtc {
  width: 400px;
  height: 400px;
}
</style>