<template>
  <div>
    <h2>测试excel导出</h2>
    <a href="https://blog.csdn.net/qq_42313028/article/details/103069876">参考链接：</a>
    <el-button type="primary">
        <!-- files：表头名称  data：导出的数据-->
      <download-excel :files="titleData" :data="tabledData"> vue-json-excel插件导出 </download-excel> 
    </el-button>

    <hr >
    <el-table
    style="width: 700px;"
     :header-cell-style="{ 'text-align': 'center' }"
     :cell-style="{ 'text-align': 'center' }"
     :data="tabledData"
     border
    >
        <el-table-column label="序号" prop="type"></el-table-column>
        <el-table-column label="姓名" prop="userName"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="注册时间" prop="createTime"></el-table-column>
    </el-table>
  </div>
</template>
 
<script>
// 这里三行也可以在 main.js全局挂载
import Vue from 'vue'
import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)
export default {
  data() {
    return {
      titleData: {
        '序号': 'type',
        '姓名': 'userName',
        '年龄': 'age',
        '手机号': 'phone',
        '注册时间': 'createTime',
      },
      tabledData: [
        {"type": '', "userName": "张三", age: 18, "phone": 15612345612, "createTime": "2019-10-22"},
        {"type": '', "userName": "李四", age: 17, "phone": 15612345613, "createTime": "2019-10-23"},
        {"type": '', "userName": "王五", age: 19, "phone": 15612345615, "createTime": "2019-10-25"},
        {"type": '', "userName": "赵六", age: 18, "phone": 15612345618, "createTime": "2019-10-15"}, 
      ],
    }
  },
  created() {
      for (let i in this.tabledData) {
          this.tabledData[i].type = parseInt(i) + 1
      }
  },
  methods: {},
}
</script>
 
<style scoped >
</style>