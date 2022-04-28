<template>
  <div>
    <h2>按需引入element、全局引入antd、 $confirm, $message冲突测试</h2>
    <el-button @click="msgClick">$msg测试</el-button>
    <el-button @click="messageClick">antd按钮测试$message</el-button>
    <el-button @click="confirm">$confirm测试</el-button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {},
  methods: {
    msgClick() {
      this.$message.info('antd按钮测试')
    },
    messageClick() {
      this.$msgbox.info('antd成功按钮')
    },
    confirm() {
      this.$msg.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$msgbox({
            type: 'success',
            message: '删除成功!',
          })
        })
        .catch(() => {
          this.$msgbox({
            type: 'info',
            message: '已取消删除',
          })
        })



      // this.$confirm({
      //   title: 'Are you sure delete this task?',
      //   content: 'Some descriptions',
      //   okText: 'Yes',
      //   okType: 'danger',
      //   cancelText: 'No',
      //   onOk() {
      //     console.log('OK')
      //   },
      //   onCancel() {
      //     console.log('Cancel')
      //   },
      // })
    },
  },
}
</script>
 
<style scoped >
</style>