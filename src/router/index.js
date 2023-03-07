// @ts-nocheck
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/home.vue')
const errNone = () => import('@/views//404.vue')
const Tablesolt = () => import('@/components/antd-table/table-solt.vue')
const Atable = () => import('@/components/antd-table/a-table.vue')
const Record = () => import('@/components/antd-table/record.vue')
const Exporttest = () => import('@/components/excel/exporttest.vue')
const Exporttest1 = () => import('@/components/excel/exporttest1.vue')
const Excelexport = () => import('@/components/excel/excelexport.vue')
const Eltabletest = () => import('@/components/el-table/eltabletest.vue')
const Eltree = () => import('@/components/el-table/el-tree.vue')
const Eltreetest = () => import('@/components/el-table/el-tree-test')
const DragTabletest = () => import('@/components/el-table/drag_table')
const Printnb = () => import('@/components/print/print-nb.vue')
const Vuextext = () => import('@/components/vuex/vuex-text.vue')
const Computedtest = () => import('@/components/computed/computed-test.vue')
const Chart = () => import('@/components/echart/chart.vue')
const EchartTest = () => import('@/components/echart/echartTest.vue')
const Dexie = () => import('@/components/indexdb/dexie.vue')
const Axiosfenz = () => import('@/components/axiosfenz/axios.vue')
const Nexttick = () => import('@/components/$nextTick测试/nextTick.vue')
const Filter = () => import('@/components/filter过滤器/filter.vue')
const Test = () => import('@/components/filter过滤器/test.vue')
const Element = () => import('@/components/element/index.vue')
const Map = () => import('@/components/baiduMap/map.vue')
const EarthMap = () => import('@/components/baiduMap/earth.vue')
const Dragmodal = () => import('@/components/modal/dragmodalTest.vue')
const Set1 = () => import('@/components/$set测试/set.vue')
const Uploadimg = () => import('@/components/upImgTest/uploadImg.vue')
const HlsDemo = () => import('@/components/videoJs/hlsDemo.vue')
const HKVideo = () => import('@/components/videoJs/hk_player.vue')
const XgPlayer = () => import('@/components/videoJs/xgPlayer.vue')
const WebRtcDemo = () => import('@/components/videoJs/webRtcDemo.vue')
const FlvDemo = () => import('@/components/videoJs/flvDemo.vue')
const FlvDemo_wss = () => import('@/components/videoJs/flvDemo_wss.vue')
const EasyPlay = () => import('@/components/videoJs/easyPlay.vue')
const MoreVideoDemo = () => import('@/components/videoJs/moreVideoDemo.vue')
const Img = () => import('@/components/importance属性优先级/img.vue')
const Vmodel = () => import('@/components/自定义v-model/vmodel.vue')
const vForFlex = () => import('@/components/v-for_flex布局/flex.vue')
const Kebiao = () => import('@/components/kebiao/kebiao.vue')
const Kebiao1 = () => import('@/components/kebiao/kebiao1.vue')
const Kebiao2 = () => import('@/components/kebiao/kebiao2.vue')
const Kebiao3 = () => import('@/components/kebiao/kebiao3.vue')
const Imgpreview = () => import('@/components/imgpreview/index.vue')
const TableEacharts = () => import('@/components/table嵌入echarts/index.vue')
const QuillText = () => import('@/components/quill-text/index.vue')
const Emjo = () => import('@/components/emjo表情/index.vue')
const Imagesku = () => import('@/components/emjo表情/imagesku.vue')
const FatherSync = () => import('@/components/父子组件.sync修饰符/father.vue')
const DragDialog = () => import('@/components/drag_dialog/index.vue')
const DataTest = () => import('@/components/dataTest/index.vue')
const DataList = () => import('@/components/优化非响应式数据/index.vue')
const VForObj = () => import('@/components/v-for遍历对象/index.vue')
const InputSearch = () => import('@/components/inputSearch/index.vue')
const flatToTree = () => import('@/components/扁平数据转tree格式/index.vue')
const Outils = () => import('@/components/outils方法库测试/index.vue')
const AnimateNumber = () => import('@/components/AnimateNumber/index.vue')
const DataPicker = () => import('@/components/dataPicker/index.vue')
const Vueqrcode = () => import('@/components/vueqrcode/index.vue')
const VrTest = () => import('@/components/VR/test.vue')
const VrThreeJS = () => import('@/components/VR/vrThreeJs.vue')
const ThreeJsExample = () => import('@/components/VR/threeJsExample.vue')
const GridVue = () => import('@/components/grid布局/grid.vue')
const FlexVue = () => import('@/components/flex布局/flex.vue')
const TransForm = () => import('@/components/transform动画/index.vue')
const BoxSizing = () => import('@/components/box-sizing/index.vue')
const Father = () => import('@/components/组件通信/father.vue')
const myPromise = () => import('@/components/myPromise/index.vue')
const NewMap = () => import('@/components/newMap/map.vue')
const IsComponent = () => import('@/components/component渲染对应标签/index.vue')
const Iframe = () => import('@/components/iframe/index.vue')
const Camera = () => import('@/components/调用摄像头/index.vue')
const MyAudio = () => import('@/components/myAudio/audio.vue')
const ReadTxt = () => import('@/components/文本语音朗读/index.vue')
const Storage = () => import('@/components/web端storage和小程序端的区别/index.vue')
const StoneScroll = () => import('@/components/骨架屏/index.vue')
const isArray = () => import('@/components/引号包裹数组转真正数组/index.vue')
const weChatLogin = () => import('@/components/微信扫码登入/index.vue')
const PdfToImg = () => import('@/components/pdf转图片/index.vue')
const Canvas = () => import('@/components/cavas基本使用/index.vue')
const CodeBlock = () => import('@/components/实现code block代码块/index.vue')
const textAlign = () => import('@/components/text-aligin布局/index.vue')
const superCenter = () => import('@/components/superCenter/index.vue')
const tryCatch = () => import('@/components/try-catch-finally/index.vue')
const windCss = () => import('@/components/windCss基本使用/index.vue')
const hover = () => import('@/components/hover/index.vue')
const v2model = () => import('@/components/v2组件model的使用/index.vue')
const imgPreLoad = () => import('@/components/图片预加载/index.vue')
const imgLazy = () => import('@/components/图片懒加载/index.vue')
const for_await_of = () => import('@/components/for_await_of异步迭代器/index.vue')
const changeTheme = () => import('@/components/一键换肤/index.vue')
const emitFather = () => import('@/components/子组件向父组件通信/index.vue')
const npmTest = () => import('@/components/发布npm包组件测试/index.vue')
const componentTest = () => import('@/components/插件测试/index.vue')
const awaitError = () => import('@/components/anyc_await处理异常/index.vue')
const ipHere = () => import('@/components/获取ip属地/index.vue')
const waterfall = () => import('@/components/瀑布流/index.vue')
const waterfall1 = () => import('@/components/瀑布流/index1.vue')
const childModelProps = () => import('@/components/子组件双向绑定props/index.vue')
const vMyModel = () => import('@/components/自定义指令/index.vue')
const numberAnimation = () => import('@/components/数字动画/index.vue')
const chartTest = () => import('@/components/封装chart测试/chart.vue')
const videoPlay = () => import('@/components/videoPlay/index.vue')
const RmbNumber = () => import('@/components/数字转人民币格式/index.vue')
const guide = () => import('@/components/新手指引/index.vue')
const list = () => import('@/components/list轮播/index.vue')
const svga = () => import('@/components/svga/svga.vue')
const svg = () => import('@/components/svga/Svg.vue')
const animate1 = () => import('@/components/动画/animate1.vue')
const animate2 = () => import('@/components/动画/animate2.vue')
const rotateAnimate = () => import('@/components/动画/rotateAnimate.vue')
const css1 = () => import('@/components/样式/css1.vue')
const css2 = () => import('@/components/样式/css2.vue')
const css3 = () => import('@/components/样式/css3.vue')
const v_cloak = () => import('@/components/v_cloak_html_text/v-cloak.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', redirect: '/map' },
        { path: '*', redirect: { path: '/404' } },
        { path: '/echartTest', component: EchartTest },
        { path: '/vr', component: VrTest },
        { path: '/vrThreeJs', component: VrThreeJS },
        { path: '/threeJsExample', component: ThreeJsExample },
        { path: '/waterfall1', component: waterfall1 },
        {
            path: '/home',
            component: Home,
            children: [
                { path: '/a-table-slot', component: Tablesolt },
                { path: '/a-table', component: Atable },
                { path: '/record', component: Record },
                { path: '/export-test', component: Exporttest },
                { path: '/export-test1', component: Exporttest1 },
                { path: '/excel-export', component: Excelexport },
                { path: '/el-table-test', component: Eltabletest },
                { path: '/el-tree', component: Eltree },
                { path: '/el-tree-test', component: Eltreetest },
                { path: '/drag-table', component: DragTabletest },
                { path: '/print-nb', component: Printnb },
                { path: '/vuex-test', component: Vuextext },
                { path: '/computed-test', component: Computedtest },
                { path: '/chart', component: Chart },
                { path: '/dexie', component: Dexie },
                { path: '/axiosfenz', component: Axiosfenz },
                { path: '/myPromise', component: myPromise },
                { path: '/nextTick', component: Nexttick },
                { path: '/filter', component: Filter },
                { path: '/test', component: Test },
                { path: '/element', component: Element },
                { path: '/map', component: Map },
                { path: '/earth_map', component: EarthMap },
                { path: '/dragmodal', component: Dragmodal },
                { path: '/$set', component: Set1 },
                { path: '/uploadImg', component: Uploadimg },
                { path: '/hlsDemo', component: HlsDemo },
                { path: '/HKVideo', component: HKVideo },
                { path: '/flvDemo', component: FlvDemo },
                { path: '/flvDemo_wss', component: FlvDemo_wss },
                { path: '/webRtcDemo', component: WebRtcDemo },
                { path: '/xgPlayer', component: XgPlayer },
                { path: '/easyPlay', component: EasyPlay },
                { path: '/moreVideoDemo', component: MoreVideoDemo },
                { path: '/img', component: Img },
                { path: '/vmodel', component: Vmodel },
                { path: '/v-for_flex', component: vForFlex },
                { path: '/kebiao', component: Kebiao },
                { path: '/kebiao1', component: Kebiao1 },
                { path: '/kebiao2', component: Kebiao2 },
                { path: '/kebiao3', component: Kebiao3 },
                { path: '/imgpreview', component: Imgpreview },
                { path: '/table_echarts', component: TableEacharts },
                { path: '/quill-text', component: QuillText },
                { path: '/emjo', component: Emjo },
                { path: '/imagesku', component: Imagesku },
                { path: '/fatherSync', component: FatherSync },
                { path: '/drag_dialog', component: DragDialog },
                { path: '/dataTest', component: DataTest },
                { path: '/dataList', component: DataList },
                { path: '/vForObj', component: VForObj },
                { path: '/inputSearch', component: InputSearch },
                { path: '/flat_toTree', component: flatToTree },
                { path: '/outils', component: Outils },
                { path: '/animateNum', component: AnimateNumber },
                { path: '/dataPicker', component: DataPicker },
                { path: '/vueqrcode', component: Vueqrcode },
                { path: '/grid', component: GridVue },
                { path: '/flex', component: FlexVue },
                { path: '/transform', component: TransForm },
                { path: '/box_sizing', component: BoxSizing },
                { path: '/fatherComponent', component: Father },
                { path: '/NewMap', component: NewMap },
                { path: '/isComponent', component: IsComponent },
                { path: '/iframe', component: Iframe },
                { path: '/camera', component: Camera },
                { path: '/myAudio', component: MyAudio },
                { path: '/readtxt', component: ReadTxt },
                { path: '/storage', component: Storage },
                { path: '/stoneScroll', component: StoneScroll },
                { path: '/is_array', component: isArray },
                { path: '/weChatLogin', component: weChatLogin },
                { path: '/pdfToImg', component: PdfToImg },
                { path: '/canvas', component: Canvas },
                { path: '/codeBlock', component: CodeBlock },
                { path: '/textAlign', component: textAlign },
                { path: '/superCenter', component: superCenter },
                { path: '/tryCatch', component: tryCatch },
                { path: '/windCss', component: windCss },
                { path: '/hover', component: hover },
                { path: '/v2model', component: v2model },
                { path: '/imgPreLoad', component: imgPreLoad },
                { path: '/imgLazy', component: imgLazy },
                { path: '/for_await_of', component: for_await_of },
                { path: '/changeTheme', component: changeTheme },
                { path: '/emitFather', component: emitFather },
                { path: '/npmTest', component: npmTest },
                { path: '/componentTest', component: componentTest },
                { path: '/awaitError', component: awaitError },
                { path: '/ipHere', component: ipHere },
                { path: '/404', component: errNone },
                { path: '/waterfall', component: waterfall },
                { path: '/childModelProps', component: childModelProps },
                { path: '/vMyModel', component: vMyModel },
                { path: '/numberAnimation', component: numberAnimation },
                { path: '/chartTest', component: chartTest },
                { path: '/videoPlay', component: videoPlay },
                { path: '/RmbNumber', component: RmbNumber },
                { path: '/guide', component: guide },
                { path: '/list', component: list },
                { path: '/svga', component: svga },
                { path: '/svg', component: svg },
                { path: '/animate1', component: animate1 },
                { path: '/animate2', component: animate2 },
                { path: '/rotateAnimate', component: rotateAnimate },
                { path: '/css1', component: css1 },
                { path: '/css2', component: css2 },
                { path: '/css3', component: css3 },
                { path: '/v_cloak', component: v_cloak },
            ]
        },
    ]
})

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(err => err)
}

export default router
