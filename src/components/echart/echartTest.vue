<template>
  <div style="width: 100%; height: 100%; background: #282c34">
    <el-button
      class="po_btn"
      @click="
        () => {
          this.$router.push('/')
        }
      "
    >
      返回主页
    </el-button>
    <div class="data">
      <!-- 头部 -->
      <div class="data-title">
        <div class="title-left fl"></div>
        <div class="title-center"></div>
        <div class="title-right fr"></div>
      </div>
      <!-- 主体 -->
      <div class="data-content">
        <div class="con-left fl">
          <div class="left-top">
            <div class="info">
              <dv-border-box-8 :dur="5">
                <div class="title">环境监测</div>
                <div class="title_div">
                  <LeftTop></LeftTop>
                </div>
              </dv-border-box-8>
            </div>
            <div class="top-bottom">
              <div class="title div_green">生长周期</div>
              <div class="title_div1">
                <LeftCenter @OptionList="getOption"></LeftCenter>
              </div>
            </div>
          </div>
          <div class="left-bottom">
            <div class="title div_green">长势监测</div>
            <!-- echarts图表 -->
            <chart class="chartMain" ref="changeChart" />
          </div>
        </div>
        <div class="con-center fl">
          <!-- <div class="map-num">
                    <p>实时行驶车辆(辆)</p>
                </div> -->
          <div class="cen-top" id="map">
            <!-- 视频 -->
            <!-- <video
              style="width: 100%; height: 100%"
              src="http://jincunxiao.cn/e73d7cbc-a344-4615-8edc-f2d4d6b79a88.mp4"
              autoplay
            /> -->
          </div>
          <div class="cen-bottom">
            <div class="title">采摘量统计</div>
          </div>
        </div>
        <div class="con-right fr">
          <div class="right-top">
            <div class="title">茶园监控</div>
          </div>
          <div class="right-center">
            <div class="title">茶叶产量</div>
          </div>
          <div class="right-bottom">
            <div class="title">近八周销售量</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftTop from './newChart/leftTop.vue'
import LeftCenter from './newChart/leftCenter.vue'
import chart from './newChart/leftBottom.vue'
export default {
  components: {
    LeftTop,
    LeftCenter,
    chart,
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    // 拿到子组件、生长周期组件传递的值
    getOption(data) {
      console.log('主页拿到生长周期组件传的值', data)
      this.$refs['changeChart'].initChart(data)
    },
  },
}
</script>

<style scoped>
.po_btn {
  width: 100px;
  height: 40px;
  letter-spacing: 3px;
  position: absolute;
  left: 20px;
  top: 20px;
}
/*css 初始化 */
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img {
  margin: 0;
  padding: 0;
}

/*将标签原有的默认内外边距去掉*/

fieldset,
img,
input,
button {
  border: none; /*去掉边框*/
  padding: 0;
  margin: 0;
  outline-style: none; /*去掉环绕边框*/
}

ul,
ol {
  list-style: none; /*去掉原样式中的小黑点*/
  /*ctrl+alt+l*/
}

input {
  padding-top: 0;
  padding-bottom: 0;
}

select,
input {
  vertical-align: middle; /*输入字居中显示*/
}

select,
input,
textarea {
  font-size: 14px;
  margin: 0;
}

/**/
textarea {
  resize: none; /*防止拖动*/
}

img {
  border: 0;
  vertical-align: middle; /*  去掉图片底部默认的3像素空白缝隙*/
}

table {
  border-collapse: collapse; /*合并外边线*/
}

body {
  font-family: Microsoft YaHei, Arial, '\5b8b\4f53';
}

.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1; /*IE/7/6*/
  /*兼容IE6下的写法*/
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-decoration: none; /**/
  font-weight: normal; /*不加粗*/
  font-size: 100%;
}
a {
  text-decoration: none;
}
s,
i,
em {
  /*一般起装饰作用*/
  font-style: normal; /*将字体变成正常字体*/
  text-decoration: none; /*去掉中划线*/
}
.fl {
  float: left;
}
.fr {
  float: right;
}
html,
body {
  height: 100%;
  width: 100%;
}
.data {
  width: 100%;
  height: 100%;
  /* background: url('../img/map_bg.png') center; */
  /* background: #040711; */
  min-width: 1366px;
}
.data > .data-title {
  /* XXX 头部总体 */
  width: 100%;
  height: 105px;
  padding: 10px 0 35px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
}
.data > .data-title > .title-center {
  width: 990px;
  height: 90px;
  /* border: 1px solid #20558b; */
  box-sizing: border-box;
  background: url('../../assets/screen/img2/title.png') no-repeat;
  background-size: 100%;
}
.data > .data-title > .title-left,
.data > .data-title > .title-right {
  width: calc(50% - 220px);
  /* height: 3px;
    background: #0089ff; */
  margin-top: 18px;
}

.data > .data-content {
  width: 100%;
  height: calc(100% - 105px);
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
}
.data > .data-content > .con-left {
  width: 23.4375%;
  height: 100%;
}
.data > .data-content > .con-left > .left-top {
  width: 100%;
  height: calc(65% - 20px);
  margin-bottom: 20px;
  position: relative;
  /* border: 1px solid #fff; */
}

.data > .data-content > .con-left > .left-top > .info {
  /* XXX 左上*/
  height: 52%;
  width: 100%;
  /* border: 1px solid #20558b; */
  /*border-radius: 4px;*/
  /* background: #08301866; */
  box-sizing: border-box;
  position: relative;
}

.data > .data-content > .con-left > .left-top > .info > .info-title {
  width: 158px;
  height: 43px;
  /* background: url('../img/info-title.png') no-repeat; */
  position: absolute;
  top: -22px;
  left: 50%;
  margin-left: -74px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 43px;
  text-align: center;
}
.data > .data-content > .con-left > .left-top > .info > .info-main {
  width: 100%;
  height: 80%;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  > div {
  width: 275px;
  height: 25%;
  /* background: url('../img/info-text.png') no-repeat; */
  margin: 8px auto;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  > div.info-1 {
  margin-top: 40px;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  .info-img {
  width: 100px;
  height: 60px;
  position: relative;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  .info-img
  > img {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -24px;
  margin-top: -24px;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  .info-text {
  width: 175px;
  height: 70px;
  padding-left: 30px;
  padding-top: 16px;
  box-sizing: border-box;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  .info-text
  > p:nth-child(1) {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  > .info-1
  > .info-text
  > p:nth-child(2) {
  font-weight: 600;
  color: #ffff44;
  font-size: 22px;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  > .info-2
  > .info-text
  > p:nth-child(2) {
  font-weight: 600;
  color: #25f3e6;
  font-size: 22px;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  > .info-3
  > .info-text
  > p:nth-child(2) {
  font-weight: 600;
  color: #f84a4a;
  font-size: 22px;
}
.data
  > .data-content
  > .con-left
  > .left-top
  > .info
  > .info-main
  > .info-4
  > .info-text
  > p:nth-child(2) {
  font-weight: 600;
  color: #f5c847;
  font-size: 22px;
}

.data > .data-content > .con-left > .left-top > .top-bottom {
  /* XXX 左中*/
  height: calc(48% - 20px);
  width: 100%;
  /* background-color: rgba(0, 24, 106, 0.5); */
  margin-top: 20px;
  border: 1px solid #20558b;
  box-sizing: border-box;
  position: relative;
}

.data > .data-content > .con-left > .left-bottom {
  width: 100%;
  /* XXX 左下 */
  height: 35%;
  /* background-color: rgba(0, 24, 106, 0.5); */
  border: 1px solid #20558b;
  box-sizing: border-box;
  position: relative;
}
.data > .data-content > .con-center {
  width: 53.125%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
}
.data > .data-content > .con-center > .map-num {
  width: 500px;
  height: 120px;
  position: absolute;
  top: 15px;
  left: 50px;
  z-index: 1000;
}
.data > .data-content > .con-center > .map-num > p {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
.data > .data-content > .con-center > .map-num span {
  display: inline-block;
  width: 45px;
  height: 65px;
  text-align: center;
  line-height: 65px;
  background-color: #0089ff;
  color: #fff;
  font-size: 68px;
  font-weight: 600;
  font-family: 'LcdD';
  margin-top: 15px;
}
.data > .data-content > .con-center > .map-num span:nth-child(2),
.data > .data-content > .con-center > .map-num span:nth-child(6) {
  background-color: transparent;
  width: 30px;
}

.data > .data-content > .con-center > .cen-top {
  /* XXX中间上 */
  width: 100%;
  height: calc(65% - 20px);
  margin-bottom: 20px;
  border: 1px solid #20558b;
}

.data > .data-content > .con-center > .cen-bottom {
  /* XXX中间下 */
  width: 100%;
  height: 35%;
  /* background-color: rgba(0, 24, 106, 0.5); */
  border: 1px solid #20558b;
  box-sizing: border-box;
  position: relative;
}

.data > .data-content > .con-right {
  width: 23.4375%;
  height: 100%;
}
.data > .data-content > .con-right > .right-top {
  width: 100%;
  height: 32%;
  /* background-color: rgba(0, 24, 106, 0.5); */
  border: 1px solid #20558b;
  box-sizing: border-box;
  position: relative;
}
.data > .data-content > .con-right > .right-center {
  width: 100%;
  height: calc(36% - 40px);
  margin: 20px 0;
  /* background-color: rgba(0, 24, 106, 0.5); */
  border: 1px solid #20558b;
  box-sizing: border-box;
  position: relative;
}
.data > .data-content > .con-right > .right-bottom {
  width: 100%;
  height: 32%;
  /* background-color: rgba(0, 24, 106, 0.5); */
  border: 1px solid #20558b;
  box-sizing: border-box;
  position: relative;
}

.data > .data-content .title {
  height: 35px;
  line-height: 35px;
  width: 100%;
  color: #fff;
  padding-left: 15px;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
}
.data > .data-content .charts {
  width: 100%;
  height: calc(100% - 35px);
}

.data > .data-content img.bj-1 {
  position: absolute;
  left: -1px;
  top: -1px;
}
.data > .data-content img.bj-2 {
  position: absolute;
  right: -1px;
  top: -1px;
}
.data > .data-content img.bj-3 {
  position: absolute;
  right: -1px;
  bottom: -1px;
}
.data > .data-content img.bj-4 {
  position: absolute;
  left: -1px;
  bottom: -1px;
}

.title_div {
  height: 100%;
  width: 100%;
}
.title_div1 {
  height: 100%;
  width: 100%;
}
.div_green {
  color: #00dacd !important;
}
</style>
