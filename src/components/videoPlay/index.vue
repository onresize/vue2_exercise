<template>
  <div class="video_box">
    <video
      class="videoBox"
      ref="mediaStartPageRef"
      src="@/assets/video/startPage.mp4"
      muted
      preload="auto"
      loop
    ></video>
    <!-- 进度条 -->
    <div class="bottom_box">
      <div class="one">
        {{ timeDisplay - 0 }}
      </div>
      <div class="process">
        <div
          class="percent-item"
          :style="{ width: `${2.5 * timeDisplay}%` }"
        ></div>
      </div>
      <div class="two">{{ duration - 0 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeDisplay: 0,
      duration: 0,
    }
  },
  mounted() {
    let that = this
    let video = this.$refs[`mediaStartPageRef`]
    that.$nextTick(() => {
      video.play() //播放视频
      setTimeout(() => {
        //使用事件监听方式捕捉事件
        video.addEventListener(
          'timeupdate',
          function (e) {
            //用秒数来显示当前播放进度
            that.timeDisplay = (e.timeStamp / 1000).toFixed(0)
            that.duration = e.target.duration.toFixed(0)
            if (that.timeDisplay == 40) {
              that.$refs[`mediaStartPageRef`].pause()
              that.timeDisplay = 0
              that.duration = 0
              that.$refs[`mediaStartPageRef`].currentTime = 0
              that.$refs[`mediaStartPageRef`].play()
            }
            console.log('当前播放的时长', that.timeDisplay)
            console.log('总时长', that.duration)
          },
          false
        )
      }, 100)
    })
  },
  beforeDestroy() {
    this.$refs[`mediaStartPageRef`].removeEventListener(
      'timeupdate',
      () => {}
    )
  },
  methods: {},
}
</script>

<style lang="less">
.video_box {
  width: 100%;
  height: 100%;
  // border: 3px solid red;

  .videoBox {
    width: 100%;
    height: 90%;
    object-fit: fill;
    border-radius: 30px;
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
      border: 3px solid red;
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
      border: 3px solid red;
      border-radius: 30px;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
