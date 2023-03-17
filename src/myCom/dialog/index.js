import Vue from 'vue'
import myDialog from './index.vue'

const DialogConstructor = Vue.extend(myDialog)

const instance = new DialogConstructor({
  el: document.createElement('div')
})

instance.showDialog = false
instance.title = ''
instance.content = ''
const dialog = {
  show(title, content) {
    instance.title = title
    instance.content = content
    instance.showDialog = true
    document.body.appendChild(instance.$el)
    // 解决弹窗出现后、如果又滚动条的问题
    document.body.style.overflow = 'hidden'
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = scrollbarWidth + 'px'
  },
  hide() {
    instance.title = ''
    instance.content = ''
    instance.showDialog = false
    document.body.style.overflow = 'auto'
    document.body.style.paddingRight = ''
  }
}

export default {
  install() {
    if (!Vue.$showDialog) {
      Vue.$showDialog = dialog
    }
    Vue.mixin({
      created() {
        this.$showDialog = Vue.$showDialog
      }
    })
  }
}
