<template>
  <div class="container">
    <h2>
      <span v-text="'{{}}'"></span>和v-text的区别:
      <span v-text="'{{}}'"></span>会闪烁、用v-cloak解决闪烁问题
      <p v-html="htmlText" style="width: 1000px"></p>
      <p v-text="htmlText" style="width: 1000px"></p>
      <p v-cloak style="width: 1000px">{{ htmlText }}</p>
    </h2>
    <el-tag color="yellow">v-cloak</el-tag>
    <div class="text" v-cloak>{{ text1 }}</div>
    <el-tag color="yellow">v-html</el-tag>
    <div class="text" v-html="text2"></div>
    <el-tag color="yellow">v-text</el-tag>
    <div class="text" v-text="text3"></div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
      htmlText: `<mark>v-html指令类似于v-text指令;它与v-text区别在于v-text输出的是纯文本，浏览器不会对其再进行html解析，但v-html会将其当html标签解析后输出。v-html 指令应尽量避免使用，否则会带来危险(XSS攻击跨站脚本攻击),一般只在可信任内容上使用v-html，永不用在用户提交的内容上</mark>`,
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.text1 = 'text1'
      this.text2 = 'text2'
      this.text3 = 'text3'
    }, 2000)
  },
  activated() {
    console.log('执行当前组件222的-------activated')
  },
  deactivated() {
    console.log('执行当前组件222的-------deactivated')
  },
}
</script>
 
<style scoped lang="less">
[v-cloak] {
  display: none;
}
.container {
  display: flex;
  flex-direction: column;
  .el-tag {
    font-size: 20px;
    font-weight: bold;
    width: 100px;
    text-transform: capitalize;
    text-align: center;
    margin: 5px;
    color: #000;
    user-select: none;
  }
  .text {
    width: 100px;
    height: 100px;
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
  }
}
</style>