<template>
  <div class="home_container">
    <!-- 拖拽博客参考：https://blog.csdn.net/vvv3171071/article/details/122705408 -->
    <div
      class="div-box"
      @click="openWindow"
      draggable="true"
      @dragstart="dragstart"
      @dragend="dragend"
      @wheel="handWheel"
      :style="`cursor:pointer;right:${elRight}px;bottom:${elBottom}px;width:${elWidth}px;height:${elHeight}px`"
    >
      <img class="home_image" src="./assets/svg/gitee.svg" />
      <div
        class="box-border"
        title="双击查看源码、滚轮缩放图标、左键长按拖拽图标"
      ></div>
    </div>
    <!-- <VScaleScreen> -->
    <!-- 内容主体区 -->
    <el-container class="container">
      <!-- 侧边栏 -->
      <div
        :style="{
          background: mode == 'light' ? '#fff' : '#000',
          border: 'none',
          height: '100vh',
          padding: '20px',
          'border-right': '1px solid #e4e7ed',
          'box-sizing': 'border-box',
          'box-shadow': '0px 0px 12px rgba(0, 0, 0, 0.12)',
        }"
      >
        <el-autocomplete
          v-model="value"
          :fetch-suggestions="querySearchAsync"
          :trigger-on-focus="true"
          size="mini"
          style="width: 220px; margin-left: -5px"
          placeholder="路由模糊查询"
          @select="handleSelect"
        />
        <el-aside
          class="home_container_aside App"
          :color-mode="mode"
          id="sideDom"
          :width="'220px'"
        >
          <div
            v-for="({ value }, index) in RouterList"
            :key="index"
            class="aa"
          >
            <div class="cc">
              <router-link :to="value" active-class="bb"
                >{{ value }}测试</router-link
              >
            </div>
          </div>
        </el-aside>
        <!-- 主题切换开关 -->
        <el-switch
          class="switch"
          v-model="modeVal"
          active-text="白色"
          inactive-text="黑色"
          @change="changeSwitch"
        >
        </el-switch>
      </div>
      <!-- 右侧内容 -->
      <el-main class="home_container_main App" :color-mode="mode">
        <el-card style="height: 100%">
          <!-- include 只缓存组件名字为 numberPeople的组件，其他组件不会缓存，而exclude恰好相反 -->
          <keep-alive include="dragCharts">
            <router-view />
          </keep-alive>
        </el-card>
      </el-main>
    </el-container>
    <!-- </VScaleScreen> -->
  </div>
</template>

<script>
import VScaleScreen from './package/index.js'
export default {
  name: 'home',
  components: {
    VScaleScreen,
  },
  data() {
    return {
      modeVal: true,
      mode: 'light',
      timeout: null,
      options: [],
      value: null,
      searchVal: '',
      startX: 0, // 记录开始x位置
      startY: 0, // 记录开始y位置
      elRight: 35,
      elBottom: 25,
      zoom: 1,
      elWidth: 40,
      elHeight: 40,
      RouterList: [],
    }
  },
  methods: {
    async getRouterList() {
      let res = await fetch('/router.json')
      let { data: options } = await res.json()
      this.RouterList = options
      console.log('路由数组：', options)
    },
    openWindow(h = 400, w = 600) {
      // window.open('https://gitee.com/onresize/vue2_exercise')
      var left = Math.round((window.screen.availWidth - w) / 2)
      var top = Math.round((window.screen.availHeight - 100 - h) / 2)
      var MyWin = window.open(
        'https://www.bilibili.com/',
        '',
        'height=' +
          h +
          ', width=' +
          w +
          ',top=' +
          top +
          ',left=' +
          left +
          ', toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no'
      )
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
    querySearchAsync(queryString, cb) {
      var options = this.RouterList
      var results = queryString
        ? options.filter(this.createStateFilter(queryString))
        : options

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter(queryString) {
      return (item) =>
        item.value.toLowerCase().includes(queryString.toLowerCase())
    },
    handleSelect(item) {
      console.log('下拉点击', item)
      this.$router.push(`/${item.value}`)
    },
    changeSwitch(val) {
      if (val == false) {
        // 黑色
        this.mode = 'dark'
      } else {
        // 白色
        this.mode = 'light'
      }
    },
  },
  created() {
    this.getRouterList()
  },
  mounted() {
    document.getElementById('sideDom').scrollTop =
      this.RouterList.length * 50 - sideDom.offsetHeight
  },
}
</script>

<style lang="less">
// 白色主题
.App[color-mode='light'] {
  --surface1: #fff;
  --surface2: #000000;
  --surface3: #000;
  h2,
  h3 {
    color: var(--surface2);
  }
}
// 黑色主题
.App[color-mode='dark'] {
  --surface1: #000000;
  --surface2: #fff;
  --surface3: grey;
  h2,
  h3 {
    color: var(--surface1);
  }
}
// light & dark
// @media (prefers-color-scheme: light) {
//   .home_container {
//     // filter: invert(100%); // 颜色反转
//     background-color: rgba(29, 32, 31) !important;
//   }
// }
</style>

<style scoped lang="less">
.aa {
  margin: 10px;
  width: 100%;
  display: inline-flex;
  user-select: none;
  color: var(--surface2);
}
.bb {
  width: 190px;
  height: 30px;
  line-height: 30px;
  background: #ccffff;
  border-radius: 10px;
  text-align: center;
  color: var(--surface3);
}
.cc {
  width: 190px;
  height: 30px;
  line-height: 30px;
  background: #ffcc99;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  color: var(--surface3);
}
a {
  display: inline-block;
  width: 190px;
  height: 30px;
  color: var(--surface2);
}
.container {
  height: 100vh;
  overflow-y: hidden;
  .aside_card {
    background: #000;
  }
}
.home_container {
  overflow-y: hidden;
}

.home_container_aside {
  height: calc(100vh - 110px);
  // border: 3px solid red;
  overflow-x: hidden;
  background: var(--surface1);
}
.home_container_main {
  height: 100%;
  overflow-y: scroll;
  background: var(--surface1);
  color: var(--surface3);
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
.switch {
  margin-left: 47px;
  margin-top: 10px;
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
