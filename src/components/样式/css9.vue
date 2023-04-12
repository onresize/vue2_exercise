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
        一个永远不会加载完的进度的js库(可以做一些请求加载的进度案例)：cnpm i fake-progress -S
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
</style>