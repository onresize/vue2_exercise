// 简单封装 Axios 练习
import axios from 'axios'
import Store from '@/store'

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

    //XXX 设置 CancelToken对象
    config.cancelToken = new axios.CancelToken(function (c) {
        console.log('执行了请求拦截')
        // Store.dispatch('setCancelAxios', c)
        Store.commit('setCancelAxios', c)
    })

    return config
}, err => Promise.reject(err)
)

// 拦截器 -- 响应拦截
instance.interceptors.request.use(res => {
    return res
}, err => Promise.reject(err)
)

//导出
export default instance 