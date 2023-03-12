<template>
  <div style="width: 500px">
    <h2>try..catch...</h2>
    <h2>try..catch...finally</h2>
    <el-button>
      <el-link
        target="_blank"
        href="https://github.com/sunyongjian/blog/issues/38#issue-314316968"
      >
        Event Loop详解链接
      </el-link>
    </el-button>
    <h2>特点：消耗性能</h2>
    <h3>
      1.回调函数能try catch
      <br />
      2.try-catch不能直接捕获异步代码、加上await就可以捕获异常
    </h3>
    <h3 class="pk">
      只要代码中包含 finally 字段，那么无论try 还是catch
      语句块中的return 语句都将被忽略。
    </h3>
    <h3 class="pk">
      在try/catch中捕获不到Promise中的异常、Promise的异常都是由内部reject和Promise.prototype.catch捕获、并不会抛出上层（实在要用try/catch捕获Promise的异常在前面加上await就能捕获到了、并不推荐这种做法）
    </h3>
    <h3 class="pk">
      <b>
        能被try/catch捕获到的异常、必须是在报错的时候、线程执行已经进入try/catch代码块、且处在try/catch里面、这个时候才能被捕获到
        (总结：不推荐给Promise包裹上try/catch、用它自带的catch就行)
      </b>
    </h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {}
  },
  created() {
    this.test()
  },
  methods: {
    async test() {
      try {
        await Promise.reject('出错了')
        // setTimeout(() => {
        //   throw new Error('出错了')
        // }, 3000)
      } catch (e) {
        console.log('error', e)
      }
    },
  },
}
</script>

<style scoped>
.pk {
  background-color: pink;
  border-radius: 10px;
  padding: 0 10px;
}
</style>
