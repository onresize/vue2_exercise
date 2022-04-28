<template>
  <div>
    <a href="https://www.cnblogs.com/zouwangblog/p/11141125.html">
      参考
    </a>
    <h2>npm install vue-qr --save生成带logo二维码</h2>
    <h2>npm install qrcodejs2生成二维码</h2>

    <vue-qr
      :logoSrc="imageUrl"
      text="www.baodu.com"
      :size="200"
    ></vue-qr>
  </div>
</template>
 
<script>
import vueQr from 'vue-qr'
export default {
  components: { vueQr },
  data() {
    return {}
  },
  computed: {
    imageUrl() {
      return require('../../assets/img/logo.png')
    },
  },
  created() {},
  methods: {},
}
</script>
 
<style scoped >
</style>