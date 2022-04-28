<template>
  <div>
    <h2>this.$nextTick回调下次dom更新之后再执行、相当于setTimeout(() => {}, 0)</h2>
    <h3 style="width:700px;">
      使用场景：this.$nextTick()方法主要是用在随数据改变而改变的dom应用场景中。
      vue中数据和dom渲染由于是异步的，所以，要让dom结构随数据改变这样的操作都应该放进this.$nextTick()的回调函数中。
      created()使用方法时，dom还没有渲染，如果此时在该钩子函数中进行dom赋值数据（或者其它dom操作）时无异于徒劳，
      所以，此时this.$nextTick()就会被大量使用。
      created()对应的是mounted()的钩子函数则是在dom完全渲染后才开始渲染数据，所以在mounted()中操作dom基本不会存在渲染问题。
    </h3>
    <span ref="spanRef" style="color:pink;">{{ name }}</span>
    <div>
      <el-button @click="changeName">按钮</el-button>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: '更新之前',
    }
  },
  created() {
    this.$nextTick(() => {
      console.log(this.$refs.spanRef.innerText)
    })
  },
  methods: {
    changeName() {
      this.name = '更新之后的值被渲染'
      // setTimeout(() => {}, 0)
      this.$nextTick(() => {
        console.log(this.$refs.spanRef.innerText)
      })
    },
  },
}
</script>
 
<style scoped >
</style>