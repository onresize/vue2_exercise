<template>
  <div class="home_container">
    <!-- 拖拽博客参考：https://blog.csdn.net/vvv3171071/article/details/122705408 -->
    <div
      class="div-box"
      @dblclick="openWindow"
      draggable="true"
      @dragstart="dragstart"
      @dragend="dragend"
      @wheel="handWheel"
      :style="`right:${elRight}px;bottom:${elBottom}px;width:${elWidth}px;height:${elHeight}px`"
    >
      <img class="home_image" src="./assets/svg/gitee.svg" />
      <div
        class="box-border"
        title="双击查看源码、滚轮缩放图标、左键长按拖拽图标"
      ></div>
    </div>
    <!-- 内容主体区 -->
    <el-container class="container">
      <!-- 侧边栏 -->
      <el-card>
        <el-aside
          class="home_container_aside"
          id="sideDom"
          :width="'220px'"
        >
          <div
            v-for="(item, index) in RouterList"
            :key="index"
            class="aa"
          >
            <div class="cc">
              <router-link :to="item" active-class="bb"
                >{{ item }}测试</router-link
              >
            </div>
          </div>
        </el-aside>
      </el-card>
      <!-- 右侧内容 -->
      <el-main class="home_container_main">
        <!-- home改用嵌套路由 占位符 -->
        <router-view>
          <!-- <keep-alive> </keep-alive> -->
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startX: 0, // 记录开始x位置
      startY: 0, // 记录开始y位置
      elRight: 15,
      elBottom: 15,
      zoom: 1,
      elWidth: 40,
      elHeight: 40,
      RouterList: [
        'map',
        'webRtcDemo',
        'hls',
        'HKVideo',
        'flvDemo',
        'flvDemo_wss',
        'easyPlay',
        'xgPlayer',
        'moreVideoDemo',
        // 'earth_map',
        'a-table-slot',
        'a-table',
        'el-table-test',
        'drag-table',
        'el-tree',
        'el-tree-test',
        'record',
        'export-test',
        'export-test1',
        'excel-export',
        'print-nb',
        'vuex-test',
        'computed-test',
        'chart',
        // 'echartTest',
        'dexie',
        'axiosfenz',
        'myPromise',
        'nextTick',
        'filter',
        'test',
        'element',
        'dragmodal',
        '$set',
        'uploadImg',
        'img',
        'v-for_flex',
        'kebiao',
        'kebiao1',
        'kebiao2',
        'kebiao3',
        'imgpreview',
        'table_echarts',
        'quill-text',
        'emjo',
        'imagesku',
        'drag_dialog',
        'dataTest',
        'dataList',
        'vForObj',
        'inputSearch',
        'flat_toTree',
        'outils',
        'animateNum',
        'dataPicker',
        'vueqrcode',
        'vr',
        'vrThreeJs',
        'threeJsExample',
        'grid',
        'flex',
        'transform',
        'box_sizing',
        'fatherComponent',
        'NewMap',
        'isComponent',
        'iframe',
        'camera',
        'myAudio',
        'readtxt',
        'storage',
        'stoneScroll',
        'is_array',
        'weChatLogin',
        'pdfToImg',
        'canvas',
        'codeBlock',
        'textAlign',
        'superCenter',
        'tryCatch',
        'windCss',
        'hover',
        'fatherSync',
        'vmodel',
        'v2model',
        'imgPreLoad',
        'imgLazy',
        'for_await_of',
        'changeTheme',
        'emitFather',
        'npmTest',
        'componentTest',
        'awaitError',
        'ipHere',
        'waterfall',
        'waterfall1',
        'childModelProps',
        'vMyModel',
        'numberAnimation',
        'chartTest',
        'videoPlay',
        'RmbNumber',
        'guide',
        'list',
        'svga',
        'svg',
        'animate1',
        'animate2',
      ],
    }
  },
  mounted() {
    document.getElementById('sideDom').scrollTop =
      this.RouterList.length * 50 - sideDom.offsetHeight
  },
  methods: {
    openWindow() {
      window.open('https://gitee.com/onresize/vue2_exercise')
    },
    // 开始拖拽
    dragstart({ x, y }) {
      console.log('开始拖拽', x, y)
      this.startX = x
      this.startY = y
    },
    // 结束拖拽
    dragend({ x, y }) {
      console.log('结束拖拽', x, y)
      let X = this.startX - x
      let Y = this.startY - y
      this.elRight += X
      this.elBottom += Y
    },
    // 鼠标滚轮缩放事件
    handWheel({ wheelDelta }) {
      console.log('wheelDelta:', wheelDelta)
      if (wheelDelta < 0) {
        this.zoom -= 0.05
      } else {
        this.zoom += 0.05
      }
      if (this.zoom >= 3) {
        this.zoom = 3
        return
      }
      if (this.zoom <= 0.5) {
        this.zoom = 0.5
        return
      }
      this.elWidth = 40 * this.zoom
      this.elHeight = 40 * this.zoom
    },
  },
}
</script>

<style scoped lang="less">
.aa {
  margin: 10px;
  width: 100%;
  display: inline-flex;
}
.bb {
  width: 190px;
  height: 30px;
  line-height: 30px;
  background: #ccffff;
  border-radius: 10px;
  text-align: center;
}
.cc {
  width: 190px;
  height: 30px;
  line-height: 30px;
  background: #ffcc99;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
}
a {
  display: inline-block;
  width: 190px;
  height: 30px;
  color: black;
}
.container {
  overflow-y: hidden;
}
.home_container {
  overflow-y: hidden;
}
.home_container_aside {
  height: calc(100vh - 44px);
  overflow-x: hidden;
}
.home_container_main {
  height: 100vh;
  overflow-y: scroll;
}
.home_container_main::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #ffffff;
}
.home_container_main::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff;
}
.home_container_main::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ffffff;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.div-box {
  position: fixed;
  z-index: 998;
  bottom: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border: 5px solid #034995;
  border-radius: 50%;
  background-color: #f5f5f5;
  opacity: 0.8;
  box-sizing: border-box;
  .home_image {
    width: 60%;
    height: 60%;
    opacity: 0.6;
    position: absolute;
    left: calc(50% - 30%);
    top: calc(50% - 30%);
  }
  .box-border {
    width: 60%;
    height: 60%;
    border-radius: 50%;
    border: 3px solid red;
    position: absolute;
    left: calc(50% - 30%);
    top: calc(50% - 30%);
    animation: waves 1.5s ease-out;
    animation-iteration-count: infinite;
  }
  @keyframes waves {
    100% {
      opacity: 0;
      transform: scale(2);
    }
  }
}
</style>
