<template>
 <div>
     <el-card>
      <el-button @click="dragvisible=true">拖拽a-modal</el-button>
      <drag-modal centered :width="600" title="拖拽测试" :visible="dragvisible" @cancel="dragvisible=false">内容</drag-modal>
     </el-card>
 </div>
</template>
 
<script>
export default {
    data () {
        return {
            dragvisible: false
        }
    },
    watch: {},
    computed: {},
    created() {},
    methods: {},
}
</script>
 
<style scoped >
 /* 设置a-modal弹出框去除两条横线 */
::v-deep .ant-modal-content .ant-modal-header {
  border-bottom: none !important;
}

::v-deep .ant-modal-content .ant-modal-footer {
  border-top: none !important;
}

</style>