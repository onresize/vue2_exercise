<template>
  <div>
    <h2>Promise测试</h2>
    <button class="btn" @click="newPromise">promise执行顺序</button>
    <button class="btn" @click="getList">getList测试</button>
    <button class="btn" @click="getPromise">promise测试</button>

    <div class="div_box">
      <h2>总结</h2>
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
    // this.getPromise()
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
    // 1.newPromise()、控制异步执行顺序
    // ====================================================
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

    // 2.getList()、验证执行顺序
    // ====================================================
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

    // 3.getPromise()
    // ====================================================
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
  },
}
</script>

<style scoped lang="less">
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
