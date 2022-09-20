import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/index.css'
import "@/assets/font/font.css";

Vue.config.productionTip = false // 阻止显示生产模式信息

// 瀑布流插件
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


// 按需引入element
// import 'element-ui/lib/theme-chalk/index.css';
// import element from './element/index'
// Vue.use(element)

// 引入ant-design组件框架
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

// 引入代码预览插件
import CodeView from "vue-code-view";
Vue.use(CodeView);

// 复制插件 （npm i vue-clipboard2）
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// // 兼容mu38
// require('videojs-contrib-hls/dist/videojs-contrib-hls');

// 引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'GG4v7SiyxStawpzmwiyiY5iCkWdn8ORE'
})

// 引入vue-quill-editor富文本插件
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)


//全局引入echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

// 引入vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)

//打印插件
import Print from 'vue-print-nb'
Vue.use(Print);

//引入 Avue组件框架
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);

//引入vuex
import store from '@/store/index'

//全局引入可拖动a-modal对话框
import DragModal from '@/DragModal'
Vue.component('DragModal', DragModal)

// 按需引入dataV修饰echarts图表
import { borderBox8, decoration9 } from '@jiaminghi/data-view'
Vue.use(borderBox8)
Vue.use(decoration9)

// 全局注册过滤器
Vue.filter('upname', value => {
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('changename', value => {
  return value + `------`
})

// 将工具函数放在全局
import { awaitJS } from '@/utils'
Vue.prototype.$awaitJS = awaitJS

// 自定义指令解决vue-router切换后代码无法高亮问题
import hljs from 'highlight.js';

Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});

Vue.config.productionTip = false

//创建eventBus实例、用来兄弟组件通信
Vue.prototype.$bus = new Vue()
window.AAA = '全局变量AAA'

new Vue({
  // 全局挂载vuex
  store,
  router,
  render: h => h(App),
}).$mount('#app')
