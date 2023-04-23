<template>
  <div @click.stop="touchClick" class="ttBox" id="TouchBox">
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
      // e.preventDefault() // 阻止默认事件
      this.isShow = false
    },
    touchClick(e) {
      console.log(
        `监听%cTouchBox%c的click事件`,
        'background:red;',
        'background:black;'
      )
      this.getElementLeft(e)
    },
    documentClick(e) {
      console.log(
        `监听%cdocument%c的click事件`,
        'background:yellow;color:black;',
        'background:black;'
      )
      this.getElementLeft(e)
    },
  },
  mounted() {
    // document.getElementById('TouchBox').addEventListener('click', (e) => {
    //   console.log('事件：', e)
    // })
    console.log('挂载：开启click监听--------------------')
    document.addEventListener('click', this.documentClick)
  },
  beforeDestroy() {
    console.log('销毁：移除click监听--------------------')
    document.removeEventListener('click', this.documentClick)
  },
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
