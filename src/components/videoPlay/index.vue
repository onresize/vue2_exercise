<template>
  <div class="video_box">
    <h3>
      <mark>npm install --save-dev video.js</mark
      ><a href="https://videojs.com/getting-started/" target="_bank">
        videojs.com</a
      >
    </h3>
    <div class="topBox">
      <video
        ref="videoRef"
        class="video-js vjs-default-skin vjs-big-play-centered"
        controls
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        width="856"
        height="470"
        data-setup="{}"
      >
        <source src="@/assets/video/startPage.mp4" type="video/mp4" />
      </video>
      <div style="margin-top: 10px">
        <el-button @click="startPlay">开始视频</el-button>
        <el-button @click="stopPlay">暂停视频</el-button>
        <el-button @click="reload">重新加载</el-button>
        <el-button @click="quickVideo">视频快进</el-button>
        <el-button @click="backVideo">视频后退</el-button>
        <el-button @click="addVolume">增大音量</el-button>
        <el-button @click="reduceVolume">降低音量</el-button>
        <el-button @click="FullScreen">开启全屏</el-button>
        <!-- 
        1、play()控制视频的播放
        2、pause()控制视频的停止
        3、currentTime控制视频的当前时间
        4、muted控制视频是否静音(赋值true or false)
        5、volume控制音量的大小(赋值0-1)
        6、duration视频的总时间
        7、ontimeupdate事件(当前播放位置改变时执行，使用时要绑定addEventListener)
        8、requestFullscreen全屏
       -->
      </div>
    </div>
    <!-- 进度条 -->
    <div class="bottom_box" v-if="show">
      <div class="one">
        {{ videoPlayer.currentTime().toFixed(0) }}
      </div>
      <div class="process">
        <div
          class="percent-item"
          :style="{ width: `${2.56 * videoPlayer.currentTime()}%` }"
        ></div>
      </div>
      <div class="two">{{ videoPlayer.duration().toFixed(0) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeDisplay: 0,
      duration: 0,
      videoPlayer: null,
      videoVolume: null,
      show: false,
    }
  },
  mounted() {
    this.videoPlayer = this.$video(this.$refs.videoRef, {}, () => {
      console.log('当前声音', this.videoPlayer.volume())
      this.videoVolume = this.videoPlayer.volume()
      this.show = true
    })
  },
  methods: {
    startPlay() {
      this.videoPlayer.play()
    },
    stopPlay() {
      this.videoPlayer.pause()
    },
    reload() {
      this.videoPlayer.pause()
      this.videoPlayer.load({})
      this.videoPlayer.play()
    },
    quickVideo() {
      const currentTime = this.videoPlayer.currentTime()
      this.videoPlayer.currentTime(currentTime + 3)
    },
    backVideo() {
      const currentTime = this.videoPlayer.currentTime()
      this.videoPlayer.currentTime(currentTime - 3)
    },
    addVolume() {
      this.videoPlayer.volume((this.videoVolume += 0.1))
      console.log('当前声音', this.videoPlayer.volume())
    },
    reduceVolume() {
      this.videoPlayer.volume((this.videoVolume -= 0.1))
      console.log('当前声音', this.videoPlayer.volume())
    },
    FullScreen() {
      this.videoPlayer.requestFullscreen()
    },
  },
}
</script>

<style lang="less">
.video_box {
  width: 100%;
  height: 100%;
  // border: 3px solid red;
  .topBox {
    min-width: 870px;
    width: calc(100vw - 300px);
    height: 540px;
    // border: 3px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bottom_box {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .one {
      width: 5%;
      height: 100%;
      border: 3px solid black;
      border-radius: 30px;
      text-align: center;
      font-weight: bold;
    }
    .process {
      width: 800px;
      height: 20px;
      margin: 0 10px;
      border-radius: 50px;
      background: gray;
      overflow: hidden;
      .percent-item {
        width: 20px;
        height: 20px;
        background: cornflowerblue;
        display: inline-block;
        transition: width 0.6s ease;
        animation: xcprogress-bar-anim 1s linear infinite;
        background-image: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        background-size: 20px 20px;
        @keyframes xcprogress-bar-anim {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 20px 0;
          }
        }
        &:first-child {
          border-radius: 100px 0 0 100px;
        }
        &:last-child {
          border-radius: 0 100px 100px 0;
        }
      }
    }
    .two {
      width: 5%;
      height: 100%;
      border: 3px solid black;
      border-radius: 30px;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
