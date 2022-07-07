<template>
  <div class="absolute">
    <h2>
      windCss基本使用（第三方css库）:
      <el-link href="https://www.tailwindcss.cn" target="_blank"
        >https://www.tailwindcss.cn</el-link
      >
    </h2>

    <div
      class="h-1/2 w-1/2 border-solid border-4 border-light-blue-500"
    >
      <img
        class="float-right ..."
        src="https://www.tailwindcss.cn/img/placeholder-emerald.svg"
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi
        euismod mollis ultrices condimentum velit. Proin velit libero,
        interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque
        ac luctus turpis, vel efficitur ante. Cras convallis risus vel
        vehicula dapibus. Donec eget neque fringilla, faucibus mi
        quis, porttitor magna. Cras pellentesque leo est, et luctus
        neque rutrum eu. Aliquam consequat velit sed sem posuere,
        vitae sollicitudin mi consequat. Mauris eget ipsum sed dui
        rutrum fringilla. Donec varius vehicula magna sit amet auctor.
        Ut congue vehicula lectus in blandit. Vivamus suscipit
        eleifend turpis, nec sodales sem vulputate a. Curabitur
        pulvinar libero viverra, efficitur odio eu, finibus justo.
        Etiam eu vehicula felis.
      </p>
    </div>
    <el-link
      href="https://blog.csdn.net/xubingnan123/article/details/78837498"
      >width: fit-content属性: 盒子正好等于内容宽度</el-link
    >
    <div class="dix_box">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style scoped>
/* 下面三行是windCss配置、写在这里是局部的、写全局会导致样式冲突、待解决 */
@tailwind base;
@tailwind components;
@tailwind utilities;

.dix_box {
  background-color: pink;
  /* fit-content属性、让div自适应英文字母长度（针对英文字母）、中文字体超过指定div宽度会自适应换行 */
  width: -webkit-fit-content;
  width: -moz-fit-content;
  margin: 10px 0;
}
</style>
