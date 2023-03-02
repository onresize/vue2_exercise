<template>
  <div class="wrap">
    <el-link
      href="https://blog.csdn.net/o11111123456l/article/details/128664393"
      target="_blank"
      >参考：</el-link
    >
    <el-button @click="sound">点击播放</el-button>
    <video class="video" volume="0.5" controls ref="player"></video>
  </div>
</template>
 
<script>
import flvjs from 'flv.js' // 引入flvjs
export default {
  data() {
    return {
      player: null,
    }
  },
  beforeDestroy() {
    // 页面销毁前 关闭flvjs
    this.player.destroy()
  },
  methods: {
    sound() {
      // 如果浏览器支持flvjs，则执行相应的程序
      if (flvjs.isSupported()) {
        this.player = null
        // 准备监控设备流地址
        const url = 'rtsp://192.168.31.91/test'
        // 使用FFmpeg获取本地摄像头设备： ffmpeg -list_devices true -f dshow -i dummy

        // 使用FFmpeg本地摄像头推流终端命令：
        // ffmpeg -f dshow -i video="HD Camera":audio="麦克风阵列 (Realtek(R) Audio)" -vcodec libx264 -preset:v ultrafast -tune:v zerolatency -rtsp_transport tcp -f rtsp rtsp://127.0.0.1/test

        // 下面的ws://localhost:8888换成你搭建的websocket服务地址，后面加上设备流地址
        this.player = flvjs.createPlayer({
          type: 'flv',
          isLive: true,
          hasVideo: true,
          url: 'ws://192.168.31.91:8888/' + url,
        })
        this.player.on('error', () => {
          //报错重置player，不重置卡着不动。
          this.player.unload()
          this.player.destroy()
          this.player = null
          this.sound()
        })
        // 将实例挂载到video元素上面
        this.player.attachMediaElement(this.$refs.player)
        try {
          // 开始运行加载 只要流地址正常 就可以在h5页面中播放出画面了
          this.player.load()
          this.player.play()
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>
 
<style  scoped lang="less">
.wrap .video {
  width: 600px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.el-button {
  margin: 10px;
}
</style>