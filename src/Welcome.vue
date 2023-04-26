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
      v-model="sayingText"
      resize="none"
      readOnly
    >
    </el-input>
    <el-input
      class="textarea"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 5 }"
      v-model="wenAnMenText"
      resize="none"
      readOnly
    >
    </el-input>
    <el-input
      class="textarea"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 5 }"
      v-model="iKunText"
      resize="none"
      readOnly
    >
    </el-input>

  </div>
</template>
 
<script>
import {
  getSpeed,
  getKnownSaying,
  getWenAnMen,
  getIKun,
} from '@/api/api.js'
import axios from 'axios'

export default {
  data() {
    return {
      val: '',
      text: '',
      hrefUrl: '',
      sayingText: '',
      wenAnMenText: '',
      iKunText: '',
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
    async WenAnMen() {
      const [err, data] = await getWenAnMen(
        'https://w.wenanmen.com/api/admin/common/func',
        {
          url: 'wenan/rank',
          data: {},
        }
      )
      if (data) {
        this.wenAnMenText = data.data.data.word
      } else {
        this.$message.error('出错啦')
      }
    },
    async iKun() {
      const [err, data] = await getIKun('https://v1.hitokoto.cn', {
        c: 'a',
        c: 'b',
        c: 'c',
        c: 'd',
      })
      if (data) {
        this.iKunText = data.data.hitokoto
      } else {
        this.$message.error('出错啦')
      }
    },
    close() {
      this.hrefUrl = ''
    },
  },
  created() {
    this.getSaying()
    this.WenAnMen()
    this.iKun()
  },
}
</script>
 
<style scoped >
.textarea {
  margin-top: 20px;
}
</style>