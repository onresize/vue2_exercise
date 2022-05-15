<template>
  <div>
    <!-- TODO -->
    <h2>引号包裹数组转正在的数组并遍历dom结构</h2>
    <h3>
      <b>
        substr 和 subString 和 eval 去除字符串引号 let str = 'absdg';
      </b>
      <div>
        substr第二个参数表示截取区间长度： console.log(str.substr(0,
        str.length)) // absdg
      </div>
      <div>
        substring第二个参数表示截取到该位置的索引
        console.log(str.substring(1, str.length - 1)) // absdg
      </div>
      <div>eval()包裹字符串返回的值就是去除引号的值</div>
    </h3>
    <div style="display: flex">
      <div class="box" v-for="(item, i) in str" :key="i">
        {{ str }}
      </div>
    </div>
    <h2>得出结论： 引号包裹数组变成数组模样 无法正常在v-for上遍历</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "[{name: '张三']",
      str1: "[{name: '张三1',age: 18},{name: '王杰1',age: 20}]",
    }
  },
  watch: {
    str: {
      handler(val) {
        console.log(val.substr(0, val.length))
      },
      deep: true,
      immediate: true,
    },
    str1(val) {
      // eval去除引号
      return eval(val)
    },
  },
  mounted() {
    console.log(this.str1)
  },
  methods: {},
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: pink;
  margin: 4px;
}
</style>
