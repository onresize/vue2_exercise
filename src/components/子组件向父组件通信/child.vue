<template>
  <div>
    <h2>子组件：拿到父组件的props---{{ title }}</h2>
    <el-button @click="emitToFather">事件方式emitToFather</el-button>
    <el-button @click="emitToFatherCallBack"
      >回调方式emitToFather</el-button
    >
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    default: 'fatherTitle',
  },
  data() {
    return {}
  },
  computed: {
    myTitle() {
      return this.title
    },
  },
  methods: {
    emitToFather() {
      this.$emit('childEmit', 123)
    },
    emitToFatherCallBack() {
      this.$emit('childEmitCallBack', 99)
    },
  },
  watch: {
    // watch不能直接监听到props的值、解决办法：监听computed的值
    myTitle: {
      handler(val) {
        console.log('watch监听computed的值title', val)
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    console.log('created中访问props:', this.title)
  },
  mounted() {
    console.log('created中访问props:', this.title)
  },
}
</script>

<style scoped></style>
