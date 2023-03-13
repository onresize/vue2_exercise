<template>
  <div class="box">
    <img
      alt="图像"
      src="https://vercel.com/workflow/_next/image?url=%2Fworkflow%2Fstatic-stars.webp&w=2048&q=75"
      decoding="async"
      data-nimg="fill"
      loading="lazy"
    />
    <p class="mix-blend-color-dodge">
      使用前端团队最快的工作流程从创意到生产。
    </p>
    <p class="p1">0.77%</p>
    <p class="p2">120万+</p>
    <div class="box1">
      <div class="rotateBox"></div>
      <span class="span_box"></span>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped lang="less">
@easing: cubic-bezier(0.4, 0.01, 0.165, 0.99);
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
* {
  background: #000;
  border-radius: 10px;
}
.box {
  width: 100%;
  height: 90vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    inset: 0px;
    z-index: 1;
    height: 100%;
    width: 100%;
    object-fit: cover;
    color: transparent;
    border-radius: 10px;
    user-select: none;
  }
  .mix-blend-color-dodge {
    mix-blend-mode: color-dodge; // 颜色减淡
    -webkit-font-smoothing: antialiased; // 抗锯齿
    color: rgb(229, 229, 229); // 必须用 rgb 或 rgba
    font-size: 30px;
    z-index: 5;
    user-select: none;
  }
  .p1 {
    z-index: 5;
    user-select: none;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -2px;
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-stops)
    );
    --tw-gradient-from: #0070f3;
    --tw-gradient-to: rgba(0, 112, 243, 0);
    --tw-gradient-stops: var(--tw-gradient-from),
      var(--tw-gradient-to);
    --tw-gradient-to: #f81ce5;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    font-feature-settings: normal;
    -webkit-background-clip: text; // 定义元素背景的裁剪区域
    -webkit-text-fill-color: transparent;
  }
  .p2 {
    z-index: 5;
    user-select: none;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -2px;
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-stops)
    );
    --tw-gradient-from: #f7b955;
    --tw-gradient-to: rgba(247, 185, 85, 0);
    --tw-gradient-stops: var(--tw-gradient-from),
      var(--tw-gradient-to);
    --tw-gradient-to: #ff0080;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    font-feature-settings: normal;
    -webkit-background-clip: text; // 定义元素背景的裁剪区域
    -webkit-text-fill-color: transparent;
  }
  .box1 {
    width: 350px;
    height: 280px;
    border: 2px solid;
    border-color: hsla(0, 0%, 100%, 0.3);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    z-index: 5;
    padding: 2rem;
    cursor: pointer;
    transition: all 1.3s ease;
    &:hover {
      border: 2px solid #fff;
      .span_box {
        transform: translate(5px, -5px);
      }
    }
    .rotateBox {
      position: absolute;
      z-index: 5;
      right: 2rem;
      top: -12rem;
      background-size: contain;
      background-repeat: no-repeat;
      width: 600px;
      height: 600px;
      background-image: url('https://vercel.com/workflow/rings.svg');
      animation: spin 42s linear infinite;
      transform-origin: center;
    }
    .span_box {
      position: absolute;
      z-index: 10;
      right: 1rem;
      top: 1rem;
      display: block;
      height: 24px;
      width: 24px;
      background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 17 17 7M7 7h10v10' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      transition: transform 0.8s @easing;
    }
  }
}
</style>