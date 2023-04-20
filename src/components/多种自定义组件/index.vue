<template>
  <div class="flex">
    <el-card class="box_item">
      <h2>DatePicker组件进行二次封装</h2>
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
    <el-card class="box_item">
      <div class="flex">
        <h2 style="margin-right: 20px">短信验证码</h2>
        <el-button :disabled="totalTime < 60" @click="getCountdown">
          {{ content }}
        </el-button>
      </div>
      <div class="flex" style="margin-top: 10px">
        <h2 style="margin-right: 20px">{{ count }}s后返回页面</h2>
        <el-button @click="threeGo">开始计时</el-button>
      </div>
      <div class="flex">
        <h2 style="margin-right: 20px">倒计时</h2>
        <p style="line-height: 33px">
          倒计时：{{ day }}天 {{ hour }} : {{ min }} : {{ second }}
        </p>
      </div>
      <div class="flex">
        <h2>elemUI新组件</h2>
        <el-statistic
          style="width: 100px; height: 22px; margin-top: 5px"
          :value="deadline"
          format="HH:mm:ss"
          time-indices
        />
      </div>
    </el-card>
    <el-card class="box_item">
      <h2>全局混入图片预览组件</h2>
      <img
        style="cursor: pointer"
        :src="headerPic"
        alt=""
        @click="openImgViewer([headerPic])"
      />
    </el-card>
  </div>
</template>
 
<script>
export default {
  // 注入方法
  // inject: ['openImgViewer'],
  inject: {
    openImgViewer: {
      default: () => {},
    },
  },
  data() {
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 2,
      endTime: '2066-05-30 09:42:00', //截至时间，默认从当前日期开始
      day: '0',
      hour: '00',
      min: '00',
      second: '00',
      count: '10',
      totalTime: 60,
      content: '发送验证码',
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
    getCountdown() {
      const clock = window.setInterval(() => {
        this.content = this.totalTime + 's后重新发送'
        this.totalTime--
        if (this.totalTime < 0) {
          this.totalTime = 60
          this.content = '重新发送验证码'
          window.clearInterval(clock)
        }
      }, 1000)
    },
    threeGo() {
      const TIME_COUNT = 10
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
            // 跳转的页面写在此处
            this.$router.push({
              path: '/welcome',
            })
          }
        }, 1000)
      }
    },
    // 时分秒倒计时
    countTime() {
      // 获取当前时间
      const date = new Date()
      const now = date.getTime()
      // 设置截止时间
      const endDate = new Date(this.endTime) // this.endTime需要倒计时的日期
      const end = endDate.getTime()
      // 时间差
      const leftTime = end - now
      // 定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // 天
        this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24)
        // 时
        const h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
        this.hour = h < 10 ? '0' + h : h
        // 分
        const m = Math.floor((leftTime / 1000 / 60) % 60)
        this.min = m < 10 ? '0' + m : m
        // 秒
        const s = Math.floor((leftTime / 1000) % 60)
        this.second = s < 10 ? '0' + s : s
      } else {
        this.day = 0
        this.hour = '00'
        this.min = '00'
        this.second = '00'
      }
      // 等于0的时候不调用
      if (
        Number(this.hour) === 0 &&
        Number(this.day) === 0 &&
        Number(this.min) === 0 &&
        Number(this.second) === 0
      ) {
        return
      } else {
        // 递归每秒调用countTime方法，显示动态时间效果,
        setTimeout(this.countTime, 1000)
      }
    },
  },
  created() {
    this.countTime()
  },
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