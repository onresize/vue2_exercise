<template>
  <div>
    <h2>发布npm包组件引用测试</h2>
    <!-- <slideRangLt
      status="status"
      :successFun="jcRes"
      :errorFun="jcRej"
      style="margin: 10px; width: 300px"
    /> -->
    <vue-scratch-card
      element-id="scratchWrap"
      :ratio="0.5"
      :move-radius="30"
      :start-callback="startCallback"
      :clear-callback="clearCallback"
      cover-color="#caa"
      class="scratch"
    />
  </div>
</template>

<script>
import Vue from 'vue'

// import slideRangeLt from 'slide-rang-lt'
// import '/node_modules/slide-rang-lt/slide-rang-lt.css'
// Vue.use(slideRangeLt)

import ScratchCard from 'vue-scratch-card0'
Vue.use(ScratchCard)

export default {
  methods: {
    startCallback() {
      console.log('抽奖成功！')
    },
    clearCallback() {
      console.log('清除完毕！')
    },
    jcRes() {
      this.$message.success('操作成功')
    },
    jcRej() {
      this.$message.warning('请拖拽到尾部')
    },
  },
}
</script>

<style scoped>
.scratch {
  width: 300px;
  height: 180px;
  position: absolute;
  left: 300px;
}
</style>
