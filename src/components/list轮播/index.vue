<template>
  <div class="box">
    <input class="ipt" type="text" v-model="iptVal" />
    <div class="flex-box">
      <div
        class="label"
        v-for="(item, i) in holderList"
        :key="i"
        :style="{ transform: `translateY(-${lateY}px)` }"
      >
        {{ item }}
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
    }
  },
  mounted() {
    this.changePlaceHolder()
    this.changeLateY()
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
      let r = setInterval(() => {
        this.lateY += 25
        if (this.lateY > 100) {
          // this.lateY = 0
          clearInterval(r)
          this.holderList.push(this.holderList[0])
          this.holderList.shift()
          this.changeLateY()
        }
      }, 2000)
    },
  },
}
</script>

<style scoped lang="less">
.box {
  width: 700px;
  height: 700px;
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

    .label {
      transition: all 1s;
      width: fit-content;
      padding: 2px;
    }
  }
}
</style>
