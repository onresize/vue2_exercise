<template>
  <div>
    <h2>扫码登入 安装：npm install vue-wxlogin --save-dev</h2>
    <el-link
      href="https://blog.csdn.net/estrusKing/article/details/121125475"
      target="_blank"
    >
      <mark>参考：</mark>
    </el-link>
    <h2 style="width: 500px">
      微信开放平台参考：https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=&lang=zh_CN
    </h2>
    <div class="wxLogin">
      <span class="title">微信扫一扫登录</span>
      <div class="main_wx">
        <!-- 
          appid： 微信开放平台创建的网站应用的appid
          scope：  应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写snsapi_login即可
          redirect_uri： 扫码成功后的重定向地址、用encodeURIComponent进行UrlEncode
          href： 自定义样式链接，第三方可根据实际需求覆盖默认样式。
         -->
        <!-- XXX方法一 -->
        <wxlogin
          v-if="appid && redirect_uri"
          :appid="appid"
          :scope="scope"
          :redirect_uri="redirect_uri"
          :href="href"
          :state="state"
        ></wxlogin>

        <!-- XXX方法二 -->
        <!-- <div
          id="login_container"
          class="height100 d-flex jc-center ai-center"
        ></div> -->
      </div>
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
      // 方法一的参数
      appid: 'wxe2b011f61dd4b5e1',
      scope: 'snsapi_login',
      redirect_uri: encodeURIComponent(
        'https://www.yaoxiaosi.com/#/login'
      ),
      state: Math.random().toString(10).substr(3),
      href: 'data:text/css;base64,LmJveHsKICBiYWNrZ3JvdW5kOiByZWQ7Cn0=', // 自定义样式链接
    }
  },
  mounted() {
    // this.showWeChatQrCode()
  },
  destroyed() {
    this.appid = ''
    this.scope = ''
    this.redirect_uri = ''
    this.state = ''
  },
  methods: {
    // 方法二
    showWeChatQrCode() {
      new WxLogin({
        id: 'login_container',
        appid: 'wxe2b011f61dd4b5e1',
        scope: 'snsapi_login',
        redirect_uri: encodeURIComponent(
          'https://www.yaoxiaosi.com/#/login'
        ),
        state: Math.random().toString(10).substr(3),
        style: 'black',
        href: 'https://juyaoproduct-1304700934.cos.ap-nanjing.myqcloud.com/css/weChatQr.css',
      })
    },
  },
}
</script>
