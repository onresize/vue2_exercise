<template>
  <div>
    <h2>
      box-sizing基本属性、设置box-sizing:
      border-box;表示元素总宽度和总高度包含了padding 和
      border、默认为content-box
    </h2>
    <div class="box"></div>
    <br />
    <div class="box_div">content-box内容</div>
    <div class="box_div1">border-box内容</div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  watch: {},
  computed: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>
 
<style scoped lang="less">
.box {
  width: 300px;
  height: 300px;
  border: 4px dashed #000;
  // background-clip: border-box;
  background: url(~@/assets/img/2.jpg) no-repeat center;
  background-size: 100%;
  // box-sizing: border-box;
  // padding: 0.5px;
}
.box_div {
  width: 200px;
  height: 100px;
  border: 10px solid pink;
  margin: 10px;
  padding: 10px;
  background-color: gray;
  box-sizing: content-box;
}
.box_div1 {
  width: 200px;
  height: 100px;
  border: 10px solid pink;
  margin: 10px;
  padding: 10px;
  background-color: gray;
  box-sizing: border-box;
}
</style>