import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import {authRoutes} from './router'

let formatMenuList=(menuList)=>{
    let arr=[];
    function r(pid){
    return   menuList.filter(menu=>{
           if(menu.pid === pid){
               arr.push(menu.auth)
            let children= r(menu.id)
            menu.children=children.length ? children :null;
            return true;
           }
       })
    }
   return {m:r(-1),a:arr}
}
let getNeedRoutes=(auth)=>{
    function r(authRoutes){
     return  authRoutes.filter(route=>{
            if(auth.includes(route.name)){
                if(route.children){
                    route.children =r(route.children)
                }
                return true;
            }
        })
    }
    return r(authRoutes);
}


Vue.use(Vuex)


export default new Vuex.Store({

    state: {
      menuList:[],//放菜单里的数据
      authList:[],//认证过的数据
      hasRules:false,//没有获取过权限，获取完毕后改成true
    },
    mutations: {
       set_menuList(state,m){
           state.menuList=m;
       },
       set_authList(state,a){
        state.authList=a;
        state.hasRules=true;
    }
    },
    actions: {
    async  getMenuList({commit}){
    let {data}=await axios.get("http://localhost:3000/role")
        // console.log(data.menuList)
    let  {m,a}= formatMenuList(data.menuList)
    // console.log(m,a)
    commit('set_menuList',m)
    commit('set_authList',a)
       },
    async getAuthRoute({commit,state}){
        let r=getNeedRoutes(state.authList);
        return r;
    }
    },
})

