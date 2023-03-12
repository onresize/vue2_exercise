<template>
  <div>
    <h2>实现charts拖拽布局</h2>
    <a href="https://blog.csdn.net/fhw10204130/article/details/112010077">参考：</a>
    <h2>当前组件做了缓存、所以组件并不会被销毁、组件重新切换的时候不会执行created等生命周期</h2>
    <h2>
     <el-tag color="yellow"> 解决方法：</el-tag>
     <mark>
      使用activated(激活调用) 和 deactivated(组件停用调用)来获取当前组件状态、
      <br>缓存会消耗大量内存、谨慎使用</mark>
    </h2>
  </div>
</template>
 
<script>
export default {
  name: 'dragCharts',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  created() {
     console.log('执行当前组件的-------created')
  },
  mounted() {
     console.log('执行当前组件的-------mounted')
  },
    beforeDestroy() {
    console.log('执行当前组件的-------beforeDestroy')
  },
  activated() {
    console.log('执行当前组件的-------activated')
  },
  deactivated() {
    console.log('执行当前组件的-------deactivated')
  },
}
</script>
 
<style scoped >
</style>