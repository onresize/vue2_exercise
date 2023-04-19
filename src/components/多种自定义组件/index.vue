<template>
  <div class="flex">
    <el-card class="box_item">
      <h2>基于DatePicker组件进行二次封装</h2>
      <myDataPick type="year" v-model="start" :arrowOffset="12">
        <span style="cursor: pointer; font-weight: bold"
          >{{ start || '请选择' }}{{ start ? '年' : '' }}</span
        >
      </myDataPick>
    </el-card>
    <el-card class="box_item gridCenter">
      <div class="headerPic"></div>
      <div class="over-avatar">更换头像</div>
    </el-card>
  </div>
</template>
 
<script>
export default {
  data() {
    return { start: '' }
  },
  components: {
    myDataPick: () =>
      import('@/myCom/datePicker/label-datepicker.vue'),
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped lang="less">
.flex {
  display: flex;
}
.box_item {
  width: 390px;
  height: 300px;
  border-radius: 20px;
  margin: 5px;
  position: relative;
}
.gridCenter {
  display: grid;
  place-content: center;
}
.headerPic {
  width: 200px;
  height: 200px;
  background: url('https://foruda.gitee.com/avatar/1679558832719036918/8261454_embrance-t_1679558832.png!avatar200')
    no-repeat center;
  border: 4px solid #eee;
  border-radius: 50%;
  cursor: pointer !important;
}
.over-avatar {
  display: none;
}
.headerPic:hover + .over-avatar {
  display: block;
  position: absolute;
  inset: 0;
  z-index: 2;
  margin: auto;
  width: 200px;
  height: 200px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 200px;
  border: 4px solid #eee;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
}
</style>