<template>
  <div>
    <h2>
      Axios终止测试：
      <el-link
        href="https://blog.csdn.net/sxiagn/article/details/107174743"
        target="_blank"
        >参考</el-link
      >
      <h5>PS: 测试的时候netWork用高速3G测试、手速要快</h5>
      <h5>全局终止请求是在请求拦截里触发vueX异步方法将函数赋值给state仓库变量、通过调用这个变量触发终止请求的</h5>
    </h2>
    <el-button @click="requestClick">局部发送请求</el-button>
    <el-button @click="requestCancel">局部取消请求</el-button>

    <el-button @click="globalRequestClick"
      >全局请求拦截发送请求</el-button
    >
    <el-button @click="globalRequestCancel"
      >全局请求拦截取消请求</el-button
    >
  </div>
</template>

<script>
import axios from 'axios'
import { getUsers } from '@/api/api'
export default {
  data() {
    return {
      source: null,
    }
  },
  created() {},
  methods: {
    // 封装的可终止请求的 api
    getCancel(cancelToken) {
      return axios.get('https://api-v3.speedtest.cn/ip', {
        cancelToken,
      })
    },
    async requestClick() {
      console.log('点击了requestClick')
      this.source = axios.CancelToken.source()
      try {
        const { data: res } = await this.getCancel(this.source.token)
        console.log(res.data)
      } catch (e) {
        console.log('捕获异常：', e)
        this.$message.error(e.message)
      }
    },
    // 取消请求
    requestCancel() {
      console.log('点击了requestCancel')
      this.source.cancel('取消请求')
    },
    async globalRequestClick() {
      const [err, data] = await this.$awaitJS(getUsers())
      if (err) {
        this.$message.error(err.message)
        return false
      } else {
        console.log('全局：', data)
      }
    },
    globalRequestCancel() {
      this.$store.state.cancelAxios('终止全局配置的axios请求')
    },
  },
}
</script>