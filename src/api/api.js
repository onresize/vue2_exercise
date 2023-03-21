// 将封装的 axios请求导入
import server from './server'

import awaitJS from '@/utils/await.js'

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
export const getWenAnMen = (url,data) => {
  return awaitJS(
    server({
      url,
      method: 'POST',
      data,
    })
  )
}
