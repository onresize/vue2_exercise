<template>
  <div>
    <h2>子组件1--{{ num1 }}</h2>
    <el-button @click="emitMethod">增加</el-button>
    <hr />
    <GrandChild1 v-bind="$attrs" />
    <!-- $listeners操作父组件中标签上的方法 -->
    <el-button @click="$listeners.changeMe"> $listeners操作父组件中标签上的方法修改父组件name1 和 age1值</el-button>
  </div>
</template>

<script>
export default {
  components: {
    GrandChild1: () => import('./grandchild1.vue'),
  },
  inject: ['name', 'fatherMethod'],
  data() {
    return {
      num1: 0,
      age: 18,
    }
  },
  created() {
    // console.log('子组拿到父组件的num:',this.$parent.num)
    console.log('子组件inject接收父组件nam：', this.name)
  },
  mounted() {
    console.log('-------1------子组件调用父组件的fatherMethod()方法')
    this.fatherMethod()()
  },
  methods: {
    emitMethod() {
      this.num1 += 1
      this.$bus.$emit('changeNum', this.num1)
    },
  },
  destroyed() {
    this.$bus.$off()
  },
}
</script>

<style scoped></style>
