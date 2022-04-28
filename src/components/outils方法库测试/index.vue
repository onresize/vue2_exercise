<template>
  <div>
    <base target="_blank" />
    <a href="https://www.npmjs.com/package/outils">outils文档</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.lodashjs.com/">Loadsh文档</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://storm4542.github.io/archives/7b89c88d.html">
      qs文档
    </a>

    <h2>
      outils封装方法库类似于Loadsh、qs 安装npm install --save-dev
      outils
    </h2>
    <h3>
      getOS() 获取当前操作系统：<el-tag type="success">
        {{ systemOs }}
      </el-tag>
    </h3>
    <h3>
      getExplore() 获取浏览器类型和版本号：<el-tag type="success">
        {{ explore }}
      </el-tag>
    </h3>
    <h3>输入键盘keyCode值按enter转换对应键名称：</h3>
    <el-input
      v-model="keyNum"
      @keyup.enter.native="changeKeyCode(keyNum)"
      size="small"
      style="width: 100px"
    ></el-input>
    <h3>
      getKeyCode() 根据键盘keycode获取键盘名：
      <el-tag type="success">
        {{ keyCode }}
      </el-tag>
    </h3>
    <h3>randomColor() 随机颜色</h3>
    <div style="display: flex">
      <el-button @click="changeColor">切换随机颜色 </el-button>
      <div :style="'background:' + color" class="div_color"></div>
    </div>
  </div>
</template>
 
<script>
import outils from 'outils'
export default {
  data() {
    return {
      systemOs: null,
      explore: null,
      color: null,
      keyCode: null,
      keyNum: null,
    }
  },
  created() {
    this.systemOs = outils.getOS()
    this.explore = outils.getExplore()
  },
  methods: {
    changeColor() {
      this.color = outils.randomColor()
    },
    changeKeyCode(keyNum) {
      this.keyCode = outils.getKeyName(keyNum)
    },
  },
}
</script>
 
<style scoped >
.div_color {
  width: 100px;
  height: 30px;
  border-radius: 6px;
  margin: 10px 10px;
}
</style>