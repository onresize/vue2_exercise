<template>
  <div>
    <div id="rotation3D" class="rotation3D">
      <div
        class="rotation3D__item"
        v-for="(item, index) in menuList"
        :key="index"
        @click.stop="XqBtnClick(item, index)"
      >
        <img
          :src="index === currentIndex ? item.iconActive : item.icon"
        />
      </div>
    </div>
  </div>
</template>
 
<script>
import { rotations } from './rotation'
export default {
  data() {
    return {
      currentIndex: 0,
      menuList: [
        {
          icon: require('../../assets/img/a6.jpg'),
          iconActive: require('../../assets/img/logo.png'),
        },
        {
          icon: require('../../assets/img/a6.jpg'),
          iconActive: require('../../assets/img/logo.png'),
        },
        {
          icon: require('../../assets/img/a6.jpg'),
          iconActive: require('../../assets/img/logo.png'),
        },
        {
          icon: require('../../assets/img/a6.jpg'),
          iconActive: require('../../assets/img/logo.png'),
        },
        {
          icon: require('../../assets/img/a6.jpg'),
          iconActive: require('../../assets/img/logo.png'),
        },
      ],
    }
  },
  computed: {},
  methods: {
    XqBtnClick(num, i) {
      this.currentIndex = i
    },
  },
  watch: {},
  created() {
    rotations()
  },
  mounted() {
    // 初始化旋转动画
    new Rotation3D({
      id: '#rotation3D',
      farScale: 0.6,
      // farScale: 1,
      xRadius: 400, //x半径压缩
      yRadius: 400, //y半径压缩
      // autoPlay:true,
      // autoPlayDelay:6000,
    })
  },
}
</script>
 
<style scoped lang="less">
.rotation3D {
  position: relative;
  width: 505px;
  height: 500px;
  border: 3px solid red;
  transform-style: preserve-3d;
  transform: rotateX(180deg);
  .rotation3D__item {
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 10;
    border: 3px solid aqua;
    user-select: none;
    box-sizing: content-box;
    img {
      cursor: pointer;
      width: 100px;
      height: 100px;
      transform: rotateX(-180deg);
    }
  }
}
</style>