<template>
  <div>
    <!-- 数字人iframe -->
    <div class="number_people">
      <iframe
        width="100%"
        height="100%"
        src="/vr/numberPeople.html"
        frameborder="0"
        scrolling="auto"
        sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>
    <!-- loop 循环播放 -->
    <audio src="" id="eventAudio" loop></audio>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.playAudio() // 开启数字人音频
    }, 2000)
  },
  beforeDestroy() {
    // this.stopAudio() // 关闭数字人音频
  },
}
</script>
 
<style scoped lang="less">
.number_people {
  width: 200px;
  height: 400px;
  // border: 3px solid black;
  position: absolute;
  inset: 0;
  margin: auto;
  z-index: 30;
}
</style>