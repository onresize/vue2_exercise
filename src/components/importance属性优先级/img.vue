<template>
 <div>
   <h2>importance="" high、low属性分别设置 图片 或 script 加载优先级</h2>
   <img src="@/img/Windows (11).jpg" alt="1" class="img" importance="high">
   <img src="@/img/Windows (11).jpg" alt="2" class="img" importance="low">
   <img src="@/img/Windows (11).jpg" alt="3" class="img" importance="low">
 </div>
</template>
 
<script>
export default {
  data () {
    return {}
  },
  watch: {},
  computed: {},
  created() {},
  methods: {},
}
</script>
 
<style scoped >
 .img {
   width: 320px;
   height: 180px
 }
</style>