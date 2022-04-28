<template>
  <div>
    <h2>Map()实例对象的基本使用</h2>
    https://www.cnblogs.com/wangyong1997/articles/11160341.html
    <h2>
      验证$nextTick是同步还是异步:
      同步、等待dom更新立即执行、在同步操作之后在异步操作之前
    </h2>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  created() {
    // 实现当data数组对象中 time相同时 取code值最大的对象
    // let data = [
    //     {time:'2010-10-11',code:4},
    //     {time:'2010-10-11',code:2},
    //     {time:'2010-10-11',code:3},
    //     {time:'2010-10-12',code:7},
    //     {time:'2010-10-12',code:3},
    //     {time:'2010-10-13',code:3},
    //     {time:'2010-10-14',code:3},
    //     {time:'2010-10-15',code:3},
    //     {time:'2010-10-15',code:2},
    //     {time:'2010-10-15',code:5},
    //     {time:'2010-10-18',code:5},
    //     {time:'2010-10-13',code:22},
    //     {time:'2010-10-17',code:12},
    //     {time:'2010-10-19',code:12}
    // ]
    // function unique(arr) {
    //     const res = new Map()
    //     arr.forEach(a => {
    //         !res.has(a.time) && res.set(a.time, a.code)
    //         res.has(a.time) && a.code >= res.get(a.time) && res.delete(a.time) && res.set(a.time, a.code)
    //     })
    //     return [...res].map(v => {return {time:v[0],code:v[1]}})
    // }
    // console.log(unique(data))
    //处理完成的数据为 :
    //[ { time: '2010-10-11', code: 4 },
    //  { time: '2010-10-12', code: 7 },
    //  { time: '2010-10-14', code: 3 },
    //  { time: '2010-10-15', code: 5 },
    //  { time: '2010-10-18', code: 5 },
    //  { time: '2010-10-13', code: 22 },
    //  { time: '2010-10-17', code: 12 },
    //  { time: '2010-10-19', code: 12 } ]
  },
  mounted() {
    // console.log(4)
    // this.$nextTick(() => {
    //   console.log(3)
    // })
    // console.log(1)
    // setTimeout(() => {
    //   console.log(2)
    // }, 0)
  },
}
</script>
 
<style scoped >
</style>