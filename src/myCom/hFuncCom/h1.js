
export default {
  data() {
    return {
      timNum: 0
    }
  },
  render(h) {
    return h('div', {
      style: {
        color: 'red',
        fontSize: '40px',
        cursor: 'pointer'
      },
      props: ['title'],
      domProps: {
        // innerText: 'ddddd' // 这里相当于h函数的第三个参数
      },
      on: {
        // 当前组件触发的click
        'click': () => {
          alert('click测试')
        }
      }
    }, 'hFuncTest组件--' + this.timNum)
  },
  created() {
    let r = setInterval(() => {
      this.timNum += 1
      if (this.timNum == 60) {
        clearInterval(r)
      }
    }, 1000)
  },
}
