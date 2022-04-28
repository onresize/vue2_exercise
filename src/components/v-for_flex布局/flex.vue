<template>
  <div>
    <h2 style="width: 100%; text-align: center;">flex、j-c、a-c布局搭配v-for遍历时，实现横轴均匀排列、 要把v-for写在需要被遍历的每一项的dom上、而不是写在他设置flex布局标签上</h2>
    <div class="flex a-c j-c">
      <div v-for="(item, i) in list" :key="i" class="div-item">{{ item + `${i + 1}` }}项</div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      list: ['这是第', '这是第', '这是第', '这是第', '这是第', '这是第', '这是第', '这是第', '这是第'],
    }
  },
  created() {},
  methods: {},
}
</script>
 
<style scoped >
.flex {
  display: flex;
  width: 100%;
  height: 100%;
}
.a-c {
  align-items: center;
}
.j-c {
  justify-content: center;
}
.div-item {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #66cccc;
  text-align: center;
  margin: 5px;
}
</style>