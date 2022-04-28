<template>
  <div>
    <h2>富文本插件</h2>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    >
    </quill-editor>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      // 富文本编辑器默认内容
      content: '',
      //富文本编辑器配置
      editorOption: {
        // Some Quill options...
      },
    }
  },
  watch: {},
  computed: {},
  mounted() {},
  created() {},
  methods: {
    //失去焦点事件
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    //获得焦点事件
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    // 准备富文本编辑器
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    //内容改变事件
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
  },
}
</script>
 
<style scoped >
</style>