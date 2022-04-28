<template>
  <div>
    <h2>时间选择器的表单验证注意点：</h2>
    <ul>
      <li>el-form上需要绑定每一项的对象:model="form"</li>
      <li>
        el-date-picker上要写上value-format="yyyy-MM-dd"方便后端拿值、或用@change触发方法拿到日期值
      </li>
      <li>
        表单验证时间选择器的时候用type="string" 代替type="date" <br />
        例： date1: [ { type: 'string', required: true, message:
        '请选择日期', trigger: 'change', }, ],
      </li>
    </ul>
    <el-form
      :model="form"
      :inline="true"
      ref="refForm"
      :rules="rules"
    >
      <el-form-item label="开始时间" prop="date1">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          value-format="yyyy-MM-dd"
          style="width: 100%"
          clearable
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" prop="date2">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date2"
          value-format="yyyy-MM-dd"
          style="width: 100%"
          clearable
        ></el-date-picker>
      </el-form-item>
      <div>
        <el-button type="primary" @click="submit">确 认</el-button>
      </div>
    </el-form>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      form: {
        date1: null,
        date2: null,
      },
      rules: {
        date1: [
          {
            type: 'string',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'string',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
      },
    }
  },
  created() {},
  methods: {
    submit() {
      this.$refs['refForm'].validate((valid) => {
        if (valid) {
          console.log(this.form)
        }
      })
    },
  },
}
</script>
 
<style scoped >
</style>