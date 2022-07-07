<template>
  <el-card>
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ y: 250 }"
      rowKey="key"
      style="width: 600px; height: 350px; margin-bottom: 20px"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :customRow="setRow"
      :pagination="false"
    >
      <!-- 展开插槽 -->
      <p slot="expandedRowRender" slot-scope="row" style="margin: 0">
        {{ row.expandTarget }}
      </p>
      <!-- 名字a标签插槽 -->
      <template slot="name" slot-scope="text, row">
        <a @click="getsolt(row)">{{ text }}</a>
      </template>
    </a-table>
    <a-modal
      :width="300"
      title="Title"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    />
  </el-card>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    expandTarget: '展开测试1',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    expandTarget: '展开测试2',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    expandTarget: '展开测试3',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
    expandTarget: '展开测试4',
  },
]

export default {
  data() {
    return {
      data,
      columns,
      visible: false,
      selectedRowKeys: [],
    }
  },
  methods: {
    getsolt(row) {
      this.visible = true
    },
    handleOk() {
      this.handleCancel()
    },
    handleCancel() {
      this.visible = false
    },
    /** 选中表格多选框 触发 */
    onSelectChange(selectedRowKeys) {
      console.log('选中表格多选框: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    /** 点击表格当前行选中前面的checkbox */
    setRow(record) {
      return {
        on: {
          /** 单击当前行(单选多选框) */
          click: () => {
            let keys = []
            if (
              this.selectedRowKeys.length == 0 ||
              (this.selectedRowKeys.length > 0 &&
                this.selectedRowKeys[0] != record.key)
            ) {
              keys.push(record.key)
            }
            this.selectedRowKeys = keys
            console.log('test:', this.selectedRowKeys)
          },
          dblclick: () => {
            this.getsolt(record)
          },
        },
      }
    },
  },
}
</script>

<style scoped></style>
