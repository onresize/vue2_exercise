<template>
  <div style="height: 100%">
    <router-view></router-view>
  </div>
</template>

<script>
import MyImgViewer from '@/mixins/MyImgViewer/index'
export default {
  // 全局混入图片预览组件、在需要使用图片预览的页面使用 inject: ['openImgViewer] 接收这个方法传入一个图片地址的数组、例：@click = "openImgViewer([imgUrl])"
  mixins: [MyImgViewer],
  methods: {
    /** 在刷新和关闭之前询问 **/
    beforeRefreshClose() {
      let self = this
      window.onbeforeunload = function (e) {
        if (self.$route.path) {
          e = e || window.event
          // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
          return 1 // 不能自定义关闭提示
        } else window.onbeforeunload = null
      }
    },
  },
  mounted() {
    this.beforeRefreshClose()
  },
}
</script>

<style>
</style>
