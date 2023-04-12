<template>
  <div class="box">
    <div class="top_navigate">
      <pre>
        background-image: radial-gradient(transparent 1px, #fff 1px);
        background-size: 4px 4px;
        backdrop-filter: saturate(50%) blur(4px);
      </pre>
    </div>
    <div class="container">
      <h1>elementUI导航效果</h1>
      <h2>elementUI导航效果</h2>
      <h3>elementUI导航效果</h3>
      <br />
      <br />
      <br />
      <br />

      <h1>
        b站视频弹幕不遮挡人物效果:
        <mark>mask-image属性和background一样</mark>
      </h1>
      <div class="videoBox">
        <div class="dm">
          住在郊区的王杰克~~~~~住在郊区的王杰克~~~~~住在郊区的王杰克~~~~~
        </div>
        <div class="dm1">66666666666666666666666666666666666666</div>
      </div>
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
.box {
  height: 90vh;
  overflow-y: scroll;
  .top_navigate {
    width: calc(100% - 370px);
    height: 80px;
    position: fixed;
    z-index: 99;
    display: flex;
    justify-content: center;
    border: 3px solid red;
    // 径向渐变
    background-image: radial-gradient(transparent 1px, #fff 1px);
    background-size: 4px 4px;
    // 元素后面区域添加 饱和度 和 模糊效果
    backdrop-filter: saturate(50%) blur(4px);
    pre {
      overflow: hidden;
    }
  }
  .container {
    width: 100%;
    height: 100vh;
    margin-top: 81px;
    border: 3px solid green;
    .videoBox {
      width: 1000px;
      height: 600px;
      border: 3px solid orange;
      background: #000;
      mask-image: url('./mask.svg');
      -webkit-mask-image: url('./mask.svg');
      mask-size: 100% 100%;
      mask-repeat: no-repeat;
      position: relative;
      .dm {
        position: absolute;
        left: 100px;
        top: 100px;
        color: red;
        font-size: 20px;
        user-select: none;
      }
      .dm1 {
        position: absolute;
        left: 100px;
        top: 200px;
        color: pink;
        font-size: 20px;
        user-select: none;
      }
    }
  }
}
</style>