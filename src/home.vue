<template>
  <div class="home_container">
    <!-- 内容主体区 -->
    <el-container class="container">
      <!-- 侧边栏 -->
      <el-card>
        <el-aside class="home_container_aside" :width="'220px'">
          <div
            v-for="(item, index) in RouterList"
            :key="index"
            class="aa"
          >
            <div class="cc">
              <router-link :to="item" tag="div" active-class="bb"
                >{{ item }}测试</router-link
              >
            </div>
          </div>
        </el-aside>
      </el-card>
      <!-- 右侧内容 -->
      <el-main class="home_container_main">
        <!-- home改用嵌套路由 占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RouterList: [
        'map',
        'webRtcDemo',
        'hls',
        'flvDemo',
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
        'echartTest',
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
        'vmodel',
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
        'model',
        'fatherSync',
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
        'v2model',
        'imgPreLoad',
        'imgLazy',
      ],
    }
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
</style>
