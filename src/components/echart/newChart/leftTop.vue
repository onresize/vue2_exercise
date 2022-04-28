<template>
  <!-- 左上组件 环境监测-->
  <div style="height: 100%; width: 100%">
    <!-- 日期 -->
    <div class="left_top colorFont">
      <span class="left_top_span">{{ DateYear }}</span>
      <span class="left_top_span">{{ DateWeek }}</span>
      <span class="left_top_span">{{ DateTime }}</span>
    </div>
    <!-- 盒子 -->
    <div class="flex j-c" style="height: 100%; width: 100%">
      <div class="left_bottom_div flex j-c">
        <div class="colorFont flex a-c width-half">
          <div class="img_div">
            <div class="img_body1"></div>
          </div>
          <div>
            <div class="div_green">31°</div>
            <div>温度</div>
          </div>
        </div>
        <div class="colorFont flex a-c j-c width-half">
          <div class="img_div">
            <div class="img_body2"></div>
          </div>
          <div>
            <div class="div_green">70%RH</div>
            <div>湿度</div>
          </div>
        </div>
        <div class="colorFont flex a-c width-half">
          <div class="img_div img_body3">
            <div class="img_body3"></div>
          </div>
          <div>
            <div>优秀</div>
            <div>土质</div>
          </div>
        </div>
        <div class="colorFont flex a-c j-c width-half">
          <div class="img_div">
            <div class="img_body4"></div>
          </div>
          <div>
            <div class="div_green">88dB(A)</div>
            <div>噪音</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import moment from "moment";
moment.locale("zh-cn");
export default {
  data() {
    return {
      DateYear: moment().format("LL"),
      DateWeek: moment().format("dddd"),
      DateTime: moment().format("LTS"),
    };
  },
  mounted() {},
  created() {},
  methods: {},
};
</script>
 
<style scoped lang="less">
.flex {
  display: flex;
  flex-wrap: wrap;
}
.j-c {
  justify-content: center;
}
.a-c {
  align-items: center;
}
.f-d {
  flex-direction: column;
}
.width-half {
  width: 48%;
  // border: 1px solid pink;
  margin-left: -5%;
}
.div_green {
  color: #00dacd;
}
.colorFont {
  color: #ffffff;
  font-size: 16px;
}

.left_top {
  color: #ffffff;
  height: 30px;
  line-height: 30px;

  .left_top_span {
    margin-left: 4%;
  }
}
.left_bottom_div {
  width: 80%;
  height: 60%;
  margin-top: 5%;
  // border: 1px solid yellow;

  .img_div {
    width: 35%;
    height: 0;
    padding-bottom: 35%;
    float: left;
    margin: 0 8px 0 10%;
    // border: 1px solid #fff;

    .img_body1 {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      background: url(../../../assets/screen/img2/温度.png) no-repeat center
        center;
      background-size: 100%;
    }
    .img_body2 {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      background: url(../../../assets/screen/img2/湿度.png) no-repeat center
        center;
      background-size: 100%;
    }
    .img_body3 {
      width: 90%;
      height: 0;
      padding-bottom: 90%;
      background: url(../../../assets/screen/img2/土壤.png) no-repeat center
        center;
      background-size: 100%;
    }
    .img_body4 {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      background: url(../../../assets/screen/img2/噪音.png) no-repeat center
        center;
      background-size: 100%;
    }
  }
}
</style>