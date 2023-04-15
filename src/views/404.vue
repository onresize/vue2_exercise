<template>
  <div class="box-404">
    <div class="erro404">
      <div class="wrapper">
        <h3>糟糕！</h3>
        <span>我们似乎无法找到您要找的页面。</span>
        <p class="woapper_title">问题可能是：</p>
        <p class="woapper_text">1、该页面不存在</p>
        <p class="woapper_text">2、您无权访问此页面</p>
        <label> 错误代码：404 </label>
        <div class="woapper_content">
          <p>页面将在</p>
          <div id="counter">
            {{ restTime }}
          </div>
          <p><b>s</b>后自动跳转到 <a href="/">首页</a></p>
          <p style="text-align: left; width: 100%">
            如果长时间没有跳转请手动点击 <a href="/">首页</a>
          </p>
        </div>
      </div>
    </div>
    <div class="rail">
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
      <div class="stamp four">4</div>
      <div class="stamp zero">0</div>
    </div>
    <div class="world">
      <div class="forward">
        <div class="box">
          <div class="wall"></div>
          <div class="wall"></div>
          <div class="wall"></div>
          <div class="wall"></div>
          <div class="wall"></div>
          <div class="wall"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      totalTime: -550, //记录具体倒计时时间
      clearInte: false,
      restTime: 10,
    };
  },
  methods: {
    fnSetInterval() {
      let clock = window.setInterval(() => {
        this.totalTime = this.totalTime + 55;
        this.restTime = Math.abs(this.totalTime) / 55;
        this.clearInte && window.clearInterval(clock);
        if (this.totalTime >= -55) {
          window.clearInterval(clock);
          setTimeout(() => {
            if (this.clearInte) {
              return false;
            }
            this.$router.push({
              path: "/",
            });
          }, 500);
        }
      }, 1000);
    },
  },
  beforeUnmount() {
    this.clearInte = true;
  },
  mounted() {
    this.fnSetInterval();
  },
};
</script>

<style lang="less" scoped>
.box-404 {
  background: #000;
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: "Anton", sans-serif;
  justify-content: center;
  align-items: center;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  cursor: grab;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.box-404 div {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.rail {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: rotateX(-30deg) rotateY(-30deg);
  transform: rotateX(-30deg) rotateY(-30deg);
}

.rail .stamp {
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #141414;
  color: #fff;
  font-size: 7rem;
}

.rail .stamp:nth-child(1) {
  -webkit-animation: stampSlide 40000ms -2300ms linear infinite;
  animation: stampSlide 40000ms -2300ms linear infinite;
}

.rail .stamp:nth-child(2) {
  -webkit-animation: stampSlide 40000ms -4300ms linear infinite;
  animation: stampSlide 40000ms -4300ms linear infinite;
}

.rail .stamp:nth-child(3) {
  -webkit-animation: stampSlide 40000ms -6300ms linear infinite;
  animation: stampSlide 40000ms -6300ms linear infinite;
}

.rail .stamp:nth-child(4) {
  -webkit-animation: stampSlide 40000ms -8300ms linear infinite;
  animation: stampSlide 40000ms -8300ms linear infinite;
}

.rail .stamp:nth-child(5) {
  -webkit-animation: stampSlide 40000ms -10300ms linear infinite;
  animation: stampSlide 40000ms -10300ms linear infinite;
}

.rail .stamp:nth-child(6) {
  -webkit-animation: stampSlide 40000ms -12300ms linear infinite;
  animation: stampSlide 40000ms -12300ms linear infinite;
}

.rail .stamp:nth-child(7) {
  -webkit-animation: stampSlide 40000ms -14300ms linear infinite;
  animation: stampSlide 40000ms -14300ms linear infinite;
}

.rail .stamp:nth-child(8) {
  -webkit-animation: stampSlide 40000ms -16300ms linear infinite;
  animation: stampSlide 40000ms -16300ms linear infinite;
}

.rail .stamp:nth-child(9) {
  -webkit-animation: stampSlide 40000ms -18300ms linear infinite;
  animation: stampSlide 40000ms -18300ms linear infinite;
}

.rail .stamp:nth-child(10) {
  -webkit-animation: stampSlide 40000ms -20300ms linear infinite;
  animation: stampSlide 40000ms -20300ms linear infinite;
}

.rail .stamp:nth-child(11) {
  -webkit-animation: stampSlide 40000ms -22300ms linear infinite;
  animation: stampSlide 40000ms -22300ms linear infinite;
}

.rail .stamp:nth-child(12) {
  -webkit-animation: stampSlide 40000ms -24300ms linear infinite;
  animation: stampSlide 40000ms -24300ms linear infinite;
}

.rail .stamp:nth-child(13) {
  -webkit-animation: stampSlide 40000ms -26300ms linear infinite;
  animation: stampSlide 40000ms -26300ms linear infinite;
}

.rail .stamp:nth-child(14) {
  -webkit-animation: stampSlide 40000ms -28300ms linear infinite;
  animation: stampSlide 40000ms -28300ms linear infinite;
}

.rail .stamp:nth-child(15) {
  -webkit-animation: stampSlide 40000ms -30300ms linear infinite;
  animation: stampSlide 40000ms -30300ms linear infinite;
}

.rail .stamp:nth-child(16) {
  -webkit-animation: stampSlide 40000ms -32300ms linear infinite;
  animation: stampSlide 40000ms -32300ms linear infinite;
}

.rail .stamp:nth-child(17) {
  -webkit-animation: stampSlide 40000ms -34300ms linear infinite;
  animation: stampSlide 40000ms -34300ms linear infinite;
}

.rail .stamp:nth-child(18) {
  -webkit-animation: stampSlide 40000ms -36300ms linear infinite;
  animation: stampSlide 40000ms -36300ms linear infinite;
}

.rail .stamp:nth-child(19) {
  -webkit-animation: stampSlide 40000ms -38300ms linear infinite;
  animation: stampSlide 40000ms -38300ms linear infinite;
}

.rail .stamp:nth-child(20) {
  -webkit-animation: stampSlide 40000ms -40300ms linear infinite;
  animation: stampSlide 40000ms -40300ms linear infinite;
}

@-webkit-keyframes stampSlide {
  0% {
    -webkit-transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px)
      translateY(130px);
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px)
      translateY(130px);
  }
  100% {
    -webkit-transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px)
      translateY(-3870px);
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px)
      translateY(-3870px);
  }
}

@keyframes stampSlide {
  0% {
    -webkit-transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px)
      translateY(130px);
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px)
      translateY(130px);
  }
  100% {
    -webkit-transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px)
      translateY(-3870px);
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px)
      translateY(-3870px);
  }
}

.world {
  -webkit-transform: rotateX(-30deg) rotateY(-30deg);
  transform: rotateX(-30deg) rotateY(-30deg);
}

.world .forward {
  position: absolute;
  -webkit-animation: slide 2000ms linear infinite;
  animation: slide 2000ms linear infinite;
}

.world .box {
  width: 200px;
  height: 200px;
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  -webkit-animation: roll 2000ms cubic-bezier(1, 0.01, 1, 1) infinite;
  animation: roll 2000ms cubic-bezier(1, 0.01, 1, 1) infinite;
}

.world .box .wall {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid #fafafa;
  box-sizing: border-box;
}

.world .box .wall::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 7rem;
}

.world .box .wall:nth-child(1) {
  -webkit-transform: translateZ(100px);
  transform: translateZ(100px);
}

.world .box .wall:nth-child(2) {
  -webkit-transform: rotateX(180deg) translateZ(100px);
  transform: rotateX(180deg) translateZ(100px);
}

.world .box .wall:nth-child(3) {
  -webkit-transform: rotateX(90deg) translateZ(100px);
  transform: rotateX(90deg) translateZ(100px);
}

.world .box .wall:nth-child(3)::before {
  -webkit-transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
  transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
  -webkit-animation: zeroFour 4000ms -2000ms linear infinite;
  animation: zeroFour 4000ms -2000ms linear infinite;
}

.world .box .wall:nth-child(4) {
  -webkit-transform: rotateX(-90deg) translateZ(100px);
  transform: rotateX(-90deg) translateZ(100px);
}

.world .box .wall:nth-child(4)::before {
  -webkit-transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
  transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
  -webkit-animation: zeroFour 4000ms -2000ms linear infinite;
  animation: zeroFour 4000ms -2000ms linear infinite;
}

.world .box .wall:nth-child(5) {
  -webkit-transform: rotateY(90deg) translateZ(100px);
  transform: rotateY(90deg) translateZ(100px);
}

.world .box .wall:nth-child(5)::before {
  -webkit-transform: rotateX(180deg) translateZ(-1px);
  transform: rotateX(180deg) translateZ(-1px);
  -webkit-animation: zeroFour 4000ms linear infinite;
  animation: zeroFour 4000ms linear infinite;
}

.world .box .wall:nth-child(6) {
  -webkit-transform: rotateY(-90deg) translateZ(100px);
  transform: rotateY(-90deg) translateZ(100px);
}

.world .box .wall:nth-child(6)::before {
  -webkit-transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
  transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
  -webkit-animation: zeroFour 4000ms linear infinite;
  animation: zeroFour 4000ms linear infinite;
}

@-webkit-keyframes zeroFour {
  0% {
    content: "4";
  }
  100% {
    content: "0";
  }
}

@keyframes zeroFour {
  0% {
    content: "4";
  }
  100% {
    content: "0";
  }
}

@-webkit-keyframes roll {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }
  85% {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
  87% {
    -webkit-transform: rotateZ(88deg);
    transform: rotateZ(88deg);
  }
  90% {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
  100% {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
}

@keyframes roll {
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }
  85% {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
  87% {
    -webkit-transform: rotateZ(88deg);
    transform: rotateZ(88deg);
  }
  90% {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
  100% {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
  }
}

@-webkit-keyframes slide {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
  }
}

@keyframes slide {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
  }
}

.erro404 {
  display: block;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-45%);
  z-index: 9999;
  .wrapper {
    width: 1200px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.5);
    .woapper_title {
      padding: 0;
    }

    .woapper_text {
      font-size: 16px;
      color: #f00;
      font-weight: bold;
      padding: 0;
    }
  }
}

.erro404 img {
  float: left;
  margin: 95px 0 0 70px;
}

.erro404 h3,
.erro404 span,
.erro404 label,
.erro404 p,
.erro404 .link404 {
  display: block;
  margin: 0 0 0 670px;
}

.link404 b {
  display: block;
}

.erro404 h3 {
  padding: 55px 0 0;
  line-height: 85px;
  font-size: 60px;
}

.erro404 span {
  line-height: 45px;
  font-size: 30px;
}

.erro404 label {
  color: #666;
  font-weight: normal;
  padding: 10px 0 25px;
  font-size: 16px;
  line-height: 25px;
}

.erro404 p {
  font-size: 20px;
  line-height: 30px;
  padding: 0 0 10px;
}

.erro404 a {
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #3dbcc6;
}

.erro404 label a {
  font-size: 16px;
}

.erro404 a:hover {
  text-decoration: underline;
}
.woapper_content {
  overflow: hidden;
  margin-left: 670px;
  font-size: 20px;
  font-weight: bold;
  p {
    float: left;
    margin: 35px 20px 0;
    &:first-child {
      margin-left: 0;
    }
    & > a {
      cursor: grabbing;
    }
  }
}

#counter {
  float: left;
  display: inline-block;
  margin-top: 20px;
  background-color: #222;
  width: 54px;
  height: 59px;
  line-height: 59px;
  text-align: center;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -opera-border-radius: 3px;
  -moz-border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  font-family: "LT";
  font-size: 26px;
}
#counter_item1 {
  margin-left: 2px;
}

.counter_item {
  width: 30px;
  height: 55px;
  overflow: hidden;
  float: left;
  margin-top: 2px;
}

.counter_item .digit,
.counter_item .front {
  width: 30px;
  height: 55px;
  overflow: hidden;
}
</style>
