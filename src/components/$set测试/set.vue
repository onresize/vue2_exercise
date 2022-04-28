<template>
  <div>
    <h2>测试this.$set(obj, key, val)方法、更新对象数据同时更新视图</h2>
    <el-date-picker
      v-model="date.value"
      align="right"
      type="datetime"
      placeholder="选择日期"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <el-button @click="yesToday">前天</el-button>
    <el-button @click="weekToday">两周前</el-button>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            },
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            },
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            },
          },
        ],
      },
      date: {
        value: '',
      },
    }
  },
  created() {},
  methods: {
    // 时间戳 转 日期 方法、参数为时间戳
    newDate(date) {
      var now = new Date(date)
      var year = now.getFullYear()
      var month = now.getMonth()
      var date = now.getDate()
      var hour = now.getHours()
      var minute = now.getMinutes()
      var second = now.getSeconds()
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      second = second.toString().padStart(2, '0')
      return `${year}-${month}-${date} ${hour}:${minute}:${second}`
    },
    yesToday() {
      let date1 = new Date().getTime() - 1000 * 3600 * 48
      let res = this.newDate(date1)
      this.$set(this.date, 'value', res)
    },
    weekToday() {
      let date1 = new Date().getTime() - 1000 * 3600 * 24 * 14
      let res = this.newDate(date1)
      this.$set(this.date, 'value', res)
    },
  },
}
</script>
 
<style scoped >
</style>