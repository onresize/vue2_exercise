// 将封装的 axios请求导入
import server from './server'

import awaitJS from '@/utils/await.js'

// params和 data多种写法、注意区别
//XXX GET
// axios.get('http://xxx', { params: { a: 1, b: 2 } })
// axios('http://xxx/?a=1&b=2')
// axios({ url: 'http://xxx', method: 'GET', params: { a: 1, b: 2 } })

//XXX POST
// axios.post('http://yyy', { a: 1, b: 2 })
// axios({ url: 'http://yyy', method: 'POST', data: { a: 1, b: 2 } })

//请求首页数据
export const loginPost = (data) => server.post('login', data)
export const getUsers = (params) => server.get('users', params)

// api文档：https://api-m.com/   
// 文本转语音
export const getSpeed = (params) => {
  return awaitJS(
    server({
      url: 'api/speech',
      method: 'GET',
      params
    })
  )
}
// 爱情公寓名言
export const getKnownSaying = (params) => {
  return awaitJS(
    server({
      url: 'api/aiqinggongyu',
      method: 'GET',
    })
  )
}
// 文案门
export const getWenAnMen = (url, data) => {
  return awaitJS(
    server({
      url,
      method: 'POST',
      data,
    })
  )
}
// iKun_Vpn文案
export const getIKun = (url, params) => {
  return awaitJS(
    server({
      url,
      method: 'GET',
      params,
    })
  )
}
