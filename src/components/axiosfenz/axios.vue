<template>
  <div>
    <h2>Axios的封装测试</h2>
    <button @click="loginclick">登入post请求</button>
    <button @click="getUser">get请求</button>
    <el-card> </el-card>
  </div>
</template>
 
<script>
import { loginPost, getUsers } from '@/api/api'
import axios from 'axios'
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    //登入post请求
    async loginclick() {
      const { data: res } = await loginPost({
        username: 'admin',
        password: '123456',
      })
      console.log(res)
      window.sessionStorage.setItem('token', res.data.token)
    },
    //获取用户数据get请求(根据vue电商管理api来写的封装测试)
    async getUser() {
      const { data: res } = await getUsers({
        params: {
          query: '',
          pagenum: 1,
          pagesize: 5,
        },
      })
      console.log(res.data.users)
    },
  },
}
</script>
 
<style scoped >
</style>