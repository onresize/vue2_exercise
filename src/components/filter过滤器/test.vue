<template>
  <div>
    <h1>document.documentElement.clientHeight自适应高度</h1>
    <div style="height: 100px; background: yellow">顶部固定导航</div>
    <div :style="'height:' + height" class="div_bottom" scrolling="auto">内容区自适应高度</div>
  </div>
</template>
<script>
export default {
  name: 'clientHeight',
  data() {
    const resizeHeight = document.documentElement.clientHeight - 200 + 'px'
    return {
      height: resizeHeight,
      form: null,
    }
  },
  mounted() {
    window.onresize = function () {
      this.height = this.resizeHeight
    }
  },
  destroyed() {
    window.onresize = null
  },
}
</script>
<style scoped>
.div_bottom {
  width: 100%;
  background: pink;
}
</style>