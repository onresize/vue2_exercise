<template>
  <div style="width: 500px">
    <h2>
      渐进式JPEG（图片由模糊到清晰一层层加载）和普通JPEG区别（图片一行一行加载）
      <el-link
        href="https://blog.csdn.net/sd19871122/article/details/122585481"
        target="_blank"
        >链接：</el-link
      >
    </h2>
    <h2>
      <el-tag color="pink" class="tag">
        CSS不会阻塞DOM的解析，但会阻塞DOM的渲染。
      </el-tag>
      <el-tag color="pink" class="tag">
        CSS会阻塞JS的执行，但不会阻塞JS的下载。
      </el-tag>
      <el-tag color="pink" class="tag">
        JS会阻塞DOM的解析，也就会阻塞DOM的渲染。
      </el-tag>
      <el-link
        href="https://blog.51cto.com/u_13756259/5218827"
        target="_blank"
        >参考：</el-link
      >
    </h2>
    <h2>
      探究图片预加载实现方案
      <el-link
        href="https://juejin.cn/post/7084190879140806669"
        target="_blank"
        >掘金参考(js方案和css方案)：</el-link
      >
    </h2>
    <h2>
      预加载：
      <el-tag color="yellow" class="tag1">
        提前加载、加载完成缓存到本地、牺牲服务器性能提高用户体验</el-tag
      >
    </h2>
    <h2>
      懒加载：
      <el-tag color="yellow" class="tag1">
        延迟加载、主要目的是作为服务器前端的优化、减少请求数或延迟请求、可以减轻服务器压力、提高用户体验
      </el-tag>
    </h2>
    <div>
      <h2>js实现：</h2>
      <div>
        <img :src="imgData[imgInd]" alt="" />
      </div>
      <el-button @click="onLeft">Left</el-button>
      <el-button @click="onRight">Right</el-button>
    </div>
    <div>
      <h2>css实现：</h2>
      <img
        :src="imgData1[imgInd1]"
        alt=""
        style="width: 600px; height: 400px"
      />
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
      <div class="img4"></div>
      <el-button @click="onLeft1">Left1</el-button>
      <el-button @click="onRight1">Right1</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgInd: 0,
      imgData: [
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/3.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/4.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/5.jpg',
        'https://cdn.jsdelivr.net/gh/lztnb/img@master/7.jpg',
      ],
      imgInd1: 0,
      imgData1: [
        'https://t7.baidu.com/it/u=2471051649,2314656574&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=4277577705,3179553937&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=3521602532,2298371181&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=1076097100,3808793036&fm=193&f=GIF',
      ],
    }
  },
  created() {
    this.preLoadImg(this.imgData)
  },
  methods: {
    // 预加载图片、一进入页面直接提前加载所有图片、当再次要用到对应图片时浏览器会先从磁盘缓存去找、找不到再去请求
    preLoadImg(arr) {
      for (var index = 0; index < arr.length; index++) {
        var oImg = new Image()
        oImg.src = arr[index]
        console.log(oImg)
      }
    },
    onLeft() {
      this.imgInd - 1 < 0 ? 0 : --this.imgInd
    },
    onRight() {
      this.imgInd + 1 == this.imgData.length
        ? this.imgData.length - 1
        : ++this.imgInd
    },
    onLeft1() {
      this.imgInd1 - 1 < 0 ? 0 : --this.imgInd1
    },
    onRight1() {
      this.imgInd1 + 1 == this.imgData1.length
        ? this.imgData1.length - 1
        : ++this.imgInd1
    },
  },
}
</script>

<style scoped>
.tag {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
.tag1 {
  color: #000;
  font-size: 16px;
  font-weight: bold;
}
.el-button {
  margin: 5px;
}
.img1 {
  width: 0px;
  height: 0px;
  background: url('https://t7.baidu.com/it/u=2471051649,2314656574&fm=193&f=GIF');
}
.img2 {
  width: 0px;
  height: 0px;
  background: url('https://t7.baidu.com/it/u=4277577705,3179553937&fm=193&f=GIF');
}
.img3 {
  width: 0px;
  height: 0px;
  background: url('https://t7.baidu.com/it/u=3521602532,2298371181&fm=193&f=GIF');
}
.img4 {
  width: 0px;
  height: 0px;
  background: url('https://t7.baidu.com/it/u=1076097100,3808793036&fm=193&f=GIF');
}
</style>
