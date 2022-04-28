<template>
  <div>
    <!-- <el-carousel
      class="carousel"
      interval="500"
      trigger="click"
      height="300px"
    >
      <el-carousel-item
        class="carousel_item"
        v-for="item in 2"
        :key="item"
      >
      </el-carousel-item>
    </el-carousel> -->
    <video
      style="
        width: 600px;
        height: 100%;
        object-fit: fill;
        padding: 1%;
        box-sizing: border-box;
      "
      controls
      autoplay="autoplay"
      loop
      muted="false"
      ref="videoItem"
      src="http://jincunxiao.cn/e73d7cbc-a344-4615-8edc-f2d4d6b79a88.mp4"
    >
      <!-- <source type="video/mp4" /> -->
    </video>
    秒数{{ num }}
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      num: 0,
    }
  },
  watch: {},
  computed: {},
  mounted() {
    setInterval(() => {
      this.$refs['videoItem'].src =
        'http://jincunxiao.cn/liubaicha.mp4'
    }, 1000 * 10)
    setInterval(() => {
      this.num++
    }, 1000)
  },
  created() {},
  methods: {},
}
</script>
 
<style scoped lang="less">
video::-webkit-media-controls-fullscreen-button {
  display: none;
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
  display: none;
}
/* 音量的控制条 */
video::-webkit-media-controls-volume-slider {
  display: none;
}
</style>