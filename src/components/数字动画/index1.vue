<template>
  <div style="margin-left: 300px;margin-top: 300px;display: flex;align-items: center;">
    <div v-for="(item, index) in numberList" :key="index" style="display: flex;">
      <div class="number">
        <span ref="numberItem" :data-number="item" :data-index="index">0123456879</span>
      </div>
    </div>
    <a-button style="margin-left: 30px;" @click="setNumberTransform">滚动</a-button>
  </div>
</template>

<script>
export default {
  computed: {
    numberList() {
      return String(this.value).split("");
    }
  },
  data() {
    return {
      value: 123456
    };
  },
  methods: {
    // 设置每一位数字的偏移
    setNumberTransform() {
      let numberItems = this.$refs.numberItem;
      let obj = {}
      Array.from(numberItems).forEach(c => {
        let key = c.dataset.index
        let value = c.dataset.number
        let init = 0
        obj[key] = setInterval(() => {
          if (init < value * 10) {
            init++
            c.style.transform = `translateY(-${init}%)`;
          } else {
            clearInterval(obj[key])
            obj[key] = null
          }
        }, 10);  // 控制滚动速率
      });
    }
  },
};
</script>

<style scoped lang="less">
.number {
  width: 20px;
  height: 20px;
  // border: 1px solid #ccc;
  overflow: hidden;
  > span {
    writing-mode: vertical-rl;
    text-orientation: upright;
    transform: translateY(0%);
  }
}
</style>