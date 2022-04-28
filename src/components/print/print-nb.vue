<template>
  <div>
    <h2>测试v-print-nb打印插件</h2>

    <div id="printMe">
      <el-table :data="tableData" border style="width: 80%; border: 1px solid black;">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
    <br>
    <button v-print="'#printMe'">v-print-nb打印</button>&nbsp;
    <button @click="print">avue打印</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  watch: {},
  computed: {},
  created() {},
  methods: {
    print() {
      console.log('11')
      this.$Print('#printMe')
    },
  },
}
</script>
 
<style scoped >
</style>