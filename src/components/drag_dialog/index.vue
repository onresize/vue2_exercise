<template>
  <div>
    <el-button type="primary" @click="visible = true">elementUI 拖拽弹窗测试 </el-button>
    <el-dialog width="500px" v-el-drag-dialog :visible.sync="visible" title="拖拽弹窗测试" @dragDialog="handleDrag">
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from './el-drag-dialog/index.js'

export default {
  name: 'DragDialogDemo',
  directives: { elDragDialog },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    // 拖动触发回调
    handleDrag() {},
  },
}
</script>
