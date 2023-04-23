<template>
  <div @click="getElementLeft" class="ttBox">
    <div
      class="dialogBox"
      :style="{
        position: 'fixed',
        top: TopY + 'px',
        left: LeftX + 'px',
      }"
      v-show="isShow"
    >
      <i class="el-icon-video-play" @click.stop="closeShow"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isShow: false, TopY: 0, LeftX: 0 }
  },
  computed: {},
  methods: {
    getElementLeft(element) {
      const { x, y } = element
      console.log(x, y)
      this.TopY = y - 300
      this.LeftX = x - 100
      this.isShow = true
    },
    closeShow(e) {
      // e.stopPropagation() // 阻止事件冒泡
      this.isShow = false
    },
  },
  watch: {},
  created() {},
  mounted() {},
}
</script>

<style scoped lang="less">
.ttBox {
  width: 100%;
  height: 90vh;
  border: 2px solid red;
  .dialogBox {
    width: 200px;
    height: 300px;
    background: pink;
    border-radius: 10px;
    display: grid;
    place-content: center;
    i {
      cursor: pointer;
      font-size: 40px;
    }
  }
}
</style>
