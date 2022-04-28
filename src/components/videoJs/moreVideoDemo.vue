<template>
  <div>
    <h2>监控多分屏测试</h2>
    <el-button @click="changeView('100%', 1)">单屏幕</el-button>
    <el-button @click="changeView('50%', 4)">四分屏</el-button>
    <el-button @click="changeView('33.3%', 9)">九分屏</el-button>
    <el-button @click="changeView('25%', 16)">十六分屏</el-button>
    <el-button @click="handleFullScreen">全屏</el-button>
    <div id="videoBox" ref="videoRef">
      <div v-for="({ src }, i) in list" :key="i" class="itemBox">
        <EasyPlayer
          :videoUrl="src"
          live
          fluent
          aspect
          autoplay
          stretch
          decodeWasm
        ></EasyPlayer>
      </div>
    </div>
  </div>
</template>
 
<script>
import EasyPlayer from '@easydarwin/easyplayer'
export default {
  components: { EasyPlayer },
  data() {
    return {
      fullscreen: false,
      videoUrl: null,
      list: [
        {
          src: 'http://139.9.207.185:1986/hls/c84415000d97.m3u8',
        },
      ],
    }
  },
  mounted() {
    this.videoUrl = 'http://139.9.207.185:1986/hls/c84415000d97.m3u8'
  },
  created() {},
  methods: {
    // 全屏方法
    handleFullScreen() {
      this.fullscreen = false
      // let element = document.documentElement
      let element = document.getElementById('videoBox')
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
    },
    // 改变分屏
    changeView(cent, num) {
      this.list = []
      let dom = (this.$refs[
        'videoRef'
      ].style = `grid-template-columns: repeat(auto-fill, ${cent})`)
      let item = {
        src: 'http://139.9.207.185:1986/hls/c84415000d97.m3u8',
      }
      for (let i = 0; i < num; i++) {
        this.list.push(item)
      }
    },
  },
}
</script>
 
<style scoped lang="less">
#videoBox {
  width: calc(100vw - 265px);
  height: calc(100vh - 150px);
  border: 10px solid transparent;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  .itemBox {
    border: 5px solid transparent;
    object-fit: fill;
  }
}
</style>