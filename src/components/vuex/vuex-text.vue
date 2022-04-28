<template>
  <div id="app">
    <h2>
      使用vuex-persistedstate插件解决刷新状态消失、保存在sessionStorage
    </h2>
    <a-input
      class="my_ipt"
      placeholder="请输入任务"
      :value="inputValue"
      @change="handleInoutChange"
    ></a-input>
    <a-button type="primary" @click="handleAddClick"
      >添加事项</a-button
    >

    <a-list :dataSource="infoList" bordered class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-checkbox
          :checked="item.done"
          @change="
            (e) => {
              handChange(e, item.id)
            }
          "
          >{{ item.info }}</a-checkbox
        >
        <a slot="actions" @click="removeClick(item.id)">删除</a>
      </a-list-item>

      <div slot="footer" class="footer">
        <span>{{ unDoneLength }}条剩余</span>
        <a-button-group>
          <a-button
            :type="viewKey === 'all' ? 'primary' : 'default'"
            @click="changeVieKey('all')"
            >全部</a-button
          >
          <a-button
            :type="viewKey === 'none' ? 'primary' : 'default'"
            @click="changeVieKey('none')"
            >未完成</a-button
          >
          <a-button
            :type="viewKey === 'done' ? 'primary' : 'default'"
            @click="changeVieKey('done')"
            >已完成</a-button
          >
        </a-button-group>
        <a @click="cleanFinish">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('getList')
  },
  computed: {
    // 将state中的数据映射到这个计算属性中
    ...mapState(['inputValue', 'viewKey']),
    // 将getters包装中的数据映射到这里
    ...mapGetters(['unDoneLength', 'infoList']),
  },
  methods: {
    handleInoutChange(e) {
      console.log(e.target.value)
      // 调用mutations中的方法、同步inputValue的值
      this.$store.commit('setInputValue', e.target.value)
    },
    handleAddClick() {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('文本框内容不能为空')
      }
      this.$store.commit('addItem')
    },
    removeClick(id) {
      console.log(id)
      this.$store.commit('removeItem', id)
    },
    // 监听复选框
    handChange(e, id) {
      const param = {
        id: id,
        status: e.target.checked,
      }
      this.$store.commit('changeStatus', param)
    },
    // 清除已完成的任务
    cleanFinish() {
      this.$store.commit('clean')
    },
    changeVieKey(key) {
      this.$store.commit('changeKey', key)
    },
  },
}
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>