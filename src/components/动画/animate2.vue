<template>
  <div class="contentBox">
    <el-button type="primary" size="small" @click="start"
      >开启</el-button
    >
    <el-button type="warning" size="small" @click="stop"
      >关闭</el-button
    >
    <div class="view">
      <div
        :class="[
          'animationBox',
          isAnimate ? 'animationLeftToRight' : 'animationRightToLeft',
        ]"
      ></div>
    </div>

    <iframe
      class="iframe_box"
      src="/NeonButton/button9.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      class="iframe_box"
      src="/NeonButton/button8.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      class="iframe_box"
      src="/NeonButton/button7.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      class="iframe_box"
      src="/NeonButton/button6.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      class="iframe_box"
      src="/NeonButton/button5.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      class="iframe_box"
      src="/NeonButton/button4.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      class="iframe_box"
      src="/NeonButton/button3.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      class="iframe_box"
      src="/NeonButton/button2.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      class="iframe_box"
      src="/NeonButton/button1.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAnimate: false,
    }
  },
  computed: {},
  methods: {
    start() {
      this.isAnimate = true
    },
    stop() {
      this.isAnimate = false
    },
  },
  watch: {},
  created() {},
  mounted() {},
}
</script>

<style scoped lang="less">
.contentBox {
  width: 1260px;
  height: 100vh;
}
.iframe_box {
  width: 300px;
  height: 300px;
  margin-right: 5px;
}
.animationBox {
  box-sizing: content-box;
  margin: 5px;
  width: 200px;
  height: 200px;
  background-color: aqua;
  border-right: 5px solid aqua;
}
.animationLeftToRight {
  transform: translateX(20vw);
  transition: all 1s ease-in-out;
}
.animationRightToLeft {
  transform: translateX(0);
  transition: all 1s ease-in-out;
}
</style>
