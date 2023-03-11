<template>
  <div>
    <h2>
      图片懒加载、监听滚动时间触发按钮返回顶部(大于100显示按钮)
      PS：注意查看NetWork
    </h2>
    <div v-show="show" class="btn" @click="toTop"></div>
    <div class="imgFrame" ref="imgBoxRef">
      <el-image
        class="image"
        v-for="url in imgData"
        :key="url"
        :src="url"
        lazy
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      imgSrcArray: [],
      imgData: [
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/5.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/6.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/7.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/14.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/15.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/16.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/17.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/18.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/19.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/20.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/22.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/23.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/24.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/25.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/26.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/27.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/28.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/29.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/30.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/31.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/32.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/33.jpg',

        'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E',
        'http://placeimg.com/640/480/sports',
      ],
    }
  },
  mounted() {
    this.$refs['imgBoxRef'].addEventListener(
      'scroll',
      this.obServerScroll
    )
  },
  // 销毁前去除监听
  beforeDestroy() {
    this.$refs['imgBoxRef'].removeEventListener(
      'scroll',
      this.obServerScroll
    )
  },
  methods: {
    // 监听滚动
    obServerScroll() {
      let scroll = this.$refs['imgBoxRef'].scrollTop
      // console.log('当前距顶部高度：', ~~scroll)
      if (~~scroll > 100) {
        this.show = true
      } else {
        this.show = false
      }
    },
    returnTop() {
      // XXX 方法一
      this.$refs['imgBoxRef'].scrollBy(0, -600)
      if (this.$refs['imgBoxRef'].scrollTop > 0) {
        setTimeout(() => {
          this.returnTop()
        }, 30)
      }

      // XXX 方法二
      // const upRoll = setInterval(() => {
      //   let scrollTop = document.body.scrollTop // 每次获取页面被卷去的部分
      //     ? document.body.scrollTop
      //     : document.documentElement.scrollTop
      //   const speed = scrollTop / 4 // 每次滚动多少 （步长值）
      //   if (document.documentElement.scrollTop !== 0) {
      //     document.documentElement.scrollTop -= speed // 不在顶部 每次滚动到的位置
      //   } else {
      //     clearInterval(upRoll) // 回到顶部清除定时器
      //   }
      // }, 8)
    },
    toTop() {
      this.returnTop()
      // this.$refs['imgBoxRef'].scrollTo(0, 0)
    },
    // XXX 动画回到顶部、方法三(RAF)
    goToTop() {
      let timer = null
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop ||
          document.documentElement.scrollTop
        if (oTop > 0) {
          document.body.scrollTop =
            document.documentElement.scrollTop = oTop - 50
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
        }
      })
    },
  },
}
</script>

<style scoped lang="less">
.image {
  width: 500px;
  object-fit: cover;
  user-select: none;
}
.btn {
  position: fixed;
  left: 750px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  background: pink;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.5s;
  &::after {
    content: url('../../assets/img/arrow-up.svg');
    font-size: 12px;
    font-weight: bold;
  }
  &:hover {
    background: rgba(204, 204, 204, 0.5);
  }
}
.imgFrame {
  margin-top: 20px;
  width: 524px;
  height: 80vh;
  overflow: auto;
  border: 6px solid pink;
}
.imgFrame::-webkit-scrollbar {
  width: 12px;
  height: 12px;
  background-color: #f5f5f5;
}
.imgFrame::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}
.imgFrame::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #cccccc;
}
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
