<template>
  <div>
    <el-button @click="show" size="mini" type="warning" style="margin: 10px"
      >开启自定义弹窗</el-button
    >
    <div class="grid">
      <header class="skyblue" contenteditable>
        <h3>Header 煎饼布局</h3>
      </header>
      <main class="coral" contenteditable>
        <h3>Main</h3>
      </main>
      <footer class="pink" contenteditable>
        <h3>Footer</h3>
      </footer>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    show() {
      this.$showDialog.show('自定义标题', '自定义弹窗内容')
    },
  },
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped lang="less">
.grid {
  height: 80vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  .skyblue {
    background-color: skyblue;
  }
  .coral {
    background-color: coral;
  }
  .pink {
    background-color: pink;
  }
}
</style>