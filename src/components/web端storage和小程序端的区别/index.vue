<template>
  <div>
    <h2>探究web端storage和小程序端的区别</h2>
    <h2 style="width: 500px;">
      web端： window.localStorage 和 window.sessionStorage
      必须用JSON.stringify()转化才能被正常存储、用的时候用JSON.parse()转成对象
    </h2>
    <h2>
      小程序端： 存什么、取出来就是什么、不需要转化操作
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        a: 1,
        b: 2
      },
      obj1: {
        a: 3,
        b: 4
      }
    }
  },
  mounted() {
    console.log('localStorage--',JSON.parse(window.localStorage.getItem('obj')))
    console.log('sessionStorage--',JSON.parse(window.sessionStorage.getItem('obj1')))
  },
  created() {
    window.localStorage.setItem('obj', JSON.stringify(this.obj))
    window.sessionStorage.setItem('obj1', JSON.stringify(this.obj1))
  },
  methods: {}
}
</script>

<style scoped></style>
