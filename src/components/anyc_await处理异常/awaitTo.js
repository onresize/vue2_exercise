// 参考await-to-js
/**
 *
 * @desc 封装一个处理async/await方式异常的to方法、方法一
 * @param {*} promise
 * @return {Array} 
 */
function awaitTo(promise) {
  return promise.then(data => [null, data]).catch(err => [err, null]);
}

/**
 *
 *
 * @param {*} function 封装方法二
 * @return {Array} 
 */
async function requestCatch(fn) {
  try {
    const res = await fn()
    return [null, res]
  } catch (err) {
    return [err, null]
  }
}

export {
  awaitTo,
  requestCatch
}