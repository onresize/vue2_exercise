<template>
  <div>
    <h1>
      演示部分区域遮挡模块不能滚动解决方案: pointer-event: none;
    </h1>
    <div class="container">
      <h2>
        测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动
      </h2>
    </div>
    <div class="container1"></div>

    <div>
      <h2>
        一个永远不会加载完的进度的js库(可以做一些请求加载的进度案例)：cnpm
        i fake-progress -S
      </h2>
      <div ref="main" class="home">
        <div>{{ fake.progress }}</div>
        <el-progress
          type="circle"
          :percentage="parseInt(fake.progress * 100)"
        ></el-progress>
        <el-button size="mini" @click="stop">停止</el-button>
        <el-button size="mini" @click="close">关闭</el-button>
        <el-button size="mini" @click="reStart">重新开始</el-button>
      </div>
    </div>

    <div class="container2">
      <h2>b站主页充电效果</h2>
      <div class="bilibil">
        <div
          class="box_l"
          @mouseenter="enter"
          @mouseleave="leave"
        ></div>
        <div
          class="box_r"
          :style="{
            backgroundColor: active ? 'transparent' : '#e5e9ef',
          }"
        ></div>
        <div
          class="box_r_inset"
          :style="{
            width: active ? '150px' : '0px',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
 
<script>
import FakeProgress from 'fake-progress'
export default {
  data() {
    return {
      fake: new FakeProgress({
        timeConstant: 6000,
        autoStart: true,
      }),
      active: false,
    }
  },
  computed: {},
  methods: {
    close() {
      this.fake.end()
    },
    stop() {
      this.fake.stop()
    },
    reStart() {
      this.fake = new FakeProgress({
        timeConstant: 6000,
        autoStart: true,
      })
    },
    enter() {
      this.active = true
    },
    leave() {
      this.active = false
    },
  },
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped lang="less">
.container {
  width: 300px;
  height: 300px;
  background: pink;
  overflow-y: auto;
  font-family: '楷体';
}
.container1 {
  position: relative;
  inset: -200px 0 0 100px;
  width: 300px;
  height: 300px;
  background: rgba(21, 145, 177, 0.2);
  pointer-events: none;
}

.container2 {
  margin: 40px 0;
  .bilibil {
    width: 360px;
    height: 100px;
    border: 2px solid red;
    border-radius: 4px;
    margin: 10px 0;
    position: relative;
    .box_l {
      width: 160px;
      height: 48px;
      position: absolute;
      left: 20px;
      top: 26px;
      &::after {
        content: '为TA充电';
        border-radius: 4px;
        border: 1px solid #f69;
        color: #f69;
        cursor: pointer;
        font-size: 18px;
        width: 160px;
        height: 48px;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
      }
      &:hover {
        background-color: #ffecf1;
      }
    }
    .box_r {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 150px;
      height: 60px;
      color: #6d757a;
      z-index: 2;
      // background: #e5e9ef;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABKCAMAAAB5Ac1NAAAAPFBMVEX///////////////////////9HcEz////////////////////////////////////////////////////BTIGUAAAAFHRSTlP/skEMs3sAqQNI5g3nqErjsAuxpwJoLsAAAAD9SURBVHgB7doFjoVQFIPhgxX3/a91lNjYkyJNpv8KvghyKeH+VS5JsyzNQ7ICHxUhWI6tJNjKCvtXN00NpJI2NBEN0OrZNlwHZEHVVzikoRsHIOVtVR/7ltAXBG8jbiW8jWhK5zldBGw34m1lhTNTtkHZhgdsfQUp3Ga77LrAjXgbkbItlG0hYCOyzbadw81YG5GyLZRtoWxzTvCCMM4458TjH/ylAE5QB2UdpHW3WivrrNu1W1fCpTocp+PHYByn4xccXKTjx+C1OlKXEmPwd53AGEzo6DGY0PWV2Bh8W8eXBK+THIM3neQY7Cc/qbsgaR3x24sQjtdROOfcK6H+QuyA+YQEAAAAAElFTkSuQmCC);
      background-size: 100% 100%;

      &:hover {
        background-image: url(https://s1.hdslb.com/bfs/static/jinkela/space/assets/charging_focus.gif);
      }
    }
    .box_r_inset {
      position: absolute;
      left: 186px;
      top: 20px;
      z-index: 1;
      width: 0;
      height: 60px;
      background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/assets/charging_hover.gif);
      transition: width 0.4s ease;
    }
  }
}
</style>