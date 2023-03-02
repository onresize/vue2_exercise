<template>
  <div>
    <h2>海康h5播放websocket直播流</h2>
    <div id="player" class="myPlayer"></div>
  </div>
</template>

<script>
// 参考： https://blog.csdn.net/qq_42266293/article/details/119413968
/* 
  PS：
  1、H5版本只能与海康的两个应用平台对接，分别是"iSecure Center 综合安防管理平台"和"Infovision IoT智能应用平台"，且需要iSecure Center V1.4.100以上版本或是Infovision IOT V1.6.1以上版本，以上两个平台都是海康的软件产品，需付费购买的，若只是单独的海康摄像头，不支持H5版本的demo访问
  2、H5版本只支持获取H.264编码格式的视频流
  3、H5版本只支持高版本的（windows chrome80+、Android browser、ios safari）浏览器
  4、H5版本需要使用“高级模式”（使用步骤中有说明）
  5、H5版本目前只能使用Websocket协议获取视频流数据
*/
var player
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    initPlayer() {
      player = null
      player = new JSPlugin({
        szId: 'player',
        szBasePath: '/public/hk/demo/h5player',
      })
      player.JS_SetWindowControlCallback({
        windowEventSelect: function (index) {
          //插件选中窗口回调
          console.log(index, iErrorCode, oError)
        },
        pluginErrorHandler: function (index, iErrorCode, oError) {
          console.log('插件错误回调')
          //插件错误回调
          // do you want...
          // 取流失败，流中断等错误都会触发该回调函数，请自行对照错误码表进行判断。
          // 业务上层可在此做一些个性化操作，如：个性化错误信息展示，重新取流等。
        },
        windowEventOver: function (index) {
          console.log('鼠标移过回调')
          //鼠标移过回调
          // do you want...
        },
        windowEventOut: function (index) {
          console.log('鼠标移出回调')
          //鼠标移出回调
          // do you want...
        },
        windowEventUp: function (index) {
          console.log('鼠标mouseup事件回调')
          //鼠标mouseup事件回调
          // do you want...
        },
        windowFullCcreenChange: function (bFull) {
          //全屏切换回调
          // do you want...
        },
        firstFrameDisplay: function (index, iWidth, iHeight) {
          //首帧显示回调
          // do you want...
        },
        performanceLack: function () {
          //性能不足回调
          // do you want...
        },
        StreamEnd: function (index) {
          //回放结束回调,返回对应测窗口id
          // do you want...
        },
      })
    },
    getPlayerUrl() {
      let playUrl = 'ws://192.168.31.91:8888/rtsp://192.168.31.91/test' //XXX 这个地址是本地笔记本摄像头音视频推流、不能播放
      if (playUrl) {
        let mode = 0
        player.JS_Play(playUrl, { playUrl, mode }, 0).then(
          () => {
            console.log('播放成功')
          },
          (err) => {
            console.log('播放失败', err)
          }
        )
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initPlayer()
      setTimeout(() => {
        this.getPlayerUrl()
      }, 1000)
    })
  },
}
</script>

<style scoped>
.myPlayer {
  width: 500px;
  height: 300px;
  border: 3px solid red;
}
</style>
