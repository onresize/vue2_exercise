<template>
  <div>
    <h2>孙组件</h2>
    <p>姓名：{{ $attrs.name1 }}</p>
    <p>年龄：{{ $attrs.age1 }}</p>
    <h3>
      修改父组件age、name值、验证provide不同写法是否具有响应式问题(父组件中provide下name写法具有响应式)：
      <mark>{{ 'age:' + age + ', name:' + name() }}</mark>
    </h3>
  </div>
</template>

<script>
export default {
  inject: ['age', 'name', 'fatherMethod1'],
  data() {
    return {}
  },
  methods: {},
  created() {
    console.log('孙组件拿到祖组件的age:', this.age)
  },
  mounted() {
    console.log('-------2------孙组件调用祖组件的fatherMethod()方法')
    this.fatherMethod1()
  },
}
</script>

<style scoped></style>
