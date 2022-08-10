// Promise.myAll = function (Arr) {
//   let arr = [],
//     count = 0
//   return new Promise((resolve, reject) => {
//     Arr.forEach((item, i) => {
//       Promise.resolve(item)
//         .then(res => {
//           arr[i] = res
//           count += 1
//           if (count === Arr.length) resolve(arr)
//         })
//         .catch(reject)
//     })
//   })
// }

const p1 = Promise.resolve('----成功p1')

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('----p2 延时1s')
  }, 1000)
})

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('----p5 延时3s')
  }, 3000)
})

const p4 = Promise.reject('----失败p4')

Promise.all([p1, p4]).then((res) => {
  console.log('all方法测试：', res)
})



// XXX 手写一个Promise.myAll() 和 Promise.all()功能一致
// Promise.myAll([p1,p4,p2])
//   .then(res => console.log('@成功', res))
//   .catch(err => console.log('@失败', err))


// XXX 解决Promise.all()、catch之后 也执行成功返回的结果
// let reqArr = [p1, p4, p2]

// let transPromise = reqList => {
//   return reqList.map(item => {
//     return item.then(res => res).catch(err => err)
//   })
// }
// let promiseArr = transPromise(reqArr)
// Promise.all(promiseArr).then(resArr => {
//   console.log(resArr)
// })



// XXX 手写Promise.all、catch错误和成功的都会执行
// Promise.taoAll = params => {
//   let arr = []
//   let count = 0
//   let r = params.map(row => row.then(res => res).catch(err => err))
//   return new Promise((resolve, reject) => {
//     r.forEach((item, i) => {
//       Promise.resolve(item).then(res => {
//         arr[i] = res
//         count++
//         count == params.length && resolve(arr)
//       })
//     })
//   })
// }

// Promise.taoAll([p1, p4, p2]).then(res => console.log(res))
