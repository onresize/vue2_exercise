<template>
  <div>
    <h2>父组件--{{ num }}</h2>
    <p>姓名：{{ name1 }}</p>
    <p>年龄：{{ age1 }}</p>
    <el-button @click="getChild">改变</el-button>
    <hr />
    <Child1 :name1="name1" :age1="age1" @changeMe="clickMe"></Child1>
    <hr />
    <Child2></Child2>
    <el-link href="https://blog.csdn.net/baiqiangdoudou/article/details/128302601" target="_bank">知识点参考：</el-link>
  </div>
</template>

<script>
export default {
  components: {
    Child1: () => import('./child1.vue'),
    Child2: (resolve) => {
      require(['./child2.vue'], resolve)
    },
  },
  provide() {
    return {
      // name: this.name1, // 这样写改变name1值后、子孙组件拿到name值不具有响应式、推荐使用下面写法
      name: () => this.name1,
      age: this.age1,
      fatherMethod: () => this.fatherMethod, // 具有响应式
      fatherMethod1: this.fatherMethod1,
    }
  },
  data() {
    return {
      num: 0,
      name1: '李四',
      age1: 20,
    }
  },
  async created() {
    await this.$nextTick()
    // console.log('父组件拿到子组件的参数：', this.$children)
  },
  mounted() {
    this.$bus.$on('changeNum', (e) => {
      console.log('父组件', e)
      this.num = e
    })
  },
  methods: {
    getChild() {
      this.num = this.$children[1].age
    },
    clickMe() {
      this.name1 = '老六'
      this.age1 = 21
    },
    fatherMethod() {
      console.log('***这是父组件中定义的fatherMethod方法***')
    },
    fatherMethod1() {
      console.log('***这是父组件中定义的fatherMethod111111方法***')
    },
  },
}
</script>

<style scoped></style>
