<template>
  <div>
    <h2>background: inherit;</h2>
    <div class="box">
      <div class="box_drag"></div>
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
  width: 600px;
  height: 600px;
  background-image: url('~@/assets/img/2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;

  &::before {
    content: '';
    width: 50px;
    height: 50px;
    border: 2px solid red;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 300px;
    top: 190px;
  }
  .box_drag {
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    background-image: inherit;
    background-repeat: inherit;
    background-size: 600px 600px; // 这一步很重要
    background-position: -300px -190px;
    position: absolute;
    left: 0;
    top: 190px;
    cursor: pointer;
  }
}
</style>