<template>
  <el-card style="width: 70vw">
    <!-- 借鉴 vue-element-admin组件二次封装的excel -->
    <!-- 导出excel -->
    <a-button icon="upload" @click="handleDownload">导出</a-button>
    <!-- 导入excel -->
    <upload-excel-component
      class="upload"
      :on-success="handleSuccess"
    />
    <!-- <el-table
      :data="tableData"
      border
      highlight-current-row
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        v-for="item of tableHeader"
        :key="item"
        :prop="item"
        :label="item"
      />
    </el-table> -->

    <a-table
      class="AStockOutDetailTable"
      ref="table"
      style="width: 600px; height: 600px; padding-bottom: 15px"
      :scroll="{ y: 250 }"
      rowKey="id"
      :columns="columns"
      :data-source="tableData"
      :pagination="false"
    >
    </a-table>
    <div>{{ this.tableData }}</div>
  </el-card>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'

export default {
  components: { UploadExcelComponent },
  data() {
    return {
      // 表格行数据
      tableData: [
        { 序号: 1, areaName: '华南', areaPlaceId: 1811, note: '无' },
        { 序号: 2, areaName: '华东', areaPlaceId: 1522, note: '无' },
        { 序号: 3, areaName: '华北', areaPlaceId: 1923, note: '无' },
      ],
      // 表头
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function (t, r, index) {
            return parseInt(index) + 1
          },
        },
        {
          title: '区域名称',
          dataIndex: 'areaName',
          align: 'center',
          width: 100,
        },
        {
          title: '区域编码',
          dataIndex: 'areaPlaceId',
          align: 'center',
          width: 100,
        },
        {
          title: '备注',
          dataIndex: 'note',
          align: 'center',
          width: 100,
        },
      ],
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    getList() {
      setTimeout(() => {
        this.tableData = [
          {
            id: 11,
            areaName: '勐海县',
            areaPlaceId: '8810101',
            note: '无',
          },
          {
            id: 12,
            areaName: '勐海镇',
            areaPlaceId: '8810102',
            note: '无',
          },
          {
            id: 13,
            areaName: '勐海村',
            areaPlaceId: '8810103',
            note: '无',
          },
          {
            id: 14,
            areaName: '勐海乡',
            areaPlaceId: '8810104',
            note: '无',
          },
        ]
      }, 1000)
    },
    // 导出
    handleDownload() {
      import('@/vendor/Export2Excel').then((excel) => {
        const column = ['序号', '区域名称', '区域编码', '备注']
        const keys = ['index', 'areaName', 'areaPlaceId', 'note']
        for (let i in this.tableData) {
          this.tableData[i].index = parseInt(i) + 1
        }
        const data = this.tableData.map((r) => {
          return keys.map((k) => r[k])
        })
        excel.export_json_to_excel({
          header: column,
          data: data,
          filename: 'exportData',
        })
      })
    },
    // 导入成功
    handleSuccess({ results, header }) {
      this.columns = [
        {
          title: '序号',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function (t, r, index) {
            return parseInt(index) + 1
          },
        },
        {
          title: '区域名称',
          dataIndex: '区域名称',
          align: 'center',
          width: 100,
        },
        {
          title: '区域编码',
          dataIndex: '区域编码',
          align: 'center',
          width: 100,
        },
        {
          title: '备注',
          dataIndex: '备注',
          align: 'center',
          width: 100,
        },
      ]
      this.tableData = results
    },
  },
}
</script>

<style scoped>
.upload {
  margin-top: -32px;
  margin-left: 100px;
}
</style>
