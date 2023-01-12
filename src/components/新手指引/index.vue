<template>
  <div>
    <h2>新手指引：npm install driver.js</h2>
    <div class="box">
      <el-card id="gridCard1" style="width: fit-content">
        这是新手指引测试dom1
      </el-card>
      <el-card id="gridCard2" style="width: fit-content">
        这是新手指引测试dom2
      </el-card>
      <el-card id="gridCard3" style="width: fit-content">
        这是新手指引测试dom3
      </el-card>
    </div>
  </div>
</template>

<script>
// 导入库和CSS文件
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
export default {
  data() {
    return {}
  },
  mounted() {
    let driver = new Driver()
    // driver.highlight({
    //   element: '#gridCard1',
    //   popover: {
    //     title: '这是第一步指引',
    //     description: '自定义添加描述!',
    //   },
    // })
    driver.defineSteps([
      {
        element: '#gridCard1',
        popover: {
          title: '这是第一步指引',
          description: '自定义添加描述!',
          position: 'left',
        },
      },
      {
        element: '#gridCard2',
        popover: {
          title: '这是第二步指引',
          description: '自定义添加描述!',
          position: 'bottom',
        },
      },
      {
        element: '#gridCard3',
        popover: {
          title: '这是第三步指引',
          description: '自定义添加描述!',
          position: 'top',
        },
      },
    ])
    setTimeout(() => {
      driver.start()
    }, 100)
  },
}
</script>

<style scoped>
.box {
  width: 1000px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
}
</style>
