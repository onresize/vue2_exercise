<template>
  <div>
    <h2>孙组件</h2>
    <p>姓名：{{ $attrs.name1 }}</p>
    <p>年龄：{{ $attrs.age1 }}</p>
  </div>
</template>

<script>
export default {
  inject: ['age', 'fatherMethod'],
  data() {
    return {}
  },
  methods: {},
  created() {
    console.log('孙组件拿到祖组件的age:', this.age)
  },
  mounted() {
    console.log('-------2------孙组件调用祖组件的fatherMethod()方法')
    this.fatherMethod()
  },
}
</script>

<style scoped></style>
