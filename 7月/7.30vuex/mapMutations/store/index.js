import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 导出去
export default new Vuex.Store({
  state:{
    list:[1,2,3]
  },
  mutations:{
    add(state,n){
        state.list.push(n)
    }
  },
})
