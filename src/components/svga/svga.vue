<template>
  <div class="box">
    <div id="demoCanvas" ref="demoCanvas"></div>
  </div>
</template>

<script>
import SVGA from 'svgaplayerweb'
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    initMachineSVGA() {
      let player = new SVGA.Player('#demoCanvas')
      let parser = new SVGA.Parser('#demoCanvas')
      // 必须是服务器地址或者是线上的地址本地是不可以的 会报错
      parser.load('/svgaDir/zpbj.svga', function (videoItem) {
        console.log(videoItem)
        player.setVideoItem(videoItem)
        player.startAnimation()
      })
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.initMachineSVGA()
  },
}
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  position: relative;
  background: gray;
  #demoCanvas {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    // border: 3px solid red;
  }
}
</style>
