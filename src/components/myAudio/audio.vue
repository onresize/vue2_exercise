<template>
  <div>
    <h2>提示音测试</h2>
    <audio src="./3761.mp3" ref="audioRef" controls hidden></audio>
    <el-button @click="GoPlay">播放</el-button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  methods: {
    GoPlay() {
      this.$refs['audioRef'].currentTime = 0  // 从头开始播放
      this.$refs['audioRef'].play()
    },
  },
}
</script>
 
<style scoped >
</style>