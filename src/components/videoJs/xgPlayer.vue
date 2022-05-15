<template>
  <div>
    <h2>西瓜视频播放器测试flv、hls流地址播放</h2>
    <div style="display: flex">
      <h3 style="background:pink;padding:5px;border-radius:5px">
        cnpm i xgplayer --save
      </h3>
      &nbsp;&nbsp;
      <h3 style="background:pink;padding:5px;border-radius:5px">
        cnpm i xgplayer-hls.js --save
      </h3>
      &nbsp;&nbsp;
      <h3 style="background:pink;padding:5px;border-radius:5px">
        cnpm i xgplayer --save
      </h3>
      &nbsp;&nbsp;
      <h3 style="background:pink;padding:5px;border-radius:5px">
        cnpm i xgplayer-flv.js --save
      </h3>
    </div>
    <el-card style="display:flex;justify-content:center">
      <div id="mse_hls"></div>
      <div id="mse_flv"></div>
    </el-card>
  </div>
</template>

<script>
import 'xgplayer'
import HlsPlayer from 'xgplayer-hls'
import FlvPlayer from 'xgplayer-flv'

export default {
  data() {
    return {}
  },
  mounted() {
    this.getPlayerHls()
    this.getPlayerFlv()
  },
  methods: {
    getPlayerHls() {
      let player = new HlsPlayer({
        id: 'mse_hls',
        url: 'http://39.108.213.89:1986/hls/c84415000d68.m3u8',
        autoplay: true, // 自动播放
        autoplayMuted: true,
        fluid: true, // 流体
        isLive: true
        // playbackRate: [0.5, 0.75, 1, 1.5, 2], // 播放速率
        // download: true // 下载
      })
    },
    getPlayerFlv() {
      let player = new FlvPlayer({
        id: 'mse_flv',
        url:
          'https://flvopen.ys7.com:9188/openlive/6e31c12fe0f340339aafb065841e8dc5.flv',
        autoplay: true,
        autoplayMuted: true, //自动播放静音，设置自动播放参数必要参数
        isLive: true,
        preloadTime: 30,
        minCachedTime: 5
      })
    }
  }
}
</script>

<style scoped></style>
