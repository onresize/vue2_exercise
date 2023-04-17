<template>
  <div class="container">
    <div style="width: 70vw">
      <h2>
        css3基本属性大全：
        <a
          href="https://www.cnblogs.com/shizhouyu/p/4759864.html"
          target="_bank"
        >
          参考1
        </a>
        <a
          href="https://www.kancloud.cn/ichaoge/css3/157904"
          target="_bank"
        >
          参考2
        </a>
      </h2>
      <h2>
        box-shadow: x轴阴影宽度、 y轴阴影宽度、 模糊半径、 阴影颜色、
        投影方式【inset内阴影(可选)、默认外阴影】;
      </h2>
      <h2>transform: rotate(-360deg);旋转</h2>
      <h2>transform: translateY(-60px)</h2>
      <h2>transform: skew(-15deg, -15deg);变形</h2>
      <h2>
        transform: scale(1.5, 0.5);缩放、根据原点对象进行x、y轴缩放
      </h2>
      <h2>transform-origin: right top;改变圆点位置</h2>
      <div class="box">
        <div class="box_child"></div>
        <div class="box_child1"></div>
        <div class="box_child2"></div>
      </div>
      <h2>
        关键帧@keyframes myBox { 0% {}, 40% {}, 60% {}, 100% {}, }
        <br />
        @keyframes myBox { from {}, to {}} animation: myBox 1s linear
        infinite; 无限循环
      </h2>
      <div class="box_keyframe"></div>
      <h1>
        text-shadow属性测试、和box-shadow类似、 text-shadow: 5px -5px
        3px gray;
      </h1>
      <h2>
        background-origin决定背景图片是从边框(border-box)、还是内边距(默认padding-box)、或内容区(content-box)开始显示的、PS:该属性必须设置了no-repeat才会生效
      </h2>
      <div class="div_img">
        测试background-origin属性、注意内容开始显示的地方
      </div>
      <h2>
        :enabled 或 :disabled选择器
        非禁用和禁用时设置样式、::placeholder可以改变占位符文字样式、:focus
        聚焦时改变样式
      </h2>
      <el-input
        class="ipt"
        :disabled="false"
        placeholder="请输入"
        clearable
        v-model="item"
      ></el-input>
      <div class="btn">vuePress按钮样式</div>
      <h3>模仿掘金头像旋转动画</h3>
      <img
        class="circleImg"
        src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:180:180:180:180.awebp"
        alt
      />
      <h3>鼠标移入动画和移出动画</h3>
      <img
        class="pic"
        src="https://markdownlivepreview.com/image/sample.png"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: '',
      isMouse: false,
    }
  },
  methods: {
    mouseover(e) {
      this.isMouse = true
      console.log('鼠标移入', this.isMouse)
    },
    mouseleave(e) {
      this.isMouse = false
      console.log('移出', this.isMouse)
    },
  },
}
</script>

<style scoped lang="less">
.pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: transform 0.5s ease-out; // 过渡放的位置不同会有不同效果
}
.pic:hover {
  transform: rotate(360deg);
}
.container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #ffffff;
}
.container::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff;
}
.container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ffffff;
}
.container {
  height: 100vh;
  padding: 20px;
  overflow: scroll;
  // scrollbar-width: none !important; // 隐藏滚动条
}
.ipt {
  margin: 10px 0;
  width: 200px;
  font-size: 20px;
  & :enabled {
    background: pink;
    border: 1px solid green;
  }
  & :disabled {
    background: gray;
    border: 1px solid black;
  }
  & :focus {
    border: 3px solid blue;
    box-shadow: 5px 5px 5px gray;
    transition: box-shadow 0.3s;
  }
  & ::placeholder {
    color: green;
  }
}
h1 {
  text-shadow: 5px -5px 3px gray;
}
.div_img {
  width: 200px;
  height: 200px;
  color: #fff;
  padding: 10px;
  background: url('../../assets/img/2.jpg') no-repeat center;
  background-size: contain;
  // background-origin: border-box; // 背景从外边框开始显示
  // background-origin: padding-box; // 背景从内边框开始显示、默认
  background-origin: content-box; // 背景从内容区开始显示
  border: 10px dashed gray;
}
.box {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 300px;
  height: 130px;
  background-color: pink;
  border-radius: 15px;
  box-shadow: 10px 4px 5px gray inset;
  transform-origin: right top;
  &:hover {
    transition: all 1s;
    transform: rotate(-360deg);
  }
  .box_child {
    width: 40px;
    height: 40px;
    background-color: yellow;
    &:hover {
      transform: translateY(-60px);
      transition: all 1s;
    }
  }
  .box_child1 {
    width: 40px;
    height: 40px;
    background-color: green;
    &:hover {
      transform: skew(-15deg, -15deg);
      transition: all 1s;
    }
  }
  .box_child2 {
    width: 40px;
    height: 40px;
    background-color: red;
    &:hover {
      transform: scale(1.5, 0.5);
      transition: all 1s;
    }
  }
}
.box_keyframe {
  width: 150px;
  height: 150px;
  margin-left: 100px;
  background-color: skyblue;
  border-radius: 15px;
  &:hover {
    animation: myBox 1s linear infinite;
  }
  @keyframes myBox {
    // 0% {
    //   margin-left: 100px;
    //   transform: rotate(180deg);
    //   background: skyblue;
    // }
    // 40% {
    //   margin-left: 200px;
    //   transform: rotate(-180deg);
    //   background: orange;
    // }
    // 60% {
    //   margin-left: 300px;
    //   transform: rotate(180deg);
    //   background: blue;
    // }
    // 100% {
    //   margin-left: 400px;
    //   transform: rotate(-180deg);
    //   background: red;
    // }
    form {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
.circleImg {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: wait;
  &:hover {
    transform: rotate(666turn);
    transition-delay: 1s;
    transition-property: all;
    transition-duration: 59s;
    transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
  }
}
.btn {
  width: 120px;
  border-radius: 2px;
  box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
    0 1px 2px 1px;
}
</style>
