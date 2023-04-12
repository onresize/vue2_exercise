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
        v-if="isShow"
        :class="[
          'animationBox',
          isAnimate ? 'animationLeftToRight' : 'animationRightToLeft',
        ]"
      ></div>
    </div>

    <iframe
      class="iframe_box"
      src="/NeonButton/card.html"
      frameborder="0"
      scrolling="no"
    ></iframe>
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
      isShow: false,
    }
  },
  computed: {},
  methods: {
    start() {
      this.isAnimate = true
      this.isShow = true
    },
    stop() {
      this.isAnimate = false
      setTimeout(() => {
        this.isShow = false
      }, 1000)
    },
  },
  watch: {},
  created() {},
  mounted() {},
}
</script>

<style scoped lang="less">
.contentBox {
  width: 1280px;
  height: 90vh;
  overflow: auto;
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
  // transform: translateX(20vw);
  // transition: all 1s ease-in-out;
  animation: animationName 1s ease;
}
.animationRightToLeft {
  // transform: translateX(0);
  // transition: all 1s ease-in-out;
  animation: animationName1 1s ease;
}
@keyframes animationName {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes animationName1 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scaleY(0);
  }
}
</style>
