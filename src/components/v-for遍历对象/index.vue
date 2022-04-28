<template>
  <div>
    <h2>
      v-for遍历对象、v-for="(val, key, index) in List------
      (val是键值、key是键、index是索引)"
    </h2>
    <el-select v-model="value">
      <el-option
        v-for="(val, key, index) in List"
        :key="index"
        :label="List[key]"
        :value="val"
      />
    </el-select>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value: null,
      List: {
        0: 101,
        1: 102,
        2: 103,
      },
    }
  },
  created() {},
  methods: {},
}
</script>
 
<style scoped >
</style>