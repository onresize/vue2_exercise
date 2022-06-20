<template>
  <el-card style="width: 70vw;">
    <a-button
      style="margin-left: 800px"
      class="btn"
      icon="plus-circle"
      @click="addDdialogFormVisible = true"
      >单击</a-button
    >
    <a-button
      style="margin-left: 700px"
      class="btn"
      icon="plus-circle"
      @dblclick="doubleclick"
      >双击</a-button
    >
    <a-button
      style="margin-left: 700px"
      class="btn"
      icon="plus-circle"
      @contextmenu="contextmenu"
      >右击</a-button
    >

    <!-- 新增对话框 -->
    <a-modal
      centered
      :width="'650px'"
      title="新增"
      :visible.sync="addDdialogFormVisible"
      @cancel="addCancel"
    >
      <el-form :model="addform" :rules="formRules" ref="editRuleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="区域名称" prop="areaName">
              <el-input
                v-model="addform.areaName"
                placeholder="请输入名称"
                style="width: 200px"
                autocomplete="off"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="上级区域" prop="area">
              <el-cascader style="width: 200px" v-model="value">
              </el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="区域编号" prop="areaPlaceId">
              <el-input
                placeholder="53282210"
                style="width: 120px; margin: 0 9px 0 10px"
                autocomplete="off"
                disabled
              ></el-input>
              <label style="font-weight: 600; color: #585a5d"
                >-</label
              >
              <el-input
                v-model="addform.areaPlaceId"
                placeholder="请输入区域编号"
                style="width: 356px"
                autocomplete="off"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item style="padding-left: 10px" label="区域级别">
              <el-cascader
                style="width: 200px"
                placeholder="街道"
                disabled
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              style="padding-left: 13px"
              label="总面积"
              prop="totalArea"
            >
              <el-input
                v-model="addform.totalArea"
                style="width: 200px"
                placeholder="请输入总面积"
                autocomplete="off"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item
              style="padding-left: 10px"
              label="人口总数"
              prop="areaPeople"
            >
              <el-input
                v-model="addform.areaPeople"
                style="width: 200px"
                placeholder="请输入人口总数"
                autocomplete="off"
                clearable
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              style="padding-left: 13px"
              label="排序号"
              prop="orderNo"
            >
              <el-input
                v-model="addform.orderNo"
                style="width: 200px"
                placeholder="请输入排序号"
                autocomplete="off"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <label style="padding-left: 3px">备注</label>
          </el-col>
          <el-col :span="20" style="width: 500px">
            <a-input
              type="textarea"
              placeholder="请输入备注"
              style="height: 100px; margin-left: 13px; resize: none"
              :maxLength="200"
              v-model="addform.note"
            ></a-input>
          </el-col>
        </el-row>

        <span class="content-style1"
          >{{ addform.note.length }}/200</span
        >
      </el-form>
      <div slot="footer" class="dialog-footer">
        <a-button key="back" icon="close" @click="addCancel">
          关闭
        </a-button>
        <a-button key="submit" type="primary" icon="check">
          保存
        </a-button>
      </div>
    </a-modal>
  </el-card>
</template>

<script>
export default {
  data() {
    const blurText = async (rule, value, callback) => {
      const boolean = new RegExp('^[1-9][0-9]*$').test(value)
      if (!boolean) {
        callback(new Error('请输入正确的正整数'))
      }
    }
    return {
      /** 添加数据 */
      addform: {
        areaName: '',
        areaPlaceId: 201,
        totalArea: '',
        orderNo: 0,
        areaPeople: '',
        note: ''
      },
      /** 修改数据 */
      editform: {
        areaName: '',
        areaPlaceId: 201,
        totalArea: '',
        orderNo: 0,
        areaPeople: '',
        note: ''
      },
      content: '',
      value: '',
      value1: '',
      /** 显示隐藏添加对话框 */
      addDdialogFormVisible: false,
      /** 表单验证规则 */
      formRules: {
        areaName: [
          {
            required: true,
            message: '输入名称不能为空',
            trigger: 'blur'
          }
        ],
        area: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        totalArea: [
          {
            required: true,
            message: '输入总面积不能为空',
            trigger: 'blur'
          },
          { validator: blurText, trigger: 'blur' }
        ],
        areaPlaceId: [
          {
            required: true,
            message: '输入区域编号不能为空',
            trigger: 'blur'
          },
          { validator: blurText, trigger: 'blur' }
        ],
        orderNo: [
          {
            required: true,
            message: '排序号不能为空',
            trigger: 'blur'
          },
          { validator: blurText, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    /** 增加对话框 返回 */
    addCancel(e) {
      this.addDdialogFormVisible = false
      this.form = { totalArea: 0 }
      // this.$refs['addrRuleForm'].resetFields()
    },
    /** 双击 */
    doubleclick() {
      console.log('双击')
      this.addDdialogFormVisible = true
    },
    contextmenu(e) {
      e.preventDefault()
      console.log('右击')
      this.addDdialogFormVisible = true
    }
  }
}
</script>

<style scoped less>
@import '~@/less/common.less';
.home-card {
  display: flex;
  height: 100%;
  width: 100%;
}
.card-left {
  height: 100% !important;
  background: pink;
}
.card-right {
  margin-left: 10px;
  flex: 1;
}
.icon {
  display: inline-block;
  text-align: right;
  float: right;
  line-height: 20px;
  cursor: pointer;
}
.menu {
  border-right: none;
  overflow: hidden;
}
.nav {
  width: 34px;
  line-height: 10px;
  display: inline-block;
  color: #000000;
  font-size: 17px;
}
.tree {
  margin-top: 10px;
}

/** 去除侧边栏展开折叠出现的x和y轴的滚动条 */
.el-aside::-webkit-scrollbar {
  display: none;
}

.label-sty {
  font-size: 14px;
  color: #606266;
  width: 45px;
  line-height: 32px;
}
.ipt-sty {
  width: 185px;
  margin-right: 10px;
}
.row-btn {
  margin: 15px 0px 15px 0px;
  width: 750px;
}
.row-btn .btn {
  margin-right: 10px;
}

.content-style1 {
  width: 53px;
  height: 20px;
  display: inline-block;
  background: transparent;
  position: absolute;
  top: 390px;
  right: 40px;
}
.content-style2 {
  width: 53px;
  height: 20px;
  display: inline-block;
  background: transparent;
  position: absolute;
  top: 390px;
  right: 40px;
}
/* 表格隔行变色 */
::v-deep .ant-table-tbody .ant-table-row:nth-child(even) {
  background-color: #fafafa;
}

/* 标题背景色用important */
::v-deep .ant-table-thead > tr > th {
  padding: 12px;
  font-size: 14px;
  font-weight: 800;
  color: #012f55;
  background: #f2f2f2 !important;
}

/* 设置a-modal弹出框去除两条横线 */
::v-deep .ant-modal-content .ant-modal-header {
  border-bottom: none !important;
}

::v-deep .ant-modal-content .ant-modal-footer {
  border-top: none !important;
}

/** 设置滚动条的宽度 */
::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  width: 12px;
}
/** 设置滚动条的背景色和圆角 */
::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #aaabaf;
  border-radius: 5px;
}

/** 改变表格滚动条顶部区域颜色,看起来嵌套在表格内部 */
::v-deep .el-table th.el-table__cell {
  background: #f2f2f2;
}

::v-deep .check-td-of-add-table {
  background: pink;
}

::v-deep .el-col-3 {
  padding-left: 35px !important;
}

::v-deep .el-input--suffix .el-input__inner {
  margin-left: 10px;
}
</style>
