import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 导出去
export default new Vuex.Store({
  state:{
    list:[
      {name:"shiliu1",score:40},
      {name:"shiliu2",score:50},
      {name:"shiliu3",score:60},
      {name:"shiliu4",score:70},
      {name:"shiliu5",score:80},
      {name:"shiliu6",score:90},
    ]
  },
  getters:{
      // 分数低于60的人数
      faileNumber(state){
        let n=0;
        state.list.forEach(item=>{
          if(item.score<60){
            n++
          }
        })
        return n;
      }
  }
})
