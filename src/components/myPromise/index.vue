<template>
  <div>
    <h2>
      Promise测试 (宏任务,微任务都属于异步、执行顺序：<span
        class="prom"
        >同步</span
      >
      > <span class="prom">微任务</span> >
      <span class="prom">dom渲染</span> >
       <span class="prom">nextTick(第一个宏任务前执行)</span> >
      <span class="prom">宏任务</span>)
    </h2>
    <h2>
      宏任务：<el-tag color="pink" class="tag"
        >定时器、dom事件、dom渲染、ajax</el-tag
      >
    </h2>
    <h2>
      微任务：<el-tag color="pink" class="tag"
        >Promise、async/await</el-tag
      >
    </h2>
    <button class="btn" @click="newPromise">promise执行顺序</button>
    <button class="btn" @click="getList">getList测试</button>
    <button class="btn" @click="getPromise">
      未用Promise包裹宏任务测试
    </button>
    <button class="btn" @click="getNewPromise">
      用了Promise封装请求搭配async/await控制执行顺序测试
    </button>
    <button class="btn" @click="getThenPromise">
      未用Promise包裹.then链式调用控制执行顺序测试
    </button>

    <div class="div_box">
      <div class="div_flex">
        <div style="width: 50%">
          <h3 style="width: 100%">
            1.当三个异步方法、没有被new
            Promise包裹、执行顺序根据请求事件返回数据的快慢决定
          </h3>
          <el-image
            style="width: 100%; border-right: 3px solid transparent"
            class="image"
            :src="src1"
            fit="fill"
          >
          </el-image>
        </div>
        <div style="width: 50%">
          <h3 style="width: 100%">
            2.当封装的请求方法被new
            Promise包裹、多个异步方法调用请求的顺序就是写好的顺序、写在前面的先执行完才会继续执行后面的请求
          </h3>
          <el-image
            class="image"
            style="width: 100%"
            :src="src2"
            fit="fill"
          >
          </el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import src1 from '@/assets/img/left.png'
import src2 from '@/assets/img/right.png'
export default {
  data() {
    return {}
  },
  created() {
    // this.newPromise()
    // this.getList()
  },
  computed: {
    src1() {
      return src1
    },
    src2() {
      return src2
    },
  },
  methods: {
    // XXX1.newPromise()、控制异步执行顺序
    async newPromise() {
      let formData = new FormData()
      formData.append('deviceid', 'c84415000d68')
      formData.append('chn', 0)
      formData.append('videoq', 3)

      let res1 = await this.publicAxios(formData)
      formData.set('deviceid', 'c84415000d2d')
      let res2 = await this.publicAxios(formData)

      this.HlsList = [...[res1], ...[res2]]
      console.log(this.HlsList)
    },
    // 用promise的方式修饰异步请求、在调用的时候执行顺序是同步代码的顺序
    publicAxios(data) {
      return new Promise(async (resolve, reject) => {
        let { data: res } = await axios({
          url: 'http://user.hddvs.net:8080/apiv2/GetDevStreamUrl.php',
          method: 'post',
          data,
        })
        resolve(res.hlsurl)
      })
    },
    // ====================================================

    // XXX2.getList()、验证执行顺序
    async getList() {
      console.log('1')
      const res1 = await this.AxiosMethod(3000)
      console.log('4')
      const res2 = await this.AxiosMethod(1000)
      console.log('5')
      // 1、 3秒后=>2、4、 1秒后=>2、5、
    },
    AxiosMethod(time) {
      // 用Promise包裹的异步代码在外部调用的时候会形成同步的请求顺序
      return new Promise(async (req, rej) => {
        setTimeout(() => {
          console.log('2')
          req(2)
        }, time)
      })
      console.log('3')
    },
    // ====================================================

    // XXX3.getPromise()
    Axios1(tim) {
      setTimeout(() => {
        console.log(1)
      }, tim)
    },
    Axios2(tim) {
      setTimeout(() => {
        console.log(2)
      }, tim)
    },
    Axios3(tim) {
      setTimeout(() => {
        console.log(3)
      }, tim)
    },
    getPromise() {
      // 执行顺序为 3秒之内分别打印 2、3、1
      this.Axios1(3000)
      this.Axios2(1000)
      this.Axios3(2000)
    },
    // ====================================================

    // XXX4.getNewPromise()
    // 统一用Promise封装
    publicPromiseMethod(url, params = {}) {
      return new Promise(async (resolve, reject) => {
        const res = await axios.get(url, { params })
        console.log('请求结果：', res)
        if (res.status !== 200) {
          reject('出错了')
        } else {
          resolve(res.data)
        }
      })
    },
    axiosOne() {
      console.log('执行了axiosOne')
      return this.publicPromiseMethod(
        'https://jsonplaceholder.typicode.com/todos',
        { _limit: 5 }
      )
    },
    axiosTwo() {
      console.log('执行了axiosTwo')
      return this.publicPromiseMethod(
        'https://jsonplaceholder.typicode.com/comments',
        { _limit: 5 }
      )
    },
    axiosThree() {
      console.log('执行了axiosThree')
      return this.publicPromiseMethod(
        'https://jsonplaceholder.typicode.com/albums',
        { _limit: 5 }
      )
    },
    async getNewPromise() {
      await this.axiosOne()
      await this.axiosTwo()
      await this.axiosThree()
    },
    // ====================================================

    // XXX5.getThenPromise()
    // 统一用Promise封装
    axiosOne1() {
      console.log('执行了axiosOne1')
      return axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      )
    },
    axiosTwo2() {
      console.log('执行了axiosTwo2')
      return axios.get(
        'https://jsonplaceholder.typicode.com/comments?_limit=5'
      )
    },
    axiosThree3() {
      console.log('执行了axiosThree3')
      return axios.get(
        'https://jsonplaceholder.typicode.com/albums?_limit=5'
      )
    },
    // 链式调用控制宏任务执行顺序、（不推荐使用金字塔回调地狱那种方式包裹）
    getThenPromise() {
      // 方法一：（注意.then里面要return出一个值、才能在下一个.then中拿到这个值）
      this.axiosOne1()
        .then((res) => {
          console.log('1:', res)
          return this.axiosTwo2()
        })
        .then((res) => {
          console.log('2:', res)
          return this.axiosThree3()
        })
        .then((res) => {
          console.log('3:', res)
        })
      // // 方法二：
      // return new Promise(async (resolve, reject) => {
      //   const { status: r1 } = await this.axiosOne1()
      //   r1 === 200 && resolve()
      //   const { status: r2 } = await this.axiosTwo2()
      //   r2 === 200 && resolve()
      //   await this.axiosThree3()
      // })
    },
    // ====================================================
  },
}
</script>

<style scoped lang="less">
.tag {
  color: #fff;
  font-size: 20px;
}
.prom {
  background-color: red;
  color: #fff;
  border-radius: 10px;
  padding: 0 5px;
}
.btn + .btn {
  margin-left: 10px;
}
.div_box {
  width: 100%;
  .div_flex {
    display: flex;
    width: 100%;
    height: calc(100vh - 300px);
    .image {
      height: calc(100vh - 220px);
      overflow: hidden;
    }
  }
}
</style>
