<template>
  <div class="box">
    <h2>async/await处理异常</h2>
    <h2>
      除了try..catch处理异常、async/await就是Promise的语法糖、基于这点封装一个to方法来处理async/await异常
    </h2>
    <h2>
      <span style="background-color: skyblue; border-radius: 10px">
        如果你真的想忽略错误而继续运行，直接 await func().catch(noop)
        就好了，或者封装一个函数，这样做更加透明方便。
        如果你不想忽略错误，用你之前的方式或者直接 await func().then(a
        => [null, a]).catch(e => [e]) 或者最外层包裹一个 try/catch。
      </span>
    </h2>
    <h2>
      <s
        >一个解决async/await自动注入try/catch捕获异常的webpack插件：</s
      >
      <el-link
        href="https://github.com/yeyan1996/async-catch-loader"
        target="_blank"
        >async-catch-loader（这种做法不是很被推荐、捕获了所有的异常不是好事）
      </el-link>
    </h2>
    <pre class="tag">
        // 封装方法1：
        function to(promise) {
            return promise.then(data => [null, data]).catch(err => [err, null]);
        }

        // 封装方法2：
        async function requestCatch(fn) {
          try {
            const res = await fn()
            return [null, res]
          } catch (err) {
            return [err, null]
          }
        }

        // Promise抛出异常、不catch的情况会被unhandledrejection捕获
        window.addEventListener('unhandledrejection', (event) => {
          console.log('捕获到没有catch的Promise返回的reject错误：', event)
        })
    </pre>
    <h2>
      测试自己的js库to-fast-lt中isEmptyObject方法、<el-tag>
        {{ obj }}
      </el-tag>
      是否为空对象:
      <el-tag>
        {{ isObj }}
      </el-tag>
    </h2>
  </div>
</template>

<script>
import { awaitTo, requestCatch } from './awaitTo.js'
import toFast from 'to-fast-lt'
export default {
  data() {
    return {
      obj: { a: 123123 },
      obj1: {},
      isObj: '',
    }
  },
  created() {
    this.getList()
    console.log('是否为空对象：', toFast.isEmptyObject(this.obj))
    this.isObj = toFast.isEmptyObject(this.obj)
    window.addEventListener('unhandledrejection', (event) => {
      console.log('捕获到没有catch的Promise返回的reject错误：', event)
    })
    this.fetchReject()
  },
  methods: {
    // 模仿一个Promise
    fetchData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // resolve('成功')
          reject('Promise抛出异常')
        }, 1000)
      })
    },
    fetchReject() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(
            'Promise抛出异常、不catch的情况会被unhandledrejection捕获'
          )
        }, 2000)
      })
    },
    // 两种封装捕获 await异常
    async getList() {
      // 1.方法一
      // const [err, res] = await awaitTo(this.fetchData())

      // 2.方法二
      const [err, res] = await requestCatch(this.fetchData)
      console.log('213123', res)

      if (err) {
        return this.$message.error(err)
      }
    },
  },
}
</script>

<style scoped>
.box {
  width: calc(100vw - 290px);
}
.tag {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background: pink;
  border-radius: 20px;
  padding: 15px 0 0 0;
  /* user-select: none; */
}
</style>
