<template>
  <div>
    <el-table
      stripe
      ref="tableDom"
      :data="tableData"
      height="50vh"
      style="width: 600px; height: 350px; margin-bottom: 20px"
      :header-cell-style="{
        'text-align': 'center',
        background: '#f2f2f2',
        color: '#012f55',
      }"
      :cell-style="{ 'text-align': 'center' }"
      @selection-change="handleSelectionChange"
      @row-click="toggleSelection"
    >
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="address" label="操作">
        <el-button size="small" type="primary">编辑</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-size="queryInfo.pagesize"
      :page-sizes="[5, 10, 15, 20]"
      layout="prev, pager, next, total, jumper, sizes"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      total: 0,
      queryInfo: {
        pagenum: 1,
        pagesize: 10,
      },
      tableData: [
        {
          date1: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date1: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
    }
  },
  created() {},
  methods: {
    // 复选框被选中触发
    handleSelectionChange(val) {
      console.log('选中的当前行数组值', val)
    },
    // 点击表格当前行触发勾选复选框
    toggleSelection(row) {
      this.$refs.tableDom.toggleRowSelection(row)
    },
    handleSizeChange(newSize) {},
    handleCurrentChange(newPage) {},
  },
}
</script>
 
<style scoped lang="less">
// 设置滚动条的宽度
::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  width: 8px;
}
// 设置滚动条的背景色和圆角
::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #aaabaf;
  border-radius: 5px;
}

//改变表格滚动条顶部区域颜色,看起来嵌套在表格内部
::v-deep .el-table th.el-table__cell {
  background: #f2f2f2;
}
</style>