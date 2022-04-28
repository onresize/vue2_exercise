<template>
  <div>
    <!-- TODO -->
    <h2>扫码登入 安装：npm install vue-wxlogin --save-dev</h2>
    <div class="wxLogin">
      <span class="title">微信扫一扫登录</span>
      <div class="main_wx">
        <wxlogin
          v-if="appid && redirect_uri"
          :appid="appid"
          scope="snsapi_login"
          :redirect_uri="redirect_uri"
          :href="href"
          :state="state"
        ></wxlogin>
      </div>
      <p>请使用微信扫描二维码登录</p>
    </div>
  </div>
</template>

<script>
import wxlogin from 'vue-wxlogin'
// import api from '@api/index'
export default {
  name: 'wxLogin',
  components: { wxlogin },
  data() {
    return {
      appid: '',
      redirect_uri: '',
      state: '1',
      href: '', // 自定义样式链接
    }
  },
  mounted() {
    this.getWeChatUrl()
  },
  methods: {
    // 获取微信appid和回调地址redirect_uri，指定内嵌的路由地址weChatLogin
    getWeChatUrl() {
          this.appid = 'wxb7bde41befa78e4e'
          this.redirect_uri = "encodeURIComponent('https://www.9cddc.com/pages/index/index')"
      // api.wachatQrUrl().then((res) => {
      //   if (res && res.code === '0000') {
      //     const data = res.data
      //     this.appid = data.appId
      //     this.redirect_uri = data.wxCallbackUrl + 'weChatLogin'
      //   }
      // })
    },
  },
}
</script>
