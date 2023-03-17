<template>
  <div>
    <el-input
      v-model="val"
      clearable
      @close="close"
      placeholder="请输入文本"
    >
      <el-button slot="append" @click="textToSpeed">转语音</el-button>
    </el-input>
    <el-link :href="hrefUrl" target="_bank" v-if="hrefUrl"
      >语音链接</el-link
    >
    <el-input
      class="textarea"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 5 }"
      placeholder="请输入内容"
      v-model="sayingText"
    >
    </el-input>
  </div>
</template>
 
<script>
import { getSpeed, getKnownSaying } from '@/api/api.js'
export default {
  data() {
    return {
      val: '',
      text: '',
      hrefUrl: '',
      sayingText: '',
    }
  },
  methods: {
    async textToSpeed() {
      const [err, data] = await getSpeed({ text: this.val })
      if (data) {
        this.hrefUrl = data.data.data
      } else {
        this.$message.error('出错啦')
      }
    },
    async getSaying() {
      const [err, data] = await getKnownSaying()
      if (data) {
        this.sayingText = data.data.data
      } else {
        this.$message.error('出错啦')
      }
    },
    close() {
      this.hrefUrl = ''
    },
  },
  watch: {},
  created() {
    this.getSaying()
  },
  mounted() {},
}
</script>
 
<style scoped >
.textarea {
  margin-top: 20px;
}
</style>