<template>
  <div>
    <h2>indexedDB第三方库dexie基础使用</h2>
    <div>
      <div>
        <label for="name">姓名：</label>
        <input type="text" v-model="name" placeholder="请输入姓名" />
        &nbsp;<label for="name">年龄：</label>
        <input type="text" v-model="age" placeholder="请输入年龄" />
        &nbsp;<button @click="addPerson">添加</button>
      </div>
    </div>
    <hr />
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="item in dataList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>
            <button>删除</button>
            <button>修改</button>
          </td>
        </tr> -->
      </tbody>
    </table>
    <hr />
    <div>
      <input type="text" name="" id="" />
      <button>查询</button>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>年龄</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="item in dataList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>
 
<script>
import db from '@/indexedDB/dexie'
export default {
  data() {
    return {
      name: '',
      age: '',
    }
  },
  methods: {
    // 添加
    async addPerson() {
      db.open()
      await db.person.add({ name: this.name, age: this.age })
      this.name = null
      this.age = null
    },
    del() {
      db.person.delete(15)
    }
  },
  created() {
    this.del()
  },
}
</script>
 
<style scoped >
</style>