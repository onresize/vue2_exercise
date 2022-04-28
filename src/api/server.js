// 简单封装 Axios 练习
import axios from 'axios'

// 创建一个实例、默认url、超时
const instance = axios.create({
    baseURL: 'http://47.104.64.44:8889/api/private/v1/',
    timeout: 4000
})

// 拦截器 --请求拦截
instance.interceptors.request.use(config => {
    //请求成功、部分接口需要拿到token
    let token = sessionStorage.getItem('token')
    if (token) { config.headers.Authorization = token }
    return config
}, err => {
    //失败
    return Promise.reject(err)
})

// 拦截器 -- 响应拦截
instance.interceptors.request.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})

//导出
export default instance 