<template>
  <div>
    <h2>try..catch...</h2>
    <h2>try..catch...finally</h2>
    <el-link
      target="_blank"
      href="https://github.com/sunyongjian/blog/issues/38#issue-314316968"
      >Event Loop详解：</el-link
    >
    <h3>
      特点：消耗性能 1.回调函数能try catch
      2.try-catch不能直接捕获异步代码、使用await同步化可以
    </h3>
    <span
      >只要代码中包含 finally 字段，那么无论try 还是catch
      语句块中的return 语句都将被忽略。</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.test()
  },
  methods: {
    Fn(cb) {
      setTimeout(() => {
        throw '异步抛出的出错'
      }, 2000)
      cb()
    },
    test() {
      try {
        const cb = () => {
          throw '回调抛出的出错'
        }
        this.Fn(cb)
      } catch (e) {
        console.log('catch到了回调？', e)
      }
    }
  }
}
</script>

<style scoped></style>
