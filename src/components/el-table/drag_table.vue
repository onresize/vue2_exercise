<template>
  <div>
    <el-card>
      <h2>sortablejs插件实现表格拖拽</h2>
      <el-table
        :cell-style="{ cursor: 'move' }"
        ref="dragTable"
        :data="tableList"
        row-key="id"
        border
        fit
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column align="center" label="ID" width="65" prop="id" />
        <el-table-column align="center" label="姓名" prop="name" width="95" />
      </el-table>
    </el-card>
  </div>
</template>
 
<script>
// npm install sortablejs --save
import Sortable from 'sortablejs'
export default {
  data() {
    return {
      tableList: [
        {
          id: 1,
          name: '张三1',
        },
        {
          id: 2,
          name: '张三2',
        },
        {
          id: 3,
          name: '张三3',
        },
        {
          id: 4,
          name: '张三4',
        },
        {
          id: 5,
          name: '张三5',
        },
      ],
      sortable: null,
      targetRow: null,
    }
  },
  // 监听拿到改变顺序后的表格数据值
  watch: {
    targetRow(val) {
      return console.log(this.tableList)
    },
  },
  mounted() {
    this.setSort()
  },
  methods: {
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        onEnd: ({ newIndex, oldIndex }) => {
          this.targetRow = this.tableList.splice(oldIndex, 1)[0]
          this.tableList.splice(newIndex, 0, this.targetRow)
        },
      })
    },
  },
}
</script>
<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #ccffff !important;
}
</style>