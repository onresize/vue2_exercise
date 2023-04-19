<template>
  <div>
    <h2>父组件--{{ num }}</h2>
    <p>姓名：{{ name1 }}</p>
    <p>年龄：{{ age1 }}</p>
    <el-button @click="getChild">改变</el-button>
    <Child1 :name1="name1" :age1="age1" @changeMe="clickMe"></Child1>
    <Child2></Child2>
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
      name: '张三',
      age: 19,
      fatherMethod: this.fatherMethod,
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
    },
    fatherMethod() {
      console.log('***这是父组件中定义的方法***')
    },
  },
}
</script>

<style scoped></style>
