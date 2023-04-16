<template>
  <div class="container">
    <div class="item">
      <h3 style="margin-left: 50px">浏览器缩放200% 300%的时候对比</h3>
      <div
        :class="[
          'border_scale',
          { two: ratio == 2, three: ratio == 3 },
        ]"
      ></div>
      <br />
      <div>
        <el-button type="primary" @click="ratio = 1"
          >1倍屏1px</el-button
        >
        <el-button type="primary" @click="ratio = 2"
          >2倍屏1px</el-button
        >
        <el-button type="primary" @click="ratio = 3"
          >3倍屏1px</el-button
        >
      </div>
    </div>

    <div class="item">
      方案一：0.5px的边框线、因为border属性设置0.5会默认向上取正、可以通过after定义4个宽高分别1px的盒子进行scale(0.5)缩放实现效果
      <div class="div1"></div>
      方案二(推荐)：box-shadow设置0.5px实现0.5px边框线（与白色1px的border宽度对比刚好2倍）
      <div class="div2"></div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      ratio: 1,
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped lang="less">
.el-button {
  margin: 10px;
}
.container {
  width: 100%;
  height: 100vmin;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.border_scale {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid black;
    width: 100%;
    height: 100%;
    transform-origin: 0;
  }
}

// 2倍屏
@media (-webkit-min-device-pixel-ratio: 2) {
  .two::after {
    width: 200%;
    height: 200%;
    transform: scale(0.5);
  }
}

// 3倍屏
@media (-webkit-min-device-pixel-ratio: 3) {
  .three::after {
    width: 300%;
    height: 300%;
    transform: scale(33.3%);
  }
}

.div1 {
  position: relative;
  width: 100px;
  height: 100px;
  background: gray;
  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    height: 1px;
    width: 300%;
    background: red;
    transform-origin: 0 0;
    transform: scale(0.5);
  }
}
.div2 {
  box-sizing: border-box;
  background-color: blueviolet;
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  box-shadow: 0px 0px 0px 0.5px red;
}
</style>