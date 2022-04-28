<template>
  <div class="camera_outer">
    <div class="button">
      <h2>报错getUserMedia 用https打开或者设置浏览器指定域名安全</h2>
      <el-button @click="getCompetence">打开摄像头</el-button>
      <el-button @click="stopNavigator">关闭摄像头</el-button>
      <el-button @click="setImage">拍照</el-button>
    </div>
    <div class="videoBox">
      <video id="videoCamera" autoplay></video>
    </div>
    <canvas
      style="display: none"
      id="canvasCamera"
    ></canvas>
    <div v-if="imgSrc" class="img_bg_camera">
      <p>效果预览</p>
      <img :src="imgSrc" alt class="tx_img" />
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      videoWidth: 600,
      videoHeight: 400,
      imgSrc: '',
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      openVideo: false,
    }
  },
  mounted() {
    //this.getCompetence()//进入页面就调用摄像头
  },
  methods: {
    // 调用权限（打开摄像头功能）
    getCompetence() {
      var that = this
      that.thisCancas = document.getElementById('canvasCamera')
      that.thisContext = this.thisCancas.getContext('2d')
      that.thisVideo = document.getElementById('videoCamera')
      that.thisVideo.style.display = 'block'
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {
            //不存在则报错
            return Promise.reject(
              new Error(
                'getUserMedia is not implemented in this browser'
              )
            )
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      var constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: 'scaleX(-1)',
        },
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          // 旧的浏览器可能没有srcObject
          if ('srcObject' in that.thisVideo) {
            that.thisVideo.srcObject = stream
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            that.thisVideo.src = window.URL.createObjectURL(stream)
          }
          that.thisVideo.onloadedmetadata = function (e) {
            that.thisVideo.play()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //  绘制图片（拍照功能）
    setImage() {
      var that = this
      // canvas画图
      that.thisContext.drawImage(
        that.thisVideo,
        0,
        0,
        that.videoWidth,
        that.videoHeight
      )
      // 获取图片base64链接
      var image = that.thisCancas.toDataURL('image/png')
      that.imgSrc = image //赋值并预览图片
    },
    // 关闭摄像头
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop()
    },
    // base64转文件，此处没用到
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1])
      var n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
  },
}
</script>
<style scoped lang="less">
.camera_outer {
  .button {
    margin: 10px 0;
  }
  .videoBox {
    width: 600px;
    height: 400px;
    border: 5px solid pink;
    #videoCamera {
      height: 100%;
      width: 100%;
    }
  }
  .img_bg_camera {
    width: 600px;
    height: 400px;
    .tx_img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
