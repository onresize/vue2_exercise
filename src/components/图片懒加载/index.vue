<template>
  <div>
    <h2>
      图片懒加载的实现、监听滚动时间触发按钮返回顶部(大于5000显示按钮)
    </h2>
    <div v-show="show" class="btn" @click="toTop">回到顶部</div>
    <div class="imgFrame" ref="imgBoxRef">
      <el-image v-for="url in imgData" :key="url" :src="url" lazy></el-image>
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
      if (~~scroll > 5000) {
        this.show = true
      } else {
        this.show = false
      }
    },
    returnTop() {
      //向上滑动、延时模拟动画滑动
      this.$refs['imgBoxRef'].scrollBy(0, -300)
      if (this.$refs['imgBoxRef'].scrollTop > 0) {
        setTimeout(() => {
          this.returnTop()
        }, 10)
      }
    },
    toTop() {
      this.returnTop()
      // this.$refs['imgBoxRef'].scrollTo(0, 0)
    },
  },
}
</script>

<style scoped>
.btn {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 70px;
  height: 70px;
  background: pink;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.imgFrame {
  margin-top: 20px;
  width: calc(100vw - 310px);
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
