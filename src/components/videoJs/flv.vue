<template>
  <div class="video-flv">
    <div class="video-box">
      <!-- flv搭配video标签播放.flv直播流 -->
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
import flvjs from 'flv.js'
export default {
  name: 'videoFlv',
  props: {
    videoShow: {
      type: Boolean,
      default: true,
    },
    videoSrc: {
      type: String,
      default: 'http://www.lb50.cn/LIveUrl/TYUrl.Asp?1412.flv',
    },
  },
  data() {
    return {
      playerElement: null,
      flvPlayer: null,
      // 下面的属性写在createPlayer实例里
      // | enableStashBuffer | 是否开启播放器端缓存 |
      // | stashInitialSize  | 播放器端缓存        |
      // | isLive            | 是否为直播流        |
      // | hasAudio          | 是否播放声音        |
      // | hasVideo          | 是否播放画面        |
    }
  },
  destroyed() {
    this.flvDestroy()
  },
  mounted() {
    this.$nextTick(() => {
      if (this.videoShow && this.videoSrc) {
        this.videoInit()
      }
    })
  },
  methods: {
    videoInit() {
      this.playerElement = this.$refs.videoElement
      if (flvjs.isSupported()) {
        this.flvPlayer = flvjs.createPlayer({
          type: 'flv',
          isLive: true,
          url: this.videoSrc,
        })
        this.flvPlayer.attachMediaElement(this.playerElement)
        this.flvPlayer.load() //加载
        this.flvPlay()
      }
    },
    flvPlay() {
      this.flvPlayer.play()
    },
    flvDestroy() {
      this.flvPlayer.pause()
      this.flvPlayer.unload()
      this.flvPlayer.detachMediaElement()
      this.flvPlayer.destroy()
      this.flvPlayer = null
      this.playerElement = null
    },
  },
  // watch: {
  //   videoSrc() {
  //     console.log(this.videoSrc, 'videoSrc')
  //     if (this.videoShow) {
  //       this.$nextTick(() => {
  //         this.videoInit()
  //       })
  //     }
  //   },
  // },
}
</script>
<style lang="less" scoped>
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
  display: none;
}
.video-flv {
  .video-box {
    width: 100%;
    height: 100%;
    .videoElement {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

