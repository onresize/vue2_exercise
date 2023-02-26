<template>
  <div>
    <h2>仿输入框placeholder垂直切换动画</h2>
    <div class="box">
      <input class="ipt" type="text" v-model="iptVal" />
      <div class="flex-box">
        <div :class="[animation ? 'animationTop' : '']">
          <div class="label" v-for="(item, i) in holderList" :key="i">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textPlaceHolder: 'iphone',
      holderList: ['iphone14', 'macBook pro', '大疆', 'Aoc', 'gpw'],
      iptVal: '',
      num: 0,
      lateY: 0,
      animation: false,
    }
  },
  mounted() {
    this.changePlaceHolder()
    setInterval(this.changeLateY, 4000)
  },
  methods: {
    changePlaceHolder() {
      let r = setTimeout(() => {
        if (this.iptVal) {
          clearTimeout(r)
        }
        this.num = (this.num + 1) % this.holderList.length
        this.textPlaceHolder = this.holderList[this.num]
        this.changePlaceHolder()
      }, 2000)
    },
    changeLateY() {
      this.animation = true
      setTimeout(() => {
        this.holderList.push(this.holderList[0])
        this.holderList.shift()
        this.animation = false
      }, 500)
    },
  },
}
</script>

<style scoped lang="less">
.box {
  width: 600px;
  height: 600px;
  border: 3px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  .ipt {
    padding: 5px;
    position: relative;
  }
  .flex-box {
    border: 3px solid red;
    position: absolute;
    height: 31px;
    overflow: hidden;

    .label {
      width: fit-content;
      padding: 2px;
    }
  }
  .animationTop {
    transition: all 0.5s ease-out;
    transform: translateY(-25px);
  }
}
</style>
