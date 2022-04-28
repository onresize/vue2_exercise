<template>
  <div>
    <h2>Object.freeze()优化非响应式的死数据、节约性能</h2>
    <el-select v-model="queryParams.nation" clearable>
      <el-option v-for="item in nationalList" :key="item.id" :label="item.name" :value="item.name" />
    </el-select>
  </div>
</template>
 
<script>
import national from '@/assets/json/national.json'

export default {
  data() {
    // this.nationalList = national // 民族json、这种写法和下面data中的写法效果是一样的、优化非响应式的死数据、节约性能
    return {
      nationalList: Object.freeze(national),
      queryParams: { a: 1, b: 2 },
    }
  },
  created() {
    // 删除对象某个属性
    this.$delete(this.queryParams, 'a')
    setTimeout(() => {
      console.log(this.queryParams)
    })
  },
}
</script>
 
