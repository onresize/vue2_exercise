<template>
  <div>
    <h2>
      自定义指令:
      <el-link
        href="https://juejin.cn/post/7121675903431606279#heading-2"
      >
        掘金参考</el-link
      >
    </h2>
    <h2>{{ name }}</h2>
    <input type="text" v-mymodel="name" />
  </div>
</template>

<script>
import Vue from 'vue'
Vue.directive('mymodel', {
  bind(el, binding, vnode, oldVnode) {
    //组件和原生input标签需要分别处理，
    el.value = binding.value
    if (vnode.tag == 'input') {
      //监听绑定的变量
      vnode.context.$watch(binding.expression, (v) => {
        el.value = v
      })
      //添加inout事件监听
      el.addEventListener('input', (e) => {
        //context是input所在的父组件，这一步是同步数据
        vnode.context[binding.expression] = e.target.value
      })
    } else {
      //组件
      //vnode的结构可以参见文档。不过我觉得最直观的方法就是直接在控制台打印处理
      let { componentInstance, componentOptions, context } = vnode
      const { _props } = componentInstance
      //处理model选项
      if (!componentOptions.Ctor.extendOptions.model) {
        componentOptions.Ctor.extendOptions.model = {
          value: 'value',
          event: 'input',
        }
      }
      let modelValue = componentOptions.Ctor.extendOptions.model.value
      let modelEvent = componentOptions.Ctor.extendOptions.model.event
      //属性绑定，这里直接修改了属性，没有想到更好的办法，友好的意见希望可以提出
      console.log(binding)
      _props[modelValue] = binding.value
      context.$watch(binding.expression, (v) => {
        _props[modelValue] = v
      })
      //添加事件处理函数,做数据同步
      componentInstance.$on(modelEvent, (v) => {
        context[binding.expression] = v
      })
    }
  },
  // inserted() {},
  // update() {},
  // componentUpdated() {},
  // unbind() {},
})
export default {
  data() {
    return {
      name: 'zs',
    }
  },
  watch: {},
  computed: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style scoped></style>
