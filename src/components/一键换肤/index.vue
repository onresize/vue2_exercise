<template>
  <div>
    <h3>
      换肤 / 切换样式主题 方式:
      <el-link
        href="https://blog.csdn.net/qq_42753705/article/details/122130144"
        target="_blank"
        >多种方案参考：</el-link
      >
    </h3>
    <el-button @click="changeTheme('Moccasin')"
      >换肤为Moccasin</el-button
    >
    <el-button @click="changeTheme('skyblue')"
      >换肤为skyblue</el-button
    >
    <el-button @click="changeTheme('#CCFFCC')"
      >换肤为#CCFFCC</el-button
    >
    <el-button @click="changeTheme('Pink')">换肤为Pink</el-button>
    <el-button class="myButton">此时的背景颜色</el-button>
    <div class="myDiv"><h2>我是一个可以换肤的div</h2></div>
  </div>
</template>

<script>
export default {
  methods: {
    changeTheme(color) {
      document.documentElement.style.setProperty(
        '--theme_bg_color',
        color
      )
      document.documentElement.style.setProperty(
        '--theme_button_color',
        color
      )
    },
  },
}
</script>

<style scoped>
.myButton {
  background: var(--theme_bg_color);
}
.myDiv {
  background: var(--theme_button_color);
  margin-top: 10px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  width: 100%;
  height: 88vh;
}
</style>
