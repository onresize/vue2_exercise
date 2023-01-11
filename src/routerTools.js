// 路由钩子
import Vue from 'vue'
import router from '@/router'

router.beforeEach((to, from, next) => {
  console.log('进入路由前-->', from)
  Vue.$showLoading.show();
  next()
})

router.afterEach((to, from) => {
  console.log('进入路由后-->', to)
  document.title = to.path.substr(1, to.path.length) + '页'
  setTimeout(() => {
    Vue.$showLoading.hide();
  }, 600)
})