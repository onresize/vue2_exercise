// 将封装的 axios请求导入
import server from './server'

// 按需到出每个请求

//请求首页数据
export const loginPost = (data) => server.post('login', data)
export const getUsers = (params) => server.get('users', params)