<template>
  <div>
    <h2>
      vue中使用css实现鼠标悬浮div控制另外一个div显隐:
      (实现类似掘金分享样式)
    </h2>
    <div
      style="
        background-color: #cccccc;
        height: 260px;
        padding: 70px 0 0 10px;
      "
    >
      <el-tooltip
        effect="light"
        placement="right"
        :visible-arrow="true"
      >
        <el-button size="mini">分享1</el-button>
        <div slot="content">
          <div class="content">
            <div>微信</div>
            <div class="weChat">
              <img src="http://placeimg.com/640/480/animals" alt="" />
            </div>
            <div>QQ</div>
            <div>抖音</div>
          </div>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style>
.el-tooltip__popper {
  background: #f5f5f5 !important;
  border: none !important;
  box-sizing: border-box !important;
  padding: 10px 0 !important;
}
.el-tooltip__popper[x-placement^='right'] .popper__arrow:after {
  border-right-color: #ffffff;
}
.el-tooltip__popper[x-placement^='right'] .popper__arrow {
  border-right-color: #ffffff !important;
}
</style>
<style scoped lang="less">
.box_btn {
  margin-top: 30px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: #f5f5f5;
}
.box_div {
  background-color: pink;
  width: 80px;
  line-height: 27px;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  left: 45px;
  top: -30px;
  display: none;

  & > ul {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
// 鼠标悬浮一个div控制另外一个div显隐、PS:这里两个div必须是兄弟布局
.box_btn:hover + .box_div {
  display: block !important;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weChat {
  width: 110px !important;
  height: 110px;
  border: 5px solid yellow;
  box-sizing: border-box;
  display: none !important;
  position: absolute;
  left: 70px;
  top: 0;
}
.weChat > img {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
}
.content > div {
  line-height: 30px;
  width: 60px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    box-sizing: border-box;
  }
  &:hover + .weChat {
    display: block !important;
  }
}
</style>
