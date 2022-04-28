<template>
  <div>
    <h2>扁平数据递归转成树状结构数据</h2>
    <el-card style="width: 300px"> {{ arrList }} </el-card>
    <el-button @click="toTreeList"> 转成树结构 </el-button>
    <el-card style="width: 300px"> {{ treeList }} </el-card>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      list: [],
      treeList: [],
    }
  },
  computed: {
    arrList() {
      return window.sessionStorage.getItem('arrList')
    },
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      let res = await fetch('/flat.json')
      let { data: arr } = await res.json()
      this.list = arr
      window.sessionStorage.setItem(
        'arrList',
        JSON.stringify(this.list)
      )
    },
    changeTree(list = this.list, id = null, arr = []) {
      let arrList = list
      for (let item of list) {
        if (item.parent == id) {
          arr.push(item)
        }
      }
      for (let i of arr) {
        i.children = []
        this.changeTree(arrList, i.id, i.children)
        if (i.children.length == 0) {
          delete i.children
        }
      }
      return arr
    },
    toTreeList() {
      this.treeList = this.changeTree()
      console.log(this.treeList)
    },
  },
}
</script>