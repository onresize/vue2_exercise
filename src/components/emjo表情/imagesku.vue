<template>
  <div>
    <img :src="imgSrc" class="imgPre" />
    <el-popover placement="right" width="430" trigger="click">
      <div class="img-div">
        <img
          v-for="(item, index) in imgList"
          :key="index"
          :src="item.src"
          @click="chooseImg(item.src)"
          class="img-item"
          :style="[imgSrc == item.src ? 'borderColor: #66ccff!important;' : '']"
        />
      </div>
      <el-button slot="reference" icon="el-icon-picture-outline-round">选择头像</el-button>
    </el-popover>
  </div>
</template>
 
<script>
const u1 = require('../../img/1.png')
const u2 = require('../../img/2.png')
const u3 = require('../../img/3.png')
const u4 = require('../../img/4.png')
export default {
  data() {
    return {
      imgList: [
        {
          id: 1,
          src: u1,
        },
        {
          id: 2,
          src: u2,
        },
        {
          id: 3,
          src: u3,
        },
        {
          id: 4,
          src: u4,
        },
        {
          id: 11,
          src: u1,
        },
        {
          id: 12,
          src: u2,
        },
        {
          id: 13,
          src: u3,
        },
        {
          id: 14,
          src: u4,
        },
      ],
      imgSrc: null,
    }
  },
  methods: {
    chooseImg(src) {
      this.imgSrc = src
    },
  },
}
</script>
 
<style scoped >
.imgPre {
  width: 100px;
  height: 100px;
  border: 1px dashed black;
  margin: 10px;
  border-radius: 5px;
}
.img-item {
  width: 100px;
  height: 100px;
  border: 4px solid transparent;
  border-radius: 5px;
  cursor: pointer;
}
.img-item:hover {
  /* */
}
</style>