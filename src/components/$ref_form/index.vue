<template>
  <div>
    <el-button @click="btnClick">$ref动态添加表单验证</el-button>
    <a-modal :visible="btnVisible" :closable="null" :footer="null" @cancel="cancel">
      <el-form :model="form" :rules="rule" ref="form">
        <el-form-item prop="val"> <el-input v-model="form.val"></el-input> </el-form-item>{{ form.val }}
      </el-form>
    </a-modal>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      btnVisible: false,
      form: {},
      rule: {},
    }
  },
  created() {},
  methods: {
    btnClick() {
      console.log(this.$refs)
      this.btnVisible = true
    },
    addRules() {
      this.rule.val = [{ required: true, validator: this.validateInstitutionId, trigger: 'change' }]
    },
    cancel() {
      this.btnVisible = false
      this.$refs.form.resetFields()
      this.form = {}
      delete this.validateInstitutionId
      console.log('调用了返回方法')
    },
  },
}
</script>
 
<style scoped >
</style>