<template>
  <div>
    <h2>孙组件</h2>
    <p>姓名：{{ $attrs.name1 }}</p>
    <p>年龄：{{ $attrs.age1 }}</p>
  </div>
</template>

<script>
export default {
  inject: ['age'],
  data() {
    return {}
  },
  created() {
    console.log('孙组件拿到祖组件的age:', this.age)
  },
  methods: {},
}
</script>

<style scoped></style>
