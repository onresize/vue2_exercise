/**
 *
 *
 * @desc 封装一个捕获 await请求方式异常的方法
 * @param {*} promise
 * @return {*} 
 */
export default function awaitJS(promise) {
  return promise.then(data => [null, data]).catch(err => [err, null])
}