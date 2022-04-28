<template>
  <!-- 留言记录 -->
  <div style="height: 100%; position: relative">
    <div style="height: 100%;">
      <a-card :bordered="false" style="height: 100%">
        <!-- 操作按钮区域 -->
        <header>
          <div class="table-operator">
            <a-button type="primary" @click="showVisible = true"> 发表留言 </a-button>
            <a-button type="primary" icon="search" @click="showQueryVisible = true"> 留言查询 </a-button>
            <a-button icon="reload" @click="getRecord"> 刷新 </a-button>
          </div>
        </header>
        <!-- 主视图留言区 -->
        <main class="mainView">
          <div class="list" v-for="(item, index) in recordarr" :key="item.id">
            <div class="list-item">
              <p>
                <span>{{ item.createBy }}</span>
                <span>{{ item.sysOrgCode }}</span>
                <span>{{ item.createTime }}</span>
              </p>
              <p>{{ item.content }}</p>
              <div class="operate">
                <span class="reply" style="cursor: pointer" @click="showInput(item)">回复</span>
                <span class="delete" @click="delRecord(item.id)">删除</span>
              </div>

              <!-- 点击回复 发表回复input框区 -->
              <div v-show="item.showInputFlag" class="list-item">
                <a-form-model :model="replyform">
                  <a-input
                    type="textarea"
                    placeholder="请输入留言内容"
                    :maxLength="500"
                    v-model="replyform.content"
                    style="height: 140px; resize: none"
                  >
                  </a-input>
                </a-form-model>
                <div style="overflow：hidden; margin-bottom: 55px;">
                  <a-button type="primary" class="returnBtn" @click="reply(index, item.id)">发表回复</a-button>
                </div>
              </div>

              <!-- 回复后的消息内容区 -->
              <div v-for="(obj, i) in item.replyMsg" :key="i">
                <div class="list">
                  <div class="list-item">
                    <p>
                      <span>{{ obj.createBy }}</span>
                      <span>{{ obj.sysOrgCode }}</span>
                      <span>{{ obj.createTime }}</span>
                    </p>
                    <p>{{ obj.content }}</p>
                    <div class="operate">
                      <span class="delete" @click="delRelay(obj.id)">删除</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <!-- 底部分页区 -->
          <el-divider class="vider"></el-divider>
          <div class="bottom-pagiation">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-sizes="[10, 20, 30, 50, 100]"
              layout="prev, pager, next, total, jumper, sizes"
              :total="total"
            >
            </el-pagination>
          </div>
      </a-card>
    </div>
    <!-- 发表留言对话框 -->
    <a-modal :title="Title" :visible="showVisible" :confirm-loading="confirmLoading" centered @cancel="handleCancel">
      <a-form-model :model="form" :rules="rules" ref="ruleForm">
        <a-form-model-item prop="content">
          <a-input
            type="textarea"
            placeholder="请输入留言内容"
            style="height: 110px; resize: none"
            :maxLength="500"
            v-model="form.content"
          ></a-input>
        </a-form-model-item>
        <span class="content-style1">{{ form.content.length }}/500</span>
      </a-form-model>
      <template slot="footer">
        <a-button key="back" icon="close" @click="handleCancel"> 关闭 </a-button>
        <a-button key="submit" type="primary" icon="check" @click="addRecord"> 保存 </a-button>
      </template>
    </a-modal>

    <!-- 留言查询对话框 -->
    <a-modal
      :width="700"
      :title="Title1"
      :visible="showQueryVisible"
      :confirm-loading="confirmLoading1"
      centered
      @ok="handleQueryOk"
      @cancel="handleQueryCancel"
    >
      <el-form :model="queryForm" :rules="queryRules" ref="ruleQueryForm">
        <a-row>
          <a-col :span="3">
            <label class="lel">发布人</label>
          </a-col>
          <a-col :span="9">
            <el-input
              style="width: 220px; margin-bottom: 15px"
              size="large"
              placeholder="请输入发布人"
              v-model="queryForm.person1"
              clearable
            ></el-input>
          </a-col>
          <a-col :span="3">
            <label class="lel">回复人</label>
          </a-col>
          <a-col :span="9">
            <div style="margin-left: -3px">
              <el-input
                style="width: 220px; margin-bottom: 15px"
                size="large"
                placeholder="请输入回复人"
                v-model="queryForm.person2"
                clearable
              ></el-input>
            </div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="3">
            <label style="line-height: 40px">起始时间</label>
          </a-col>
          <a-col :span="9">
            <div class="block">
              <el-date-picker
                style="margin-bottom: 15px"
                type="datetime"
                format="yyyy-MM-dd HH:mm:ss"
                placeholder="请选择起始时间"
                v-model="queryForm.timeStart"
              >
              </el-date-picker>
            </div>
          </a-col>
          <a-col :span="3">
            <label style="line-height: 40px">结束时间</label>
          </a-col>
          <a-col :span="9">
            <div class="block" style="margin-left: -3px">
              <el-date-picker
                style="margin-bottom: 15px"
                type="datetime"
                format="yyyy-MM-dd HH:mm:ss"
                placeholder="请选择结束时间"
                v-model="queryForm.timeEnd"
              >
              </el-date-picker>
            </div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="3">
            <label class="lbl">留言内容</label>
          </a-col>
          <a-col :span="20">
            <el-form-item prop="context">
              <a-input
                type="textarea"
                placeholder="请输入留言内容"
                style="height: 110px; resize: none"
                :maxLength="500"
                v-model="queryForm.context"
              ></a-input>
            </el-form-item>
          </a-col>
        </a-row>

        <span class="content-style2">{{ queryForm.context.length }}/500</span>
      </el-form>

      <template slot="footer">
        <div>
          <el-button size="medium" icon="el-icon-close" @click="handleQueryCancel"> 关闭 </el-button>
          <el-button size="medium" type="primary" icon="el-icon-search"> 查询 </el-button>
          <el-button size="medium" type="warning" icon="el-icon-refresh-right" @click="reset"> 重置 </el-button>
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script>
// import { getAction, postAction, putAction, deleteAction } from '@/api/manage'
export default {
  data() {
    return {
      showVisible: false,
      showQueryVisible: false,
      Title: '发表留言',
      Title1: '留言查询',
      confirmLoading: false,
      confirmLoading1: false,
      replyFlag: true,
      recordarr: [],
      form: {
        content: '',
        pageNo: 1,
        pageSize: 10,
      },
      replyform: {
        content: '',
        replyMsgId: '',
      },
      total: null,
      queryForm: {
        person1: '',
        person2: '',
        timeStart: '',
        timeEnd: '',
        context: '',
      },
      rules: {
        content: [{ required: true, message: '请输入留言', trigger: 'blur' }],
      },
      queryRules: {
        context: [{ required: true, message: '请输入留言', trigger: 'blur' }],
      },
      url: {
        recordList: '/MessageBoard/messageBoard/list',
        add: '/MessageBoard/messageBoard/add',
        delUrl: '/MessageBoard/messageBoard/delete',
        putUrl: '/MessageBoard/messageBoard/edit',
        getIdUrl: '/MessageBoard/messageBoard/queryById',
      },
    }
  },
  created() {
    // this.getRecord()
  },
  watch: {},
  computed: {},
  methods: {
    /**默认进来加载留言数据 */
    async getRecord() {
      const { result: res } = await getAction(this.url.recordList, this.form)
      console.log(res)
      res.records.map((r) => {
        r.showInputFlag = false
        r.replyFlag = true
      })
      this.recordarr = res.records
      this.total = res.total
      console.log('留言数据:', res.records)
    },

    /** 添加 发表留言 */
    async addRecord() {
      const res = await postAction(this.url.add, this.form)
      console.log(res)
      // this.getRecord()
      this.handleCancel()
    },

    /** 显示input框 发表回复  */
    async reply(index, id) {
      this.replyform.replyMsgId = id
      const res = await postAction(this.url.add, this.replyform)
      this.recordarr[index].showInputFlag = false
      this.replyform = {}
      if (res.code !== 200) {
        return this.$message.error('回复失败')
      }
      this.$message.success('回复成功')
      // this.getRecord()
      console.log(this.replyform)
    },

    /** 点击回复控制留言框显示隐藏 */
    showInput(item) {
      item.showInputFlag = !item.showInputFlag
    },
    /** 删除留言 */
    async delRecord(id) {
      const context = await this.$confirm('你确定删除这些项', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).catch((err) => err)
      console.log(context)
      if (context !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const res = await deleteAction(this.url.delUrl, { id })
      console.log(res)
      if (res.code !== 200) {
        return this.$message.error('删除失败')
      }
      this.$message.success('删除成功')
      // this.getRecord()
    },
    /** 删除回复 */
    async delRelay(id) {
      const context = await this.$confirm('你确定删除这些项', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).catch((err) => err)
      console.log(context)

      if (context !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const res = await deleteAction(this.url.delUrl, { id })
      console.log(res)
      if (res.code !== 200) {
        return this.$message.error('删除失败')
      }
      this.$message.success('删除成功')
      // this.getRecord()
    },
    /** 取消 */
    handleCancel() {
      this.showVisible = false
      this.$refs.ruleForm.resetFields()
    },
    /** 留言查询查询按钮 */
    handleQueryOk(e) {},
    /** 查询关闭 */
    handleQueryCancel() {
      this.showQueryVisible = false
      this.$refs.ruleQueryForm.resetFields()
      this.queryForm = {
        person1: '',
        person2: '',
        timeStart: '',
        timeEnd: '',
        context: '',
      }
    },
    /** 改变页目数量 */
    handleSizeChange(newSize) {
      this.form.pageSize = newSize
      // this.getRecord()
      console.log(this.form.pageSize)
    },
    /** 改变当前页 */
    handleCurrentChange(newPage) {
      this.form.pageNo = newPage
      // this.getRecord()
      console.log('当前页', this.form.pageNo)
    },
    /** 留言查询 重置按钮 */
    reset() {
      this.queryForm = {
        person1: '',
        person2: '',
        timeStart: '',
        timeEnd: '',
        context: '',
      }
    },
  },
}
</script>
<style scoped less>
</style>

<style>
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
div {
  display: block;
}
body {
  font-size: 14px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, '\5FAE\8F6F\96C5\9ED1', Arial,
    sans-serif;
}

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
user agent stylesheet div {
  display: block;
}
.el-container,
.el-container.is-vertical,
.el-drawer,
.el-link,
.el-steps--vertical {
  -webkit-box-direction: normal;
}
body {
  font-size: 14px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, '\5FAE\8F6F\96C5\9ED1', Arial,
    sans-serif;
}
style attribute {
  font-size: 12px;
}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
.content-style1 {
  width: 53px;
  height: 20px;
  display: inline-block;
  background: transparent;
  position: absolute;
  top: 155px;
  right: 25px;
}
.content-style2 {
  width: 53px;
  height: 20px;
  display: inline-block;
  background: transparent;
  position: absolute;
  top: 265px;
  right: 50px;
}

.list {
  padding: 0 15px;
  border: 1px solid #e5e5e5;
  margin-bottom: 15px;
}
.returnBtn {
  float: right;
  margin: 10px 0;
}
.list .list-item p:first-child {
  padding: 17px 0 10px 0;
}
.list .list-item:first-child {
  border-top: 0;
  padding-left: 0;
}
.list .list-item p:first-child span {
  font-size: 14px;
  color: #012f55;
  margin-right: 30px;
}
.list .list-item p:nth-child(2) {
  color: #333;
}

.list .list-item .operate {
  padding: 12px 0;
  font-size: 12px;
  color: #999;
}
.list .list-item .operate span {
  margin-right: 20px;
  color: #028cff;
}
.list .list-item .operate .delete {
  cursor: pointer;
}

.lel {
  line-height: 40px;
  margin-left: 14px;
}

.mainView {
  height: 640px;
  overflow-y: auto;
}

/* 表格隔行变色 */
::v-deep .ant-table-tbody .ant-table-row:nth-child(even) {
  background-color: #fafafa;
}

/* 表头背景色*/
::v-deep .ant-table-thead > tr > th {
  padding: 12px;
  font-size: 14px;
  height: 43px;
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

/** 修改a-modal滚动条整体 */
::v-deep .ant-modal-body ::-webkit-scrollbar {
  width: 12px;
  background-color: #f2f2f2;
}

/** 修改a-modal滚动条内轴样式 */
::v-deep .ant-modal-body ::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #dddddd;
}

/** 修改表格滚动条整体 */
::v-deep ::-webkit-scrollbar {
  width: 12px;
  background-color: #f2f2f2;
}
/** 修改表格滚动条 内部滚动轴 */
::v-deep ::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #dddddd;
}
::v-deep .ant-table {
  line-height: 0.9;
}
::v-deep .el-form-item .el-form-item__label {
  width: 112px;
}
.bottom-pagiation {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.vider {
  position: absolute;
  bottom: 40px;
  width: 96%;
  left: 50%;
  transform: translateX(-50%);
}
</style>