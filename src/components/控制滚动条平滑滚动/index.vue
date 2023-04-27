<template>
  <div class="box" id="outSideScrollDom">
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
      <!-- 左侧控制右侧滚动联动盒子 -->
      <div class="content-box">
        <div class="left-box">
          <div
            class="slider"
            v-for="(item, i) in leftList"
            :key="i"
            @click="scrollNum(i)"
          >
            {{ '选项' + (i + 1) }}
          </div>
        </div>
        <div class="right-box" id="insetScrollDom">
          <div class="content-right">选项1</div>
          <div class="content-right">选项2</div>
          <div class="content-right">选项3</div>
          <div class="content-right">选项4</div>
          <div class="content-right">选项5</div>
          <div class="content-right">选项6</div>
          <div class="content-right">选项7</div>
          <div class="content-right">选项8</div>
          <div class="content-right">选项9</div>
        </div>
      </div>
    </div>
    <el-button type="primary" class="btn" @click="scrollToWhere">
      触发平滑滚动
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      $outSideScrollDom: null,
      $insetScrollDom: null,
      leftList: [
        '选项1',
        '选项2',
        '选项3',
        '选项4',
        '选项5',
        '选项6',
        '选项7',
        '选项8',
        '选项9',
      ],
    }
  },
  computed: {},
  methods: {
    scrollToWhere() {
      // window.scrollTo({
      //   top: 1300,
      //   left: 0,
      //   behavior: 'smooth',
      // })
      this.$outSideScrollDom.scrollTo({
        top: 1300,
        left: 0,
        behavior: 'smooth',
      })
    },
    scrollNum(n) {
      this.$insetScrollDom.scrollTo({
        top: 220 * n,
        behavior: 'smooth',
      })
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.$outSideScrollDom = document.getElementById('outSideScrollDom')
    this.$insetScrollDom = document.getElementById('insetScrollDom')
  },
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
.content-box {
  margin: 20px 0;
  width: 400px;
  height: 500px;
  border: 5px solid black;
  box-sizing: border-box;
  display: flex;
  position: relative;
  .left-box {
    width: 100px;
    height: 100%;
    border: 5px solid green;
    .slider {
      width: 90%;
      height: 40px;
      margin: 4px auto;
      line-height: 40px;
      font-size: 20px;
      border: 3px solid red;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
      user-select: none;
      &:active {
        background: gray;
      }
    }
  }
  .right-box {
    width: 300px;
    height: 100%;
    border: 5px solid red;
    box-sizing: border-box;
    overflow-y: scroll;
    user-select: none;
    .content-right {
      width: 100%;
      height: 200px;
      line-height: 200px;
      text-align: center;
      border: 4px solid black;
      margin: 20px 0;
      font-size: 25px;
    }
  }
}
</style>
