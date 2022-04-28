<template>
  <div>
    <h2>模拟el-tree结构测试</h2>
    <!-- <el-button @click="refreshTreeList">123</el-button> -->
    <div>
      <!--element的tree组件-->
      <el-tree ref="treeRef" node-key="id" :props="props" :load="loadNode" lazy> </el-tree>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      props: {
        label: 'name',
        // children: 'zones',
        // isLeaf: 'leaf',
      },
      // 这里模拟数据库
      company: [
        { id: '0', pid: '0', name: '腾讯', leaf: false },
        { id: '1', pid: '0', name: '天美游戏公司', leaf: true },
        { id: '2', pid: '0', name: '微信', leaf: false },
        { id: '3', pid: '2', name: '微信公众号', leaf: false },
        { id: '4', pid: '3', name: '微信小程序', leaf: true },
        // {
        //   areaName: '勐海镇',
        //   areaPlaceId: '532822101',
        //   parentId: '1448125016006533122',
        // },
        // {
        //   areaName: '打洛镇',
        //   areaPlaceId: '532822102',
        //   parentId: '1448125016006533122',
        // },
        // {
        //   areaName: "勐混镇",
        //   areaPlaceId: "532822103",
        //   parentId: "1448125016006533122",
        // }
      ],
    }
  },
  methods: {
    // 树节点进行点击，懒加载
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve(this.getRootCompany())
      }
      // 通过延时操作，模仿接口访问时间
      setTimeout(() => {
        const data = this.getSubCompany(node.data.id)
        console.log(node)
        resolve(data)
      }, 500)
    },

    // 根据pid获取子公司(模拟接口调用反参)
    getSubCompany(pid) {
      const subCompany = this.company.filter((item) => {
        return item.pid === pid && item.pid !== item.id
      })
      return subCompany
    },

    // 获取根公司(模拟接口调用反参)
    getRootCompany() {
      const rootCompany = this.company.filter((item) => {
        return item.pid === item.id
      })
      // console.log('父级数据',rootCompany)
      return rootCompany
    },
  },
}
</script>
 
<style scoped >
</style>