<template>
  <div>
    <h2>vue自定义过滤器 与 管道符号 |</h2>
    <span>1.实现字母首字母转大写(main.js全局注册)</span>
    <h2>{{ name | upname }}</h2>
    <a :title="title | changename">2.鼠标悬浮显示title (main.js全局注册)</a><br>
    <a :title="title | bigTitle">3.鼠标悬浮显示title (局部注册filters)</a>  
  </div>
</template>
 
<script>
export default {
  filters: {
    bigTitle: (value) => {
      return value + '++++++'
    },
  },
  data() {
    return {
      name: 'admin',
      title: '标题',
    }
  },
  created() {},
  methods: {},
}
</script>
