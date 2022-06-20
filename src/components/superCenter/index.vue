<template>
  <div>
    <h2>超级居中</h2>
    <pre>
      <div class="div_pre">
      display: grid;
      place-items: center;
      </div>
    </pre>
    <div class="box">
      <div class="box_red"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
.div_pre {
  background-color: #f5f5f5;
}
.box {
  width: 60vw;
  height: 60vh;
  background-color: pink;
  display: grid;
  place-items: center;
  .box_red {
    width: 100px;
    height: 100px;
    background-color: #f5f5f5;
  }
}
</style>
