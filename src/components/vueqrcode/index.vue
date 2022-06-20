<template>
  <div>
    <a href="https://www.cnblogs.com/zouwangblog/p/11141125.html">
      参考
    </a>
    <h2>npm install vue-qr --save生成带logo二维码</h2>
    <h2>npm install qrcodejs2生成二维码</h2>
    <h2>yarn add jsbarcode生成条形码</h2>
    <!-- 条形码 -->
    <img id="barcode" />

    <!-- 带logo二维码 -->
    <vue-qr
      :logoSrc="imageUrl"
      :size="200"
      text="https://cloud1-6ggvcwwa04ba413a-1312305621.tcloudbaseapp.com"
    ></vue-qr>
    <!-- text="https://tcbe.cn/8D7mt7tb" -->
    <!-- text="weixin://dl/business/?t=o75nY87pfym" -->
    <!--  location.href = 'weixin://dl/business/?t=o75nY87pfym' -->
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
    }
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
        displayValue: true //是否在条形码下方显示文字
      }
      JsBarcode('#barcode', txt, options)
    },
  }
}
</script>

<style scoped></style>
