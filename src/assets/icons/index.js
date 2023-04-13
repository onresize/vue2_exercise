import Vue from 'vue'
import SvgIcon from '@/myCom/SvgIcon'// svg component
import Store from  '@/store/index.js'

// 全局注册
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)

const modules = {};
req.keys().forEach((key) => {
  if (key === './index.ts') { return; }
  modules[key.replace(/(\.\/|\.ts)/g, '')] = req(key).default;
});

let arr = Object.keys(modules).map((v) => {
  return getSubStr(v)
})

function getSubStr(str) {
  let r = str.lastIndexOf('.')
  return str.substr(0, r)
}

console.log('svgIconList:', arr)
Store.commit('changeIconList', arr) // 将所有svg图标名称存在vueX

const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
