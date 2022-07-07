<template>
  <div>
    <h1>v-model 只是同时完成 数据的绑定 和 事件的监听 而已</h1>
    <h2>
      探究vue2中组件上使用v-model双向绑定、使用model: {prop:'checked',
      event: 'change'}自定义
    </h2>
    <h2>注：(v2组件上只能写一个v-model、v3可以写多个)</h2>
    <code style="font-size:16px;font-weight:bold">对于&lt;input>、&lt;textarea> 、&lt;select>标签来说、属性和事件不一定是value和input、因此，Vue 为它们做了单独的适配：</code>
    <div
      style="background: pink; width:fit-content;border-radius:10px;padding:5px;font-size:16px;font-weight:bold"
    >
      <p>text 和 textarea 元素使用 value 属性和 input 事件；</p>
      <p>checkbox 和 radio 使用 checked 属性和 change 事件；</p>
      <p>select 字段将 value 作为 prop 并将 change 作为事件。</p>
    </div>
    <code style="font-size:16px;font-weight:bold">但对于除这些标签以外的其他标签，Vue默认会绑定 value 属性 和 监听 input事件。</code>
    <h2>
      <el-link
        href="https://www.cnblogs.com/wuqilang/p/14874774.html"
        target="_blank"
        >https://www.cnblogs.com/wuqilang/p/14874774.html</el-link
      >
    </h2>
    <h2>
      <el-link
        href="https://blog.csdn.net/MiHu001/article/details/120815745"
        target="_blank"
        >https://blog.csdn.net/MiHu001/article/details/120815745</el-link
      >
    </h2>
    <h2>
      <el-link
        href="https://blog.csdn.net/Dobility/article/details/110147985"
        target="_blank"
        >https://blog.csdn.net/Dobility/article/details/110147985</el-link
      >
    </h2>
    <h2>父组件：{{ checked }} {{ query }}</h2>
    <hr />
    <!-- 下面这两行代码写法都是一样的效果 -->
    <myCheckout v-model="checked" />
    <myCheckout
      :checked="checked"
      @change1="
        (e) => {
          checked = e
        }
      "
    ></myCheckout>

    <myInput v-model="query" @change="parentChange"></myInput>
  </div>
</template>

<script>
import myCheckout from './child.vue'
import myInput from './input.vue'
export default {
  components: { myCheckout, myInput },
  data() {
    return {
      checked: false,
      query: '',
    }
  },
  methods: {
    parentChange(e) {
      console.log('父组件引入子组件input框改变了---', e)
      this.query = e
    },
  },
}
</script>

<style scoped></style>
