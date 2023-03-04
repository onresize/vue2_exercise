<template>
  <div>
    <el-card>
      <h2>el-table嵌入echarts</h2>
      <el-table :data="tableData" v-loading="loading">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              :type="rid == scope.row.id ? 'warning' : 'primary'"
              size="small"
              @click="ClickToTop(scope.row)"
              >{{
                rid == scope.row.id ? '已置顶' : '未置顶'
              }}</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="num">
          <template slot-scope="scope">
            <div
              style="height: 40px; width: 100px"
              :ref="'echarts' + scope.row.id"
            ></div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      rid: null,
      loading: false,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.tableData = [
        {
          date: '2016-05-02',
          name: '王小虎1111111111',
          id: '1',
          num: [1, 2, 3, 4, 5],
        },
        {
          id: '2',
          date: '2016-05-04',
          name: '王小虎2222222222',
          num: [1, 4, 7, 3, 5],
        },
        {
          id: '3',
          date: '2016-05-01',
          name: '王小虎3333333333',
          num: [5, 2, 6, 9, 10],
        },
        {
          id: '4',
          date: '2016-05-03',
          name: '王小虎4444444444',
          num: [2, 1, 2, 1, 8],
        },
      ]
      this.getEcharts()
    },
    getEcharts() {
      setTimeout((_) => {
        this.tableData.forEach((e) => {
          let myChart = this.$echarts.init(
            this.$refs['echarts' + e.id]
          )
          myChart.setOption({
            grid: {
              left: '0',
              top: '0',
              right: '0',
              bottom: '0',
              containLabel: true,
            },
            xAxis: {
              type: 'category',
              //不显示x轴线
              show: false,
            },
            yAxis: {
              type: 'value',
              show: false,
            },
            series: [
              {
                data: e.num,
                //单独修改当前线条的颜色
                lineStyle: {
                  normal: {
                    color: '#f00',
                    width: 1,
                  },
                },
                type: 'line',
                smooth: true,
                symbol: 'none',
              },
            ],
          })
          window.addEventListener('resize', () => {
            myChart.resize()
          })
        })
      }, 1000)
    },
    // 置顶按钮触发
    ClickToTop(row) {
      this.loading = true
      this.rid = row.id
      let val = this.tableData //暂存表格首页数据
      let row1 = row // 暂存当前行数据
      // 遍历合并数据并重新渲染
      setTimeout(() => {
        let res = [row].concat(val.filter((item) => item != row1))
        this.loading = false
        this.tableData = res
      }, 500)
    },
  },
}
</script>

