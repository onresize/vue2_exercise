<template>
  <div>
    <h2>el-input实现输入联想搜索三种方法</h2>
    <!-- <el-select
      v-model="value"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="getSelectData"
      @select="change"
      clearable=""
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.name"
        :value="item.name"
      >
      </el-option>
    </el-select> -->
    <!-- <el-form-item label="账户名" :label-width="formLabelWidth">
      <el-autocomplete
        v-model="formTwo.accountName"
        :fetch-suggestions="querySearchAsync1"
        :trigger-on-focus="false"
        placeholder="必填"
        @select="handleSelect1"
      ></el-autocomplete>
    </el-form-item> -->
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      options: [],
      value: null,
    }
  },
  created() {},
  methods: {
    // 注意、请求本地json、要将json放在public文件夹下
    async getSelectData() {
      let res = await fetch('/router.json')
      let { data: options } = await res.json()
      this.options = options
    },
    change() {},
  },
}
</script>
