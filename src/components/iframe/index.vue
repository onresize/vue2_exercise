<template>
  <div class="container">
    <h2>iframe标签的渲染</h2>
    <h2>
      .vue文件中引入html文件、autoMove.html文件放在vue项目public文件夹下
    </h2>
    <h2><b>网页显示代码的方式:</b></h2>
    <h2>textarea标签包裹代码块可以将代码直接显示在网页上</h2>
    <h2 style="color: pink">
      <pre>
    <textarea cols="80" rows="10">
      &lt;div class="home">
        &lt;iframe
          class="iframe_box"
          src="/autoMove.html"
          frameborder="0"
          scrolling="no"
        >
        &lt;/iframe>
      &lt;/div> 
       </textarea
    >
    </pre>
    </h2>
    <h2>
      &lt;pre>
      标签可以保留您需要的文本格式，比如不会取消换行和空格，并且所示文本是等宽的
    </h2>
    <div style="background-color: #282c34; border-radius: 10px">
      <h2 style="color: pink">
        <pre>
          
       &lt;div class="home">
        &lt;iframe
          class="iframe_box"
          src="/autoMove.html"
          frameborder="0"
          scrolling="no"
        >
        &lt;/iframe>
       &lt;/div>
      </pre
        >
      </h2>
    </div>
    <div
      style="
        background-color: #282c34;
        border-radius: 10px;
        margin-bottom: 10px;
      "
    >
      <iframe
        width="100%"
        height="350"
        src="/autoMove.html"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
    </div>
    <el-button @click="$router.back()">$router.back()后退</el-button>
    <h2>$router是路由实例</h2>
    <h2>$route是路由跳转对象</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style scoped>
/* 隐藏滚动条 */
.container {
  scrollbar-width: none !important;
}
.container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #ffffff;
}
.container::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff;
}
.container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ffffff;
}
.container {
  height: 100vh;
  padding: 20px;
  overflow: scroll;
}
</style>
