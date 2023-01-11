<template>
  <div>
    <!-- 原生js方式实现 -->
    <ul></ul>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const ul = document.querySelector('ul')
      for (let index = 0; index < 100; index++) {
        const li = document.createElement('li')
        li.innerText = index
        li.style.backgroundColor = this.getRandomColor()
        li.style.height =
          Math.floor(Math.random() * (200 - 50 + 1) + 50) + 'px'
        li.style.opacity = '0'
        ul.appendChild(li)
      }
      this.setWaterFall()
    },
    getRandomColor() {
      const color1 = Math.floor(Math.random() * 256)
      const color2 = Math.floor(Math.random() * 256)
      const color3 = Math.floor(Math.random() * 256)
      return `rgb(${color1},${color2},${color3})`
    },
    getMinIndex(arr) {
      let minIndex = 0
      let minHeight = arr[0]
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        if (minHeight > element) {
          minHeight = element
          minIndex = index
        }
      }
      return { minIndex, minHeight }
    },
    setWaterFall() {
      const lis = [...document.querySelectorAll('li')]
      let index = 0
      const heightList = [[], [], []]
      const timeId = setInterval(() => {
        const li = lis.shift()
        if (!li) {
          clearInterval(timeId)
          return
        }
        if (index < 3) {
          const left = index * li.clientWidth + 'px'
          li.style.left = left
          heightList[index].push(li.clientHeight)
        } else {
          // 计算出3个列分别对应的高度 [1,2,3]
          const sumHeightList = heightList.reduce(
            (sumColumnHeight, columnList) => [
              ...sumColumnHeight,
              columnList.reduce((a, b) => a + b, 0),
            ],
            []
          )
          const { minIndex, minHeight } =
            this.getMinIndex(sumHeightList)
          const left = minIndex * li.clientWidth + 'px'
          const top = minHeight + 'px'
          li.style.left = left
          li.style.top = top
          heightList[minIndex].push(li.clientHeight)
        }
        li.style.opacity = '1'
        index++
      }, 500)
    },
  },
}
</script>

<style>
li {
  width: 33.33%;
  border: 1px solid #000;
  font-size: 30px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
}
</style>
