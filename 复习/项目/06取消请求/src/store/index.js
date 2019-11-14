import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home"
import *as types from "./actions-type"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  },
  state: {
    ajaxToken: [],//存放所有的请求
  },
  mutations: {
    [types.PUSH_TOKEN](state, cancel) {
      state.ajaxToken = [...state.ajaxToken, cancel]
      // state.ajaxToken.push(payload)
    },
    [types.CLEAR_TOKEN](state) {
      state.ajaxToken.forEach(cancel => cancel())//执行取消请求的方法
      state.ajaxToken = [];//请求完后置为空
    }
  },
})
