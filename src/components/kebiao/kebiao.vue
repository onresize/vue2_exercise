<template>
  <div>
    <SchedulingTable
      @add="addClick"
      @remove="remove"
      @edit="showEditCourseModal"
      v-model="datasource"
    />
    <el-dialog :visible.sync="open" width="250">
      <el-input v-model="form.val"></el-input>
      <el-time-picker
        is-range
        v-model="form.timeVal"
        value-format="HH:m"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      >
      </el-time-picker>
      <span slot="footer" class="dialog-footer">
        <el-button @click="open = false">取 消</el-button>
        <el-button type="primary" @click="submitClick">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
 
<script>
import SchedulingTable from './SchedulingTable.vue'
export default {
  components: { SchedulingTable },
  data() {
    return {
      form: {
        val: null,
        timeVal: null,
      },
      open: false,
      datasource: [
        {
          name: '语文',
          day: 2,
          start: [9, 30],
          end: [10, 15],
        },
      ],
    }
  },
  created() {},
  methods: {
    // 编辑
    showEditCourseModal() {},
    // 移除
    remove() {},
    addClick(row, i) {
      this.open = true
      console.log(row, i)
    },
    submitClick() {
      console.log(this.form)
      this.open = false
      //  this.datasource.push({
      //   name: this.form.val,
      //   day: 1,
      //   start: [this.form.timeVal[0][2], this.form.timeVal[0][2]],
      //   end: [this.form.timeVal[1][2], this.form.timeVal[1][2]],
      // })
    },
  },
}
</script>
 
<style scoped >
</style>