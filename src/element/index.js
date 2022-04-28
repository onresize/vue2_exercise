import { Button,Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col, MessageBox, Message } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Button)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)

    // 按需引入$confirm, $message, $alert, $prompt
    // 参考：https://blog.csdn.net/xjf106/article/details/88840099
    Vue.prototype.$msg = MessageBox
    Vue.prototype.$msgbox = Message
  }
}
export default element