<template>
  <div style="height: 100vh">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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

<style></style>
