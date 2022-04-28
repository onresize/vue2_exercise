<template>
  <video
    id="jswebrtc"
    ref="jswebrtc"
    controls
    style="width: 100%; height: 100%; object-fit: fill"
  ></video>
</template>

<script>
export default {
  name: 'WebRtcPlayer',
  props: {
    videoSrc: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    this.$watch(
      'videoSrc',
      () => {
        if (this.videoSrc) {
          this.initVideo(this.videoSrc)
          console.log('播放视频路径：', this.videoSrc)
        }
      },
      { immediate: true }
    )
  },
  methods: {
    /**
     * 初始化播放器并播放
     * 两种调用方式
     *  一种通过 watch监听 props 传过来的 src 进行播放
     *  一种通过 引用组件上的 ref 直接调用 initVideo 如 this.$refs.webrtc.initVideo('src')
     * */

    initVideo(url) {
      // 播放器存在 清空重置
      if (this.player) {
        this.player.destroy()
        this.player = null
      }

      // 获取承载元素dom
      let videoDom = document.getElementById('jswebrtc')

      // 初始化播放器
      this.player = new JSWebrtc.Player(url, {
        video: videoDom,
        autoplay: true,
        onPlay: (obj) => {
          // 监听video元素状态，可播放时进行播放 。 某些情况下  autoplay 会失效
          // mdn https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/canplay_event
          // 菜鸟 https://www.runoob.com/tags/av-event-canplay.html
          videoDom.addEventListener('canplay', function (e) {
            videoDom.play()
          })
          console.log(obj, '播放器开始播放！')
        },
      })
    },
  },
  beforeDestroy() {
    // 播放器存在清除播放器
    if (this.player) {
      this.player.destroy()
    }
  },
}
</script>

<style scoped></style>

