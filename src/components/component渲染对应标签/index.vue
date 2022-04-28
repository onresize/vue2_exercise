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
          'https://gitee.com/typora-picture/typoraimges/raw/master/empty.webp'
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
  watch: {},
  computed: {},
  mounted() {},
  created() {},
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
