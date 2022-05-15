<template>
  <div>
    <div class="container">
      <!-- TODO -->
      <h2>canvas的基本使用</h2>
      <h2>待了解npm i -S html2canvas</h2>
      <canvas id="myCanvas" ref="myCanvas"></canvas>
      <canvas id="myCanvas1" ref="myCanvas1"></canvas>
      <canvas id="myCanvas2" ref="myCanvas2"></canvas>
      <canvas id="myCanvas3" ref="myCanvas3"></canvas>
      <canvas id="myCanvas4" ref="myCanvas4"></canvas>
      <canvas id="myCanvas5" ref="myCanvas5"></canvas>
      <canvas id="myCanvas6" ref="myCanvas6"></canvas>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  data() {
    return {}
  },
  mounted() {
    this.xianDuan()
    this.sanJiaoXing()
    this.sanJiaoXingColor()
    this.yuan()
    this.xiaoLian()
    this.ziTi()
    this.jianBian()
  },
  methods: {
    xianDuan() {
      var canvas = this.$refs.myCanvas
      var ctx = canvas.getContext('2d')
      ctx.moveTo(0, 0) // moveTo(x,y) 定义线条开始坐标
      ctx.lineTo(200, 100) // lineTo(x,y) 定义线条结束坐标
      ctx.stroke()
    },
    sanJiaoXing() {
      var canvas = this.$refs.myCanvas1
      var ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(100, 200)
      ctx.lineTo(400, 200)
      ctx.lineTo(0, 0)
      ctx.stroke() // 无填充色
    },
    sanJiaoXingColor() {
      var canvas = this.$refs.myCanvas2
      var ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(100, 200)
      ctx.lineTo(400, 200)
      ctx.lineTo(0, 0)
      ctx.fill() // 有填充色
    },
    yuan() {
      var c = this.$refs.myCanvas3
      var ctx = c.getContext('2d')
      ctx.beginPath()
      ctx.arc(95, 50, 40, 0, 2 * Math.PI) // Math.PI圆周率π = 3.14 = 180°
      ctx.stroke()
    },
    xiaoLian() {
      let canvas = this.$refs.myCanvas4
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
      ctx.moveTo(110, 75)
      ctx.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
      ctx.moveTo(65, 65)
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
      ctx.moveTo(95, 65)
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
      ctx.stroke()
    },
    ziTi() {
      let canvas = this.$refs.myCanvas5
      let ctx = canvas.getContext('2d')
      ctx.font = '30px Arial' // 设置字体及大小
      ctx.fillText('Hello World 泥巴巴', 10, 150) // 实心文字
      ctx.strokeText('Hello World 泥巴巴', 10, 180) // 空心文字
    },
    jianBian() {
      let canvas = this.$refs.myCanvas6
      let ctx = canvas.getContext('2d')
      var grd = ctx.createLinearGradient(0, 0, 200, 0) // 设置渐变
      grd.addColorStop(0, 'red') // 渐变起始颜色
      grd.addColorStop(1, 'orange') // 渐变结束色
      ctx.fillStyle = grd // 填充色
      ctx.fillRect(10, 10, 200, 100) // (x,y,width,height) 矩形坐标和宽高
    }
  }
}
</script>
<style scoped>
.container {
  width: 80vw;
  border: 1px solid red;
}
</style>
