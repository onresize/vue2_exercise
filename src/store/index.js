import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// 持久化插件、npm install vuex-persistedstate --save
import VueXState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inputValue: 'aaa',
        list: [],
        nextId: 4,
        viewKey: 'all'
    },
    mutations: {
        initList(state, res) {
            state.list = res
        },
        // 为state中的inputValue重新赋值
        setInputValue(state, value) {
            state.inputValue = value
        },
        addItem(state) {
            const obj = {
                id: state.nextId,
                info: state.inputValue.trim(),
                done: false
            }
            state.list.push(obj)
            state.nextId++
            state.inputValue = ''
        },
        removeItem(state, id) {
            const i = state.list.findIndex(x => x.id === id)
            if (i !== -1) {
                state.list.splice(i, 1)
            }
        },
        changeStatus(state, param) {
            const i = state.list.findIndex(x => x.id === param.id)
            if (i !== -1) {
                state.list[i].done = param.status
            }
        },
        // 清除已完成
        clean(state) {
            state.list = state.list.filter(x => x.done === false)
        },
        // 改变底部按钮高亮状态
        changeKey(state, key) {
            state.viewKey = key
        }
    },
    actions: {
        async getList(e) {
            const { data: res } = await Axios.get('/list.json')
            console.log(res)
            // 调用initList方法
            e.commit('initList', res)
        }
    },
    // 一个对state仓库数据的包装
    getters: {
        // 统计未完成条数
        unDoneLength(state) {
            return state.list.filter(x => x.done === false).length
        },
        // 做判断改变底部按钮操作表格数据的变化
        infoList(state) {
            if (state.viewKey === 'all') {
                return state.list
            }
            if (state.viewKey === 'none') {
                return state.list.filter(x => !x.done)
            }
            if (state.viewKey === 'done') {
                return state.list.filter(x => x.done)
            }
            return state.list
        }
    },
    // 使用持久化插件、默认使用保存在 localStorage、这里保存在sessionStorage
    plugins: [VueXState({
        storage: window.sessionStorage,
        // 默认持久化所有state、这里写指定需要持久化的状态
        reducer(val) {
            return {
                viewKey: val.viewKey
            }
        }
    })]
})
