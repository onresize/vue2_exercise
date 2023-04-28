import myFuncCom from './myFuncCom'

export default {
  render(h) {
    return h(myFuncCom, {
      style: {
        color: 'green',
        fontSize: '30px',
        cursor: 'help'
      },
      on: {
        // 子组件$emit触发
        'myHFuncClick': val => {
          alert('测试emit触发myHFuncClick方法')
        },
      }
    })
  }
}
