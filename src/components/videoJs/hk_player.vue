<template>
  <div class="video-player">
    <div className="videoIframe">
      <div
        className="title move"
        ref="moveRef"
        style="left: -1400px;top: 300px;width: 600px;height: 30px;background: #1b1b1b;position: fixed;z-index: 1000;display: flex;align-items: center;"
      >
        <span
          className="close"
          @click="closeVideo()"
          style="position: absolute;right: 5px;cursor: pointer;color:#fff"
        >
          <a-icon type="close" />
        </span>
      </div>
    </div>
    <div className="iframe-box">
      <iframe
        id="hkIframe"
        scrolling="no"
        :src="
          happenedTime
            ? '/hk/demo/playback.html'
            : '/hk/demo/preview.html'
        "
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    playCode: String,
    happenedTime: String,
    layout: String,
  },
  data() {
    return {
      hkObject: {},
      hkIframe: {},
      moveObj: {
        moveElem: this.$refs.moveRef,
        dragging: false,
        tLeft: 0,
        tTop: 0,
      },
      timer: null,
      pageData: {
        currentCode: '',
        width: '',
        height: '',
        offsetLeft: document.body.clientWidth / 2 - 150,
        offsetTop: 300,
        videoWidth: 600,
        videoHeight: 400,
        index: 1,
      },
    }
  },
  watch: {
    playCode: {
      immediate: true,
      handler(val) {
        if (val) {
          if (this.pageData.isDisplay) {
            //  如果正在播放 直接播放新的
            this.doHKPlayback(val)
          } else {
            // 如果没有 初始化iframe
            this.initIframe()
          }
        }
      },
    },
  },
  mounted() {
    this.hkIframe = document.getElementById('hkIframe')
    this.pageData.width = document.body.clientWidth
    this.pageData.height = document.body.clientHeight
    this.pageData.time = this.happenedTime
    window.addEventListener('resize', this.resizeWindow)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeWindow)
  },
  methods: {
    initIframe() {
      // 视频插入中
      if (
        this.hkIframe &&
        this.hkIframe.contentWindow &&
        this.hkIframe.contentWindow.initPlugin
      ) {
        // 获取海康iframe 的实例
        this.hkObject = this.hkIframe.contentWindow
        this.hkIframe.contentWindow.videoLoaded = this.videoLoaded
        this.hkIframe.contentWindow.closeCB = this.closeCB
        this.hkIframe.contentWindow.layout1 = this.layout || '1x1'
        this.hkIframe.contentWindow.initPlugin()
        this.hkIframe.contentWindow.videoPlay = this.videoPlay
        this.domEvent()
      } else {
        setTimeout(() => {
          this.initIframe()
        }, 1000)
      }
    },
    doHKPlayback(code) {
      if (this.pageData.index === 5) {
        this.pageData.index = 1
      }
      const index = this.pageData.index++
      if (this.pageData.time) {
        this.hkObject.startPlayBack({
          cameraIndexCode: code,
          time: this.pageData.time,
          wind: this.layout === '2x2' ? index : -1,
        })
      } else {
        this.hkObject.startPreview({
          cameraIndexCode: code,
          time: '',
          wind: this.layout === '2x2' ? index : -1,
        })
      }
    },
    resizeWindow() {
      if (this.timer !== null) {
        this.clearTimeout(this.timer)
        this.timer = null
        this.timer = setTimeout(() => {
          this.pageData.offsetLeft = document.body.clientWidth / 2 - 150
          this.pageData.offsetTop = 300
          this.moveObj.moveElem.style.left = this.pageData.offsetLeft + 'px'
          this.moveObj.moveElem.style.top = this.pageData.offsetTop + 'px'
          this.videoStyle()
          setTimeout(() => {
            this.videoStyle()
          }, 1500)
        }, 1500)
      }
    },
    videoStyle() {
      const styles = {
        'margin-left': this.pageData.offsetLeft + 'px',
        'margin-top': this.pageData.offsetTop + 30 + 'px',
      }
      this.hkObject.doChangeSize(styles, 600, 400)
    },
    videoLoaded() {
      this.videoStyle()
    },
    closeCB() {
      this.$emit('closePlayerModal')
    },
    videoPlay() {
      const list = this.playCode.split(',')
      if (list[0]) {
        this.doHKPlayback(list[0])
      }
      if (list[1]) {
        setTimeout(() => {
          this.doHKPlayback(list[1])
        }, 500)
      }
      if (list[2]) {
        setTimeout(() => {
          this.doHKPlayback(list[2])
        }, 1000)
      }
      if (list[3]) {
        setTimeout(() => {
          this.doHKPlayback(list[3])
        }, 1500)
      }
      this.pageData.isDisplay = true
    },
    closeVideo() {
      if (this.pageData.time) {
        this.hkObject.doStopAllPlayback()
      } else {
        this.hkObject.doStopAllPreview()
      }
      this.pageData.isDisplay = false
    },
    domEvent() {
      this.moveObj.moveElem = this.$refs.moveRef
      this.moveObj.moveElem.style.left = this.pageData.offsetLeft + 'px'
      this.moveObj.moveElem.style.top = this.pageData.offsetTop + 'px'
      document.addEventListener('mousedown', e => {
        if (e.target === this.moveObj.moveElem) {
          this.moveObj.dragging = true
        }
        const moveElemRect = this.moveObj.moveElem.getBoundingClientRect()
        this.moveObj.tLeft = e.clientX - moveElemRect.left
        this.moveObj.tTop = e.clientY - moveElemRect.top // 鼠标按下时和选中元素的坐标偏移 y坐标
      })

      document.addEventListener('mouseup', e => {
        this.moveObj.dragging = false
      })
      document.addEventListener('mousemove', e => {
        if (this.moveObj.dragging) {
          const moveX = e.clientX - this.moveObj.tLeft
          const moveY = e.clientY - this.moveObj.tTop
          this.pageData.offsetLeft = moveX
          this.pageData.offsetTop = moveY
          this.moveObj.moveElem.style.left = moveX + 'px'
          this.moveObj.moveElem.style.top = moveY + 'px'
          this.videoStyle()
        }
      })
    },
  },
}
</script>
<style lang="scss">
.video-player {
  .iframe-box {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .videoIframe {
    iframe {
      width: 100%;
      height: 100%;
    }
    .title {
      left: -1400px;
      top: 300px;
      width: 600px;
      height: 30px;
      background: #1b1b1b;
      position: fixed;
      z-index: 1000;
      display: flex;
      align-items: center;
      cursor: pointer;
      .close {
        position: absolute;
        right: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
