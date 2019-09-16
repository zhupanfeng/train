import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 导出去
export default new Vuex.Store({
  state:{
    num:1
  },
  mutations:{
    addNum(state){
      state.num++
    }
    // addNum(state){
    //   setTimeout(function(){
    //     state.num++
    //   },3000)
    // }
  },
  actions:{
      addAsyncNum(context){
            setTimeout(function(){
              context.commit("addNum")
            },3000)
      }
  }
})
