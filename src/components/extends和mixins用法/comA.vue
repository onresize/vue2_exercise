<template>
  <div>
    <el-button @click="changComA">comA</el-button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      num: 992,
    }
  },
  computed: {},
  methods: {
    getNum() {
      console.log('调用ComA组件的getNum()方法', this.num)
    },
    changComA() {
      alert('test')
    }
  },
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped >
</style>