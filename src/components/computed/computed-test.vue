<template>
  <div id="demo">
    <h2>computed计算属性</h2>
    姓: <input type="text" placeholder="FirstName" v-model="firstName" /><br />
    名: <input type="text" placeholder="LastName" v-model="lastName" /><br />
    姓名3(双向):
    <input type="text" placeholder="Full Name3" v-model="fullName3" /><br />
  </div>
</template>
		 
<script type="text/javascript">
export default {
  data() {
    return {
      firstName: '张',
      lastName: '三丰',
    }
  },
  computed: {
    fullName3: {

      //需要读取当前属性值时进行回调, 作用: 根据相关的数据计算返回当前属性
      get() {
        return this.firstName + '-' + this.lastName
      },

      //当数据发生改变时调用   作用:监听 当数据发生改变时,将相应属性的数据进行更新
      set(newVal) {
        //newVal指的是属性fullName3的最新值
        console.log(newVal)
        const names = newVal.split('-')
        console.log(names)
        this.firstName = names[0]
        this.lastName = names[1]
      },
    },
  },
}
</script>

