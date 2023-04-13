<template>
  <div>
    <!--播放器容器-->
    <el-button
      @click="showVideo(0)"
      size="mini"
      :type="state == 0 ? 'primary' : ''"
      >流1</el-button
    >
    <el-button
      @click="showVideo(1)"
      size="mini"
      :type="state == 1 ? 'primary' : ''"
      >流2</el-button
    >

    <div class="center_video_box" v-show="show">
      <img
        :src="require('@/assets/img/close.svg')"
        @click="closeDialog"
      />
      <div id="WebMediaPlayer"></div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      state: null,
      show: false,
      player: null,
      lists: [
        {
          url: 'http://10.224.129.41:80/rtp/36010200002004010004_36010000331327000267.live.flv',
        },
        {
          url: 'http://10.224.129.41:80/rtp/36010200002004010004_36010000331327000031.live.flv',
        },
      ],
    }
  },

  methods: {
    showVideo(n) {
      this.state = n
      let { url } = this.lists[n]
      this.playVideo(url)
    },
    closeDialog() {
      this.show = false
      this.player = null
    },
    initPlayer() {
      this.player = new WebMediaPlayer(
        '',
        `WebMediaPlayer`,
        this.callbackFunc,
        {
          cbUserPtr: this,
          decodeType: 'auto',
          height: true,
        }
      )
    },
    // 播放器回调方法
    callbackFunc(cbType, cbParams) {
      if (cbType === 'playbackTime') {
        //console.log("当前回放时间: " + cbParams);
      } else if (cbType === 'ended') {
        console.log('播放结束')
      }
      console.log('Callback ' + cbType + ':  ' + cbParams)
    },
    playVideo(url) {
      this.show = true
      if (this.player) {
        this.player.destroy()
        this.initPlayer()
        this.player.play(url, 1, 0)
        console.log('1111111111111111')
      } else {
        this.initPlayer()
        setTimeout(() => {
          if (this.player) {
            this.player.destroy()
            this.initPlayer()
            this.player.play(url, 1, 0)
            console.log('222222222222222222')
          }
        }, 10)
      }
    },
    handleClick(type) {
      if (type === 'stop') {
        this.player.stop()
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initPlayer()
    })
  },
  beforeDestroy() {
    this.player = null
  },
}
</script>
 
<style scoped lang="less">
.center_video_box {
  position: relative;
  width: 60%;
  #WebMediaPlayer {
    width: 100%;
    margin: 10px 0 0 0;
  }
  img {
    width: 26px;
    height: 26px;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 999;
    cursor: pointer;
    opacity: 0.6;
  }
}
</style>