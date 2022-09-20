<template>
  <div>
    <h2>
      测试component
      绑定is渲染成对应标签、v-bind绑定方法添加对应标签的属性
    </h2>
    <component
      :is="`img`"
      v-bind="
        goToWhere(
          'https://developer.apple.com/home/images/tile-watchos-9/watchos-9-large.png'
        )
      "
    >
      www.baidu.com
    </component>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goToWhere(path) {
      return {
        src: path,
        alt: 'xxx'
        // href: path,
        // target: "_blank",
      }
    }
  }
}
</script>

<style scoped></style>
