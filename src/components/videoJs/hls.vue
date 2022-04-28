<template>
  <div class="hls">
    <div class="hls_video">
      <!-- hls搭配video标签播放.m3u8直播流 -->
      <video
        ref="videoElement"
        controls
        muted
        style="width: 100%; height: 100%; object-fit: fill"
      ></video>
    </div>
  </div>
</template>

<script>
import Hls from 'hls.js'
export default {
  props: {
    videoUrl: {
      type: String,
    },
  },
  destroyed() {
    this.closeVideo()
  },
  mounted() {
    this.$nextTick(() => {
      this.show()
    })
  },
  methods: {
    show() {
      this.video = this.$refs.videoElement //定义挂载点
      this.hls = new Hls()
      this.hls.loadSource(this.videoUrl) //设置播放路径
      this.hls.attachMedia(this.video) //解析到video标签上
      this.video.play()
    },
    closeVideo() {
      this.video.pause()
      this.hls.stopLoad()
      this.hls.destroy()
    },
  },
}
</script>

<style scoped lang="less">
// 所有控件
video::-webkit-media-controls-fullscreen-button {
  display: block;
}
/* 播放按钮 */
video::-webkit-media-controls-play-button {
  display: none;
}
/* 进度条 */
video::-webkit-media-controls-timeline {
  display: none;
}
/* 观看的当前时间 */
video::-webkit-media-controls-current-time-display {
  display: none;
}
/* 剩余时间 */
video::-webkit-media-controls-time-remaining-display {
  display: none;
}
/* 音量按钮 */
video::-webkit-media-controls-mute-button {
  display: block;
}
video::-webkit-media-controls-toggle-closed-captions-button {
  display: block;
}
/* 音量的控制条 */
video::-webkit-media-controls-volume-slider {
  display: block;
}
.hls {
  width: 100%;
  height: 100%;
  .hls_video {
    width: 100%;
    height: 100%;
  }
}
</style>