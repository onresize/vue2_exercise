<template>
  <div>
    <h2>西瓜视频播放器测试flv、hls流地址播放</h2>
    <div style="display: flex">
      <h3 style="background: pink; padding: 5px; border-radius: 5px">
        cnpm i xgplayer --save
      </h3>
      &nbsp;&nbsp;
      <h3 style="background: pink; padding: 5px; border-radius: 5px">
        cnpm i xgplayer-hls.js --save
      </h3>
      &nbsp;&nbsp;
      <h3 style="background: pink; padding: 5px; border-radius: 5px">
        cnpm i xgplayer --save
      </h3>
      &nbsp;&nbsp;
      <h3 style="background: pink; padding: 5px; border-radius: 5px">
        cnpm i xgplayer-flv.js --save
      </h3>
      <el-button @click="toShow" size="mini">开启</el-button>
    </div>
    <!-- <el-card
      style="display: flex; justify-content: center"
    >
    </el-card> -->
      <div id="mse_hls" style="width: 600px;"  v-if="show"></div>
      <!-- <div id="mse_flv"></div> -->
  </div>
</template>

<script>
import 'xgplayer'
import HlsPlayer from 'xgplayer-hls'
import FlvPlayer from 'xgplayer-flv'

export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    // this.getPlayerFlv()
  },
  methods: {
    toShow() {
      this.show = true
      this.$nextTick(() => {
        this.getPlayerHls()
      })
    },
    getPlayerHls() {
      let player = new HlsPlayer({
        id: 'mse_hls',
        // url: 'http://139.9.207.185:1986/hls/c84415000d97.m3u8',
        url: 'http://47.38.11.206:83/openUrl/E6SGXYY/live.m3u8',
        autoplay: true, // 自动播放
        autoplayMuted: true,
        fluid: true, // 流体
        isLive: true,
        // playbackRate: [0.5, 0.75, 1, 1.5, 2], // 播放速率
        // download: true // 下载
      })
    },
    getPlayerFlv() {
      let player = new FlvPlayer({
        id: 'mse_flv',
        url: 'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        autoplay: true,
        autoplayMuted: true, //自动播放静音，设置自动播放参数必要参数
        isLive: true,
        preloadTime: 30,
        minCachedTime: 5,
      })
    },
  },
}
</script>

<style scoped></style>
