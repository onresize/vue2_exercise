<template>
  <div style="width: 100%; height: 80vh">
    <h2>npm install @easydarwin/easyplayer --save</h2>
    <EasyPlayer
      :videoUrl="videoUrl"
      live
      fluent
      aspect
      autoplay
      stretch
      decodeWasm
    ></EasyPlayer>
  </div>
</template>
 
<script>
import EasyPlayer from '@easydarwin/easyplayer'
export default {
  components: { EasyPlayer },
  data() {
    return {
      videoUrl: null,
    }
  },
  mounted() {
    // flv和rtmp用不了
    // this.videoUrl = 'http://39.108.213.89:1986/hls/c84415000d2d.m3u8'
    this.videoUrl = 'http://47.38.11.206:83/openUrl/E6SGXYY/live.m3u8'
  },
  created() {},
  methods: {},
}
</script>
 
<style scoped >
</style>