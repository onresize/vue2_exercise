<template>
  <div>
    <h2>
      子组件向父组件通信的两种方式：触发事件($emit)、回调($emit、$on)
      类似<u>$bus.$emit、$bus.$on</u
      ><el-tag color="yellow" v-show="e">{{ e }}</el-tag>
      <el-tag color="pink" v-show="x">{{ x }}</el-tag>
    </h2>
    <hr />
    <child @childEmit="childEmit" :title="title" ref="onRef"></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  components: { child },
  data() {
    return {
      e: null,
      x: null,
      title: '这是父组件的参数',
    }
  },
  mounted() {
    this.$refs.onRef.$on('childEmitCallBack', this.childEmitCallBack)
  },
  methods: {
    childEmit(e) {
      console.log('触发事件方式拿到子组件参数', e)
      this.e = e
    },
    childEmitCallBack(e) {
      console.log('回调方式拿到子组件参数', e)
      this.x = e
    },
  },
}
</script>

<style scoped></style>
