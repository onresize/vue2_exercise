<template>
  <div class="container">
    <div class="item">
      <h2>background: inherit;</h2>
      <div class="box">
        <div class="box_drag"></div>
      </div>
    </div>

    <div class="item">
      <h2>鼠标悬浮卡片旋转动效（手写实现）</h2>
      <div id="element"></div>
    </div>

    <div class="item">
      <h2>
        鼠标悬浮卡片旋转动效<el-link
          href="https://github.com/micku7zu/vanilla-tilt.js"
          target="_bank"
          >（vanilla-tilt.js库实现）</el-link
        >
      </h2>
      <div id="js-tilt"></div>
    </div>

    <div class="item">
      <div class="svgBox">
        <svg-icon
          icon-class="loudou"
        />项目集成svg、颜色和字体统一修改
      </div>
    </div>
  </div>
</template>
 
<script>
import VanillaTilt from 'vanilla-tilt'

export default {
  data() {
    return {
      ratio: 1,
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {
    // 手写实现
    var multiple = 10
    var element = document.getElementById('element')

    function transformElement(x, y) {
      let box = element.getBoundingClientRect()
      let calcX = -(y - box.y - box.height / 2) / multiple
      let calcY = (x - box.x - box.width / 2) / multiple

      element.style.transform =
        'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg)'
    }

    element.addEventListener('mousemove', (e) => {
      window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY)
      })
    })

    element.addEventListener('mouseleave', (e) => {
      window.requestAnimationFrame(function () {
        element.style.transform = 'rotateX(0) rotateY(0)'
      })
    })

    // 库实现
    var VanillaTiltDOM = document.querySelector('#js-tilt')
    VanillaTilt.init(VanillaTiltDOM)
  },
}
</script>
 
<style scoped lang="less">
.container {
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .item {
    margin: 10px;
    .svgBox {
      &:hover {
        color: rgb(47, 92, 255);
      }
    }
  }
  .box {
    width: 600px;
    height: 600px;
    background-image: url('~@/assets/img/2.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;

    &::before {
      content: '';
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.4);
      position: absolute;
      left: 300px;
      top: 190px;
    }
    .box_drag {
      width: 50px;
      height: 50px;
      border: 2px solid #fff;
      background-image: inherit;
      background-repeat: inherit;
      background-size: 600px 600px; // 这一步很重要
      background-position: -300px -190px;
      position: absolute;
      left: 0;
      top: 190px;
      cursor: pointer;
    }
  }
  #element {
    width: 338px;
    height: 418px;
    background: url('https://cdn.sanity.io/images/ornj730p/production/55609fcfa11813317c4fd6bf62c6d4f5c6123055-3440x4248.jpg?w=680&fit=max&auto=format&dpr=2')
      no-repeat center;
    background-size: 100% 100%;
    transform-style: preserve-3d;
    transform: perspective(600px); // 距离屏幕600px
    transition: all 0.1s;
    border-radius: 20px;
    cursor: pointer;
  }
  #js-tilt {
    width: 338px;
    height: 418px;
    background: url('https://cdn.sanity.io/images/ornj730p/production/55609fcfa11813317c4fd6bf62c6d4f5c6123055-3440x4248.jpg?w=680&fit=max&auto=format&dpr=2')
      no-repeat center;
    background-size: 100% 100%;
    transform-style: preserve-3d;
    transform: perspective(600px); // 距离屏幕600px
    transition: all 0.1s;
    border-radius: 20px;
    cursor: pointer;
  }
}
</style>