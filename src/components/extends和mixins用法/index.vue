<template>
  <div>
    <div>
      <h2>
        extends(继承、可用于组件封装)和mixins(混入、减少相同代码)、两者功能类似
      </h2>
      <h3 style="text-decoration: underline">
        <p>extends只能接收一个对象、接收不多不会执行</p>
        <p>mixins可接收多个对象</p>
        <p>执行顺序：extends > mixins > 组件</p>
      </h3>
    </div>

    <el-card>
      <MyComA ref="myComARef" />

      <div class="flex_box">
        <h3>v-model绑定computed方法：</h3>
        <el-input
          class="ipt"
          placeholder="请输入数字"
          type="text"
          v-model="changeVal"
        />
      </div>
    </el-card>
  </div>
</template>
 
<script>
import ComA from './comA.vue'

let extends1 = {
  created() {
    console.log('extend1-----created') //extend比先输出mixin
  },
  data() {
    return {
      msg: 20,
    }
  },
  methods: {
    foo() {
      console.log('extend1 foo()' + this.msg++)
    },
  },
}
let mixins1 = {
  created() {
    console.log('mixins1-----created') //extend比先输出mixin
  },
  data() {
    return {
      msg: 30,
    }
  },
  methods: {
    foo() {
      console.log('mixins1 foo()' + this.msg++)
    },
  },
}

// 继承 comA组件
const MyComA = {
  extends: ComA,
  name: 'myExtendCom',
  data() {
    return {}
  },
}
export default {
  mixins: [mixins1],
  extends: extends1,
  components: { MyComA }, // 注册 comA组件
  data() {
    return {
      iptVal: '0',
    }
  },
  computed: {
    changeVal: {
      get() {
        return this.iptVal ? this.setStr(this.iptVal) : ''
      },
      set(val) {
        console.log('set：', val)
        if (val == '') {
          this.iptVal = ''
          return
        }
        this.iptVal = '$' + val
      },
    },
  },
  methods: {
    setStr(str) {
      let arr = str.split('')
      let arr1 = arr.filter((v) => v != '$')
      return '$' + arr1.join('')
    },
  },
  watch: {},
  created() {
    console.log('组件-----created')
  },
  mounted() {
    this.$refs['myComARef'].getNum()
  },
}
</script>
 
<style scoped lang="less">
p::selection {
  background: rgb(225, 145, 0);
  color: #fff;
}

.flex_box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 450px;
  height: 50px;
  h3 {
    margin-top: 15px;
  }
  .ipt {
    width: 200px;
    margin: 10px 0 0 0;
  }
}
</style>