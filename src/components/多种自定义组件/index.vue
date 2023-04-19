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
      <div class="avatar_box">
        <div
          id="picDom"
          class="headerPic"
          :style="{
            background: 'url(' + headerPic + ') no-repeat center',
            'background-size': '100% 100%',
          }"
        ></div>
        <div class="mask">
          <div @click="test">更换头像</div>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      start: '',
      headerPic:
        'https://foruda.gitee.com/avatar/1679558832719036918/8261454_embrance-t_1679558832.png',
    }
  },
  components: {
    myDataPick: () =>
      import('@/myCom/datePicker/label-datepicker.vue'),
  },
  computed: {},
  methods: {
    test() {
      let pic = window.prompt(
        '请输入要更换的头像外链地址（http & https）',
        ''
      )
      if (pic?.includes('http') || pic?.includes('https')) {
        this.headerPic = pic
        this.$nextTick(() => {
          document.getElementById('picDom').style.backgroundSize =
            '100% 100%'
          console.log(document.getElementById('picDom').style)
        })
      }
    },
  },
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
.avatar_box {
  position: relative;
  display: flex;
  .headerPic {
    width: 200px;
    height: 200px;
    border: 4px solid #eee;
    border-radius: 50%;
    &:hover + .mask {
      border: 4px solid red;
    }
  }
  .mask {
    position: absolute;
    margin: auto;
    width: 200px;
    height: 200px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 200px;
    border: 4px solid #eee;
    border-radius: 50%;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.2s ease-out;
    user-select: none;
  }

  &:hover > .mask {
    opacity: 1;
  }
}
</style>