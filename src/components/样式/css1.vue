<template>
  <div class="pic">
    <div class="mask">
      <div class="text">图片上面的字体模糊背景</div>
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
}
</style>