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

    <div class="section elec container2">
      <h2>b站主页充电效果</h2>
      <div class="elec-action">
        <div class="new-elec-trigger">为TA充电</div>
        <div class="elec-map">
          <div class="elec-status"></div>
          <div class="elec-status-bg"></div>
          <div class="elec-status-bg-grey"></div>
        </div>
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

@img1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABKCAMAAAB5Ac1NAAAAPFBMVEX///////////////////////9HcEz////////////////////////////////////////////////////BTIGUAAAAFHRSTlP/skEMs3sAqQNI5g3nqErjsAuxpwJoLsAAAAD9SURBVHgB7doFjoVQFIPhgxX3/a91lNjYkyJNpv8KvghyKeH+VS5JsyzNQ7ICHxUhWI6tJNjKCvtXN00NpJI2NBEN0OrZNlwHZEHVVzikoRsHIOVtVR/7ltAXBG8jbiW8jWhK5zldBGw34m1lhTNTtkHZhgdsfQUp3Ga77LrAjXgbkbItlG0hYCOyzbadw81YG5GyLZRtoWxzTvCCMM4458TjH/ylAE5QB2UdpHW3WivrrNu1W1fCpTocp+PHYByn4xccXKTjx+C1OlKXEmPwd53AGEzo6DGY0PWV2Bh8W8eXBK+THIM3neQY7Cc/qbsgaR3x24sQjtdROOfcK6H+QuyA+YQEAAAAAElFTkSuQmCC';
@img2: 'https://s1.hdslb.com/bfs/static/jinkela/space/assets/charging_focus.gif';
@img3: 'https://s1.hdslb.com/bfs/static/jinkela/space/assets/charging_hover.gif';

.container2 {
  margin: 40px 0;
  border-radius: 4px;
}

.elec:hover .elec-status {
  background-image: url(@img2);
}

.elec-action,
.new-elec-trigger {
  display: flex;
  align-items: center;
}

.new-elec-trigger {
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(255, 112, 159, 0.3);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  line-height: 50px;
  padding: 0 24px;
  -ms-flex-pack: center;
  justify-content: center;
}

.new-elec-trigger:hover + .elec-status {
  background-image: url(@img1);
}

.elec .new-elec-trigger {
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

.new-elec-trigger:hover {
  background-color: #ffecf1;
}

.elec .new-elec-trigger:hover + .elec-map .elec-status {
  background-image: url(@img1);
}

.elec .new-elec-trigger:hover + .elec-map .elec-status-bg {
  width: 156px;
}

.elec .new-elec-trigger .elec-trigger-icon {
  width: 24px;
  height: 24px;
  margin-right: 4px;
}

.elec .new-elec-trigger .elec-trigger-icon img {
  width: 100%;
  height: 100%;
}

.elec #elec-hover-bg-preloader {
  background-image: url(@img3);
  display: none;
}

.elec .elec-map {
  height: 74px;
  -ms-flex: 1;
  flex: 1;
  position: relative;
}

.elec .elec-status {
  background-image: url(@img1);
  color: #6d757a;
  font-weight: 700;
  width: 156px;
  line-height: 74px;
  text-align: center;
  text-indent: 18px;
  z-index: 2;
}

.elec .elec-status,
.elec .elec-status-bg {
  height: 74px;
  position: absolute;
  top: 0;
  left: 12px;
}

.elec .elec-status-bg {
  background-image: url(@img3);
  width: 0;
  transition: width 0.4s ease;
  z-index: 1;
}

.elec .elec-status-bg-grey {
  background: #e5e9ef;
  width: 156px;
  height: 74px;
  position: absolute;
  top: 0;
  left: 12px;
  z-index: 0;
}
</style>