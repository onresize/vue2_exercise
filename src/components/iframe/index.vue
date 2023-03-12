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
    <textarea cols="80" rows="11">
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
      标签可以保留您需要的文本格式，比如不会取消换行和空格，并且所示文本是等宽的、场景用来格式化json代码
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
    <el-button @click="routerPush">
      验证await $router.push()、await $router.replace() 是否异步
    </el-button>
    <h3>
      验证结论： 路由跳转是异步操作、可以使用async await搭配使操作同步
      <el-link
        href="https://blog.csdn.net/qq_41793354/article/details/119933923"
        target="_blank"
      >
        (应用场景:路由跳转后刷新、清缓存)
      </el-link>
    </h3>
    <el-button @click="$router.back()">$router.back()后退</el-button>
    <h2>$router是路由实例、（用于路由跳转）</h2>
    <h2>$route是路由元信息对象、（watch监听路由）</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    async routerPush() {
      console.log('1111111111')
      await this.$router.push('/camera')
      console.log('2222222222')
    },
  },
}
</script>

<style scoped>
/* 隐藏滚动条 */
.container {
  width: 80vw;
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
