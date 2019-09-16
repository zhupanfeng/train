import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 导出去
export default new Vuex.Store({
  state: {
        counter:1,
        stus:["ze","bh"]
  },
  mutations: {
          add(state){
            state.counter++;
          },
          sub(state){
            state.counter--;
          },
          addN(state,obj){
            console.log(obj)
            state.counter+=obj;
          }
  },
  actions: {

  }
})
