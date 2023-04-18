<template>
  <div  style="width: 80vw">
    <a href="https://www.cnblogs.com/zouwangblog/p/11141125.html">
      参考
    </a>
    <h2>npm install vue-qr --save生成带logo二维码</h2>
    <h2>npm install qrcodejs2生成二维码</h2>
    <h2>yarn add jsbarcode生成条形码</h2>
    <!-- 条形码 -->
    <img id="barcode" />

    <!-- 带logo二维码 -->
    <!-- <vue-qr
      :logoSrc="imageUrl"
      :size="200"
      text="https://cloud1-6ggvcwwa04ba413a-1312305621.tcloudbaseapp.com"
    ></vue-qr> -->
    <!-- text="https://tcbe.cn/8D7mt7tb" -->
    <!-- text="weixin://dl/business/?t=o75nY87pfym" -->
    <!--  location.href = 'weixin://dl/business/?t=o75nY87pfym' -->
    <vue-qr
      :logoSrc="imageUrl1"
      :size="200"
      text="http://rtbezqg85.bkt.clouddn.com/index.html"
    ></vue-qr>
    <vue-qr
      :logoSrc="imageUrl2"
      :size="200"
      text="https://prod-streaming-video-msn-com.akamaized.net/f9e318a4-7575-4809-b371-7b34a5807857/1f80c234-46af-41a5-8f50-8f0926e29a2c.mp4"
    ></vue-qr>
    <vue-qr
      :logoSrc="imageUrl3"
      :size="200"
      text="https://www.lanzoui.com/b00zujzmh"
    ></vue-qr>
    <vue-qr
      :logoSrc="imageUrl4"
      :size="200"
      text="https://www.aliyundrive.com/s/RxMYSsAMeBJ"
    ></vue-qr>
    <vue-qr
      :logoSrc="imageUrl5"
      :size="200"
      text="https://www.aliyundrive.com/s/YLqcJsoeMcx"
    ></vue-qr>
  </div>
</template>

<script>
import vueQr from 'vue-qr'
import JsBarcode from 'jsbarcode'
import axios from 'axios'
export default {
  components: { vueQr },
  data() {
    return {}
  },
  computed: {
    imageUrl() {
      return require('../../assets/img/logo.png')
    },
    imageUrl1() {
      return require('../../assets/qrImg/1.png')
    },
    imageUrl2() {
      return require('../../assets/qrImg/2.png')
    },
    imageUrl3() {
      return require('../../assets/qrImg/3.png')
    },
    imageUrl4() {
      return require('../../assets/qrImg/4.png')
    },
    imageUrl5() {
      return require('../../assets/qrImg/5.png')
    },
  },
  mounted() {
    this.setQrCode('123123')
  },
  methods: {
    setQrCode(txt) {
      const options = {
        format: 'CODE39', //选择要使用的条形码类型
        lineColor: '#000', //条码颜色
        width: 3, //条码之间的距离
        height: 100, //条码高度
        displayValue: true, //是否在条形码下方显示文字
      }
      JsBarcode('#barcode', txt, options)
    },
  },
}
</script>
<style scoped>
</style>

