<template>
  <div>
    <h2>emjo表情</h2>
    <!--input输入框-->
    <el-input v-model="inputVal" placeholder="请输入" id="input" class="input" />
    <!--表情包弹出组件-->
    <el-popover placement="bottom" width="300" trigger="click">
      <!--表情包内部结构-->
      <el-tabs  tab-position="left" @tab-click="tabClick">
        <!--循环表情包的类型-->
        <el-tab-pane :label="item.name" v-for="(item, index) in faceList" :key="index">
          <div class="img-div">
            <!--循环表情类型的每一个表情包-->
            <p
              class="emoji"
              v-for="(item1, index1) in faceList[tabIndex].iconArr"
              :key="index1"
              @click="clickEmoji(item1.icon)"
            >
              {{ item1.icon }}
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-button slot="reference" icon="el-icon-picture-outline-round"></el-button>
    </el-popover>
  </div>
</template>
 
<script>
import { emojiArr } from './emjo'
export default {
  data() {
    return {
      faceList: emojiArr, //引入的表情包数组
      tabIndex: 0, //表情包的类型索引
      inputVal: '', // 输入框内的值
    }
  },
  created() {},
  methods: {
    // 点击表情包
    clickEmoji(val) {
      this.inputVal += val
      console.log(val)
    },
    // 点击标签页
    tabClick(tab) {
      this.tabIndex = tab.index - 0
    },
  },
}
</script>
 
<style scoped >
.input {
  width: 200px;
}
.img-div {
  width: 200px;
}
.emoji {
  float: left;
  font-size: 20px;
  cursor: pointer;
}
</style>