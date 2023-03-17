<template>
  <div class="pic">
    <div class="mask">
      <div class="text">图片上面的字体模糊背景</div>
    </div>
    <div class="blur"></div>
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
.pic {
  width: 100%;
  height: 90vh;
  border: 3px solid aqua;
  border-radius: 20px;
  background: url('../../assets/img/5.jpg') no-repeat center;
  background-size: 100% 100%;
  .mask {
    position: absolute;
    inset: 30% 0 0 42%;
    width: fit-content;
    height: fit-content;
    padding: 25px;
    // background: #66666633;
    backdrop-filter: blur(10px);
    .text {
      user-select: none;
      font-size: 50px;
      font-weight: bold;
      color: #fff;
    }
  }
  .blur {
    text-align: center;
    line-height: 100px;
    width: 240px;
    height: 100px;
    position: absolute;
    left: 30%;
    top: 60%;
    background: inherit;
    background: rgba(0, 0, 0, .35);
    border-radius: 20px;
    filter: blur(3px); // 背景模糊
    // filter: brightness(50%); // 变暗
    &::before {
      content: '高斯模糊';
      color: #fff;
      font-size: 40px;
      font-weight: bold;
    }
  }
}
</style>