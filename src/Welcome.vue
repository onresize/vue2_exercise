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
    <ul class="ul_box">
      <li
        v-for="(item, i) in cursorList"
        :key="i"
        :style="{ cursor: item.cursor }"
      >
        {{ item.cursor }}
      </li>
    </ul>

    <myH1FuncCom :title="'父组件单向绑定的值'"></myH1FuncCom>
    <myH2FuncCom></myH2FuncCom>

    <el-button
      type="primary"
      @click="
        () => {
          this.$router.push('/myScreen')
        }
      "
    >
      跳转大屏
    </el-button>
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
      cursorList: [
        { cursor: 'auto' },
        { cursor: 'pointer' },
        { cursor: 'grab' },
        { cursor: 'grabbing' },
        { cursor: 'help' },
        { cursor: 'move' },
        { cursor: 'text' },
        { cursor: 'crosshair' },
        { cursor: 'progress' },
        { cursor: 'wait' },
        { cursor: 'no-drop' },
        { cursor: 'not-allowed' },
        { cursor: 'zoom-in' },
        { cursor: 'zoom-out' },
        { cursor: 'ne-resize' },
        { cursor: 'ns-resize' },
        { cursor: 'nw-resize' },
      ],
    }
  },
  components: {
    myH1FuncCom: () => import('@/myCom/hFuncCom/h1.js'),
    myH2FuncCom: () => import('@/myCom/hFuncCom/h2.js'),
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

<style scoped lang="less">
.textarea {
  margin-top: 20px;
}

.ul_box {
  width: 100%;
  height: auto;
  border: 1px solid lighten(gray, 30%);
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  resize: both;
  overflow: hidden;
  li {
    color: #fff;
    width: 90px;
    height: 50px;
    border-radius: 6px;
    list-style: none;
    line-height: 50px;
    text-align: center;
    background: goldenrod;
    border: 3px solid #fff;
  }
}
</style>
