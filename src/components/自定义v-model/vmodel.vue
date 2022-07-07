<template>
  <div>
    <h2 class="top_h2">
      v2中实现双向绑定有两种方式：一个是.sync修饰符、一个是v-model、区别在于在一个标签或组件上、.sync可以使用多次、而v-model只能使用一次
      <span class="span_bgc">
        （应用场景：v2中单个双向绑定用v-model、多个双向绑定用.sync修饰符）
      </span>
      多个双向绑定对标v3中v-model:title这种写法（v3中将v2两种双向绑定方式整合成一种）
    </h2>
    <pre class="bgc_f5 noSelect" style="position: relative">
      <div>
        <div style="cursor: pointer; position: absolute;right: 15px;top: 15px;"  v-clipboard:copy="copyMsg"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">复制</div>
        &lt;sync-input
        :value1.sync="value1"
        :value2.sync="value2" /><span class="color_red">
          相当于</span
        >
        &lt;sync-input
        :value1="value1"
        @update:value1="value1 = $event" 
        :value2="value2"
        @update:value2="value2 = $event" />
      </div>
      <span style="color: green;">
          换一种写法如下：</span
        >
      <div>
        &lt;sync-input v-model="value1"/><span class="color_red">
          相当于</span
        >
         &lt;sync-input :value1.sync="value1" /><span class="color_red">
          相当于</span
        >
        &lt;sync-input
        :value1="value1"
        @update:value1="value1 = $event"  />
      </div>
    </pre>
    <el-link
      href="https://blog.csdn.net/Dobility/article/details/110147985"
      target="_blank"
      >.sync参考1：</el-link
    >
    <el-link
      href="https://www.cnblogs.com/wuqilang/p/14874774.html"
      target="_blank"
      >.sync参考2：</el-link
    >
    <h2>
      自定义组件上 实现v-model =>
      <span class="h2_span">{{ value1 }}</span>
    </h2>
    <custom-input
      :value1="value1"
      @input1="parentInputHandle"
    ></custom-input>
    <!-- 下面两行代码是效果一样 -->
    <sync-input :value1.sync="value1" />
    <sync-input :value1="value1" @update:value1="parentInputHandle" />
  </div>
</template>

<script>
import customInput from './child.vue'
import syncInput from './child1.vue'
export default {
  components: { customInput, syncInput },
  data: () => ({
    copyMsg: '测试复制的内容',
    value1: '11',
  }),
  methods: {
    parentInputHandle(val) {
      console.log(val)
      this.value1 = val
    },
    onCopy() {
      this.$message.success('复制成功')
    },
    onError() {
      this.$message.console.error('复制失败')
    },
  },
}
</script>

<style scoped>
.h2_span {
  background-color: pink;
}
.noSelect {
  user-select: none;  /* 设置不可选中文字 */
}
</style>
