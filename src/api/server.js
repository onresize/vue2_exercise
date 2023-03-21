// 简单封装 Axios 练习
import axios from 'axios'
import Store from '@/store'

// 创建一个实例、默认url、超时
export default function request(obj) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: obj.url.includes('http') || 'https://v2.api-m.com',
            timeout: 10000,
        })

        // 拦截器 --请求拦截
        instance.interceptors.request.use(config => {
            console.log('请求拦截------------')
            //请求成功、部分接口需要拿到token
            let token = sessionStorage.getItem('token')
            if (token) { config.headers.Authorization = token }

            //XXX 设置 CancelToken对象
            config.cancelToken = new axios.CancelToken(function (c) {
                // Store.dispatch('setCancelAxios', c)
                Store.commit('setCancelAxios', c)
            })
            return config
        }, err => reject(err))

        // 拦截器 -- 响应拦截
        instance.interceptors.request.use(res => {
            console.log('响应拦截------------')
            return res
        }, err => reject(err))

        resolve(instance({
            ...obj
        }))
    })
}
