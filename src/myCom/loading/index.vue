<template>
  <div v-if="show">
    <div class="loader-rainbow">
      <div class="loader-inner">
        <h2 class="hh2" style="--i: 1">稍</h2>
        <h2 class="hh2" style="--i: 2">等</h2>
        <h2 class="hh2" style="--i: 3">片</h2>
        <h2 class="hh2" style="--i: 4">刻</h2>
        <h2 style="--i: 5">
          (..<span class="eye">•</span>˘_˘<span class="eye">•</span
          >..)
        </h2>
        <!-- <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
//博文参考 https://blog.csdn.net/qq_48085286/article/details/123414248
export default {
  name: 'loading001',
  props: {
    show: Boolean,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="less">
.loader-rainbow {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100vw;
  height: 105vh;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.6s ease-out;
}
@keyframes transformTop {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
  40%,
  100% {
    transform: translateY(0);
  }
}
.loader-inner {
  position: absolute;
  inset: 0;
  height: 100px;
  width: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #fff;
    font-weight: bold;
    animation: transformTop 1s ease-in-out infinite;
    animation-delay: calc(0.1s * var(--i)); // 动画延迟
    // 倒影效果
    -webkit-box-reflect: below 5px -webkit-linear-gradient(transparent, transparent
          20%, rgba(255, 255, 255, 0.3));
  }
  .hh2 {
    letter-spacing: 8px;
  }
  .eye {
    color: greenyellow;
  }
}

.loader-line-wrap {
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275)
    infinite;
  box-sizing: border-box;
  height: 50px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-origin: 50% 100%;
  width: 100px;
}
.loader-line {
  border: 4px solid transparent;
  border-radius: 100%;
  box-sizing: border-box;
  height: 100px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
}
.loader-line-wrap:nth-child(1) {
  animation-delay: -50ms;
}
.loader-line-wrap:nth-child(2) {
  animation-delay: -100ms;
}
.loader-line-wrap:nth-child(3) {
  animation-delay: -150ms;
}
.loader-line-wrap:nth-child(4) {
  animation-delay: -200ms;
}
.loader-line-wrap:nth-child(5) {
  animation-delay: -250ms;
}

.loader-line-wrap:nth-child(1) .loader-line {
  border-color: hsl(0, 80%, 60%);
  height: 90px;
  width: 90px;
  top: 7px;
}
.loader-line-wrap:nth-child(2) .loader-line {
  border-color: hsl(60, 80%, 60%);
  height: 76px;
  width: 76px;
  top: 14px;
}
.loader-line-wrap:nth-child(3) .loader-line {
  border-color: hsl(120, 80%, 60%);
  height: 62px;
  width: 62px;
  top: 21px;
}
.loader-line-wrap:nth-child(4) .loader-line {
  border-color: hsl(180, 80%, 60%);
  height: 48px;
  width: 48px;
  top: 28px;
}
.loader-line-wrap:nth-child(5) .loader-line {
  border-color: hsl(240, 80%, 60%);
  height: 34px;
  width: 34px;
  top: 35px;
}

@keyframes spin {
  0%,
  15% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
