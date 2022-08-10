<template>
  <div>
    <!-- TODO -->
    <h2>扫码登入 安装：npm install vue-wxlogin --save-dev</h2>
    <el-link
      href="https://blog.csdn.net/estrusKing/article/details/121125475"
      target="_blank"
    >
      <h2>参考：</h2>
    </el-link>
    <div class="wxLogin">
      <span class="title">微信扫一扫登录</span>
      <div class="main_wx">
        <!-- 
          appid： 微信开放平台创建的网站应用的appid
          scope：  应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写snsapi_login即可
          redirect_uri： 扫码成功后的重定向地址、用encodeURIComponent进行UrlEncode
          href： 自定义样式链接，第三方可根据实际需求覆盖默认样式。
         -->
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
export default {
  name: 'wxLogin',
  components: { wxlogin },
  data() {
    return {
      appid: '',
      redirect_uri: encodeURIComponent('https://www.baidu.com/'),
      state: Math.random(),
      href: 'data:text/css;base64,LmJveHsKICBiYWNrZ3JvdW5kOiByZWQ7Cn0=', // 自定义样式链接
    }
  },
  created() {
    this.getWeChatUrl()
  },
  methods: {
    getWeChatUrl() {
      this.appid = 'wxb7bde41befa78e4e'
      this.redirect_uri = encodeURIComponent(
        'https://www.9cddc.com/pages/index/index'
      )
    },
  },
}
</script>
