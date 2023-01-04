<template>
  <div style="user-select: none">
    语音识别(自定义命令执行操作、纯js)、手写签名、图片滑块验证码、屏幕键盘
    <div class="btn">
      <img
        class="logo"
        src="https://wasm.blazor.zone/_content/BootstrapBlazor.Shared/images/m.svg"
        alt
      />
      <div class="btn-box"></div>
    </div>
    <div class="circleBox">
      <div class="circle"></div>
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
    </div>
    <br />
    <div>
      <input type="color" />
    </div>
    <br />
    <div class="board">
      <iframe
        class="iframe_box"
        src="/keyboard/keyboard.html"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <div class="other_btn">xyz</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

//XXX 微软logo样式
<style scoped lang="less">
.other_btn {
  text-align: center;
  line-height: 24px;
  width: 46px;
  height: 36px;
  border-radius: 10px;
  border: 3px solid red;
  background: #fff;
  font-weight: bold;
}
.other_btn:hover {
  border: 3px solid green;
}
.other_btn:active {
  background: red;
}
.active {
  background: yellow;
}

.btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #034995;
  opacity: 0.8;
  position: relative;
  top: 10px;

  .logo {
    user-select: none;
    width: 16px;
    height: 16px;
    position: absolute;
    left: calc(50% - 8px);
    top: calc(50% - 8px);
  }

  .btn-box {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid yellow;
    animation: wave 1.5s ease-out infinite;
    position: absolute;
    left: calc(50% - 10px);
    top: calc(50% - 10px);
  }
}

@keyframes wave {
  to {
    transform: scale(2);
    opacity: 0;
  }
}
</style>

//XXX 雷达样式
<style scoped>
.circleBox {
  position: absolute;
  top: 5px;
  left: 400px;
  width: 300px;
  height: 100px;
  margin: 10px auto;
}
/* 扩散动画 */
.circle,
.circle1,
.circle2,
.circle3 {
  width: 10px;
  height: 10px;
  background: rgba(255, 001, 002, 0.75);
  border: 1px solid rgba(255, 001, 002, 0.85);
  border-radius: 999px;
  position: absolute;
  top: 50px;
  left: 15px;
}
.circle1,
.circle2,
.circle3 {
  /* animation: circleChange 3s ease-out infinite; */
  animation-name: circleChange;
  animation-duration: 3s;
  /* 指定播放次数、数字 infinite为永久 */
  animation-iteration-count: infinite;
  /* 指定动画如何完成一个周期  ease-out 以低俗结束*/
  animation-timing-function: ease-out;
}
.circle1 {
  /* 定义动画什么时候开始 */
  animation-delay: 1s;
}
.circle2 {
  animation-delay: 2s;
}
.circle3 {
  animation-delay: 3s;
}

@keyframes circleChange {
  0% {
    transform: scale(1);
    opacity: 0.95;
  }
  25% {
    transform: scale(2);
    opacity: 0.75;
  }
  50% {
    transform: scale(3);
    opacity: 0.5;
  }
  75% {
    transform: scale(4);
    opacity: 0.25;
  }
  100% {
    transform: scale(5);
    opacity: 0.05;
  }
}
</style>

//XXX 其他样式
<style scoped>
.iframe_box {
  width: 100%;
  height: 380px;
}
.board {
  width: 733px;
  border: 3px solid #ccc;
  border-radius: 10px;
}
</style>
>
