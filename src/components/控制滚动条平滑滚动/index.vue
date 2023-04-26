<template>
  <div class="box" id="scrollDom">
    <div class="scroll-body">
      <h2>控制滚动条平滑滚动</h2>
      <el-link
        href="https://blog.csdn.net/weixin_48353638/article/details/129366923"
        target="_bank"
        >参考1:</el-link
      >
      <br />
      <el-link
        href="https://blog.csdn.net/m0_55315930/article/details/126764935"
        target="_bank"
        >参考2:</el-link
      >
      <div class="center-box">当前盒子距离顶部1600px</div>
    </div>
    <el-button type="primary" class="btn" @click="scrollToWhere">
      触发平滑滚动
    </el-button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    scrollToWhere() {
      document.getElementById('scrollDom').scrollTo({
        top: 1300,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped lang="less">
.box {
  height: 94vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 5px solid green;
  overflow: auto;
}
.scroll-body {
  height: 5000px;
  padding: 10px;
  border: 4px solid red;
  position: relative;
  .center-box {
    width: 200px;
    height: 100px;
    border-radius: 10px;
    background: pink;
    position: absolute;
    top: 1600px;
    display: grid;
    place-items: center;
  }
}
.btn {
  position: fixed;
  right: 300px;
  bottom: 300px;
}
</style>